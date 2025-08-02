import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <Navbar
        bg="myColorFooter"
        data-bs-theme="light"
        fixed="bottom"
        expand="sm"
        className="bg-body-tertiary footer-navbar"
      >
        <Container>
          <Navbar.Brand><Nav.Link className="matrix-shimmer" as={Link} to="/AboutMe">
              &copy;🐇
            </Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
            
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
