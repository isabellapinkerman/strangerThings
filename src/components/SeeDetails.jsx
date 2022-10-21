import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePost, deletePost } from "../API-folder";

const SeeDetails = (props) => {
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
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete)
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);
    console.log(deleted);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const updatedPost = await updatePost(
      postDetails,
      post._id,
      localStorage.getItem("token")
    );
    console.log(updatedPost);
  }

  return (
    <>
      {post ? (
        <>
          <div className="box">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.location}</div>
          </div>
          <div className="box">
            <form onChange={handleChange} onSubmit={handleSubmit} >
              <input id="title" defaultValue={postDetails.title} placeholder="Title"/>
              <input id="description" defaultValue={postDetails.description} placeholder="Description"/>
              <input id="price" defaultValue={postDetails.price} placeholder="Price"/>
              <input id="location" defaultValue={postDetails.location} placeholder="Location"/>
              <button type="submit">Submit</button>
            </form>
            <button
              id={post._id ? `${post._id}` : null}
              onClick={(e) => {
                handleDelete(e);
              }}
            >DELETE</button>
          </div>
        </>
      ) : (
        <div>Loading your post details...</div>
      )}
    </>
  );
};

export default SeeDetails;
