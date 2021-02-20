import React from 'react'
import { useSelector } from 'react-redux'
import { availableColors, capitalize } from '../filters/colors'
import { StatusFilters } from '../filters/filtersSlice'

const RemainingTodo = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>remaining todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  )
}

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]
    const handleClick = () => onChange(value)
    const className = value === status ? 'selected' : ''
    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColors = availableColors.map((color) => {
    const checked = colors.includes(color)
    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      onChange(color, changeType)
    }

    return (
      <label htmlFor="" key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span className="color-block" style={{ backgroundColor: color }}></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>filter by color</h5>
      <form action="" className="colorSelection">
        {renderedColors}
      </form>
    </div>
  )
}

const Footer = () => {
  const { status, colors } = useSelector((state) => state.filters)

  const todoRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter(
      (todo) => todo.complete === false
    )

    return uncompletedTodos.length
  })

  const onColorChange = (color, changeType) =>
    console.log('color changed', { color, changeType })

  const onStatusChange = (status) => console.log('status changed', status)

  return (
    <footer className="footer">
      <div className="actions">
        <h5>actions</h5>
        <button className="button">Mark all completed</button>
        <button className="button">Clear completed</button>
      </div>
      <RemainingTodo count={todoRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
