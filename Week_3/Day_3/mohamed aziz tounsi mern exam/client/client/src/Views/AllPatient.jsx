import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getAllPatients } from '../services/Patientservices'
import { Link } from 'react-router-dom'
const AllPatient = () => {
  const [Patients,setPatients]=useState([])
  useEffect(()=>{
    getAllPatients()
    .then((res)=>{
        console.log(res)
        setPatients(res)
    })
    .catch(err=>{
        console.log(err)
    })
  },[])
    return (
    <div>
        <Navbar title="Hospital Manager" button={<Link to={'/'} className='btn btn-primary'>Admit</Link>}/>
        <div className='container d-flex flex-column align-items-center gap-3 '>
            {Patients.map((pat)=>{
                return(
                    <div key ={pat._id} className=' d-flex flex-column align-items-center a shadow  mt-5 p-5 w  bg-white rounded col-5'>
                        <Link to={`/${pat._id}/details`}>{pat.name}</Link>
                        <Link className='btn btn-primary ' to={`/${pat._id}/edit`}>edit</Link>
                        <p>age:{pat.age}</p>
                        <p>{pat.symptoms}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default AllPatient