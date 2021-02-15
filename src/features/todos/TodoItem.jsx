import React from 'react'
import { availableColors, capitalize } from '../filters/colors'
import { ReactComponent as TimesSolid } from './times-solid.svg'

const TodoItem = ({ todo, onColorChange, onCompletedChange, onDelete }) => {
  const { text, completed, color } = todo

  const handleCompletedChanged = (e) => {
    onCompletedChange(e.target.checked)
  }
  const handleColorChanged = (e) => {
    onColorChange(e.target.value)
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
