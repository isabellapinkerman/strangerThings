import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login, SeeDetails, SinglePostView, AddPost} from './';
import { BrowserRouter as Router,
Route, Routes} from "react-router-dom";
import { getUrl } from "../API-folder";


const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getUrl(localStorage.getItem('token'))
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  return (
    <Router> 
      <Navbar posts={posts} setPosts={setPosts}/>
      <Routes>
        <Route path="/" element={
          <div id="main">
            <Posts posts={posts}/>
          </div>
        }></Route>
        <Route path="/register" element={
          <div id="main">
            <Register />
          </div>
        }></Route>

        <Route path="/login" element={
          <div id="main">
            <Login />
          </div>
        }></Route>
        <Route path='/:userId' element={
          <div id="main">
            <SinglePostView posts={posts}/>
            <SeeDetails/>
          </div>
        }></Route>
        <Route path='/welcome/:userId' element={
          <div id="main">
            <SinglePostView posts={posts}/>
            <SeeDetails/>
          </div>
        }></Route>
        <Route path='/addPost' element={
          <div id="main">
            <AddPost />
          </div>
        }></Route>
      </Routes>
    </Router>
  );
};

export default Main;
