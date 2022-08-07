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
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Lastname" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>Acepto los terminos y condiciones de uso</Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
