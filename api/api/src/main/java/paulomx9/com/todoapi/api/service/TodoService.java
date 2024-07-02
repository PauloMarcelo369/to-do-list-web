package paulomx9.com.todoapi.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import paulomx9.com.todoapi.api.entity.TodoEntity;
import paulomx9.com.todoapi.api.repositorie.TodoRepositorie;

@Service
public class TodoService {
    @Autowired
    private TodoRepositorie repositorie;
    
    public ResponseEntity<?> selectAllTodos(){
        return new ResponseEntity<>(repositorie.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<?> saveANewTodo(TodoEntity todo){
        if (todo.getCategoria().equals("")) {
            return new ResponseEntity<>("A categoria não foi informada!", HttpStatus.BAD_REQUEST);
        }
        if (todo.getText().equals("")) {
            return new ResponseEntity<>("Você precisa informar um conteúdo para a todo!", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(repositorie.save(todo), HttpStatus.ACCEPTED);
    }

    public ResponseEntity<?> updateTodo(TodoEntity updatedTodo){
        TodoEntity responseTodo = repositorie.findByCodigo(updatedTodo.getId());
        if (responseTodo == null){
            return new ResponseEntity<>("Todo inexistente!", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(repositorie.save(updatedTodo), HttpStatus.ACCEPTED);
    }

    public ResponseEntity<?> removeTodo(Long id){
        TodoEntity removedEntity = repositorie.findByCodigo(id);
        repositorie.delete(removedEntity);
        return new ResponseEntity<>(removedEntity, HttpStatus.OK);
    }
    
}
