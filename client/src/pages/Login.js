// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../components/Layout";

const styles = {  
  box:{
    width: 500,
  },
  name_box:{
    width: 350,
  },
}

export default function Login() {
  return (
    <Layout>
      <Container>
      <br/>
        <div>
            <h1>Please Login</h1>
        </div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.box}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" style={styles.box}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

