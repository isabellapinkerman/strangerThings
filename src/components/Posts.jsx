import React from "react";
import { getUrl } from "../API-folder";
import { useState, useEffect } from "react";
import { SinglePost } from "./";

const Posts = (props) => {
  console.log(props);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getUrl();
      console.log(allPosts)
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <div id="posts">
      {posts.length ? (
        posts.map((post, index) => {
          return (
            <SinglePost post={post} key={`post ${index}`} />
            // <div id='post' key={`post ${index}`}>{post.title}
            // <div>{post.description}</div>
            // <div>{post.author.username}</div>
            // <div>{post.price}</div>
            // <div>{`location: ${post.location}`}</div>
            // </div>
          );
        })
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
};

export default Posts;
