import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import axios from 'axios';

const updateBook = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [title,setTitle]=useState("")
    const [data,setData]=useState({
        title:"",
        author:"",
        pages:0,
        isAvailable:false
    });
    const [ErrorHandler, setErrorHandler] = useState({})
    const changeHandler =(e)=>{
        const { name, value, type, checked } = e.target;
		setData({
			...data,
			[name]: type === "checkbox" ? checked : value,
		});
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/book/${id}`)
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            setTitle(res.data.title)
        })
        .catch(err => {
        console.log(err)
        })
    },[id])
    const submitHandler = (e) => {
        e.preventDefault();
        const newbook=data
    

        axios
            .put(`http://localhost:8000/api/book/${id}`, newbook)
            .then((res) => {
                console.log("Book added:", res.data);
                setData((prevBooks) => [...prevBooks, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log( err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            });
    };
  return (
    <div>
        <NavBar updateBook={"update " +title} />
        <div >
            <form onSubmit={submitHandler} style={{width:"500px"}} className='d-flex align-items-center flex-column   mt-5 p-5   container'>
                    <div >
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" className='form-control' name="title" onChange={(e) => changeHandler(e)} value={data.title}/>
                        {ErrorHandler.title && <p className='alert alert-warning'>{ErrorHandler.title.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="author" className='form-label'>author name</label>
                        <input type="text" className='form-control' name="author" onChange={(e) => changeHandler(e)} value={data.author}/>
                        {ErrorHandler.author && <p className='alert alert-warning'>{ErrorHandler.author.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="pages" className='form-label'>pages count </label>
                        <input type="number" style={{width:"100px"}} className='form-control' name="pages" onChange={(e) => changeHandler(e)} value={data.pages}/>
                        {ErrorHandler.pages && <p className='alert alert-warning'>{ErrorHandler.pages.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="isAvailable" className='form-label'>is it Available ?:</label>
                        <input type="checkbox"  checked={data.isAvailable} name="isAvailable" onChange={(e) => changeHandler(e)} value={data.isAvailable}/>
                    </div>
                    <button className='btn-dark' style={{padding:"10px"}}>update Book !</button>
                </form>
        </div>
    </div>
  )
}

export default updateBook