import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProducts } from "../data";
import { ProductItem } from "./ProductItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    console.log(category);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5010/api/products/getall?category=${category}`
            : `http://localhost:5010/api/products/getall`
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item.id} />)}
    </Container>
  );
};
