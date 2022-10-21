import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const SinglePost = (props) => {
    const post = props.post

    const Navigate = useNavigate()
    function redirectSeeDetails(){
        let path = post._id
        Navigate(path)
    }

    return(
        <div id='post'>{post.title}
            <div>{post.description}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{`location: ${post.location}`}</div>
            <button onClick={redirectSeeDetails}>See Details</button>
        </div>
    )
}

export default SinglePost;