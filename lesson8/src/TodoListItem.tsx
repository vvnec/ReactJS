import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete
}
   

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  const handleRemove = () => {
      let b= document.getElementById(todo.text)
      b?.remove()
  };
  return (
    <li id={todo.text}>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
        <button onClick={handleRemove}>Delete</button>
    </li>
  );
};
