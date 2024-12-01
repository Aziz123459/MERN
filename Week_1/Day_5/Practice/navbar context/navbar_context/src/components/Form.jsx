import React, { useContext } from 'react';
import NameContext from '../context/NameContext';

function Form() {
    const { name, setName } = useContext(NameContext);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <form>
            <label htmlFor="name"> Your Name: </label>
            <input type="text" value={name} onChange={handleChange}/>
        </form>
    );
}

export default Form;
