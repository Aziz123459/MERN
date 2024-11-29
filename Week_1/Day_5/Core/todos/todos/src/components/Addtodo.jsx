import React, { useState } from 'react'

const Addtodo = ({addnewtodos}) => {
    const [name,setName]=useState('')
    const [status,setStatus]=useState(false)
    const submitHandler=(e)=>{
        e.preventDefault()
        const newtodo={
            name,
            status
        }
        addnewtodos(newtodo)
        setName('')
    }
return (
    <>
    <h1>Add todo</h1>
    <form onSubmit={submitHandler}>
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
    <button>add todo</button>
    </form>
    
    </>
    
)
}

export default Addtodo