import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  const personcard=[
    {name:"aziz tounsi", age:20,hair_color:"black"}
  ];
  return(
    <>
      {
        personcard.map((elm, indx) => {
          return <PersonCard
            name={elm.name}
            age={elm.age}
            hair_color={elm.hair_color}
            key={indx}
          />
        })
      }
    </>
    )
  
}

export default App
