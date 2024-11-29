import React from 'react'





const Display = ({boxes,deletebox}) => {
return (
    boxes.map((box,index)=>
        
            <div className='box' style={{backgroundColor:box.color,width:box.size +"px",height:box.size +"px"}} key={index}>
            <button onClick={()=>deletebox(index)}>X</button>
            </div>
        
    )
    
)
}

export default Display