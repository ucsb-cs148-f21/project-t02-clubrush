// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
// import getUser from "../utils/get-user";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { useLocalStorage, getStorageValue } from "../components/useLocalStorage"
import Button from "react-bootstrap/Button";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//import Button from "../components/Button";

const styles = {
  button:{
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 100,
      padding: 10,
      margin: 20,
  },
  right: {
    display: "flex",
    justifyContent: "flex-end"
  },
  left: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
}


export default function Club({cart, setCart, addToBookmark}) {
  const { id } = useParams();
  console.log(typeof(id));
  const website = process.env.REACT_APP_website
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`${website}/clubs/${id}`)
      .then(async (res) => {
        const data = await res.json();
        setData(data[0])
      }
    );
  },[]);

  let check = async (data) => {
    const user = getStorageValue("user")
    console.log(user)
    if(user == "" || user == undefined) {
      alert("Cannot bookmark if not logged in. Please log in")
      return "Not logged in";
    }
    const newUser = await fetch(`${website}/users/${user}/bookmark`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    addToBookmark(data)
  }


  return (
    <Layout>
      <Container>
      <br/>
        <div>
        <div className="name" style={styles.left}>
        <h1>{data.name}</h1>
          <div className="club" style={styles.right}>
          <Button style = {styles.button} onClick={() => {check(data)}}>Favorite</Button>
          </div>
        </div>
        <a href={data.link}><img src={data.image} style={{
          borderColor: "red",
          borderRadius: "50%",
          height: 125,
          width: 125,
        }}></img>
        </a>
        <br />
        <br />

        <h3>
          Description
        </h3>
        <p>
          {data.description}
        </p>
        <br /> 
        <h3>
          Contact
        </h3>
        <div>
        For more information and events, check out the <a href={data.link}> Official Club Page</a>. </div>
        <br />

        <br />
        </div>
        <Comments 
          commentsUrl="${website}/comments"
          currentUserId="1" />

      </Container>
    </Layout>
  );
}

