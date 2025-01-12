import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Navbar = ({ onScrollTo, activeSection }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <NavWrapper>
      <NavContainer>
        {/* Logo Section */}
        <Logo onClick={() => onScrollTo("home")}>Portfolio</Logo>

        {/* Navigation Links */}
        <MenuSection>
          {navItems.map((item) => (
            <NavItem
              key={item}
              onClick={() => onScrollTo(item.toLowerCase())}
              $isActive={activeSection === item.toLowerCase()}
            >
              {item}
            </NavItem>
          ))}
        </MenuSection>

        {/* Theme Toggle */}
        <ThemeToggle onClick={handleToggleTheme}>
          {isDarkTheme ? "☀️" : "🌙"}
        </ThemeToggle>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;

// Styled Components
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.navbarBg};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.navbarBorder || "#e5e5e5"};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
`;

const MenuSection = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled(motion.div)`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.linkActiveBackground : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.linkHover : theme.color};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.linkHoverBackground || "#ddd"};
    color: ${({ theme }) => theme.linkHover};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  padding: 0.5rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
