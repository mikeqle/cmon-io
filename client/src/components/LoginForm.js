import React, { useState } from 'react';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const LoginForm = (props) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/users/login', {
            username,
            password,
        })
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors);
                }
                else {
                    // do something here: log people in
                    // to log people in we need to have an api page that requires authentication
                    if (res.data.msg === "login successful!") {
                        localStorage.setItem('userId', res.data.userId);
                        navigate('/home');
                    }
                }
            })
            .catch((err) => console.log(err));
    };
    
    return(
        <div>
            <Link to={ `/` }><button>Sign Up</button></Link>
            <h2>Login</h2>
            <form onSubmit={ onSubmitHandler }>
                
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={ username } onChange={ e => setUsername(e.target.value) } />
                    {/* handle error block below */}
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                    {/* handle error block below */}
                </div>
                
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;