import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";
import { useLocalStorage, getStorageValue } from "../components/useLocalStorage"


const Bubble = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;


const styles = {
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button:{
      borderRadius: 50,
      width: 100,
      padding: 7,
      margin: 0,
      color: "white",
      background: "#424242 "
  },
  top_botton:{
    borderRadius: 50,
    width: 100,
    padding: 7,
    margin: 0,
    color: "white",
    backgroundColor: '#004282'
},

  org:{
    width: 825,
    fontSize: 25
  },
  remove:{
    fontSize: 20,
  },
  title:{
    fontSize: 20,
  },
  left:{
    display: "flex",
    justifyContent: "unset",
    alignItems: "center"
  },
  right: {
    display: "flex",
    justifyContent: "flex-end"
  },
}


export default function Bookmark({setCart, cart} ) {

  const [data, setData] = useState();
  console.log(data)
  const website = process.env.REACT_APP_website
  const user = getStorageValue("user")
  
  console.log(user)

  useEffect(() => {
    fetch(`${website}/users/${user}`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
      .then(async (res) => {
        const data = await res.json();

        setData(data)
        console.log(data)
      }
      );
        
  },[]);

  useEffect(() => {
    fetch(`${website}/users/${user}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then(async (res) => {
        const username = await res.json()
        setUserName(username)
      }
      );
      
  },[]);

  const removeFromCart = async (productToRemove) => {
    const remove = await fetch(`${website}/users/delete/${user}/${productToRemove.name}`,{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = await remove.json();
    setCart(data.bookmark);
    window.location.reload(false);
  }

  const clearCart = async () => {
    const remove = await fetch(`${website}/users/deleteall/${user}`,{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    setCart([]);
    console.log("works")
    window.location.reload(false);
  }

  var Bookmarked = []
  if(data != null) {
  Bookmarked  = data.bookmark.map((club, idx) => (
    <div className="club" key={idx}>
      <div className="both" style={styles.left}>
      <a href={'/club/'+ club.name}><Bubble src={club.image}  style={{
                borderColor: "red",
                boxShadow: "10px 7px 1px #9E9E9E",
                borderColor: "red",
                borderRadius: "50%",
                height: 150,
                width: 150,
                margin: 20
            }}/></a>
      <a href={'/club/'+ club.name} style={styles.org}>{club.name}</a>
            <br/>
      <div className="club" style={styles.right}>
      <div style={styles.remove}><Button style={styles.button} onMouseOver={changeColor} onMouseLeave={changeColor2} onClick={() => removeFromCart(club)}>
        Remove
      </Button></div>
      </div>
      </div>
    </div>
  ))
          }

  // const Bookmarks  = cart.map((club, idx) => (
  //   <div className="club" key={idx}>
  //     <div className="both" style={styles.left}>
  //     <a href={'/club/'+ club.name}><Bubble src={club.image}  style={{
  //               borderColor: "red",
  //               boxShadow: "10px 7px 1px #9E9E9E",
  //               borderColor: "red",
  //               borderRadius: "50%",
  //               height: 150,
  //               width: 150,
  //               margin: 20
  //           }}/></a>
  //     <a href={'/club/'+ club.name} style={styles.org}>{club.name}</a>
  //           <br/>
  //     <div className="club" style={styles.right}>
  //     <div style={styles.remove}><Button style={styles.button} onMouseOver={changeColor} onMouseLeave={changeColor2} onClick={() => removeFromCart(club)}>
  //       Remove
  //     </Button></div>
  //     </div>
  //     </div>
  //   </div>
  // ))

  const history = useHistory();

  const [isSignedIn, setIsSignedIn] = useLocalStorage("isSignedIn", true);
  const [userid, setUser] = useLocalStorage("user", user);
  let logout = (e) => {
    setUser("");
    setIsSignedIn(null)
    history.push("/")
  }





  function changeColor(e) {
    e.target.style.background = "#9a9a9a";
  }

  function changeColor2(e) {
    e.target.style.background = "#424242";
  }

  function changeColor_cart(e) {
    e.target.style.background = "#7DB1E5";
  }

  function changeColor_cart2(e) {
    e.target.style.background = "#004282";
  }
  
  if(data != undefined) {
  return (
<Layout>
      <Container>
      <br />
      <h1>Profile</h1>

      {/* <div className="club" style={styles.buttons}>
      <Link to="/profile/edit"><Button style={styles.top_botton} onMouseEnter={changeColor_cart} onMouseLeave={changeColor_cart2}>Edit</Button></Link>
      </div> */}

 

      <div style={styles.title}>Name: {data.firstname} {data.lastname}</div>
        <br />
        <div style={styles.title}>Email: {data.email}</div>
        <br/>

        <Button variant="primary" type="submit" onClick={logout}>
                Logout
            </Button>
        <br />
        <br/>

        <h1>Bookmarked Clubs</h1>
        <div className="club" style={styles.buttons}>
        <Button style={styles.top_botton} onMouseEnter={changeColor_cart} onMouseLeave={changeColor_cart2} onClick={clearCart}>Clear Cart</Button>
        </div>

        {/* {Bookmarks} */}
        {Bookmarked}
        <br />

      </Container>
</Layout>
  
  );}
  else {
    return <Spinner style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }} animation="border" role="status">
    <span className="visually-hidden"></span>
  </Spinner>
  }
}