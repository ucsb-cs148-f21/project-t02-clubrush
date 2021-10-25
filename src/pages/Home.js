import React from "react";
import styled from "styled-components";

// import getUser from "../utils/get-user";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";


const TextWrapper = styled.div`
  width: 700px;
  max-width: 100%;
`;

export default function Home() {
  // const user = getUser();

  return (
    <Layout>
      <Container>
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
       
        <br />
      </Container>
    </Layout>
  );
}
