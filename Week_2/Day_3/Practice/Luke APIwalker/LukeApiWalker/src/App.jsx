import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Display from './views/Display'
import Form from './components/Form'

function App() {

  return (
    <>
    <Form/>
    <Routes>
      <Route path='/:search/:id' element={<Display/>}/>
    </Routes>
    </>
  )
}

export default App
