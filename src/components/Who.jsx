import React from "react";
import styled, { keyframes } from "styled-components";

/* ================= WHO SECTION ================= */

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;

  @media (max-width: 768px) {
    padding: 100px 20px 60px 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RightCard = styled.div`
  max-width: 1500px;
`;

/* ================= TEXT ================= */

const Title = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
  margin-left: 70px;
  margin-top:50px;

  /* Red gradient in your theme */
  background: linear-gradient(90deg, #000000, #000000);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
  margin-left: 70px;
  line-height: 1.6;

  /* Black to dark grey gradient */
  background: linear-gradient(90deg, #000000, #4d4d4d);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  /* Subtle shadow for readability */
  text-shadow: 0px 1px 2px rgba(0,0,0,0.1);
`;


/* ================= SKILLS SCROLL ================= */

const SkillsSection = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 30px;
`;

const scroll = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Track = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 45s linear infinite;
`;

const Img = styled.img`
  width: 90px;
  height: 90px;
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
      <Container>
        <Right>
          <RightCard>
            <Title>Curious how great code is made?</Title>
<Desc>
  I build comprehensive software solutions using Node.js, React.js, SQL,
  and scalable API-driven architectures.
  <br />
  From backend system design to real-time data pipelines, I help clients
  turn complex requirements into<br/> fast, reliable,
   and maintainable
  applications.
  If you’re looking to ship products that perform under load 
  <br/>and grow
  with your business, let’s build something that lasts.
</Desc>

          </RightCard>

          {/* Skills Scroll */}
          <SkillsSection>
            <Track>
              {scrollingImages.map((src, idx) => (
                <Img key={idx} src={src} alt={`Tech ${idx + 1}`} />
              ))}
            </Track>
          </SkillsSection>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
