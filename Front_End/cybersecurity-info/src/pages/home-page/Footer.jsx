import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="Footer">
      <Navbar
        bg="myColorFooter"
        data-bs-theme="light"
        fixed="bottom"
        expand="sm"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand>&copy;🐇</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Audit">
              Reset the Matrix
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </main>
  );
}

export default Footer;
