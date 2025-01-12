import React from "react";
import styled from "styled-components";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) =>
    theme.cardBg || (theme.isDark ? "#1e293b" : "#f8f9fa")};
  border-radius: 0.5rem;
  padding: 1rem;
  height: calc((100vh - 10rem) / 4);
  min-height: 160px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color};
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 1rem;
  height: 100%;
`;

const ImageContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.imageBg || (theme.isDark ? "#334155" : "#e9ecef")};
  border-radius: 0.375rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 0.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  margin-bottom: 0.25rem;
`;

const Description = styled.p`
  color: ${({ theme }) =>
    theme.textSecondary || (theme.isDark ? "#cbd5e1" : "#495057")};
  margin-bottom: 0.25rem;
  line-height: 1.3;
  font-size: 0.85rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 0.25rem;
`;

const TechTag = styled(motion.span)`
  background-color: ${({ theme }) =>
    theme.tagBg || (theme.isDark ? "#475569" : "#dee2e6")};
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#495057")};
  padding: 0.3rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) =>
      theme.hoverTagBg || (theme.isDark ? "#64748b" : "#ced4da")};
    color: ${({ theme }) => (theme.isDark ? "#e2e8f0" : "#343a40")};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.iconBg || (theme.isDark ? "#334155" : "#dee2e6")};
  padding: 0.375rem;
  border-radius: 9999px;
  color: ${({ theme }) => theme.iconColor || "#495057"};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.hoverColor || (theme.isDark ? "#475569" : "#ced4da")};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

const ProjectCard = ({ title, description, technologies, links, image }) => (
  <Card>
    <CardContent>
      <ImageContainer>
        {image ? <ProjectImage src={image} alt={title} /> : null}
      </ImageContainer>

      <ContentContainer>
        <div>
          <ProjectTitle>{title}</ProjectTitle>
          <Description>{description}</Description>
          <TechStack>
            {technologies.map((tech, index) => (
              <TechTag
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
                whileTap={{ scale: 0.9 }}
                key={index}
              >
                {tech}
              </TechTag>
            ))}
          </TechStack>
        </div>

        <Links>
          {links.demo && (
            <IconLink
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink />
            </IconLink>
          )}
          {links.github && (
            <IconLink
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </IconLink>
          )}
        </Links>
      </ContentContainer>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Agri-Insights",
      description:
        "An agricultural data analytics platform featuring knowledge graphs and Looker Studio dashboard analyzing 500K+ records, with optimized RDF processing achieving 25% faster performance.",
      technologies: ["Python", "RDF", "Knowledge Graphs", "Looker Studio"],
      links: {
        github: "https://github.com/adamale15/AgriInsight",
      },
      image: "../semantic.jpeg",
    },
    {
      title: "Fake Product Detection using Blockchain",
      description:
        "A blockchain-based authentication system achieving 95% accuracy in counterfeit product detection, featuring PHP backend processing 10,000+ entries and Solidity smart contracts handling 500+ transactions.",
      technologies: ["Blockchain", "PHP", "MySQL", "Solidity"],
      links: {
        github: "https://github.com/adamale15/Blockchain",
      },
      image: "../blockchain.png",
    },
    {
      title: "Scrum Simulator",
      description:
        "A Java-based Agile project simulator supporting 10 team members across 5 sprints with configurable parameters, managed via Taiga with 100% sprint completion rate and comprehensive testing.",
      technologies: ["Java", "Taiga", "GitHub", "JUnit"],
      links: {
        github: "https://github.com/SER515asu/ser515-group-java",
      },
      image: "../scrum.jpeg",
    },
  ];

  return (
    <Section>
      <Container>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
