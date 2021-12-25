import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavabarComp = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            The Online Library
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                <i className="fas fa-users-cog"></i> Services
              </Nav.Link>
              <Nav.Link as={Link} to="/library">
                <i className="fas fa-book-reader"></i> Library
              </Nav.Link>
            </Nav>

            <Nav>
              {localStorage.getItem("user-info") ? (
                <Nav.Link as={Link} to="/logout">
                  Logout <i className="fas fa-sign-in-alt"></i>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <i className="fas fa-user-plus"></i> Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavabarComp;
