import { useState } from 'react'
import './App.css'
import BoxList from './components/color-box/BoxList'
import TodoList from './components/Todo/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <BoxList />
    </>
  )
}

export default App
