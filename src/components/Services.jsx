import React from "react";
import styled from "styled-components";
import { Code, Server, TrendingUp, Smartphone, Cpu, Layout, Search, Monitor } from "lucide-react";

const Section = styled.section`
  min-height: 85vh;
  padding: 110px 100px 70px 100px; /* more spacing around section */
  display: flex;
  justify-content: flex-start; /* align cards to left */
  align-items: flex-start;
  background:#ffffff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px; /* more spacing between cards */
  width: 100%;
  max-width: 1600px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${(props) =>
    props.type === "info" ? "transparent" : "rgba(243, 243, 243, 0.696)"};
  backdrop-filter: blur(12px);
   margin-top: ${(props) => (props.type === "info" ? "46px" : "0")}; /* added margin-top for info card */
     font-size: ${(props) => (props.type === "info" ? "28px" : "18px")}; /* bigger title for info card */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 70px 50px;

  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
`;

const CardIconWrapper = styled.div`
  margin-bottom: 20px;
  color: #cc0000;
`;

const CardTitle = styled.h3`
  font-size: ${(props) => (props.type === "info" ? "32px" : "18px")};
  font-weight: ${(props) => (props.type === "info" ? "300" : "300")};
  margin-top: ${(props) => (props.type === "info" ? "-18px" : "0px")};
  margin-bottom: 18px;
  color: #cc0000;
  text-align: left;
`;


const CardDesc = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #333333;
    line-height: 1.4;
  text-align: left;
`;

const services = [
  {
    type: "info",
    title: "Need more info?",
 desc: (
    <>
      I got you.
      Here are some of the services I offer. <br/>
      If you have any questions, feel free to reach out.
    </>
  ),
},
  {
    type: "icon",
    icon: <Code size={20} />,
    title: "Website Design",
    desc: "High-converting online stores delivering seamless user experiences.",
  },
  {
    type: "icon",
    icon: <Server size={20} />,
    title: "Headless eCommerce",
    desc: "Future-proof architecture prioritizing speed, flexibility, and innovation.",
  },
  {
    type: "icon",
    icon: <TrendingUp size={20} />,
    title: "SEO & Marketing",
    desc: "Strategic growth campaigns driving traffic and maximizing sales.",
  },
  {
    type: "icon",
    icon: <Smartphone size={20} />,
    title: "Application Development",
    desc: "Powerful apps built to scale eCommerce functionality.",
  },
  {
    type: "icon",
    icon: <Cpu size={20} />,
    title: "AI Business Automation",
    desc: "AI-driven workflows streamlining operations and boosting efficiency.",
  },
];


export default function Services() {
  return (
    <Section id="services">
      <Grid>
        {services.map((service, idx) => (
          <Card key={idx} type={service.type}>
            {service.type === "icon" && (
              <CardIconWrapper>{service.icon}</CardIconWrapper>
            )}
            <CardTitle type={service.type}>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
