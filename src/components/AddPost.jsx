import React, { useEffect, useState } from "react";
import { createPost } from "../API-folder";

const AddPost = (props) => {
   const post = props.post

  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    willDeliver: true,
  });

  useEffect(() => {
    post
      ? setPostDetails({
          title: post.title,
          description: post.description,
          price: post.price,
          location: post.location,
        })
      : null;
  }, [post]);
  console.log(post);

  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    console.log(e.target.id);
    const update = e.target.value;
    console.log(e.target.value);
    const updatedForm = { ...postDetails, [toUpdate]: update };
    setPostDetails(updatedForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const token = localStorage.getItem('token')
    const createdPost = await createPost(
      postDetails,
    token
    );
    console.log(createdPost);
  }
console.log()
  return (
        
          <div className="box">
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <input id="title"  placeholder="Title"/>
              <input id="description"  placeholder="Description"/>
              <input id="price"  placeholder="Price"/>
              <input id="location"  placeholder="Location"/>
              <button type="submit">Submit</button>
            </form>
          </div>
    );
};

export default AddPost;
