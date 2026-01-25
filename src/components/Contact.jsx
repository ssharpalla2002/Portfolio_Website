import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

/* ================= SECTION ================= */

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  background-image: url('/img/bg2.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

/* ================= MAIN LAYOUT ================= */

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 40px;
`;

/* ================= LEFT TEXT ================= */

const Left = styled.div`
  flex: 2;
  color: #fff;
`;

const PageTitle = styled.h1`
margin-top:20px;
  font-size: 52px;
  font-weight: 300;
  line-height: 1.15;
  margin-bottom: 25px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.85;
  max-width: 520px;
`;

/* ================= SOCIALS ================= */

const SocialsBox = styled.div`
  margin-top: 35px;
  
`;

const SocialText = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 14px;
`;

const SocialIcon = styled.img`
  width: 52px;
  height: 52px;
`;

/* ================= RIGHT CARD ================= */

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;


const ContactCard = styled.div`
margin-top:90px;
  width: 300px;
  height: 400px;
  background-color: #000;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/* ================= FORM ================= */

const Title = styled.h2`
  margin-bottom: 5px;
  margin-top: 20px;
  font-weight: 300;
  font-size: 28px;
  color: #fff;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  font-size: 13px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  width: 90%;
  border-radius: 8px;
  font-size: 13px;
  resize: none;
`;

const Button = styled.button`
  padding: 8px;
  width: 96%;
  background: #8a0000;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

/* ================= SUCCESS ================= */

const SuccessMessage = styled.p`
  display: flex;
  align-items: center;
  margin-top:6px;
  gap: 8px;
  color: #20d029;
  font-size: 13px;

  &::before {
    content: "✓";
    width: 20px;
    height: 20px;
    background: #2db634;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`;

/* ================= FOOTER ================= */

const Footer = styled.footer`
  margin-top: auto;
  padding: 15px 0 5px 0px;
  text-align: center;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 14px;
  opacity: 0.8;
`;

/* ================= COMPONENT ================= */

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4kolser',
      'template_jzsn0n6',
      ref.current,
      { publicKey: 'cKta4r46Hg8PLkGvO' }
    ).then(
      () => setSuccess(true),
      () => setSuccess(false)
    );
  };

  return (
    <Section>
      <Container>
        {/* LEFT TEXT */}
        <Left>
          <PageTitle>
            Every challenge is unique.<br />
            Let’s build something meaningful.
          </PageTitle>

          <Description>
            Have an idea, a problem to solve, or just want to connect? <br />
            Drop a message and let’s start the conversation.
          </Description>

          <SocialsBox>
            <SocialText>Check out my socials</SocialText>
            <SocialIcons>
              <a href="https://www.linkedin.com/in/sanjithsh2002/" target="_blank" rel="noreferrer">
                <SocialIcon src="/img/c1.png" />
              </a>
              <a href="mailto:ssharpalla2002@gmail.com" target="_blank" rel="noreferrer">
                <SocialIcon src="/img/c2.png" />
              </a>
              <a href="https://github.com/ssharpalla2002">
                <SocialIcon src="/img/c3.png" />
              </a>
            </SocialIcons>
          </SocialsBox>
        </Left>

        {/* RIGHT CARD */}
        <Right>
          <ContactCard>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Get in touch</Title>

              <Input name="first_name" placeholder="First name" required />
              <Input name="last_name" placeholder="Last name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <TextArea name="message" rows={6} placeholder="Message" required />

              <Button type="submit">Send</Button>
              {success && <SuccessMessage>Message sent</SuccessMessage>}
            </Form>
          </ContactCard>
        </Right>
      </Container>

      {/* FOOTER */}
      <Footer>
        <FooterText>
          © 2025 Sanjith Harpalla | All rights reserved.
        </FooterText>
      </Footer>
    </Section>
  );
};

export default Contact;
