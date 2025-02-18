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