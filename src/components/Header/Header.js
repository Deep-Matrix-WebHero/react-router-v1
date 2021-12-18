import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  // const activeStyle = {
  //   fontWeight: "bold",
  //   color: "red",
  // };
  return (
    <div>
      {/* link without bootstrap */}
      {/* <NavLink to="/home">
        <Button variant="outline-primary">Home</Button>
      </NavLink>

      <NavLink to="/friends">
        <Button variant="outline-primary">Friends</Button>
      </NavLink>
      <NavLink to="/about">
        <Button variant="outline-primary">About</Button>
      </NavLink>
      <NavLink to="/about/culture">
        <Button variant="outline-primary">Culture</Button>
      </NavLink> */}

      {/* <NavLink to="/about/culture" activeStyle={activeStyle}>
        <Button variant="outline-primary">Culture</Button>
      </NavLink> */}
      {/* navbar */}

      {/* -----nav link with bootstrap------ */}

      <Navbar className="nav-button" bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto white">
            <NavLink to="/home" id="home">
              <Button variant="outline-success">Home</Button>
            </NavLink>

            <NavLink to="/friends" id="friends">
              <Button variant="outline-success">Friends</Button>
            </NavLink>
            <NavLink to="/about" id="about">
              <Button variant="outline-success">About</Button>
            </NavLink>
            <NavLink to="/about/culture" id="culture">
              <Button variant="outline-success">Culture</Button>
            </NavLink>
            <NavLink to="/posts" id="posts">
              <Button variant="outline-success">Posts</Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default Header;
