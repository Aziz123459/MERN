import React, { useState } from 'react'




const AddBox = ({addnewbox}) => {
    const [color,setColor]=useState('')
    const [size,setSize]=useState(0)


    const submitHandler=(e)=>{
        e.preventDefault();
        
        const newbox={
            color,
            size
        }
        addnewbox(newbox)
        setColor("");
    
    }





return (
    <form onSubmit={submitHandler}>
        <div className='container'>
            <h1>box generator</h1>
            <label htmlFor="color">color</label>
            <input type="text" onChange={(e)=>setColor(e.target.value)} value={color} />
            <input type="number" onChange={(e)=>setSize(e.target.value)} value={size} />
            <button>add box</button>
        </div>
        
    </form>
)
}

export default AddBox