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
        <h1>Future Page for Bookmarks</h1>
        <br />
        <Doggo src={DoggoImg} />
        <br />
        <DataSci src={DataSciImg} />
      </Container>
    </Layout>
  );
}
