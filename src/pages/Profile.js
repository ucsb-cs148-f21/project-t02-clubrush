import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
// import getUser from "../utils/get-user";
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

export default function Club() {

  return (
    <Layout>
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
          Your name is "" and your email is ""
        </div>
        <div>Google also thinks you'll like this picture :)</div>
        <br />
        <Doggo src={DoggoImg} />
        <br />
        <DataSci src={DataSciImg} />
      </Container>
    </Layout>
  );
}
