import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import DoggoImg from "../images/doggo.jpg";
import DataSciImg from "../images/data_science_club.png";

const DataSci = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

const Doggo = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

export default function DataScience() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>Data Science Club!</h1>
        <div>
          Description
        </div>
        <div>
          Data Science club is for nerds like tommy.
        </div>
        <br /> 
        <div>
          Your name is "{user.fullName}" and your email is "{user.email}." 
        </div>
        <div>If you want more info, you can visit this {" "}
        <a href="https://www.datascienceucsb.org/"> page </a> . </div>
        <div>Google also thinks you'll like this picture :)</div>
        <br />
        <Doggo src={DoggoImg} />
        <br />
        <DataSci src={DataSciImg} />
      </Container>
    </Layout>
  );
}
