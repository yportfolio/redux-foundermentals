import { combineReducers } from 'redux'
import filtersReducer from './features/filters/filtersSlice'
import todosReducer from './features/todos/todoSlice'

// export default function rootReducer(state = {}, action) {
//   // always return a new object for the root state
//   return {
//     // the value of `state.todos` is whatever the todos reducer returns
//     todos: todosReducer(state.todos, action),
//     // For both reducers, we only pass in their slice of the state
//     filters: filterReducer(state.filters, action),
//   }
// }

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer
