import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Pokemon,setPokemon]=useState([])
  const AxiosData=()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res)=>{
      setPokemon(res.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    AxiosData()
  },[])

  return (
    <>
      <h1>Pokemon API</h1>
      <ul>
        {
          Pokemon.map((poki,index)=>{
            return(
              <li key={index}>
                {poki.name}
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
