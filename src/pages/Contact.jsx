import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import BoySVG from "../assets/zoro.svg"; // Assuming this is your SVG file

const Contact = () => {
  return (
    <Section id="contact">
      <Content>
        <TextContent>
          <Heading>I'm always up for a chat.</Heading>
          <Description>
            Pop me an email or give me a shout on social media.
          </Description>
          <Links>
            <IconLink
              href="https://github.com/adamale15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </IconLink>
            <IconLink
              href="https://www.linkedin.com/in/ashish-damale-a27491217/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconLink>
            <IconLink
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adamale@asu.edu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </IconLink>
          </Links>
        </TextContent>
        <SVGWrapper>
          <AnimatedSVG src={BoySVG} alt="Boy Illustration" />
        </SVGWrapper>
      </Content>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background || "#f5f5f5"};
  padding: 50px 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 50px;
  flex-wrap: wrap;
`;

const TextContent = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.color || "#000"};
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.linkColor || "#007bff"};
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor || "#ff9900"};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.linkColor};
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.linkHoverColor || "#ff9900"};
  }
`;

const SVGWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedSVG = styled.img`
  width: 250px;
  height: auto;
  transition: transform 0.5s ease;
`;

export default Contact;
