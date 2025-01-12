import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-style: normal;
    font-family: 'Kumbh Sans', sans-serif;


  }

  body {
    font-family: 'Kumbh Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    overflow-x: hidden; /* Prevent horizontal scrolling */
    scroll-behavior: smooth; /* Smooth vertical scrolling */
    height: 100vh; /* Full viewport height */
    overflow: hidden;
    cursor: none;

  }

  html {
    overflow-y: scroll; /* Enable vertical scrolling */
    font-family: "Ubuntu", serif;

    height: 100%; /* Ensure proper content display */
  }

  #scroll-container {

    display: flex;
    flex-direction: row; /* Arrange sections horizontally */
    height: calc(100vh - 80px); /* Deduct navbar height */
    transition: transform 0.3s ease; /* Smooth scrolling effect */
    position: fixed; /* Fix the container */
    top: 80px; /* Position below navbar */
    left: 0;
    overflow: hidden;

  }

  section {

    flex: 0 0 100vw; /* Each section takes full viewport width */
    height: 100%; /* Full remaining height below navbar */
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
  }

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px; /* Fixed height for the navbar */
    z-index: 10; /* Ensure it stays above sections */
    background-color: ${({ theme }) => theme.navbarBg};
    color: ${({ theme }) => theme.color};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional shadow */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export default GlobalStyle;
