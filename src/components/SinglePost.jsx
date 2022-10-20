import React from "react";

const SinglePost = (props) => {
const post = props.post

    return(
<div id='post' key={`post ${index}`}>{post.title}
                <div>{post.description}</div>
                <div>{post.author.username}</div>
                <div>{post.price}</div>
                <div>{`location: ${post.location}`}</div>
                <button>Go Back</button>
                </div>
    )
}

export default SinglePost;