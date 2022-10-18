import React from 'react';
import { useState } from "react";

const Posts = (props)=>{
   console.log(props)
    let [posts, setPosts] = useState([])
    return(
        <div id="posts">
            <div>{}</div>
            <div>{}</div>
            <div>{}</div>
        </div>
    )
}

export default Posts;
