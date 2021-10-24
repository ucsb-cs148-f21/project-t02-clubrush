import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar/Searchbar";
import BookData from "./Data.json";
import "./NavBar.css"

export default function NavBar(props) {

  const user = props.user;

  return (
    <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Navbar.Brand class="navbar-brand" href="/"><h1 className="linkText">Club Rush</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><h4 className="linkText">Home</h4></Nav.Link>
            <NavDropdown title="Club1" className="dropdown-item" id="nav-dropdown">
              <NavDropdown.Item href="./pages/DataScience" eventkey="/club1">
                {user && <Nav.Link href="/club1/datascience">Data Science</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Anime" eventkey="/club2">
                {user && <Nav.Link href="/club2/anime">Anime</Nav.Link>}
              </NavDropdown.Item>
            </NavDropdown>
            
            {user && <Nav.Link href="/club"><h4 className="linkText">Club</h4></Nav.Link>}
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
                <SearchBar placeholder="Search..." data={BookData} />
                               
              </div>
            </div>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

