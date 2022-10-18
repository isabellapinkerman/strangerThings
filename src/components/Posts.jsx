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



    return(
        <div id="posts">
           
        </div>
    )
}

export default Posts;
