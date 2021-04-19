import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const OpinionDetail = (props) => {
    const [ opinion, setOpinion ] = useState({});
    const [ allRefutes, setAllRefutes ] = useState([]);
        
    useEffect(() => {
        axios.get("http://localhost:8000/api/o/" + props.id)
            .then((res) => {
                console.log(res.data);
                setOpinion(res.data);
            })
            .catch((err) => console.log(err));

        axios.get("http://localhost:8000/api/r/" + props.id)
            .then((res) => {
                console.log(res.data);
                setAllRefutes(res.data);
            })
            .catch((err) => console.log(err));
    }, [props.id])

    const onClickUpvote = () => {
        opinion.yea += 1;
        axios.put("http://localhost:8000/api/o/" + props.id, { "yea": opinion.yea})
            .then((res) => {
                console.log(res.data);
                setOpinion({yea: opinion.yea, ...opinion});
            })
            .catch((err) => console.log(err));
    };

    const onClickDownvote = () => {
        opinion.nay += 1;
        axios.put("http://localhost:8000/api/o/" + props.id, { "nay": opinion.nay})
            .then((res) => {
                console.log(res.data);
                setOpinion({nay: opinion.nay, ...opinion});
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <h2>Details</h2>
            <Link to={ `/refute/${opinion._id}` }><button>Refute this opinion</button></Link>
            <div>
                <p>{opinion.content}</p>
                <p>Upvotes: {opinion.yea}; Downvotes: {opinion.nay}</p>
                <button onClick={onClickUpvote}>Upvote</button>
                <button onClick={onClickDownvote}>Downvote</button>
            </div>
            <h3>Top refutes</h3>
            <div>
                {
                    allRefutes.map((refute, idx) => (
                        <p key={idx}>{refute.content}</p>
                    ))
                }


{/* {
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
                } */}
            </div>
        </div>
    )
};

export default OpinionDetail;