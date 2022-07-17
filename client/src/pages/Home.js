import React from "react";
import { Anouncement } from "../components/Anouncement";
import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <>
      {" "}
      <Anouncement />
      <Navbar />
      <Slider />
    </>
  );
};
