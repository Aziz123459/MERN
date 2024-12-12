import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deletePatient, getOnePatients } from '../services/Patientservices'

const PatientsDetails = () => {
    const nav =useNavigate()
    const [patient,setPatient]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        getOnePatients(id)
        .then((res)=>{
            console.log(res)
            setPatient(res)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    const DeletePation=()=>{
        deletePatient(id)
        .then((res)=>{
            console.log(res);
            nav('/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
   
    <div>
        <Navbar title={patient.name} button={<Link className='btn btn-primary ' to={`/${patient._id}/edit`}>edit</Link>}/>
        <div  className='d-flex flex-column align-items-center a shadow  mt-5 p-5 w  bg-white rounded gap-3 '>
            <h3>{patient.age} years of age</h3>
            <strong>symptoms</strong>
            <p>{patient.symptoms}</p>
            <button onClick={DeletePation} className='btn btn-danger'>Discharge Patient</button>
        </div>
    </div>
  )
}

export default PatientsDetails