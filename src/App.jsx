import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Preloader from "./components/Preloader";
import { ThemeContextProvider } from "./ThemeContext";
import "@fontsource/kumbh-sans"; // Defaults to 400 weight

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const containerRef = useRef(null);

  const sections = [
    { component: <Home />, id: "home" },
    { component: <About />, id: "about" },
    { component: <Skills />, id: "skills" },
    { component: <Projects />, id: "projects" },
    { component: <Contact />, id: "contact" },
  ];

  const handleFinishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        const sectionIndex = Math.round(
          (scrollPosition * (window.innerWidth / window.innerHeight)) /
            window.innerWidth
        );
        if (
          sections[sectionIndex] &&
          sections[sectionIndex].id !== activeSection
        ) {
          setActiveSection(sections[sectionIndex].id);
        }

        const offset =
          scrollPosition * (window.innerWidth / window.innerHeight);
        containerRef.current.style.transform = `translateX(-${offset}px)`;
      }
    };

    const setBodyHeight = () => {
      if (containerRef.current) {
        const totalWidth = sections.length * window.innerWidth;
        document.body.style.height = `${
          totalWidth / (window.innerWidth / window.innerHeight)
        }px`;
      }
    };

    setBodyHeight();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setBodyHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setBodyHeight);
    };
  }, [sections, activeSection]);

  const scrollToSection = (id) => {
    const sectionIndex = sections.findIndex((section) => section.id === id);
    if (sectionIndex >= 0) {
      const offset = sectionIndex * window.innerWidth;
      window.scrollTo({
        top: offset / (window.innerWidth / window.innerHeight),
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeContextProvider>
      <Router>
        <GlobalStyle />
        {loading && <Preloader onFinish={handleFinishLoading} />}
        {!loading && (
          <>
            <CustomCursor />
            <Navbar
              onScrollTo={scrollToSection}
              activeSection={activeSection}
            />
            <div
              ref={containerRef}
              id="scroll-container"
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100vh",
                width: `${sections.length * 100}vw`,
                willChange: "transform",
                position: "fixed",
                overflow: "hidden",
                top: 0,
                left: 0,
              }}
            >
              {sections.map(({ component, id }) => (
                <div
                  id={id}
                  key={id}
                  style={{
                    flex: "0 0 100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {component}
                </div>
              ))}
            </div>
          </>
        )}
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
