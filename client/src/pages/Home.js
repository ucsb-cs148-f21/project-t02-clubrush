import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Redirect } from "react-router-dom";

// import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import anime1Img from "../images/anime1.png";
import DataSciImg from "../images/datasci.png";

const Anime1 = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;
const DataSci1 = styled.img`
  width: 500px;
  max-width: 100%;
  height: auto;
`;

const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

function change(val) {
  console.log(val);
}

function renderRedirect(val) {
  console.log(val)
  change(val)
}

export default function Home() {
  // const user = getUser();
  const [data, setData] = useState([]);
  // const [click, setClick] = useState(false);
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(async (res) => {
        const data = await res.json()
        setData(data)
      }
    );
  },[])

  // if(click) {
  //   <Redirect
  //     to={{
  //       pathname: "/club",
  //     }}
  //   />
  // }

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
          user is looking for in their search: Co-ed, engineering, Asian, etc. We want this site to 
          be as minimal and simplistic as possible to give students an easier time in their search. 
          Sites such as Shoreline is a good option too, but Shoreline has too much unneccessary 
          information and most organization's page on Shoreline has not been updated in a very long time.
          Make sure you log in before navigating to the{" "}<a href="/club">Club</a> page!
          
        </TextWrapper>
        <br />
        <h1>
          <a href="https://club-rush.herokuapp.com/club2/anime"> 
            <Anime1 src={anime1Img}  style={{
              borderColor: "red",
              //borderWidth: 5,
              borderRadius: "50%",
              height: 150,
              width: 150
            }}/>
            </a>
        
            &emsp;
          <a href="https://club-rush.herokuapp.com/club1/datascience"> 
            <DataSci1 src={DataSciImg}  style={{
              borderColor: "red",
              //borderWidth: 5,
              borderRadius: "50%",
              height: 150,
              width: 150
            }}/>
            
            </a>
            
            </h1>
        <br />
        <div className="App">
          ({data.map((item,index)=>{
            // return <a onClick={()=>{setClick.bind(true)}}>
            return <a onClick={()=>{renderRedirect(item.name)}}>
            <img src={item.image}  style={{
              borderColor: "red",
              //borderWidth: 5,
              borderRadius: "50%",
              height: 150,
              width: 150
            }}/>
            {item.name}</a>
          })})
      </div>
      {/* {click? 
          console.log("hi")
          :<Redirect
          to={{
            pathname: "/club",
          }}
        />
          } */}
      </Container>
    </Layout>
  );
}
