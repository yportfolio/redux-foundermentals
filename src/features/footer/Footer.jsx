import React from 'react'
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

const Footer = () => {
  const colors = []
  const status = StatusFilters.All
  const todoRemaining = 1

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
    </footer>
  )
}

export default Footer
