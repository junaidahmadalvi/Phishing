import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import React, { useState } from 'react';




function Profile() {
//   const navigate= useNavigate();
 const [field,setField]=useState("");
 const [age,setAge]=useState("");
 const [expr,setExpr]=useState("");
 const [qualfc,setQualfc]=useState("");
 const [bio,setBio]=useState("");
 const [phone,setPhone]=useState("");
 const [gender,setGender]=useState("");
 const [data, setData] = useState("");
 const id = localStorage.getItem("id");


// 


const handleSubmit = () => {

  const data = {
field: field,
age: age,
expr:expr,
qualfc: qualfc,
bio: bio,
phone: phone,
gender: gender
  }
  console.log(data)
  
  axios.put(`http://localhost:7000/user/update/${id}`, data).then(res => {
    setData(res.data);
    setField('');
    setAge('');
    setExpr('');
    setQualfc('');
    setBio('');
    setPhone('');
    setGender('');
    console.log(data,"data")
  }).catch(err => {
    console.log(err)
  });
}





  return (

    <Form style={{width: "500px",margin: "0px auto",padding:"20px",marginTop: "20px", border: "1px solid lightgray ",borderRadius: "10px"}}>
             <h2 style={{color: "#0072b1",fontWeight: "900"}} >Profile</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="label">Image</Form.Label>
            <Form.Control type="file" name="image"  />
            </Form.Group>
            {/* <br></br> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Field</Form.Label>
            <Form.Control type="text" value={field} onChange={e => setField(e.target.value)}   placeholder="Computer Science" />

            </Form.Group>
            {/* <br></br> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Age</Form.Label>
            <Form.Control type="number" value={age} onChange={e => setAge(e.target.value)}   placeholder="Age" />

            </Form.Group>
            {/* <br></br> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Experience</Form.Label>
            <Form.Control type="text" value={expr} onChange={e => setExpr(e.target.value)}   placeholder="2 Years" />


            </Form.Group>
            {/* <br></br> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">Qualification</Form.Label>
            <Form.Control type="text" value={qualfc} onChange={e => setQualfc(e.target.value)}   placeholder="Graduate" />      
            </Form.Group>
            {/* <br></br> */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">About</Form.Label>
            <Form.Control type="text" value={bio} onChange={e => setBio(e.target.value)}   placeholder="Introduction" />      
            </Form.Group>
            {/* <br></br> */}



            <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label className="label">Phone</Form.Label>
            <Form.Control type="number" value={phone} onChange={e => setPhone(e.target.value)}  placeholder="03XX-XXXXXXX" />
            </Form.Group>
            {/* <br></br> */}

            <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label  className="label">Gender</Form.Label>
            <Form.Control type="text"  value={gender} onChange={e => setGender(e.target.value)}  placeholder="Male/Female" />
            </Form.Group>
            <br></br>

            <Button variant="primary" type="button" onClick={handleSubmit} style={{fontWeight: "500","borderRadius":"24px"}} >
            Submit
            </Button>
</Form>


  
  );
  
}
export default Profile;






