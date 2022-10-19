import React from 'react';
import { getUrl } from '../API-folder';
import { useState, useEffect } from "react";

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
    return(
        <div id="posts">
           { posts.length ? posts.map((post,index)=> {
                return (
                <div id='post' key={`post ${index}`}>{post.title}
                <div>{post.description}</div>
                <div>{post.author.username}</div>
                <div>{post.price}</div>
                <div>{`location: ${post.location}`}</div>
                </div>
                )
           }) : <div>Loading Posts</div>
        }
        </div>
    )
}

export default Posts;
