const initialState = [
  { id: 0, text: 'Learn React', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
]

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

// Use the initialState as a default value
export default function todosReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case 'todos/todoAdded': {
      // We need to return a new state object
      return [
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field

        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }

    case 'todos/todoToggled': {
      return [
        state.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          } else {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
        }),
      ]
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}