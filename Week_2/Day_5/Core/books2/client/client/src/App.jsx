
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BookCatalog from './Views/BookCatalog'
import BookDetails from './Views/BookDetails'
import AddBook from './Views/AddBook'

function App() {

  return (
    <>
    <Routes>
      <Route path='/:id/details' element={<BookDetails/>}/>
      <Route path='/create' element={<AddBook/>}/>
      <Route path='/' element={<BookCatalog/>}/>
    </Routes>
    </>
  )
}

export default App
