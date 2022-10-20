import React from "react";
import { getUrl } from "../API-folder";
import { useState, useEffect } from "react";
import { SinglePost } from "./";

const Posts = (props) => {
  console.log(props);
const posts = props.posts
  console.log(posts);

  return (
    <div id="posts">
      {posts.length ? (
        posts.map((post, index) => {
          return (
            <SinglePost post={post} key={`post ${index}`} />,
            <DetailButton />
          );
        })
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
};

export default Posts;
