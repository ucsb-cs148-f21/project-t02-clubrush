import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import Layout from "../components/Layout";
// import getUser from "../utils/get-user";
import anime1Img from "../images/anime1.png";
import Pekora from "./Video/Pekora.mp4";

const Anime1 = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;




export default function Anime() {

  return (
    <Layout>
      <Container>
        <div>
          <video autoPlay loop muted
          style={{
            position: 'absolute',
            width: "100%",
            left: "50%",
            top:"50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
          }}
          >
            <source src={Pekora} type="video/mp4"></source>
          </video>
        </div>
        
        <h1>Anime Club!   <Anime1 src={anime1Img} style={{
          borderColor: "red",
          //borderWidth: 5,
          borderRadius: "50%",
          height: 100,
          width: 100
        }}/></h1>
        <br />
        <h3>
          Description
        </h3>
        <p>
          We long to create a welcoming environment for UCSB students who are interested in anime. By having this club, students will be able to create friendships and network with other people who share similar interests. This will allow new students to make friendships with their peers and can hopefully help them adjust to college life a little easier. Additionally, we would like to educate people about Japanese culture and cultural icons through our meetings and special events.
        </p>
        
        <h3>
          Contact
        </h3>
        <p>
          theucsbanimeclub@gmail.com 
        </p>
        <div>If you want more info, you can visit this {" "}
        <a href="https://www.instagram.com/ucsb.anime/"> page </a> . </div>
        
        

      </Container>
    </Layout>
  );
}
