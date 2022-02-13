import React from "react";
import hero from "../../../assets/images/hero.jpg";
import Container from "@mui/material/Container";
import Nav from "./Nav";

const Head = () => {
  return (
    <div className="head">
      <img className="hero" src={hero} alt="" />
      <div className="hero-overlay"></div>
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Nav />
      </Container>
    </div>
  );
};

export default Head;
