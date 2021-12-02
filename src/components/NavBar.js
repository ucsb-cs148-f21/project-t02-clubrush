import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "./SearchBar/Searchbar";
import "./NavBar.css"
import { useLocalStorage, getStorageValue } from "./useLocalStorage.js"

export default function NavBar(props) {
  const website = process.env.REACT_APP_website
  const isSignedIn = getStorageValue("isSignedIn")
  // const user = props.user;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${website}/clubs/`)
      .then(async (res) => {
        const data = await res.json();
        setData(data)
      }
    );
  },[]);
  if(!isSignedIn) {
    return (
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light" >
        <Container style={{
          alignItems: "self-end",
          
        }}>

          <Navbar.Brand class="navbar-brand" href="/"><h1 className="linkText" href="/">Club Rush</h1></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><h4 className="linkText" href="/">Home</h4></Nav.Link>
              <h4>
              <NavDropdown title="Clubs" className="dropdown-item" id="nav-dropdown">
              
              <NavDropdown.Item href="./pages/AssociatedStudents" eventkey="/club3">
                {<Nav.Link href="/club3/AssociatedStudents">Associated Students</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Fraternity" eventkey="/club3">
                {<Nav.Link href="/club3/Fraternity">Fraternities/Sororities</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Department" eventkey="/club3">
                {<Nav.Link href="/club3/Department">Department</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Sports" eventkey="/club3">
                {<Nav.Link href="/club3/Sports">Sports</Nav.Link>}
              </NavDropdown.Item>
                
              </NavDropdown></h4>
              
              {<Nav.Link href="/bookmark"><h4 className="linkText">Profile</h4></Nav.Link>}
            </Nav>
            
            <form className="form-inline my-2 my-lg-0">
              <div className="dropdown">
                <div id="myDropdown" class="dropdown-content">
                  <SearchBar placeholder="Search..." data={data} />
                                
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
  else{
    return (
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <Container style={{
          alignItems: "self-end",
          
        }}>

          <Navbar.Brand class="navbar-brand" href="/"><h1 className="linkText" href="/">Club Rush</h1></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><h4 className="linkText" href="/">Home</h4></Nav.Link>
              <h4>
              <NavDropdown title="Clubs" className="dropdown-item" id="nav-dropdown">
              
              <NavDropdown.Item href="./pages/AssociatedStudents" eventkey="/club3">
                {<Nav.Link href="/club3/AssociatedStudents">Associated Students</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Fraternity" eventkey="/club3">
                {<Nav.Link href="/club3/Fraternity">Fraternities/Sororities</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Department" eventkey="/club3">
                {<Nav.Link href="/club3/Department">Department</Nav.Link>}
              </NavDropdown.Item>
              <NavDropdown.Item href="./pages/Sports" eventkey="/club3">
                {<Nav.Link href="/club3/Sports">Sports</Nav.Link>}
              </NavDropdown.Item>
                
              </NavDropdown></h4>
              
              {<Nav.Link href="/bookmark"><h4 className="linkText" href="/bookmark">Profile</h4></Nav.Link>}
            </Nav>
            
            <form className="form-inline my-2 my-lg-0">
              <div className="dropdown">
                <div id="myDropdown" class="dropdown-content">
                  <SearchBar placeholder="Search..." data={data} />
                                
                </div>
              </div>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

