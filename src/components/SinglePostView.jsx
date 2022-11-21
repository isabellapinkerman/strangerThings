import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const SinglePostView = (props) => {
    const posts = props.posts
    let {userId} = useParams()
    
    const post = posts.find((e)=>{
        if(e._id === userId){
            return true
        }else{
            return false
        }
    })

    const Navigate = useNavigate()
    function redirectHome(){
        let path = '/'
        Navigate(path)
    }

    return(
        <div id='post'>{post.title}
            <div>{post.description}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{`location: ${post.location}`}</div>
            <button onClick={redirectHome}>Go Back</button>
        </div>
    )
}

export default SinglePostView;