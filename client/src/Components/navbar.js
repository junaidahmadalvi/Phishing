import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Navigbar() {
  const id = localStorage.getItem("id");

  const navigate= useNavigate();

  const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("id");
		window.location.reload();
    navigate("/")
	};


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <img src="https://www.citypng.com/public/uploads/preview/hd-linkedin-official-logo-transparent-background-31623962207jz85kqlqot.png" alt="" className='logo'/>
        {/* <h1>jhfg</h1> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
            <div className="nav-right">
           
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px"}}  onClick={handleLogout}> Logout </Button>
            <Link to={`/profile/${id}`}>
            <Button variant="outline-primary" style={{"fontWeight": "600","borderRadius": " 24px","marginLeft": "10px"}}> Profile </Button>
            </Link>
            </div>
          {/* </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigbar;