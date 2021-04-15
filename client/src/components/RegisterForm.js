import React, { useState } from 'react';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const RegisterForm = (props) => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    
    const [ errors, setErrors ] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/users/', {
            username,
            email,
            password,
            confirmPassword
        })
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors);
                    setErrors(res.data.errors);
                }
                else {
                    // do something here: log people in
                    // to log people in we need to have an api page that requires authentication
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <Link to={ `/login` }><button>Log In</button></Link>
            <h2>Signup with us</h2>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={ username } onChange={ e => setUsername(e.target.value) } />
                    {/* handle error block below */}
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={ email } onChange={ e => setEmail(e.target.value) } />
                    {/* handle error block below */}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                    {/* handle error block below */}
                </div>
                <div>
                    <label>Confirm</label>
                    <input type="password" name="confirmPassword" value={ confirmPassword } onChange={ e => setConfirmPassword(e.target.value) } />
                    {/* handle error block below */}
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
};

export default RegisterForm;