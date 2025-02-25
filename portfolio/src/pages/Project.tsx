const projects = [
  {
    title: "Depo 79",
    description: "Description of your first project",
    image: "/images/project1.jpg",
    github: "https://github.com/Haeryz/E-Commerce-depo-79",
    tags: ["React", "TypeScript", "ChakraUI"]
  },
  {
    title: "Kuliner Keputih Timur Web Menu",
    description: "Description of your second project",
    image: "/images/project2.jpg",
    github: "https://github.com/TwicePie/Kuliner_Keputih_Timur",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    title: "DressMaker App",
    description: "Description of your third project",
    image: "/images/project3.jpg",
    github: "https://github.com/reddishowo/dressmaker-app",
    tags: ["Flutter", "Dart", "Firebase"]
  }
];

const Project = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://ocharu.dev/projects</div>
        </div>
        <div className="bg-base-200 px-4 py-16">
          <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="text-primary">Featured</span> Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <figure className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title text-2xl">{project.title}</h3>
                      <p className="text-base-content/70">{project.description}</p>
                      <div className="flex flex-wrap gap-2 my-3">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="badge badge-primary badge-outline"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="card-actions justify-end mt-4">
                        <a 
                          href={project.github} 
                          className="btn btn-primary gap-2" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-5 h-5"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
