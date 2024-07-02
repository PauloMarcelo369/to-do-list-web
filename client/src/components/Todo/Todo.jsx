export function Todo({
  id,
  text,
  categoria,
  isCompleted,
  removeTodo,
  completeTodo,
}) {
  const handleDelete = () => {
    removeTodo(id);
  };

  const handleComplete = () => {
    completeTodo(id);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{text}</p>
        <p className="category">({categoria})</p>
      </div>
      <div className="buttons">
        <button className="complete" onClick={handleComplete}>
          Completar
        </button>
        <button className="remove" onClick={handleDelete}>
          x
        </button>
      </div>
    </div>
  );
}
