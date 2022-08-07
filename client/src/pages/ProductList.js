import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Anouncement } from "../components/Anouncement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
export const ProductList = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option selected={true} disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected={true} disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products: </FilterText>
          <Select
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>{" "}
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
