import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title,button}) => {
  return (
    <div>
        <nav className='d-flex justify-content-center gap-5 align-items-center ' style={{backgroundColor:"lightgray", padding:"10px"}}>
            <div>
                <Link to={'/patients'} className='btn btn-primary'>Home</Link>
            </div>
            <div >
                <h1 >{title}  {button} </h1>
                
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar