import Container from "react-bootstrap/Container";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  const Bookmarks  = cart.map((club, idx) => (
    <div className="club" style={styles.org} key={idx}>
      <div style={styles.org}>{club.name}</div>
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
        <h1>Bookmarked Clubs</h1>
        <h2>----------------------------------</h2>
        <button style={styles.button} onClick={clearCart}>Clear Cart</button>
        <h2>----------------------------------</h2>

        {Bookmarks}
      </Container>
</Layout>
  );
}