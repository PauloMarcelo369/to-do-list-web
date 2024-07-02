package paulomx9.com.todoapi.api.controller;

import org.springframework.web.bind.annotation.RestController;

import paulomx9.com.todoapi.api.entity.TodoEntity;
import paulomx9.com.todoapi.api.service.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping("/all")
    public ResponseEntity<?> selectTodos() {
        return service.selectAllTodos(); 
    }

    @PostMapping("save")
    public ResponseEntity<?> saveTodo(@RequestBody TodoEntity todo){
        return service.saveANewTodo(todo);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateTodo(@RequestBody TodoEntity todo){
        return service.updateTodo(todo);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeTodo(@PathVariable Long id){
        return service.removeTodo(id);
    }
  
}
