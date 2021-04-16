import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PostOpinion = (props) => {
    const [ content, setContent ] = useState("");
    const [ errors, setErrors ] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        const postData = {
            content: content,
            userId: localStorage.userId
        };

        axios.post('http://localhost:8000/api/o/', postData)
            .then((res) => {
                if(res.data.errors) {
                console.log(res.data.errors);
                setErrors(res.data.errors);
            } else {
                console.log(res.data);
                navigate("/home");
            }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>Submit an opinion</h2>
            <form onSubmit={ onSubmitHandler }>
                <div>
                    <textarea rows="5" cols="40" name="content" value={ content } onChange={ e => setContent(e.target.value) } />
                </div>
                <div>
                    <button type="submit">Post</button>
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

export default PostOpinion;