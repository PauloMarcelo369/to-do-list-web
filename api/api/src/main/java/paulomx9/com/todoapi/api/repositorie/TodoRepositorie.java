package paulomx9.com.todoapi.api.repositorie;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import paulomx9.com.todoapi.api.entity.TodoEntity;

@Repository
public interface TodoRepositorie extends CrudRepository<TodoEntity, Long> {
    @Query("SELECT t FROM TodoEntity t WHERE t.id = :id")
    TodoEntity findByCodigo(@Param("id") Long id);
}
