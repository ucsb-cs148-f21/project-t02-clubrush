import React from "react";
import styled from "styled-components";
import Link from "react-router-dom"
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

export default function Club(props) {
  console.log(props.location.state)
  return (
    <Layout>
      <Container>
      <br/>
        <div>
        <h1>{props.location.state}</h1>
        <br />
        <h3>
          Description
        </h3>
        <p>
          To provide Gauchos with the resources and community to learn, share, and create in the realm of data science.

          To be the platform through which companies and faculty researchers seek the best data science talent UCSB has to offer, as well as one that empowers students looking to earn this distinction.


        </p>
        <br /> 
        <h3>
          Contact
        </h3>
        <div>datascienceucsb@gmail.com
        <a href="https://www.datascienceucsb.org/"> page </a> . </div>
        <div>Google also thinks you'll like this picture :)</div>
        <br />

        <br />
        </div>
        <DataSci src={DataSciImg} />
      </Container>
    </Layout>
  );
}
