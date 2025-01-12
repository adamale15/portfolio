import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const pacmanStart = 30; // Pac-Man starts at 30%
  const pacmanEnd = 70; // Pac-Man stops at 70%
  const totalDots = 10; // Total number of dots

  const dotsRange = Array.from({ length: totalDots }).map(
    (_, index) => index * 10
  );

  const [dots, setDots] = useState(
    dotsRange
      .filter((position) => position >= pacmanStart && position <= pacmanEnd) // Filter dots within range
      .map((position, index) => ({
        id: index,
        position: position,
        eaten: false,
      }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Slight delay after reaching 100%
          return 100;
        }

        // Calculate Pac-Man's mapped progress
        const mappedProgress = mapProgress(
          prevProgress + 1,
          0,
          100,
          pacmanStart,
          pacmanEnd
        );

        // Update dots based on Pac-Man's progress
        setDots((prevDots) =>
          prevDots.map((dot) =>
            !dot.eaten && mappedProgress >= dot.position
              ? { ...dot, eaten: true }
              : dot
          )
        );

        return prevProgress + 1; // Increment progress
      });
    }, 50); // Adjust speed of progress

    return () => clearInterval(interval); // Cleanup interval
  }, [onFinish]);

  // Map progress (0 → 100) to Pac-Man's range (30 → 70)
  const mapProgress = (value, inMin, inMax, outMin, outMax) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  // Calculate Pac-Man's position based on progress
  const pacmanProgress = mapProgress(progress, 0, 100, pacmanStart, pacmanEnd);

  return (
    <PreloaderContainer>
      <Title>Ashish Damale</Title>
      <MazeBackground />
      <PacmanContainer>
        <Dots>
          {dots.map((dot) =>
            !dot.eaten ? (
              <Dot key={dot.id} style={{ left: `${dot.position}%` }} />
            ) : null
          )}
        </Dots>
        <Pacman style={{ left: `${pacmanProgress}%` }}>
          <Body />
          <Mouth />
        </Pacman>
      </PacmanContainer>
      <ProgressText>{progress}%</ProgressText>
    </PreloaderContainer>
  );
};

// Glow animation for the title
const glow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #f4d03f, 0 0 20px #f4d03f, 0 0 30px #ffae42; }
  50% { text-shadow: 0 0 5px #f4d03f, 0 0 15px #ffae42; }
`;

// Mouth opening and closing animation
const mouthAnimation = keyframes`
  0%, 100% { clip-path: polygon(50% 50%, 100% 0, 100% 100%); }
  50% { clip-path: polygon(50% 50%, 100% 25%, 100% 75%); }
`;

const PreloaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MazeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/maze.png") no-repeat center center;
  background-size: cover;
  z-index: 0;
`;

const PacmanContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  z-index: 2;
`;

const Pacman = styled.div`
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  transition: left 0.1s linear; /* Smooth movement */
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: #ffc107; /* Pac-Man yellow */
  border-radius: 50%;
`;

const Mouth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #121212; /* Mouth background */
  clip-path: polygon(50% 50%, 100% 0, 100% 100%);
  animation: ${mouthAnimation} 0.3s infinite; /* Adjust speed */
`;

const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: space-between;
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff; /* White dots */
  border-radius: 50%;
`;

const ProgressText = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 2;
`;

const Title = styled.div`
  @font-face {
    font-family: "ArcadeClassic";
    src: url("/ArcadeClassic.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "ArcadeClassic", sans-serif;
  color: #f4d03f;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 0.2em;
  text-align: center;
  padding: 20px 40px;
  border-radius: 5px;
  animation: ${glow} 1.5s infinite;
  z-index: 2;
`;

export default Preloader;
