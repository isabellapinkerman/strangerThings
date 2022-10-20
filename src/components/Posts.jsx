import React from 'react';
import { getUrl } from '../API-folder';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Posts = (props)=>{
   console.log(props)
    let [posts, setPosts] = useState([])
useEffect(()=>{
    async function fetchPosts(){
        const allPosts = await getUrl()
        setPosts(allPosts)
    }
    fetchPosts()
}, [])
console.log(posts)
 
const Navigate = useNavigate()
function redirectSeeDetails(){
    let path = '/post-details'
    Navigate(path)
  }


    return(
        <div id="posts">
           { posts.length ? posts.map((post,index)=> {
                return (
                <div id='post' key={`post ${index}`}>{post.title}
                <div>{post.description}</div>
                <div>{post.author.username}</div>
                <div>{post.price}</div>
                <div>{`location: ${post.location}`}</div>
                <button onClick={useNavigate}>See Details</button>
                </div>
                )
           }) : <div>Loading Posts</div>
        }
        </div>
    )
}

export default Posts;
