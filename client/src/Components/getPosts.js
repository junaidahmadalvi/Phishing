import React from 'react'
// import Navigbar from './navbar'
import axios from 'axios';
import  {  useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js" integrity="sha256-S1J4GVHHDMiirir9qsXWc8ZWw74PHHafpsHp5PXtjTs=" crossorigin="anonymous"></script>

const Post = () => {
    

  //   axios
  // .get("http://localhost:7000/posts", {
  //   responseType: "json",
  // })
  // .then(function (response) {
  //   console.log(response.data);
  // });



  const [data, setPost] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:7000/posts/${id}`).then(res => {
    console.log(res.data);

      setPost(res.data);
    });
  }, []);


  return (
    <div>
      {data.map(({id, title, desc}) => {
        return (
          <>
          <Card style={{ width: '22rem',height: '22rem', margin: "0px auto" }} key={id}>
          <Card.Img variant="top" src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {desc}
            </Card.Text>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
         <hr />
        
        </>


        );
      })}
    </div>
  );
}

export default Post
