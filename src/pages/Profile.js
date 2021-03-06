import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";
import { useHistory } from "react-router-dom";
// import getUser from "../utils/get-user";
// import getData from "../utils/get-data";
import DoggoImg from "../images/doggo.jpg";
import { useLocalStorage, getStorageValue } from "../components/useLocalStorage"

const Doggo = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

const styles = {
  title:{
    fontSize: 40,
  }
}


export default function Profile() {
  const history = useHistory();
  const website = process.env.REACT_APP_website
  // const user = getUser();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`${website}/testAPI`)
  //     .then(async (res) => {
  //       const data = await res.json()
  //       setData(data)
  //       console.log(res)
  //     }
  //   );
  // },[])
  const [isSignedIn, setIsSignedIn] = useLocalStorage("isSignedIn", true);
  const user = getStorageValue("user")
  const [userid, setUser] = useLocalStorage("user", user);
  let logout = (e) => {
    setUser("");
    setIsSignedIn(null)
    history.push("/")
  }

  return (
    <Layout>
      <Container>
      <br/>
        <h1>Profilie</h1>
        <br />
        <Doggo src={DoggoImg} />
        <div style={styles.title}>Name:</div>
        {/*<div>{user.name}</div>*/}

        <br />

        <div style={styles.title}>Email:</div>
        {/*<div>{user.email}</div>*/}
          <ul>
            <li>
            {JSON.stringify(user, null, 2)}
              {/* {JSON.stringify(data, null, 2)} */}
            </li>
        </ul>
        <Button variant="primary" type="submit" onClick={logout}>
                Logout
            </Button>
      </Container>
    </Layout>
  );
}
