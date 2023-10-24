import React, { useReducer, useEffect } from "react";
import UserBar from "./UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import appReducer from "./reducers";

function App() {
  const initialTodos = [
    {
      id: 1,
      title: "Pay Credit Card Bill",
      description: "Amount $956.87",
      dateCreated: new Date().toLocaleString(),
      complete: true,
      dateCompleted: new Date().toLocaleString(),
      author: "Unknown",
    },
    {
      id: 2,
      title: "Attend A Zoom Meeting",
      description: "Topic : 'Moderen Lifestyle'",
      dateCreated: new Date().toLocaleString(),
      complete: false,
      dateCompleted: null,
      author: "Unknown",
    },
    {
      id: 3,
      title: "Go to Six Flags",
      description: "Amazing...",
      dateCreated: new Date().toLocaleString(),
      complete: false,
      dateCompleted: null,
      author: "Unknown",
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initialTodos,
  });
  const { user, todos } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user}'s Todo`;
    } else {
      document.title = "Todo";
    }
  }, [user]);

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatch} />
      <br />
      <br />
      <hr />
      <br />
      {user && <CreateTodo user={user} dispatchTodo={dispatch} />}
      <TodoList todos={todos} dispatchTodo={dispatch} />
    </div>
  );
}

export default App;
