import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { availableColors, capitalize } from '../filters/colors'
import { ReactComponent as TimesSolid } from './times-solid.svg'

const TodoItem = ({ id }) => {
  console.log(id)
  const todo = useSelector((state) => {
    console.log(state.todos)
    return state.todos.find((todo) => todo.id === id)
  })
  const { text, completed, color } = todo
  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggle', payload: todo.id })
  }
  const handleColorChanged = (e) => {
    const color = e.target.value
    dispatch({ type: 'colorSelected', payload: { todoId: todo.id, color } })
  }

  const onDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id })
  }

  const colorOptions = availableColors.map((color) => (
    <option value={color} key={color}>
      {capitalize(color)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            type="checkbox"
            className="toggle"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
