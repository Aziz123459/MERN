import React, { useContext } from 'react';
import NameContext from '../context/NameContext';

function Navbar() {
    const { name } = useContext(NameContext);

    return (
        <nav >
            <h1>Hi, {name}!</h1>
        </nav>
    );
}

export default Navbar;
