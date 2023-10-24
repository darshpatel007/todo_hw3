function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.appUsername;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todosReducer(state, action) {
  const todos = state;
  switch (action.type) {
    case "CREATE_TODO":
      const totalLength = todos.length ? todos.length : 0;

      const newTodo = {
        id: totalLength + 1,
        title: action.todoTitle,
        description: action.todoDescription,
        complete: false,
        dateCreated: new Date().toLocaleString(),
        author: action.todoAuthor,
      };
      return [newTodo, ...state];

    case "TOGGLE_TODO":
      let updatedTodoItemList = [];
      todos.forEach((todo) => {
        if (action.id === todo.id) {
          updatedTodoItemList.push({
            ...todo,
            complete: !todo.complete,
            dateCompleted: todo.complete ? null : new Date().toLocaleString(),
          });
        } else {
          updatedTodoItemList.push(todo);
        }
      });
      return updatedTodoItemList;

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todosReducer(state.todos, action),
  };
}
