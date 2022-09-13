import React from "react";
import styled from "styled-components";
import { AboutMe } from "../components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Projects from "../components/Projects/Projects";
import Technology from "../components/Technology/Technology";

const Main = styled.main`
  background-color: rgb(16, 23, 29);
  width: 100vw;
`;

const Home = () => {
  return (
    <Main>
      <Nav />
      <Header />
      <AboutMe />
      <Technology />
      <Projects />
    </Main>
  );
};

export default Home;
