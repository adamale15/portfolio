import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Section id="home">
      <ContentWrapper>
        <HeroText>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Ashish Damale 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Software Developer & Full Stack Engineer I specialize in building
            end-to-end web applications using React, Node.js, and modern cloud
            technologies. With expertise in both frontend and backend
            development, I create scalable solutions that deliver exceptional
            user experiences. Currently pursuing my MS in Software Engineering
            at Arizona State University while actively developing web
            applications and exploring cutting-edge technologies.
          </motion.p>
        </HeroText>
        <ResumeButton
          href="/resume.pdf" // Ensure the file is located in the public folder
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume
        </ResumeButton>
      </ContentWrapper>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const HeroText = styled.div`
  margin-bottom: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color};
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 50px; /* Rounded button */
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.95);
  }
`;

export default Home;
