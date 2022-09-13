import React from "react";
import styled from "styled-components";
import FacundoAlemandi from "../../images/FacuAlemandi.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const TheHeader = styled.header`
  padding: 15px;
  height: auto;
  min-height: 100vh;

  @media (min-width: 780px) {
    display: flex;
    justify-content: center;
    padding-top: 150px;

    section {
      div {
        margin-left: 50px;
      }
    }
  }
`;

const Img = styled.img`
  display: flex;
  border-radius: 30px;
  width: 250px;
  margin: 0 auto;
  margin-top: 70px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.353);

  @media (min-width: 780px) {
    margin: 0;
    width: 350px;
    height: 400px;
  }
`;

const Name = styled.p`
  font-size: 80px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #8ab4f8;
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
  margin-top: 15px;
  @media (max-width: 380px) {
    font-size: 65px;
  }
  @media screen and (min-width: 780px) and (max-width: 1080px) {
    font-size: 90px;
    margin-top: 0;
  }
  @media screen and (min-width: 1080px) {
    font-size: 130px;
    margin-top: 0;
  }
`;
const Surname = styled.p`
  font-size: 80px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #8ab4f8;
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
  @media (max-width: 380px) {
    font-size: 65px;
  }
  @media screen and (min-width: 780px) and (max-width: 1080px) {
    font-size: 80px;
    margin-top: 0;
  }
  @media screen and (min-width: 1080px) {
    font-size: 130px;
  }
`;
const Dev = styled.p`
  font-size: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  color: #98c0f6;
  display: flex;
  justify-content: center;
  @media (max-width: 380px) {
    font-size: 35px;
  }
  @media screen and (min-width: 780px) and (max-width: 1080px) {
    font-size: 40px;
    margin-top: 50px;
  }
  @media screen and (min-width: 1080px) {
    font-size: 80px;
    margin-top: 0;
  }
`;

const SectionIcons = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  max-width: 290px;
  margin-top: 40px;
`;

const IconGitHub = styled(FaGithubSquare)`
  width: 70px;
  height: 70px;
  color: #336ca5;

  @media (min-width: 780px) {
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.164);
      transition: 0.3s;
    }
  }
`;
const IconLinkedin = styled(FaLinkedin)`
  width: 70px;
  height: 70px;
  color: #336ca5;

  @media (min-width: 780px) {
    cursor: pointer;
    :hover {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.164);
      transition: 0.3s;
    }
  }
`;
const IconBottom = styled(VscTriangleDown)`
  width: 70px;
  height: 70px;
  color: #336ca5;
  display: flex;
  margin: auto;
  margin-top: 150px;
`;

const Header = () => {
  return (
    <TheHeader>
      <Img alt="" src={FacundoAlemandi} />

      <section>
        <div>
          <Name>Facundo</Name>
          <Surname>Alemandi</Surname>
          <Dev>React Developer</Dev>
        </div>

        <SectionIcons>
          <IconGitHub />
          <IconLinkedin />
        </SectionIcons>
        <IconBottom />
      </section>
    </TheHeader>
  );
};

export default Header;
