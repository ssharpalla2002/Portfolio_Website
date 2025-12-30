import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import Map from './Map';

const Section = styled.div`
  min-height:95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const PageTitle = styled.h1`
  font-size: 34px;
  font-weight: 300;
  text-shadow: 0 0 30px rgba(255, 115, 0, 0.2);
  background: linear-gradient(90deg, #ff5e00,#ff5e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 65px 0px 30px 0px;
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  height: 450px;
  gap: 20px;
`;

const MapCard = styled.div`
  flex: 3;
  height: 435px;
  background-color: #0f0f0f;
    border:1px solid #c2c2c2;
  display: flex;
  overflow: hidden;
`;

const MapWrapper = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
`;

const StyledMap = styled(Map)`
  width: 100%;
  height: 100%;
`;

const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1%;
  height: 100%;
`;

const ContactCard = styled.div`
  flex: 1;
  height: 88%;
  background-color: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin-top: 30px;
  margin-bottom:10px;
  font-weight: 300;
  font-size: 30px;
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
  background:#ff6f00;
  color:#fff;
  border:none;
  border-radius:8px;
  cursor:pointer;
`;

const SuccessMessage = styled.p`
  display: flex;
  align-items: center;
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

const FooterWrapper = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  color:#fff;
  font-size:14px;
`;


/* ===== SOCIALS ===== */

const SocialsBox = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-top: -12px;
  padding: 5px;
  display: flex;
  flex-direction: row;   /* stack items vertically */
  align-items: center;      /* horizontal centering */
  justify-content: center;  /* vertical centering */
  gap: 5px;
`;

const SocialText = styled.p`
  font-size: 31px;
  font-weight: 300;
  text-shadow: 0 0 30px rgba(255, 115, 0, 0.2);
  background: linear-gradient(90deg, #000000, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 25px 10px 0px 0px;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
`;

const SocialIcon = styled.img`
  width: 50px;
  height: 50px;
`;

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
      <PageTitle>Every challenge is unique. Let’s talk about yours.</PageTitle>

      <Container>
        <MapCard>
          <MapWrapper>
            <StyledMap />
            <FadeOverlay />
          </MapWrapper>
        </MapCard>

        <ContactCard>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Card</Title>
            <Input name="name" placeholder="Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <TextArea name="message" rows={6} placeholder="Message" required />
            <Button type="submit">Send</Button>
            {success && <SuccessMessage></SuccessMessage>}
          </Form>

          <FooterWrapper>
            <FooterText>
              © 2024 Sanjith Harpalla | All rights reserved.
            </FooterText>
          </FooterWrapper>
        </ContactCard>
      </Container>

      {/* SOCIALS */}
      <SocialsBox>
        <SocialText>Get in touch with me</SocialText>
        <SocialIcons>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <SocialIcon src="/img/c1.png" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <SocialIcon src="/img/c2.png" />
          </a>
          <a href="mailto:youremail@example.com">
            <SocialIcon src="/img/c3.png" />
          </a>
        </SocialIcons>
      </SocialsBox>

    </Section>
  );
};

export default Contact;
