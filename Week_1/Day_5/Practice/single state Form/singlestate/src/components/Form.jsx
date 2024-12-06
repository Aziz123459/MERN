import React, { useState } from 'react'

const Form = () => {
    const[user,setUser]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    });
    const changeHandler =(e)=>{
        setUser((prevUser)=>({...prevUser,[e.target.name]: e.target.value}))
    }
  return (
    <div>
          <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" onChange={(e) => changeHandler(e)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" onChange={(e) => changeHandler(e)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassord">Confirm Password:</label>
                    <input type="password" name="confirmPassword" onChange={(e) => changeHandler(e)}/>
                </div>
            </form>
            <p>
                    <label>First Name: </label>{user.firstName}
                </p>
                <p>
                    <label>Last Name: </label>{user.lastName}
                </p>
                <p>
                    <label>Email: </label>{user.email}
                </p>
                <p>
                    <label>Password: </label>{user.password}
                </p>
                <p>
                    <label>Confirm Password: </label>{user.confirmPassword}
                </p>
    </div>
)
}

export default Form