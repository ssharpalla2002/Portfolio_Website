import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

// ---------- Styles ---------- //

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      to bottom,
      #202020 0%,
      rgb(0, 0, 0) 20%,
      rgba(0, 0, 0, 0.749) 45%,
      rgba(0, 0, 0, 0.255) 65%,
      rgba(43, 0, 0, 0) 100%
    ),
    url('/img/bg1.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;


const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 75px;
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-top: -70px;
  color: #ffffffe9;
`;



const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  max-width: 900px;
  line-height: 1.4;
  margin-top: 8px;
  color: #ffffffe0;
  opacity: 0.9;
`;

const RoleText = styled.p`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 300;
  color: #ffffffe0;
  opacity: 0.9;
`;

/* --- Bottom Grey Bar --- */
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 14px 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
`;

const BottomContent = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
`;

const BottomText = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  opacity: 0.8;
  margin: 0;
`;

const BottomArrowImg = styled.img`
  width: 25px;
  height: 18px;
  opacity: 0.85;
  filter: invert(1);
`;

// ---------- Component ---------- //

const Hero = () => {
  return (
    <Section id="Hero">
      {/* Navbar lives INSIDE Hero */}
      <Navbar />

      <Container>
        <Left>
          <Title>Hello, I'm Sanjith Harpalla</Title>

          <Desc>
            Engineering immersive web experiences where modern UI meets powerful visuals
          </Desc>

          <RoleText>Software Engineer</RoleText>
        </Left>
      </Container>

      <BottomBar>
        <BottomContent href="#Who">
          <BottomText>Ready? Scroll to discover more</BottomText>
          <BottomArrowImg src="/img/d1.png" alt="Scroll down" />
        </BottomContent>
      </BottomBar>
    </Section>
  );
};

export default Hero;
