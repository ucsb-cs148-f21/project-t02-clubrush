import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
// import getUser from "../utils/get-user";
import DataSciImg from "../images/data_science_club.png";
import { useParams } from "react-router-dom";

const DataSci = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

export default function Club() {
  const { id } = useParams();
  console.log(typeof(id));

  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:9000/clubs/${id}`)
      .then(async (res) => {
        const data = await res.json();
        console.log(data)
        setData(data[0])
      }
    );
  },[]);

  return (
    <Layout>
      <Container>
      <br/>
        <div>
        <h1>{data.name}</h1>
        <a href={data.link}><img src={data.image}></img></a>
        <br />
        <h3>
          Description
        </h3>
        <p>
          Description
        </p>
        <br /> 
        <h3>
          Contact
        </h3>
        <div>contact@gmail.com
        <a href="https://www.datascienceucsb.org/"> page </a> . </div>
        <br />

        <br />
        </div>
        <DataSci src={DataSciImg} />
      </Container>
    </Layout>
  );
}

