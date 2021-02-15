import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const handleChange = (e) => setText(e.target.value)
  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setText('')
    }
  }

  return (
    <header className="header">
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header
