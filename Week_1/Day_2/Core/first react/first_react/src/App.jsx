import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Dojo!</h1>
      <h3>Things i need to do:</h3>
      <ul>
        <li>*learn React</li>
        <li>*Climb Mt.Everest</li>
        <li>*run a marathon</li>
        <li>*feed the dogs</li>
      </ul>
        
    </>
  )
}

export default App
