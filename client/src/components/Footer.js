import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px 0;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMMERCE</Logo>
        <Description>ECOMMERCE description here</Description>
        <SocialContainer>
          <SocialIcon color="1A8CD8">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="D300C5">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="B7081B">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact us</Title>
        <ContactItem>
          <MapOutlinedIcon style={{ marginRight: "10px" }} /> Direction 2200
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon style={{ marginRight: "10px" }} />
          +54 112301232
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlinedIcon style={{ marginRight: "10px" }} />
          contacto@email.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
