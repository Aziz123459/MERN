import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './views/Home'
import Number from './views/Number'
import WordStyle from './views/WordStyle'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:number' element={<Number/>}/>
        <Route path='/:word/:col/:bgcol' element={<WordStyle/>}/>
      </Routes>
    </>
  )
}

export default App
