// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
// import getUser from "../utils/get-user";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import Comments from "../components/comments/Comments";

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
        console.log(data)
        setData(data[0])
      }
    );
  },[]);

  function changeBackground(e) {
    e.target.style.background = '#4682b4';
  }

  function changeBackground2(e) {
    e.target.style.background = '#004282';
  }

  function changeBackground3(e) {
    e.target.style.background = '#000080';

  }

  return (
    <Layout>
      <Container>
      <br/>
        <div>
        <div className="name" style={styles.left}>
        <h1>{data.name}</h1>
          <div className="club" style={styles.right}>
          <button style = {styles.button} onClick={() => addToBookmark(data)}>Favorite</button>
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
        <div>contact@gmail.com
        <a href={data.link}> page </a> . </div>
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

