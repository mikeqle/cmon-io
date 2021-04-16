// Latest is like Facebook's infinity scrolling timeline
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Home = (props) => {
    const [ allOpinions, setAllOpinions ] = useState([]);
    
    const onLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }

    useEffect( () => {
        axios.get("http://localhost:8000/api/o/")
            .then((res) => setAllOpinions(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            {/* =========Need a nav bar here */} 
            <button onClick={ onLogout }>Logout</button>
            <Link to={ `/post` }><button>Post an opinion</button></Link>
            <h1>Home</h1>
            <table>
                <thead>
                    <tr>
                        <th>Opinions</th>
                        <th>Stats</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    allOpinions.map((opinion, idx) => (
                        <tr key={idx}>
                            <td>{ opinion.content }</td>
                            <td>Upvotes: { opinion.yea }, Downvotes: { opinion.nay }</td>
                            <td>
                                <button>Upvote</button>
                                <button>Downvote</button>
                                <button>Detail</button>
                                <button>Refute</button>
                            </td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
};

export default Home;