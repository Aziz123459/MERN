import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [users,setUsers]=useState([]);
    
    const [first_name,setFirstName]=useState('');
    const [firstError,setFirstError]=useState('');
    
    const [last_name,setLastName]=useState('');
    const [lastError,setlastError]=useState('');
    
    const [email,setEmail]=useState('');
    const [emailError,setemailError]=useState('');
    
    const [password,setPassword]=useState('');
    const [passwordError,setpasswordError]=useState('');
    
    const [confirmPassword,setConfirmPassword]=useState('');
    const [confirmPasswordError,setconfirmPasswordError]=useState('');
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const submitHandler=(e)=>{
        e.preventDefault();
        setUsers((prevUsers)=>[...prevUsers,{
            first_name:first_name,
            last_name:last_name,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }])
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted(true);
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
    return "Thank you for submitting the form!";
	} else {
	return "Welcome, please submit the form";
	}
    };

    const valFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFirstError("First name must be 3 characters or longer!");
        } else {
            setFirstError("");
        }
    };

    const valLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setlastError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setlastError("Last name must be 3 characters or longer!");
        } else {
            setlastError("");
        }
    };
    const valemail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setemailError("email is required!");
        } else if(e.target.value.length < 8) {
            setemailError("email must be 8 characters or longer!");
        } else {
            setemailError("");
        }
    };
    const valpassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setpasswordError("password is required!");
        } else if(e.target.value.length < 8) {
            setpasswordError("password must be 8 characters or longer!");
        } else {
            setpasswordError("");
        }
    };
    const valconfirm = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setconfirmPasswordError("passwords don't match");}
        else{
            setconfirmPasswordError("")
        }
    };

return (
    <>
    <form onSubmit={submitHandler}>
        <h3>{ formMessage()}</h3>
        <div>
            <label htmlFor="first_name">first name:</label>
            <input onChange={valFirstName} value={first_name} />
            {
                firstError ?
                <p>{firstError}</p>:
                " "
            }
        </div>
        <div>
            <label htmlFor="last_name">last name:</label>
            <input onChange={valLastName} value={last_name} />
            {
                lastError ?
                <p>{lastError}</p>:
                " "
            }
        </div>
        <div>
            <label htmlFor="email">email:</label>
            <input onChange={valemail} value={email} />
            {
                emailError ?
                <p>{emailError}</p>:
                " "
            }
        </div>
        <div>
            <label htmlFor="password">password:</label>
            <input type="password" onChange={valpassword} value={password} />
            {
                passwordError ?
                <p>{passwordError}</p>:
                " "
            }
        </div>
        <div>
            <label htmlFor="confirm_passwordnpm">confirm password:</label>
            <input type="password" onChange={valconfirm} value={confirmPassword} />
            {
                confirmPasswordError ?
                <p>{confirmPasswordError}</p>:
                " "
            }
        </div>
        <button>Create User</button>
        <h1>Users</h1>
        <div>
        {
            users.map( (user, index) => 
                <div key={ index }>{user.first_name} {user.last_name} ({user.email})</div>,
            )
        }
        </div>
    </form>
    </>
)
}

export default Form