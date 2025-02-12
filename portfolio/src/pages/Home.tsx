import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FrameworkSlider from "../components/FrameworkSlider";
import GithubActivity from "../components/GithubActivity";
import AboutMe from "../components/AboutMe";

const projects = [
  {
    title: "Project 1",
    description: "Description of your first project",
    image: "/images/project1.jpg",
    github: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    image: "/images/project2.jpg",
    github: "https://github.com/yourusername/project2"
  },
  {
    title: "Project 3",
    description: "Description of your third project",
    image: "/images/project3.jpg",
    github: "https://github.com/yourusername/project3"
  }
];

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

    const typeText = () => {
      if (!isMounted) return;

      const currentText = fullTexts[currentTextIndex];

      if (isTyping) {
        if (displayedText.length < currentText.length) {
          timeoutId = setTimeout(() => {
            setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
          }, typingSpeed);
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

    typeText();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        <AboutMe />
        <div className="flex flex-col gap-4">
          <div className="mockup-browser bg-base-300 border h-[200px]">
            <div className="mockup-browser-toolbar">
              <div className="input">My Tech</div>
            </div>
            <div className="bg-base-200 h-[calc(100%-3rem)]">
              <FrameworkSlider />
            </div>
          </div>

          <div className="mockup-browser bg-base-300 border h-[200px]">
            <div className="mockup-browser-toolbar">
              <div className="input">Github Contributions</div>
            </div>
            <div className="bg-base-200 h-[calc(100%-3rem)]">
              <GithubActivity />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://ocharu.dev/projects</div>
        </div>
        <div className="bg-base-200 px-4 py-16">
          <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="card bg-base-100 shadow-xl">
                    <figure><img src={project.image} alt={project.title} className="w-full h-48 object-cover" /></figure>
                    <div className="card-body">
                      <h3 className="card-title">{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="card-actions justify-end">
                        <a href={project.github} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://ocharu.dev/contact</div>
        </div>
        <div className="bg-base-200 px-4 py-16">
          <section id="contact" className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <a href="mailto:your.email@example.com" className="btn btn-primary btn-lg">
                    Email Me
                  </a>
                  <a href="https://github.com/yourusername" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" className="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home