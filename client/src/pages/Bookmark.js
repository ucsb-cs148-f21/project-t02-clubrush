import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import React from "react";
import {Link } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

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
      color: "black"
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

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((club) => club !== productToRemove)
    );
  };
  const clearCart = () => {
    setCart([]);
    console.log("works")
  }


  const Bookmarks  = cart.map((club, idx) => (
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
      <div style={styles.remove}><Button style={styles.button} onClick={() => removeFromCart(club)}>
        Remove
      </Button></div>
      </div>
      </div>
    </div>
  ))
  
  return (
<Layout>
      <Container>
      <br />
      <h1>Profile</h1>
      <div className="club" style={styles.buttons}>
      <Link to="/profile/edit"><Button style={styles.top_botton}>Edit</Button></Link>
      </div>
 
      <div style={styles.title}>Name:</div>
        {/*<div>{user.name}</div>*/}
        <br />
        <div style={styles.title}>Email:</div>
        {/*<div>{user.email}</div>*/}

        <br />
        <h1>Bookmarked Clubs</h1>
        <div className="club" style={styles.buttons}>
        <Button style={styles.top_botton} onClick={clearCart}>Clear Cart</Button>
        </div>

        {Bookmarks}
      </Container>
</Layout>
  );
}