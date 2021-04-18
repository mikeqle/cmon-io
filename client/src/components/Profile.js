import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = (props) => {
    // show list of your facts
    // get list of your facts on load
    // map the list out
    const [ yourOpinions, setYourOpinions ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + localStorage.userId)
            .then((res) => setYourOpinions(res.data))
            .catch((err) => console.log(err));
    }, []);

    const onClickConcede = (e) => {
        axios.delete("http://localhost:8000/api/o/" + e.target.value)
            .then((res) => {
                console.log(res.data);
                setYourOpinions(yourOpinions.filter((opinionElement) => opinionElement._id !== e.target.value )); 
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Opinions</th>
                        <th>Stats</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                    yourOpinions.map((opinion, idx) => (
                        <tr key={idx}>
                            <td>{ opinion.content }</td>
                            <td>Upvotes: { opinion.yea }, Downvotes: { opinion.nay }</td>
                            <td>
                                <button>Details</button>
                                <button value={ opinion._id }onClick={onClickConcede}>Concede</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
};

export default Profile;