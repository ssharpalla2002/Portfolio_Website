import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { AnimatePresence, motion } from "framer-motion";

// Components
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Services from "./components/Services";
import Projects from "./components/Projects";
import SectionWrapper from "./components/SectionWrapper";

// Loader Styles
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Logo
const Logo = styled.img`
  width: 65%;
  height: 65%;
  object-fit: contain;
  z-index: 2;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LoaderWrapper>
            <LogoContainer>
              <Logo src="/img/l1.png" alt="Logo" />
            </LogoContainer>
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Container>
            <section id="Hero">
                <Hero />
            </section>

            <section id="Who">
              <SectionWrapper>
                <Who />
              </SectionWrapper>
            </section>

            <section id="Services">
              <SectionWrapper>
                <Services />
              </SectionWrapper>
            </section>

            <section id="Projects">
              <SectionWrapper>
                <Projects />
              </SectionWrapper>
            </section>

            <section id="Contact">
              <SectionWrapper>
                <Contact />
              </SectionWrapper>
            </section>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
