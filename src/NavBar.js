import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
   
      <Nav className="me-auto">
      <Link style={{padding:"20px"}} to="/">
        <h5>Home</h5>
        </Link>
       
        <Link style={{padding:"20px"}} to="/movies">
        <h5>Movies</h5>
        </Link>

        <Link style={{padding:"20px"}} to="/Profile">
        <h5>Profile</h5>
        </Link>
       
      </Nav>
    </Container>
  </Navbar>
  </>

  );
};
export default NavBar;