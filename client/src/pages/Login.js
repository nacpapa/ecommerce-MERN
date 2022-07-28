import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://preview.redd.it/molu69xmra271.png?width=7674&format=png&auto=webp&s=d241d2bf9d16f5314dff196376aaed19a09603ee)
    center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  color: teal;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Log in</Button>
          <Link>Forgot your password ?</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
