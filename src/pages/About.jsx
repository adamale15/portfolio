import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about">
      <ContentWrapper>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I'm a passionate Software Developer with expertise in full-stack
          development, currently advancing my knowledge through a Master's in
          Software Engineering at Arizona State University. My technical journey
          spans building exam management systems that automated 90% of
          administrative tasks to implementing secure authentication systems
          handling 1000+ concurrent users. I specialize in React.js, Node.js,
          and modern web technologies, with a proven track record of optimizing
          system performance and creating scalable solutions. When I'm not
          coding, you'll find me exploring new technologies and contributing to
          innovative projects that push the boundaries of what's possible in web
          development.
        </motion.p>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px; /* Restricts the width of content */
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textSecondary || theme.color};
  }
`;

export default About;
