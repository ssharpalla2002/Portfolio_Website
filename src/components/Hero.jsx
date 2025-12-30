import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import { ArrowDown } from "lucide-react";

// ---------- Modern Styles ---------- //

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/img/bg1.png');
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-top: 20px;
  background: linear-gradient(90deg, #ff5e00, #ffb14d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DescWrapper = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 12px 20px;
  margin-top: 0;
`;

const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  max-width: 900px;
  line-height: 1.4;
  margin-top: -5px;
  background: linear-gradient(90deg, #000000, #3f3f3f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.9;
`;

const CodeWrapper = styled.span`
  &::before { content: "<"; opacity: 1; }
  &::after { content: "/>"; opacity: 1; }
`;

const Button = styled.a`
  margin-top: 2px;
  padding: 10px 28px;
  border-radius: 12px;
  border:2px solid #ff5b02;
  font-size: 20px;
  font-weight: 400;
  color:#ff5b02;
  text-decoration: none;
`;

const DownArrowWrapper = styled.a`
  margin-top: 20px;
  cursor: pointer;

  svg {
    width: 38px;
    height: 38px;
    stroke-width: 1.5;
    color: #ff6a00;
    animation: bounce 1.5s infinite ease-in-out;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;

// ---------- Component ---------- //

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hello, I'm Sanjith Harpalla</Title>

          <DescWrapper>
            <Desc>
              <CodeWrapper>
                I build immersive web experiences with sleek design & stunning 3D visuals
              </CodeWrapper>
            </Desc>
          </DescWrapper>

          <Button href="#">
            Software Engineer
          </Button>

          <DownArrowWrapper href="#Who">
            <ArrowDown />
          </DownArrowWrapper>
        </Left>
      </Container>
    </Section>
  );
};

export default Hero;
