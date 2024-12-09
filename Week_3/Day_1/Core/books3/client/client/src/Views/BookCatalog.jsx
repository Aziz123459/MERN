import React, { useEffect, useState } from 'react'
import axios from "axios" 
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/Navbar'
const BookCatalog = () => {
    const [Books,setBooks]=useState([])
    const { id } = useParams()
    const nav=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/book")
        .then((res) => {
            console.log(res.data)
            setBooks(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    },[])
  return (
    <div>
        <NavBar BookCatalog="Book Catalog" />
        <div className='container mt-5'>
            <table className='table table-striped table-bordered '>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>author</th>
                        <th>page count</th>
                        <th>available</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Books.map((book)=>{
                            return(
                                <tr key ={book._id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.pages}</td>
                                    <td className='d-flex'>{book.isAvailable ? <p>Yes</p> : <p>No</p>} | <Link to={`/${book._id}/update`}>Edit</Link></td>
                                    <td><Link to={`/${book._id}/details`} className='btn btn-success'>Book Details</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default BookCatalog