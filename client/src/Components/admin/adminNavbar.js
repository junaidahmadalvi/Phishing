import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate= useNavigate();
  const id = localStorage.getItem("id");

  const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("id");

    navigate("/")
		 window.location.reload();

	};


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        
        <h3 style={{color: "#0072b1",fontWeight: "900","paddingLeft": "10px"}}>Admin</h3>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
            <div className="nav-right">
            <Link to={`/allPosts/${id}`}>
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px"}}> Posts </Button>
            </Link>
            
            <Link to={`/allUsers/${id}`}>
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px","marginLeft": "10px"}}> Users </Button>
            </Link>
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px","marginLeft": "10px"}}  onClick={handleLogout}> Logout </Button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;