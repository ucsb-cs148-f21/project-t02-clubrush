import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import getUser from "../utils/get-user";
// import getData from "../utils/get-data";
import DoggoImg from "../images/doggo.jpg";

const Doggo = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

export default function Profile() {
  const user = getUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(async (res) => {
        const data = await res.json()
        setData(data)
        console.log(res)
      }
    );
    // const json = response.json();
    // setData({ data: json });
  },[])

  return (
    <Layout user={user}>
      <Container>
        <h1>This is your Profile page!</h1>
        <div>
          Here's what this app knows about you based on your Google login:
        </div>
        <pre>{JSON.stringify(user, null, "\t")}</pre>
        <div>
          Your name is "{user.fullName}" and your email is "{user.email}."
        </div>
        <div>Google also thinks you'll like this picture :)</div>
        <br />
        <Doggo src={DoggoImg} />
        {}
        <div>
          Here is data:
          <ul>
            <li>
              {JSON.stringify(data, null, 2)}
            </li>
        </ul>
        </div>
      </Container>
    </Layout>
  );
}
