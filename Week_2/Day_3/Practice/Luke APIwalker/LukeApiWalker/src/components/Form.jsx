import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const [search,setSearch]=useState("people")
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${search}/${id}`);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>

                <label htmlFor="search">Search for:</label>
                <select value={search} name="search" onChange={(e) => setSearch(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input value={id} onChange={(e) => setId(e.target.value)} search="number" />
                <button type='submit'>search</button>
            </form>
        </div>
    )
}

export default Form;