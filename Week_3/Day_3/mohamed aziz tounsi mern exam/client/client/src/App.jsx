
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddPatient from './Views/AddPatient'
import AllPatient from './Views/AllPatient'
import PatientsDetails from './Views/PatientsDetails'
import UpdatePatient from './Views/UpdatePatient'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<AddPatient/>} />
    <Route path='/patients' element={<AllPatient/>}/>
    <Route path='/:id/details' element={<PatientsDetails/>}/>
    <Route path='/:id/edit' element={<UpdatePatient/>}/>
    </Routes>
    </>
  )
}

export default App
