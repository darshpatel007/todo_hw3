import React, { useState } from "react";

export default function CreateTodo({ user, dispatchTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  function handleTodoSubmit(e) {
    e.preventDefault();
    if (todoTitle.length === 0) {
      alert("Please enter todo name.");
      return;
    }
    dispatchTodo({
      type: "CREATE_TODO",
      todoTitle,
      todoDescription,
      todoAuthor: user,
    });
    setTodoTitle("");
    setTodoDescription("");
  }

  function handleChangeTodoTitle(e) {
    setTodoTitle(e.target.value);
  }

  function handleChangeTodoDescription(e) {
    setTodoDescription(e.target.value);
  }

  return (
    <div className="container">
      <h1>Add ToDo</h1>

      <div className="row">
        <form onSubmit={handleTodoSubmit}>
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Todo Name</label>
              <input
                type="text"
                name="create-title"
                id="create-title"
                value={todoTitle}
                onChange={handleChangeTodoTitle}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="create-description">Description:</label>
              <textarea
                type="text"
                name="create-description"
                id="create-description"
                value={todoDescription}
                onChange={handleChangeTodoDescription}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <input type="submit" value="Create" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
