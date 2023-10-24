import React from "react";

export default function Todo({
  id,
  title,
  description,
  dateCreated,
  complete,
  dateCompleted,
  author,
  dispatchTodo,
}) {
  return (
    <tr>
      <td>
        <div>
          <input
            type="checkbox"
            checked={complete || false}
            onChange={() => dispatchTodo({ type: "TOGGLE_TODO", id })}
          />
          <label htmlFor="complete" className="form-label">
            &nbsp;&nbsp;&nbsp;complete
          </label>
        </div>
      </td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{dateCreated}</td>
      <td>{dateCompleted}</td>
      <td>
        <button
          type="button"
          onClick={() => dispatchTodo({ type: "DELETE_TODO", id })}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
