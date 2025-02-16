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
    </div>
  );
};

export default Project;
