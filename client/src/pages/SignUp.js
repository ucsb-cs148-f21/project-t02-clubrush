// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";

export default function Signup() {
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
        
        const newUser = await fetch('http://localhost:9000/users/signup', {
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

  return (
    <Layout>
      <Container>
      <br/>
        <div>
            <h1>Please Signup</h1>
        </div>
        <Form onSubmit={save}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" name="firstname" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="lastname" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
      </Container>
    </Layout>
  );
}

