import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import UserList from "./UserList";
import NavabarComp from "./NavabarComp";
import useFetch from "../hooks/useFetch";

const UserSection = () => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:5000/users");
  return (
    <div>
      <NavabarComp />
      <Container className="mt-4">
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">
                Account
              </ListGroup.Item>
              <ListGroup.Item
                as={Link}
                to="/user-section"
                variant="info"
                active
              >
                Users
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info">
                Books
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">
                Issued Books
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin-books" variant="info">
                My Books
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={10}>
            {error && <div>{error}</div>}
            {isPending && (
              <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {users && <UserList users={users} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserSection;
