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

const styles = {
  clubname:{
    width: 250,
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    padding: 10
  },
  icon:{
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    position: "center", 
  },
}

export default function Department() {
  const [data, setData] = useState([]);
  const website = process.env.REACT_APP_website
  useEffect(() => {
    fetch(`${website}/clubs/`)
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
        <h1 className="App" style={styles.icon}>
          {data.map((item,index)=>{
            if(item.categories === "Department")
              return <a href={'/club/'+ item.name} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
              }}>
              <Bubble src={item.image}  style={{
                borderColor: "red",
                //borderWidth: 5,
                borderRadius: "50%",
                height: 150,
                width: 150
              }}/>
          
            <div style={styles.clubname}>{item.name}</div>
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
