import { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

// Lazy load components
const FrameworkSlider = lazy(() => import("../components/FrameworkSlider"));
const GithubActivity = lazy(() => import("../components/GithubActivity"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Project = lazy(() => import("./Project"));
const Contact = lazy(() => import("./Contact"));

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");

  const fullTexts = ["Hi, I'm Muhammad Eka", "Or, call me Ocharu"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 100;
  const backspacingSpeed = 50;
  const delayBeforeBackspace = 2000;
  const delayBetweenTexts = 100;
  
  useEffect(() => {
    let isMounted = true;
    let timeoutId: ReturnType<typeof setTimeout>;
    let animationFrameId: number;

    const typeText = () => {
      if (!isMounted) return;

      const currentText = fullTexts[currentTextIndex];

      if (isTyping) {
        if (displayedText.length < currentText.length) {
          animationFrameId = requestAnimationFrame(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          });
        } else {
          timeoutId = setTimeout(() => {
            setIsTyping(false);
          }, delayBeforeBackspace);
        }
      } else {
        if (displayedText.length > 0) {
          timeoutId = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, backspacingSpeed);
        } else {
          timeoutId = setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % fullTexts.length);
            setIsTyping(true);
          }, delayBetweenTexts);
        }
      }
    };

    timeoutId = setTimeout(typeText, isTyping ? typingSpeed : backspacingSpeed);

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [displayedText, isTyping, currentTextIndex]);

  return (
    <div className="min-h-screen space-y-12 p-4 bg-transparent">
      {/* Hero Section */}
      <div className="px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Foto Profil */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/profile.JPG"
              alt="Profile Picture"
              className="w-40 h-40 rounded-full shadow-lg border-4 border-primary"
            />
          </div>

          <div className="mb-8">
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {displayedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400 mt-6 leading-relaxed">
              A passionate developer creating impactful and innovative
              solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="#projects"
              className="btn btn-primary btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            >
              View My Work
            </Link>
            <Link
              to="#contact"
              className="btn btn-outline btn-lg w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content hover:text-primary transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Technologies Section with GitHub Calendar */}
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
          <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
            <AboutMe />
          </Suspense>
          <div className="flex flex-col gap-4">
            <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
              <div className="mockup-browser bg-base-300 border h-[200px]">
                <div className="mockup-browser-toolbar">
                  <div className="input">My Tech</div>
                </div>
                <div className="bg-base-200 h-[calc(100%-3rem)]">
                  <FrameworkSlider />
                </div>
              </div>
            </Suspense>

            <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
              <div className="mockup-browser bg-base-300 border h-[200px]">
                <div className="mockup-browser-toolbar">
                  <div className="input">Github Contributions</div>
                </div>
                <div className="bg-base-200 h-[calc(100%-3rem)]">
                  <GithubActivity />
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
        <Project />
      </Suspense>

      <Suspense fallback={<div className="loading loading-spinner loading-lg"></div>}>
        <Contact />
      </Suspense>
    </div>
  )
}

export default Home