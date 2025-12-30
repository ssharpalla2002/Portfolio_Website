import React from "react";
import styled, { keyframes } from "styled-components";

/* ================= WHO SECTION ================= */

const Section = styled.section`
  min-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GreyCard = styled.div`
  width: 90%;
  max-width: 1000px;
  margin-top:120px;
  margin-bottom:80px;
  border:1px solid #e9e9e9;
  background: #f8f8f8;
  border-radius: 20px;
  padding: 40px 0px 60px 0px;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
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
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Desc = styled.p`
  font-size: 19px;
  font-weight: 300;
  margin-bottom:20px;
  background: linear-gradient(90deg, #000000, #3f3f3f);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  line-height: 1.6;
`;

/* ================= SKILLS SCROLL ================= */

const SkillsSection = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 30px;
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
    margin-right: 20px;
  }
`;

/* ================= COMPONENT ================= */

const Who = () => {
  const images = Array.from({ length: 12 }, (_, i) => `/img/t${i + 1}.png`);
  const scrollingImages = [...images, ...images];

  return (
    <Section>
      <GreyCard>
        {/* Intro */}
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

        {/* Skills Scroll */}
        <SkillsSection>
          <Track>
            {scrollingImages.map((src, idx) => (
              <Img key={idx} src={src} alt={`Tech ${idx + 1}`} />
            ))}
          </Track>
        </SkillsSection>
      </GreyCard>
    </Section>
  );
};

export default Who;
