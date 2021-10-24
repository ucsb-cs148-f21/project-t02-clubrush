import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
import getUser from "../utils/get-user";
import anime1Img from "../images/anime1.png";
import anime2Img from "../images/anime2.jpg";

const Anime1 = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

const Anime2 = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;


export default function Anime() {
  const user = getUser();

  return (
    <Layout user={user}>
      <Container>
        <h1>Anime Club!</h1>
        <div>
          Description
        </div>
        <div>
          Anime club is for chads like morgan.
        </div>
        <br /> 
        <div>
          Your name is "{user.fullName}" and your email is "{user.email}." 
        </div>
        <div>If you want more info, you can visit this {" "}
        <a href="https://www.instagram.com/ucsb.anime/"> page </a> . </div>
        <div>Google also thinks you'll like this picture :)</div>
        
        <br />
        <Anime1 src={anime1Img} style={{
          borderColor: "red",
          borderWidth: 5,
          height: 100,
          width: 200
        }}/>
        <Anime2 src={anime2Img} style={{
          borderColor: "red",
          borderWidth: 5,
          height: 100,
          width: 200
        }}/>
        <br />

      </Container>
    </Layout>
  );
}
