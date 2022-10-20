import React, { useEffect, useState } from "react";
import { Navbar, Posts, Register, Login, WelcomeScreen, SeeDetails, SinglePost} from './';
import { BrowserRouter as Router,
Route, Routes, useParams, Switch, Link} from "react-router-dom";
import { getUrl } from "../API-folder";


const Main = () => {

  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState();


  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getUrl()
      setPosts(allPosts);
    }
    
    fetchPosts();
  }, []);
  let {userId} = useParams() //
  //details button clicked use navigate is called with post id. 
  //when use navigate is called with the post id sending it to :userId route
  //the id is stored in the url bar and can be pulled down using useParams
console.log(posts, 'posts')


const filterPosts = posts.filter((element)=>{
if(element === userId){
  return element
}
})
console.log(filterPosts)
//filter through the array to
//if the user id is equal to the selected user id, we need to map over each id to find the unique one and return it in order to see its details.
//singlePost property^^^

  return (
    <Router>
      <Navbar />
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
        <Route path="/login/welcome" element={
          <div id="main">
            <WelcomeScreen />
            <Posts posts={posts}/>
          </div>
        }></Route>
        <Route path='/:userId' element={
          <div id="main">
            <SinglePost posts={}/>
            <SeeDetails/>
          </div>
        }></Route>
      </Routes>
    </Router>
  );
};

export default Main;
