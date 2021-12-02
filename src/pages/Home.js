import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { requirePropFactory } from "@material-ui/core";
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
    gridTemplateColumns: '1fr 1fr 1fr 1fr ',
    position: "center", 
  },
}

export default function Home() {
  const [data, setData] = useState([]);
  const website = process.env.REACT_APP_website
  useEffect(() => {
    fetch(`${website}/clubs/`)
      .then(async (res) => {
        const data = await res.json();
        setData(data)
      }
    );
  },[]);

  if(data != []) {
    return (
      <Layout>
        <Container>
          <br/>
          <h1>Welcome to Club Rush!</h1>
          <br />
          <TextWrapper>
            Our project will allow students to find at community at UCSB in a more 
            streamlined website that is more convenient than the current website, Shoreline.
            For our project, we want to utilize filters and nested drop-down menus, to give 
            students an easier time in their search for their new community. We want to have broader 
            categories displayed first such as academic, fraternity, cultural, community service, etc., 
            and then within those individual categories, have more specific filters to match what the 
            user is looking for in their search: Co-ed, engineering, Asian, etc. 
            </TextWrapper> 
            <br />
            <TextWrapper>
            We want this site to 
            be as minimal and simplistic as possible to give students an easier time in their search. 
            Sites such as Shoreline is a good option too, but Shoreline has too much unneccessary 
            information and most organization's page on Shoreline has not been updated in a very long time.
            Make sure you {" "}<a href="/login">Login</a> before navigating to the Club page!
            
          </TextWrapper> 
          <br />
          
          <h1 className="App" style={styles.icon}>
            {data.map((item,index)=>{
              return <a href={'/club/'+ item.name} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
              }}>
              <Bubble src={item.image}  style={{
                  borderColor: "black",
                  boxShadow: "10px 7px 1px #9E9E9E",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: "50%",
                  height: 150,
                  width: 150,
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
  else {
    return (
      <Layout>
        <Container>
          <br/>
          <h1>Welcome to Club Rush!</h1>
          <br />
          <TextWrapper>
            Our project will allow students to find at community at UCSB in a more 
            streamlined website that is more convenient than the current website, Shoreline.
            For our project, we want to utilize filters and nested drop-down menus, to give 
            students an easier time in their search for their new community. We want to have broader 
            categories displayed first such as academic, fraternity, cultural, community service, etc., 
            and then within those individual categories, have more specific filters to match what the 
            user is looking for in their search: Co-ed, engineering, Asian, etc. 
            </TextWrapper> 
            <br />
            <TextWrapper>
            We want this site to 
            be as minimal and simplistic as possible to give students an easier time in their search. 
            Sites such as Shoreline is a good option too, but Shoreline has too much unneccessary 
            information and most organization's page on Shoreline has not been updated in a very long time.
            Make sure you {" "}<a href="/login">Login</a> before navigating to the Club page!
            
          </TextWrapper> 
          <br />
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
        </Container>
      </Layout>
    );
  }
}