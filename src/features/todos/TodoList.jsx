import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const selectTodos = (state) => state.todos

const TodoList = () => {
  const todos = useSelector(selectTodos)

  // since `todos` is an array, we can loop over it
  const renderedTodoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))
  return <ul className="todo-list">{renderedTodoList}</ul>
}

export default TodoList
