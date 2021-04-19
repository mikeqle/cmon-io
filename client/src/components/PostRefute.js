import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PostRefute = (props) => {
    const [ refuteContent, setRefuteContent ] = useState("");
    const [ opinion, setOpinion ] = useState({})
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/o/" + props.id)
            .then((res) => {
                console.log(res.data);
                setOpinion(res.data);
            })
            .catch((err) => console.log(err));
    }, [props.id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const postData = {
            content: refuteContent,
            userId: localStorage.userId,
            opinionId: props.id
        };

        axios.post('http://localhost:8000/api/r/', postData)
            .then((res) => {
                if(res.data.errors) {
                console.log(res.data.errors);
                setErrors(res.data.errors);
            } else {
                console.log(res.data);
                navigate("/opinions/" +  props.id);
            }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>Submit a refute to this opinion</h2>
            <p>Opinion: { opinion.content }</p>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <textarea rows="5" cols="40" name="content" value={ refuteContent } onChange={ e => setRefuteContent(e.target.value) } />
                </div>
                <div>
                    <button type="submit">Post Refute</button>
                </div>
                {
                    (errors.content) ?
                    <span className="error-text">{ errors.content.message }</span>
                    : null
                }
            </form>
        </div>
    )
};

export default PostRefute;