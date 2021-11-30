import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import React from "react";
import {Link } from "react-router-dom";
import styled from "styled-components";

const Bubble = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;


const styles = {
  button:{
      borderRadius: 50,
      width: 100,
      padding: 7,
      margin: 0,
  },
  org:{
    width: 1000,
    fontSize: 25
  },
  remove:{
    fontSize: 20,


  },
  title:{
    fontSize: 20,
  }
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

  const edit = () => {

  }

  const Bookmarks  = cart.map((club, idx) => (
    <div className="club" style={styles.org} key={idx}>
      <a href={'/club/'+ club.name}><Bubble src={club.image}  style={{
                borderColor: "red",
                boxShadow: "10px 7px 1px #9E9E9E",
                borderColor: "red",
                //borderWidth: 5,
                borderRadius: "50%",
                height: 150,
                width: 150,
                margin: 20
            }}/></a>
      <a href={'/club/'+ club.name} style={styles.org}>{club.name}</a>

            <br/>
      <div style={styles.remove}><button style={styles.button} onClick={() => removeFromCart(club)}>
        Remove
      </button></div>
      <h2>----------------------------------------------------</h2>

    </div>
  ))
  
  return (
<Layout>
      <Container>
      <br />
      <h1>Profilie</h1>
      <Link to="/profile/edit"><button style={styles.button}>Edit</button></Link>

      <div style={styles.title}>Name:</div>
        {/*<div>{user.name}</div>*/}
        <br />
        <div style={styles.title}>Email:</div>
        {/*<div>{user.email}</div>*/}

        <br />
        <h1>Bookmarked Clubs</h1>
        <h2>----------------------------------</h2>
        <button style={styles.button} onClick={clearCart}>Clear Cart</button>
        <h2>----------------------------------</h2>

        {Bookmarks}
      </Container>
</Layout>
  );
}