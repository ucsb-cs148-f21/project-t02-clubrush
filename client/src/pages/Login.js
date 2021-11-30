// import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";
import { useLocalStorage, getStorageValue } from "../components/useLocalStorage"

export default function Login({isSignedIn, setIsSignedIn}) {
  console.log(isSignedIn);
  const history = useHistory();
  const [user, setUser] = useLocalStorage("user", "");

  let [account, setAccount] = useState({
    email: '',
    password: ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  }

  let check = async (e) => {
    e.preventDefault();
    const newUser = await fetch('http://localhost:9000/users/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(account)
    })
    const datajson = await newUser.json();
    setUser(datajson._id)
    console.log(getStorageValue("user", "not working"));
    setIsSignedIn(true)
    console.log(datajson)
    console.log(isSignedIn);
    history.push("/profile")
  }

  return (
    <Layout>
      <Container>
      <br/>
        <div>
            <h1>Please Login</h1>
        </div>
        <Form onSubmit={check}>
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

