import React from 'react'
import { useParams } from 'react-router-dom'

const WordStyle = () => {
    const {word,col,bgcol} = useParams()
  return (
    isNaN(word)?(
        <h1 style={{color:col,backgroundColor:bgcol}}>the word is :{word}</h1>
    ):(
        <h1>a word pls </h1>
    )
    
        
  )
}

export default WordStyle