import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';

const AddBook = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        title:"",
        author:"",
        pages:0,
        isAvailable:true
    });
    const changeHandler =(e)=>{
        const { name, value, type, checked } = e.target;
		setData({
			...data,
			[name]: type === "checkbox" ? checked : value,
		});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/book", data)
            .then((res) => {
                console.log("Book added:", res.data);
                setData((prevBooks) => [...prevBooks, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
  return (
    <div>
        <NavBar addBook="Add a book"/>
        <div >
            <form onSubmit={submitHandler} style={{width:"500px"}} className='d-flex align-items-center flex-column   mt-5 p-5   container'>
                    <div >
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" className='form-control' name="title" onChange={(e) => changeHandler(e)} value={data.title}/>
                    </div>
                    <div >
                        <label htmlFor="author" className='form-label'>author name</label>
                        <input type="text" className='form-control' name="author" onChange={(e) => changeHandler(e)} value={data.author}/>
                    </div>
                    <div >
                        <label htmlFor="pages" className='form-label'>pages count </label>
                        <input type="number" style={{width:"100px"}} className='form-control' name="pages" onChange={(e) => changeHandler(e)} value={data.pages}/>
                    </div>
                    <div >
                        <label htmlFor="isAvailable" className='form-label'>is it Available ?:</label>
                        <input type="checkbox"  checked={data.isAvailable} name="isAvailable" onChange={(e) => changeHandler(e)} value={data.isAvailable}
                        />
                    </div>
                    <button className='btn-dark' style={{padding:"10px"}}>Add Book !</button>
                </form>
        </div>
    </div>
  )};

export default AddBook