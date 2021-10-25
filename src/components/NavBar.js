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
        <Navbar.Brand class="navbar-brand" href="/"><h1 className="linkText">Club Rush</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><h4 className="linkText">Home</h4></Nav.Link>
            <NavDropdown title="Club1" className="dropdown-item" id="nav-dropdown">
              <NavDropdown.Item href="./pages/DataScience" eventkey="/club1">
                {<Nav.Link href="/club1/datascience">Data Science</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Anime" eventkey="/club2">
                {<Nav.Link href="/club2/anime">Anime</Nav.Link>}
              </NavDropdown.Item>
            </NavDropdown>
            
            {<Nav.Link href="/club"><h4 className="linkText">Club</h4></Nav.Link>}
          </Nav>
          
          <form class="form-inline my-2 my-lg-0">
            <div class="dropdown">
              <div id="myDropdown" class="dropdown-content">
                <SearchBar placeholder="Search..." data={BookData} />
                               
              </div>
            </div>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

