import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = []
  const renderedTodoList = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))
  return <ul className="todo-list">{renderedTodoList}</ul>
}

export default TodoList
