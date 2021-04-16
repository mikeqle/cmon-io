// Latest is like Facebook's infinity scrolling timeline
import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Home = (props) => {
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }

    return (
        <div>
            {/* =========Need a nav bar here */} 
            <button onClick={ logout }>Logout</button>
            <Link to={ `/post` }><button>Post an opinion</button></Link>
            <h1>Home</h1>
            <div>This div for displaying latest opinions/facts</div>

        </div>
    )
};

export default Home;