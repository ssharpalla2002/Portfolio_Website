import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 85vh;
  padding: 70px 10px 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 37px;
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff5e00, #ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  width: 360px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h3`
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 10px;
  color: #000;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #ff5e00;
  }
`;

const CardDesc = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #000;
  line-height: 1.4;
`;

const services = [
  {
    image: "/img/s1.png",
    title: "Website Design",
    desc: "High converting online stores delivering seamless user experiences.",
  },
  {
    image: "/img/s2.png",
    title: "Headless eCommerce Design",
    desc: "Future proof architecture prioritizing speed flexibility innovation.",
  },
  {
    image: "/img/s3.png",
    title: "SEO & Marketing",
    desc: "Strategic growth campaigns driving traffic maximizing sales.",
  },
  {
    image: "/img/s4.png",
    title: "Application Development",
    desc: "Powerful apps built to scale ecommerce functionality.",
  },
  {
    image: "/img/s5.png",
    title: "AI Business Automation",
    desc: "AI driven workflows streamlining operations boosting efficiency.",
  },
];
export default function Services() {
  return (
    <Section id="services">
      <Title>Services</Title>
      <Grid>
        {services.map((service, idx) => (
          <Card key={idx}>
            <CardImage src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.desc}</CardDesc>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
