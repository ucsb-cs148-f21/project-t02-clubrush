import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
const Bubble = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

export default function Fraternity() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9000/clubs/`)
      .then(async (res) => {
        const data = await res.json();
        console.log(data)
        setData(data)
      }
    );
  },[]);

  return (
    <Layout>
      <Container>
        <br/>
        <h1>Departments page!</h1>
        <br />
        <TextWrapper>
          Here you can find all the Department Clubs!
        </TextWrapper>
        <h1 className="App">
          {data.map((item,index)=>{
            if(item.categories === "Department")
              return <a href={'/club/'+ item.name}>
              <Bubble src={item.image}  style={{
                borderColor: "red",
                //borderWidth: 5,
                borderRadius: "50%",
                height: 150,
                width: 150
              }}/>
          
            {/* {item.name} */}
            </a>
          })}
      </h1>
      {/* <h1 className="App">
          {data.map((item)=>{
            return <h4>Name: <Link to={`/club/${item.name}`}>{item.name}</Link></h4>
          })}
      </h1> */}
      </Container>
    </Layout>
  );
}
