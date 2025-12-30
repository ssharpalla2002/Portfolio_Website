import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "AI Agent",
    image: "/img/p1.png",
    githubUrl: "https://github.com/ssharpalla2002/Finsor_Agent",
    desc: "Intelligent agent automating tasks through pro level decision making.",
    sector: "Finance",
  },
  {
    title: "AI Chatbot",
    image: "/img/p2.png",
    githubUrl: "https://github.com/ssharpalla2002/ShikshaGPT_Chatbot",
    desc: "Smart chatbot delivering instant accurate human like conversations.",
    sector: "Education",
  },
  {
    title: "Movie Streaming App",
    image: "/img/p3.png",
    githubUrl: "https://github.com/ssharpalla2002/Movie_Streaming_App",
    desc: "Seamless HD streaming featuring rapid content browsing.",
    sector: "Entertainment",
  },
  {
    title: "Social Media App",
    image: "/img/p4.png",
    githubUrl: "https://github.com/ssharpalla2002/Social_Media_App",
    desc: "Real time social engagement within a sleek modern platform.",
    sector: "Network",
  },
  {
    title: "Real Estate Marketplace",
    image: "/img/p5.png",
    githubUrl: "https://github.com/ssharpalla2002/Real_Estate_Marketplace",
    desc: "Streamlined property management providing premium user experiences.",
    sector: "Property",
  },
    {
    title: "LMS Platform",
    image: "/img/p8.png",
    githubUrl: "https://github.com/ssharpalla2002/LMS_Platform",
    desc: "Digital learning system for streamlined course management.",
    sector: "Education",
  },
  {
    title: "eCommerce Platform",
    image: "/img/p7.png",
    githubUrl: "https://github.com/ssharpalla2002/Ecommerce_Platform",
    desc: "Secure shopping architecture built for intuitive user journeys.",
    sector: "Retail",
  },
    {
    title: "Restaurant Website",
    image: "/img/p6.png",
    githubUrl: "https://github.com/ssharpalla2002/Restaurant_Website",
    desc: "Visual dining experience supporting effortless online ordering.",
    sector: "Hospitality",
  }
];


// --- STYLED COMPONENTS ---
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 300;
  text-align: center;
  text-shadow: 0 0 30px rgba(255, 115, 0, 0.2);
  background: linear-gradient(90deg, #ff5e00, #ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
`;

/* Grid using auto-fit to center last row */
const CustomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  column-gap: 50px;
  row-gap: 70px;
  width: 90%;
  max-width: 1200px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    column-gap: 0px;
    row-gap: 40px;
  }
`;

const CardGridItem = styled.div`
  max-width: 370px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  position: relative;
`;

/* IMAGE */
const LargeImageWrapper = styled.div`
  width: 100%;
  height: 160px; /* adjust as needed */
  overflow: hidden;
`;


const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${CardGridItem}:hover & {
    transform: scale(1.1);
  }
`;

/* CONTENT */
const CardContent = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 1px;
  color: #000;
  transition: color 0.3s ease;

  ${CardGridItem}:hover & {
    color: #ff5e00;
  }
`;

const Description = styled.p`
  margin-top:-2px;
  font-size: 16px;
  font-weight: 300;
  color: #000;
  line-height: 1.4;
`;

const SectorWrapper = styled.div`
  margin-top: 4px;
`;

const SectorTag = styled.button`
  background: transparent;
  border: 0px solid #ff6f00;
  border-radius: 2px;
  padding:0px;
  font-size: 16px;
  font-weight: 400;
  color: #ff6f00;
  cursor: default;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    background: transparent;
    color: #ff6f00;
    border-color: #ff6f00;
  }
`;

// --- Project Card ---
const ProjectCard = ({ project }) => (
  <CardGridItem>
    <LargeImageWrapper>
      <LargeImage src={project.image} alt={project.title} />
    </LargeImageWrapper>

    <CardContent>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="/img/github.png"
              alt="GitHub"
              style={{ width: "22px", height: "22px", cursor: "pointer" }}
            />
          </a>
        )}
      </ProjectHeader>

      <Description>{project.desc}</Description>

      {project.sector && (
        <SectorWrapper>
          <SectorTag>{project.sector}</SectorTag>
        </SectorWrapper>
      )}
    </CardContent>
  </CardGridItem>
);

// --- Projects Component ---
const Projects = () => {
  return (
    <Section>
      <Title>Recent Work</Title>
      <CustomGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CustomGrid>
    </Section>
  );
};

export default Projects;
