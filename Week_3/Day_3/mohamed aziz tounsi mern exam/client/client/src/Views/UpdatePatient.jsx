import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { editPatient, getOnePatients } from '../services/Patientservices'

const UpdatePatient = () => {
    const nav=useNavigate()
    const {id}=useParams()
    const[name,setName]=useState("")
    const [data,setData]=useState({
        age:0,
        name:"",
        symptoms:"",
    })
    const [errorHandler,setErrorHandler]=useState({})
    const submitHandler=(e)=>{
        e.preventDefault();
        const newPatient=data
        editPatient(newPatient,id)
            .then((res)=>{
                console.log("add with success",res.data)
                setData((prevPatients)=>[...prevPatients,res.data]);
                nav(`/${id}/details`)
            })
            .catch((err)=>{
                console.log(err.response.data.errors)
                setErrorHandler(err.response.data.errors)
                
            })
    }
    useEffect(()=>{
        getOnePatients(id)
        .then((res)=>{
            console.log(res)
            setData(res)
            setName(res.name)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])





    const [formValidation,setFormValidation]=useState({
        age:"",
        name:"",
        symptoms:""
    })
    const ageHandler=(e)=>{
        const value=e.target.value;
        setData(()=>({...data,age:e.target.value}))
        let errmsg='';
        if(!value){
            errmsg="age is require!"
        }else if(value <1 ){
            errmsg="age must be at least 1"
        }else if(value>140){
            errmsg="age must be less then 140"
        }else if(value<18){
            errmsg="Sorry, we need a parental signature"
        }
        setFormValidation(()=>({...formValidation,age:errmsg}))
    }
    const nameHandler=(e)=>{
        const value=e.target.value.trim();
        setData(()=>({...data,name:e.target.value}))
        let errmsg='';
        if(!value){
            errmsg="name is require!"
        }else if(value.length <1 ){
            errmsg="name must be at least 1 character"
        }else if(value.length>40){
            errmsg="name must be less then 40 character"
        }
        setFormValidation(()=>({...formValidation,name:errmsg}))
    }
    const symptomsHandler=(e)=>{
        const value=e.target.value.trim();
        setData(()=>({...data,symptoms:e.target.value}))
        let errmsg='';
        if(!value){
            errmsg="symptoms is require!"
        }else if(value .length<4 ){
            errmsg="symptoms must be at least 4 character"}
        setFormValidation(()=>({...formValidation,age:errmsg}))
    }

    const valid=()=>{
        console.log(Object.values(formValidation))
        return Object.values(formValidation).every(value=>value==='')
    }
  return (
    <div>
        <Navbar title={"update "+name} button={<Link to={`/${id}/details`} className='btn btn-primary'>details</Link>}/>
        <form onSubmit={submitHandler} className='d-flex flex-column align-items-center a shadow  mt-5 p-5 w  bg-white rounded  container'>
            <div className='col-3'>
                <label className='form-label'>age:</label>
                <input type="number" className='form-control' onChange={ageHandler} value={data.age} name='age'/>
                {formValidation.age &&<p className='alert alert-danger'>{formValidation.age}</p>}
                {errorHandler.age && <p className='alert alert-warning'>{errorHandler.age.message}</p>}
            </div>
            <div className='col-3'>
                <label className='form-label'>name:</label>
                <input type="text" className='form-control' onChange={nameHandler} value={data.name} name='name'/>
                {formValidation.name &&<p className='alert alert-danger'>{formValidation.name}</p>}
                {errorHandler.name && <p className='alert alert-warning'>{errorHandler.name.message}</p>}
            </div>
            <div className='col-3'>
                <label className='form-label'>symptoms:</label>
                <textarea className='form-control' name="symptoms" id="" onChange={symptomsHandler} value={data.symptoms}></textarea>
                {formValidation.symptoms &&<p className='alert alert-danger'>{formValidation.symptoms}</p>}
                {errorHandler.symptoms && <p className='alert alert-warning'>{errorHandler.symptoms.message}</p>}
            </div>
            <button className='btn btn-success mt-4' disabled={!valid()}>Add Patient</button>
        </form>
    </div>
  )
}



export default UpdatePatient