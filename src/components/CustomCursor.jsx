import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setHovered(true);
    const handleMouseOut = () => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <Cursor
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: hovered
          ? "translate(-50%, -50%) scale(1.5)"
          : "translate(-50%, -50%)",
      }}
    />
  );
};

const Cursor = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: #f4d3b2; /* Match the color from the image */
  border-radius: 50%;
  pointer-events: none; /* Ensure the cursor doesn't interfere with interactions */
  z-index: 9999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference; /* Optional for cool effects with dark/light backgrounds */
  transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
`;

export default CustomCursor;
