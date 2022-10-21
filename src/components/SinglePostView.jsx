import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const SinglePostView = (props) => {
    const posts = props.posts
    let {userId} = useParams()
    // console.log(props.posts)
    console.log(userId)
    const post = posts.find((e)=>{
        if(e._id === userId){
            return true
        }else{
            return false
        }
    })
    console.log(post)
    return(
        <div id='post'>{post.title}
            <div>{post.description}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{`location: ${post.location}`}</div>
        </div>
    )
}

export default SinglePostView;