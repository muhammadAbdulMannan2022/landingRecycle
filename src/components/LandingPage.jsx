"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import WhyRecycle from "./WhyRecycle";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount, read the saved mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      // Optional: detect system preference on first load
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      localStorage.setItem("darkMode", prefersDark);
    }
  }, []);

  // Save mode whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection />
        <HowItWorks />
        <WhyRecycle />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
