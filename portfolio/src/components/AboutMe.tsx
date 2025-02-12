const AboutMe = () => {
  return (
    <div className="mockup-browser bg-base-300 border h-full">
      <div className="mockup-browser-toolbar">
        <div className="input">About Me</div>
      </div>
      <div className="bg-base-200 px-4 py-16 h-[calc(100%-3rem)]">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love creating efficient, scalable, and user-friendly solutions to complex problems.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
