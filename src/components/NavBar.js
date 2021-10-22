import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar/Searchbar";



export default function NavBar(props) {


  const user = props.user;
  
  const [clubsState, setClubsState] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/1')
        .then((res)=>res.json())
        .then((clubsArray)=>{
          const newClubsState = [clubsArray].map((club) => {
            return club.title
          })
          setClubsState(newClubsState)
        })
  }, [])

const hasClubs = clubsState.length > 0


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Club Rush</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Club1" id="nav-dropdown">
            <NavDropdown.Item eventkey="/club1">Data Science</NavDropdown.Item>
            <NavDropdown.Item eventkey="/club1">Chess</NavDropdown.Item>
          </NavDropdown>
            {user && <Nav.Link href="/club">Club</Nav.Link>}
          </Nav>
          <Nav>
            {!user ? (
              <div id="login-button" />
            ) : (
              <NavDropdown
                title={
                  <span>
                    Hello, {user.fullName}{" "}
                    <img
                      src={user.imageUrl}
                      alt="club"
                      style={{ width: "24px", height: "24px" }}
                    />{" "}
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={user.signOut}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <form class="form-inline my-2 my-lg-0">
            <div class="dropdown">
              <div id="myDropdown" class="dropdown-content">
                {hasClubs ? <SearchBar clubs={clubsState}></SearchBar> : 'Loading...'}
                               
              </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

