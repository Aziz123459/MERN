import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import { useParams } from "react-router-dom";


const Display = () => {
  const { search, id } = useParams();
  const [person, setPerson] = useState({});
  const [planets, setPlanets]=useState({});
  const [error, setError] = useState(false);

  useEffect(() => {

    axios.get(`https://swapi.dev/api/${search}/${id}`)
        .then((res) => {
            setError(false)
            if (search === "people") {
                setPerson(res.data);
            }
            else {
                console.log("else", res.data);
                setPlanets(res.data);
            }
        })
        .catch((err) => {
            setError(true);
            console.log(err);
        })
}, [search, id])

return (
    <div>
        {
                error ?
                    <div>
                        <h1>Loding........</h1>
                    </div>
                : null
            }
        {
            search === "planets"?
                <div>
                    <h1>Planet</h1>
                    <p>Name: {planets.name}</p>
                    <p>Population: {planets.population}</p>
                    <p>Terrain: {planets.terrain}</p>
                    <p>Surface Water: {planets.surface_water}</p>
                </div>
            : null
        }
        {
            search === "people"?
                <div>
                    <h1>Person</h1>
                    <p>Name: {person.name}</p>
                    <p>Height: {person.height}</p>
                    <p>Eye Color: {person.eye_color}</p>
                    <p>Gender: {person.gender}</p>
                </div>
            : null
        }
    </div>
)
}

export default Display;