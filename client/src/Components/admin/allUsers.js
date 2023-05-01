import React from 'react'
// import Navigbar from './navbar'
import axios from 'axios';
import  {  useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const AllUsers = () => {
    

    axios
  .get("http://localhost:7000/posts", {
    responseType: "json",
  })
  .then(function (response) {
    console.log(response.data);
  });


  const id = localStorage.getItem("id");

  const [data, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/allUsers/${id}`).then(res => {
    console.log(res.data);

      setPost(res.data);
    });
  }, []);


  return (
    <div className="App">
      <Table striped bordered hover>
      <thead>

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>ID</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Age</th>
          <th>Field</th>
          <th>Exprience</th>
          <th>Qualification</th>
          <th>Bio</th>
          <th>Gender</th>
          
        </tr>
        </thead>
        <tbody>
              {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val._id}</td>
              <td>{val.phone}</td>
              <td>{val.role}</td>
              <td>{val.age}</td>
              <td>{val.field}</td>
              <td>{val.expr}</td>
              <td>{val.qualfc}</td>
              <td>{val.bio}</td>
              <td>{val.gender}</td>

            </tr>
          )
        })}
        </tbody>

      </Table>
    </div>
  );
}

export default AllUsers

