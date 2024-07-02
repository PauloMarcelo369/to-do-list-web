import { useState } from "react";

export function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !category) return;
    console.log(title, category);
    addTodo(title, category);
    clear();
  };

  function clear() {
    setTitle("");
    setCategory("");
  }

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Digite o titulo da task"
          onChange={(event) => setTitle(event.target.value)}
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
}
