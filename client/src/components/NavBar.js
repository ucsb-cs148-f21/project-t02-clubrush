import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar/Searchbar";
import BookData from "./Data.json";
import "./NavBar.css"

export default function NavBar(props) {

  // const user = props.user;

  return (
    <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
        <Navbar.Brand class="navbar-brand" href="/"><h1 className="linkText" href="/">Club Rush</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><h4 className="linkText" href="/">Home</h4></Nav.Link>
            <h4>
            <NavDropdown title="Clubs" className="dropdown-item" id="nav-dropdown">
            
              <NavDropdown.Item href="./pages/DataScience" eventkey="/club1">
                {<Nav.Link href="/club1/datascience">Clubs</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Anime" eventkey="/club2">
                {<Nav.Link href="/club2/anime">Fraternities</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Anime" eventkey="/club2">
                {<Nav.Link href="/club2/anime">Sororities</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Anime" eventkey="/club2">
                {<Nav.Link href="/club2/anime">Sports</Nav.Link>}
              </NavDropdown.Item>
              
            </NavDropdown></h4>
            
            {<Nav.Link href="/club"><h4 className="linkText" href="/club">Bookmarks</h4></Nav.Link>}
          </Nav>
          
          <form class="form-inline my-2 my-lg-0">
            <div class="dropdown">
              <div id="myDropdown" class="dropdown-content">
                <SearchBar placeholder="Search..." data={BookData} />
                               
              </div>
            </div>
          </form>
          <Nav.Link href="/login"><h4 className="linkText">Login</h4></Nav.Link>
          <Nav.Link href="/signup"><h4 className="linkText">Signup</h4></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

