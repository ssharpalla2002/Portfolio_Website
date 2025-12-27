import React from "react";
import styled, { keyframes } from "styled-components";

/* ================= WHO SECTION ================= */

const Section = styled.section`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightCard = styled.div`
  max-width: 900px;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 300;
  background: linear-gradient(90deg, #ff5e00, #ff5e00);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 115, 0, 0.2);
  margin-bottom: 15px;
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 300;
  background: linear-gradient(90deg, #000000, #3f3f3f);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  line-height: 1.6;
`;

/* ================= SKILLS SCROLL ================= */

const SkillsSection = styled.section`
  overflow: hidden;
  width: 100%;
  padding: 15px 0px 70px 0px;
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const Track = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 30s linear infinite;
  animation-direction: reverse;
`;

const Img = styled.img`
  width: 85px;
  height: 85px;
  object-fit: contain;
  margin-right: 45px;

  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
`;

/* ================= COMPONENT ================= */

const Who = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/img/t${i + 1}.png`);
  const scrollingImages = [...images, ...images];

  return (
    <>
      {/* Intro */}
      <Section>
        <Container>
          <Right>
            <RightCard>
              <Title>Introduction</Title>
              <Desc>
                A Full stack software developer with expertise in Node.js, React.js, SQL and REST APIs.
                <br />
                I collaborate closely with clients to develop scalable backend architectures, multithread
                <br />
                applications, real time data processing systems with high performance and low latency.
                <br />
                Let's work together to convert your ideas into revenue generating engines built to scale.
              </Desc>
            </RightCard>
          </Right>
        </Container>
      </Section>

      {/* Skills Scroll */}
      <SkillsSection>
        <Track>
          {scrollingImages.map((src, idx) => (
            <Img key={idx} src={src} alt={`Tech ${idx + 1}`} />
          ))}
        </Track>
      </SkillsSection>
    </>
  );
};

export default Who;
