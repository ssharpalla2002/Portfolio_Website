import React from "react";
import styled from "styled-components";

const projects = [
  { title: "AI Agent", image: "/img/p1.png", githubUrl: "https://github.com/ssharpalla2002/AI_Agent", desc: "Intelligent agent automating tasks through pro-level decision making.", sector: "" },
  { title: "AI Chatbot", image: "/img/p2.png", githubUrl: "https://github.com/ssharpalla2002/AI_Chatbot", desc: "Smart chatbot delivering instant, accurate human-like conversations.", sector: "" },
  { title: "Movie Streaming Platform", image: "/img/p3.png", githubUrl: "https://github.com/ssharpalla2002/Movie_Streaming_Platform", desc: "Seamless HD streaming featuring rapid content browsing.", sector: "" },
  { title: "Social Media Platform", image: "/img/p4.png", githubUrl: "https://github.com/ssharpalla2002/Social_Media_Platform", desc: "Real-time social engagement within a sleek modern platform.", sector: "" },
  { title: "Real Estate Marketplace", image: "/img/p5.png", githubUrl: "https://github.com/ssharpalla2002/Real_Estate_Marketplace", desc: "Streamlined property management providing premium user experiences.", sector: "" },
  { title: "LMS Platform", image: "/img/p8.png", githubUrl: "https://github.com/ssharpalla2002/LMS_Platform", desc: "Digital learning system for efficient course management.", sector: "" },
  { title: "eCommerce Platform", image: "/img/p7.png", githubUrl: "https://github.com/ssharpalla2002/eCommerce_Platform", desc: "Secure shopping architecture built for intuitive user journeys.", sector: "" },
  { title: "Restaurant Website", image: "/img/p6.png", githubUrl: "https://github.com/ssharpalla2002/Restaurant_Website", desc: "Visual dining experience supporting effortless online ordering.", sector: "" },
];

// --- STYLED COMPONENTS ---
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 130px 10px 150px 10px;
  background: #ffffff; /* white background */
  box-sizing: border-box;
`;

const TitlesWrapper = styled.div`
  max-width: 1200px;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: #000000;
  margin-bottom: 15px;
  margin-left: 130px;
  text-align: left;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  margin-left: 130px;
  color: #000000;
  margin-bottom: 70px;
  text-align: left;
`;

const CustomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
  column-gap: 10px;
  row-gap: 40px;
  width: 100%;
  max-width: 1300px;
  justify-items: center;
  margin: 0 auto;
`;

const CardGridItem = styled.div`
  max-width: 400px;
  width: 100%;
`;

const GreyCardWrapper = styled.div`
  background-color: #ffffff; /* light grey */
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const LargeImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 3px;
`;

const LargeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
    color: #000000;
  margin-top:25px;
  margin-bottom:5px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #313131;
  line-height: 1.4;
    margin-bottom:8px;
`;

const SectorText = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #cc0000;
`;

const ProjectCard = ({ project }) => (
  <CardGridItem>
    <GreyCardWrapper>
      <LargeImageWrapper>
        <LargeImage src={project.image} alt={project.title} />
      </LargeImageWrapper>
      <CardContent>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="/img/g1.png"
                alt="GitHub"
                style={{
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                  filter: "invert(0)",
                  marginTop:"20px",
                }}
              />
            </a>
          )}
        </ProjectHeader>
        <Description>{project.desc}</Description>
        {project.sector && <SectorText>{project.sector}</SectorText>}
      </CardContent>
    </GreyCardWrapper>
  </CardGridItem>
);

const Projects = () => {
  return (
    <Section>
      <TitlesWrapper>
        <MainTitle>Streamlined digital experiences.</MainTitle>
        <SubTitle>
          I've worked on a variety of projects, from small websites to large-scale web applications. Here are some of my favorites.
        </SubTitle>
      </TitlesWrapper>
      <CustomGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CustomGrid>
    </Section>
  );
};

export default Projects;
