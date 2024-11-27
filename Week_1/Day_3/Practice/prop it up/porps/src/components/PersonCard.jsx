const PersonCard=(props)=> {
    const{name,age,haircolor}=props;
    return(
        <div>
            <p>{name}</p>
            <label htmlFor="age">age:</label>
            <p>{age}</p>
            <label htmlFor="haircolor">hair color:</label>
            <p>{haircolor}</p>
        </div>
    )

}
export default PersonCard