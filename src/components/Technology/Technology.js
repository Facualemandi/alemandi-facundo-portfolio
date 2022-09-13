import React from "react";
import HTML from "../../images/HTML.png";
import CSS from "../../images/CSS.svg";
import JS from "../../images/JS.png";
import REACT from "../../images/REACT.png";
import GIT from "../../images/GIT.png";
import GITHUB from "../../images/GITHUB.png";
import STYLEDCOMPONENTS from "../../images/STYLED-COMPONENTS.png";
import REACTQUERY from "../../images/REACT-QUERY.png";
import styled from "styled-components";

const tecnlogi = [
  { name: "Html", img: `${HTML}` },
  { name: "Css", img: `${CSS}` },
  { name: "JavaScript", img: `${JS}` },
  { name: "React", img: `${REACT}` },
  { name: "Git", img: `${GIT}` },
  { name: "GitHub", img: `${GITHUB}` },
  { name: "Styled-Components", img: `${STYLEDCOMPONENTS}` },
  { name: "React-Query", img: `${REACTQUERY}` },
];

const Img = styled.img`
  width: 70px;
  height: 70px;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;

  @media (min-width: 780px) {
    width: 780px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    width: 1080px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Container = styled.section`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #121d30;
  max-width: 320px;

  p {
    font-family: "Roboto", sans-serif;
    color: white;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 400;
  }

  @media (min-width: 780px) {
    :hover {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.164);
      transition: 0.3s;
    }
  }
`;

const Skills = styled.h2`
  font-family: "Roboto", sans-serif;
  color: white;
  margin-top: 5px;
  font-size: 45px;
  font-weight: 600;
  display: flex;
  margin: auto;
  margin-top: 30px;
  color: #8ab4f8;
  width: 95vw;

  @media (min-width: 780px) {
    width: 780px;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Technology = () => {
  return (
    <>
      <Skills>Tecnologías 📊</Skills>
      <Main>
        {tecnlogi.map((item) => (
          <Container key={item.name}>
            <Img alt={item.name} src={item.img} />
            <p>{item.name}</p>
          </Container>
        ))}
      </Main>
    </>
  );
};

export default Technology;
