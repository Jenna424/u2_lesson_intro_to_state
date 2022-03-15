import React, { useState } from 'react'
import Tasks from './Tasks'
import Input from './Input'

const TodoList = () => {
  // array destructuring
  // first element = the piece of state you want to manage
  // second element = the function whose job is to manage that piece of state
  // within parentheses we have the initial value
  const [tasks, setTasks] = useState([
      'Sweep the Floor',
      'Do Dishes',
      'Make Bed',
      'Feed the Dog'
    ])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    let myNewList = [...tasks, inputValue]
    setTasks(myNewList) // update a state variable with its associated method. argument is the value that the tasks piece of state should be
    setInputValue('')
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="list">
      <Input handleChange={handleChange} addTask={addTask} value={inputValue} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default TodoList