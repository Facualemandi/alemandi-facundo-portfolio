import React from "react";
import MOVIE from "../../images/Movies.png";
import TECHNOLOGY from "../../images/Technology.png";
import ANIME from "../../images/Anime.png";
import ALFARERIA from "../../images/Alfareria.png";
import AEROLAB from "../../images/Aerlolab.png";
import PORTFOLIO from "../../images/Portfolio.png";
import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";

const theProjects = [
  {
    title: "Todo Peliculas/Seríes",
    img: `${MOVIE}`,
    items: {
      item1: "Consumo de Api con React Query",
      item2: "Hecho para Mobile y Desktop",
      item3: "Api de The movie DB",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/movies/#/",
    github: "https://github.com/Facualemandi/movies",
  },
  {
    title: "E-commerce de tenología",
    img: `${TECHNOLOGY}`,
    items: {
      item1: "Base de datos con Firebase",
      item2: "Hecho para Mobile y Desktop",
      item3: "Proyecto con Login y Register",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/technology-commerce/",
    github: "https://github.com/Facualemandi/technology-commerce",
  },
  {
    title: "Página de Animé",
    img: `${ANIME}`,
    items: {
      item1: "Consumo de api de Animes",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con React Query",
      item4: "Hecho con Styled Components",
      item5: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/anime-info/",
    github: "https://github.com/Facualemandi/anime-info",
  },
  {
    title: "E-commerce de alfareria",
    img: `${ALFARERIA}`,
    items: {
      item1: "Base de datos hecha don Firebase",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con Vanilla CSS",
      item4: "Hecho con React, React router",
    },
    deploy: "https://facualemandi.github.io/marketplace-alfareria/",
    github: "https://github.com/Facualemandi/marketplace-alfareria",
  },
  {
    title: "Challenge de Aerolab / E-commerce",
    img: `${AEROLAB}`,
    items: {
      item1: "Consumo de Api de Aerolab",
      item2: "Hecho para Mobile y Desktop",
      item3: "Hecho con Styled Components",
      item4: "Hecho con React Query",
    },
    link: "https://facualemandi.github.io/aerolab-commerce/",
    github: "https://github.com/Facualemandi/aerolab-commerce",
  },
  {
    title: "Portfolio",
    img: `${PORTFOLIO}`,
    items: {
      item1: "Hecho para Mobile y Desktop",
      item2: "Hecho con React",
      item3: "Hecho con Styled Components",
    },
    link: "https://facualemandi.github.io/aerolab-commerce/",
    github: "https://github.com/Facualemandi/aerolab-commerce",
  },
];

const Div = styled.div`
  position: absolute;
  top: 0px;
  width: 80vw;
  height: 100%;
  border-radius: 30px;
  background-color: rgba(28, 74, 103, 0.7);
  display: none;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      padding: 10px;
      margin: 10px;
      border: 1px solid white;
      border-radius: 10px;
      &:hover {
        box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.485);
      }
    }
  }

  @media (min-width: 780px) {
    width: 100%;
  }
  @media (min-width: 1080px) {
    max-width: 430px;
  }
`;

const Container = styled.section`
  padding: 10px;
  margin-top: 30px;
  width: 90%;
  &:hover ${Div} {
    cursor: pointer;
    display: block;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: white;
    display: flex;
    margin: auto;
    width: 90vw;
    margin-bottom: 15px;
    @media (min-width: 780px) {
      width: 100%;
    }
  }

  ul {
    list-style: none;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    li {
      margin: 5px;
    }
  }

  section {
    position: relative;
  }

  @media (min-width: 780px) {
    width: 95%;
  }
`;

const Img = styled.img`
  width: 80vw;
  height: 400px;
  display: flex;
  border-radius: 30px;
  margin-bottom: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.739);

  @media (min-width: 780px) {
    width: 100%;
    max-width: 430px;
  }
`;

const Main = styled.main`
  @media (max-width: 780px) {
    display: flex;
    overflow-x: auto;
  }

  @media (min-width: 780px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 780px;
    margin: auto;
  }

  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1080px;
    margin: auto;
  }
  @media (min-width: 1380px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1380px;
    margin: auto;
  }
`;

const TheProjects = styled.h2`
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

const IconGithub = styled(FaGithubSquare)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;
const IconDeploy = styled(MdSlideshow)`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const Projects = () => {
  console.log(theProjects);
  return (
    <>
      <TheProjects>Proyectos 📚</TheProjects>
      <Main>
        {theProjects.map((project) => (
          <Container key={project.title}>
            <p>{project.title}</p>
            <ul>
              <li>✔ {project.items.item1}</li>
              <li>✔ {project.items.item2}</li>
              <li>✔ {project.items.item3}</li>
              <li>✔ {project.items.item4}</li>
              <li>
                {project.items.item5 ? "✔" : "-"} {project.items.item5}
              </li>
            </ul>

            <section>
              <Img alt={project.title} src={project.img} />
              <Div>
                <div>
                  <p>
                    GitHub <IconGithub />
                  </p>
                  <p>
                    Deploy <IconDeploy />
                  </p>
                </div>
              </Div>
            </section>
          </Container>
        ))}
      </Main>
    </>
  );
};

export default Projects;
