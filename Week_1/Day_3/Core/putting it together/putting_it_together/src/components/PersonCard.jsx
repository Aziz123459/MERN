import React, { useState } from 'react'

const PersonCard = (props) => {

    const [Birthday, setBirthday] = useState(props.age)
    const {name,haircolor}=props
    const InCreaseage = () => {
        
        setBirthday(Birthday + 1)
    }
    return(
        <>
            <p>{name}</p>
            <label htmlFor="Birthday">age:</label>
            <p>{Birthday}</p>
            <label htmlFor="haircolor">hair color:</label>
            <p>{haircolor}</p>
            <button onClick={InCreaseage}>birthday button {name}</button>
        </>
    )
}
export default PersonCard