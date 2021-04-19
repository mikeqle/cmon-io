import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

const NavBar = (props) => {
    const onLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }
    
    return(
        <div className="navBar">
            <Link to={ "/home" }><button>Home</button></Link>
            <Link to={ "/profile" }><button>Your Opinions</button></Link>
            <Link to={ `/post` }><button>Post an opinion</button></Link>
            <button id="logoutBtn" onClick={ onLogout }>Logout</button>
        </div>
    )
};

export default NavBar;