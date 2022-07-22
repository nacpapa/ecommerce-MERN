import React from "react";
import styled from "styled-components";
import { Anouncement } from "../components/Anouncement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div``;
const Filter = styled.div``;
const FilterTitle = styled.span``;
const FilterColor = styled.div``;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;
export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anouncement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Titulo</Title>
          <Description>Descripcion de producto</Description>
          <Price>20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};
