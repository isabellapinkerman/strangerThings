import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {updatePost, deletePost} from '../API-folder'

const SeeDetails = (props)=>{
const [postDetails, setPostDetails] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    willDeliver: true,

}) 

    return(
<div></div>
    )
}

export default SeeDetails;