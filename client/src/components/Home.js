// Latest is like Facebook's infinity scrolling timeline
import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Home = (props) => {
    return (
        <div>
            {/* =========Need a nav bar here */} 
            <Link to={ `/` }><button>Logout</button></Link>
            <h1>Home</h1>
            <p>Yay, you're logged in!</p>

        </div>
    )
};

export default Home;