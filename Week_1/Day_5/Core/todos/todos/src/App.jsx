import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Display from './components/Display'

function App() {
  const [todos, setTodos] = useState([])
  const addnewtodos=(obj)=>{
    setTodos([...todos,obj])
  }
  const deletetodo=(index)=>{
    const filterTodos=todos.filter((todo,i)=>i != index)
    setTodos(filterTodos)
  }
  const updatetodo=(index)=>{
    const uptodo=[...todos]
    uptodo[index].status= !todos[index].status
    setTodos(uptodo)
  }

  return (
    <div className='container'>
    <Addtodo addnewtodos={addnewtodos}/>
    <Display todos={todos} deletetodo={deletetodo} updatetodo={updatetodo} />
    </div>
  )
}

export default App
