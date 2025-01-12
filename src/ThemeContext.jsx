import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

// Define minimalist light and dark themes
const lightTheme = {
  background: "#FAFAFA", // Light Gray
  color: "#000", // Dark Charcoal
  navbarBg: "#F5F5DC", // Pure White
  linkHover: "#008080", // Fresh Green
  cardBg: "#FFFFFF", // Card background color
  iconColor: "#008080", // Icon color
  hoverColor: "#008080", // Hover green
  textSecondary: "#555555", // Muted Gray
};

const darkTheme = {
  background: "#1A202C", // Slate Gray
  color: "#E2E8F0", // Cloud White
  navbarBg: "#2D3748", // Darker Slate Gray
  linkHover: "#FF9900", // Golden Yellow
  cardBg: "#2D3748", // Card background color
  iconColor: "#FF9900", // Icon color
  hoverColor: "#FFB84D", // Lighter Golden Yellow
  textSecondary: "#A0AEC0", // Soft Gray
};

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeContextProvider component
export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between themes
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // Provide the selected theme to ThemeProvider
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
