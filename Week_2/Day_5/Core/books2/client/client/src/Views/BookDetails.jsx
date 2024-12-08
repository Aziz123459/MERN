import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/Navbar'

const BookDetails = () => {
    const navigate=useNavigate()
    const [Book,setBook]=useState({})
    const { id } = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book/${id}`)
        .then((res) => {
            console.log(res.data)
            setBook(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    },[])
    const deletebook = () => { axios.delete(`http://localhost:8000/api/book/${id}`)
   .then((res) => {
      console.log(res.data);
      navigate("/");
   })
}


  return (
    <div>
        <NavBar title={Book.title} />
        <div style={{width:"450px"}}key ={Book._id} className='d-flex align-items-center flex-column a shadow  mt-5 p-5 w  bg-white rounded  container'>
            
            <h3><strong>{Book.title}</strong></h3>
            <p>by {Book.author}</p>
            <p>page count:{Book.pages}</p>
            {Book.isAvailable ? <p className='text-success'>available for borrowing</p> : <p className='text-danger'>not available for borrowing</p>}
            <button className='btn btn-danger ' onClick={deletebook}>Borrow</button>
        </div>
    </div>
    )
}

export default BookDetails