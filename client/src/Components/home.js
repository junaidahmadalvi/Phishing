import React from 'react'
import Navigbar from './navbar'
import Post from './getPosts'
import pic from './img/p2.jpg';

const Home = () => {
  // window.location.reload(true);

  return (
    <div>
    {/* <Navigbar/> */}

    <img style={{"width": "60%","height": " 60%","marginTop": "40px"}} src={pic}></img>
    {/* <Post/> */}
    {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Farbazhussain14%2Fstatus%2F1247156966947872773&psig=AOvVaw3tR63AguaHg763KOx0bccy&ust=1671079689915000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjK4pen-PsCFQAAAAAdAAAAABAH" alt="" />
   
    <img   style={{"width": "100%","height": " 100%"}} src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Farbazhussain14%2Fstatus%2F1247156966947872773&psig=AOvVaw3tR63AguaHg763KOx0bccy&ust=1671079689915000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjK4pen-PsCFQAAAAAdAAAAABAH'/> */}
  </div>
  )
}

export default Home



