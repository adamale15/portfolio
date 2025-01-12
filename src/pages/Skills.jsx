import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGit,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiSolidity,
  SiLinux,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { BsGear, BsDiagram2 } from "react-icons/bs";

// Skills Array
const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "ExpressJS", icon: <BsGear /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Object Oriented Programming", icon: <BsDiagram2 /> },
  { name: "PowerBI", icon: <BsDiagram2 /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Data Structures", icon: <BsGear /> },
];

const Skills = () => {
  return (
    <Section id="skills">
      <ContentWrapper>
        <Title>My Skills</Title>
        <SkillsGrid>
          {skills.map(({ name, icon }, index) => (
            <Card
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              <IconWrapper>{icon}</IconWrapper>
              <SkillName>{name}</SkillName>
            </Card>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* Subtract navbar height */
  padding: 90px 20px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.iconColor};
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.hoverColor};
  }
`;

const SkillName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color};
`;

export default Skills;
