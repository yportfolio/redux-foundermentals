import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  // since `todos` is an array, we can loop over it
  const renderedTodoList = todos.map((todo) => (
    <TodoItem key={todo.id} id={todo.id} />
  ))
  return <ul className="todo-list">{renderedTodoList}</ul>
}

export default TodoList
