import React from 'react'

const Display = ({todos,deletetodo,updatetodo}) => {
  return (
    todos.map((todo,index)=>
        
        <div className='content'>
            <p style={{textDecoration:todo.status?"line-through":"None"}}>{todo.name}</p>
            <div className='actions'>
                <input type="checkbox" onChange={()=>updatetodo(index)} checked={todo.status}/>
                <button onClick={()=>deletetodo(index)}>X</button>
            </div>
            
        </div>
  )
)
}

export default Display