import { useState, useEffect } from "react";
import "./App.css";
import { Todo } from "./components/Todo/Todo";
import { TodoForm } from "./components/TodoForm/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState(null);
  const [deletedTodoId, setDeletedTodoId] = useState(null);

  useEffect(() => {
    const getRequisition = async () => {
      const response = await fetch("http://localhost:8080/all");
      const data = await response.json();
      setTodos(data);
    };
    getRequisition();
  }, []);

  useEffect(() => {
    if (newTodo) {
      const addNewTodo = async () => {
        const response = await fetch("http://localhost:8080/save", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newTodo),
        });
        const todo = await response.json();
        setTodos([...todos, todo]);
      };
      addNewTodo();
    }
  }, [newTodo]);

  useEffect(() => {
    if (updatedTodo) {
      const updateTodo = async () => {
        await fetch("http://localhost:8080/update", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedTodo),
        });
      };
      updateTodo();
    }
  }, [updatedTodo]);

  useEffect(() => {
    if (deletedTodoId) {
      const deleteTodo = async () => {
        await fetch(`http://localhost:8080/delete/${deletedTodoId}`, {
          method: "DELETE",
        });
      };
      deleteTodo();
    }
  }, [deletedTodoId]);

  const addTodo = (text, categoria) => {
    const newTodo = {
      text,
      categoria,
      isCompleted: false,
    };
    setNewTodo(newTodo);
  };

  const removeTodo = (id) => {
    const newTodosList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosList);
    console.log(id);
    setDeletedTodoId(id);
  };

  const completeTodo = (id) => {
    let updTodo;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        updTodo = { ...todo, isCompleted: !todo.isCompleted };
        return updTodo;
      }
      return todo;
    });
    setTodos(newTodos);
    setUpdatedTodo(updTodo);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              categoria={todo.categoria}
              isCompleted={todo.isCompleted}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
