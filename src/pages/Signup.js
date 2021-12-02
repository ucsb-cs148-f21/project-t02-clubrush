// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";

export default function Signup() {
  const website = process.env.REACT_APP_website
    let [account, setAccount] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      });
    
      let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount(account);
      }
    
      let save = async (e) => {
        e.preventDefault();
        
        const newUser = await fetch(`${website}/users/signup`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account)
        })
        const datajson = await newUser.json()
            console.log(datajson)
      }

      const styles = {  
        box:{
          width: 500,
        },
        name_box:{
          width: 350,
        },
      }
      

  return (
    <Layout>
      <Container>
      <br/>
        <div>
            <h1>Please Signup</h1>
        </div>
        <Form onSubmit={save}>
            <Form.Group className="mb-3" controlId="formBasicFirstName" style={styles.name_box}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firstname" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName" style={styles.name_box}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.box}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={styles.box}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
                Submit
            </Button>

            </Form>
            <br />

      </Container>
    </Layout>
  );
}

