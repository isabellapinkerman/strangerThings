import React from "react";
import { getUrl } from '../API-folder';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SinglePost = (props) => {
    const post = props.post
    // let [post, setPost] = useState([])
    // useEffect(()=>{
    //     async function getPost(){
    //         const post = await getUrl()
    //         setPost(post)
    //     }
    //     getPost()
    // }, [])
    const Navigate = useNavigate()
    function redirectSeeDetails(){
        let path = '/post/:userId'
        Navigate(path)
    }

    console.log(post)

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