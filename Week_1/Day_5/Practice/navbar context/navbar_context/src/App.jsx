import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import NameContext from './context/NameContext';



function App() {
    const [name, setName] = useState('User');

    return (
      <div className='container'>
        <NameContext.Provider value={{name,setName}}>
          <Navbar/>
          <FormWrapper/>
        </NameContext.Provider>
      </div>
    );
}

export default App;

