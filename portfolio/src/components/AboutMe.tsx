const AboutMe = () => {
  return (
    <div className="mockup-browser bg-base-300 border h-full">
      <div className="mockup-browser-toolbar">
        <div className="input">About Me</div>
      </div>
      <div className="bg-base-200 px-4 py-6 h-[calc(100%-3rem)] overflow-y-auto">
        <div className="h-full flex flex-col justify-center space-y-4">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body py-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">👋</span>
                <div>
                  <h3 className="card-title">Hi, I'm Eka!</h3>
                  <p className="text-sm opacity-80">Based in Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-base-100 p-4 rounded-xl shadow-lg">
            <div className="grid grid-cols-2 gap-2">
              <div className="stat-card bg-base-300 p-3 rounded-lg hover:bg-primary hover:text-primary-content transition-all">
                <div className="font-bold flex items-center gap-2">
                  <span>🎓</span> Education
                </div>
                <p className="text-sm mt-1">Computer Science</p>
              </div>
              <div className="stat-card bg-base-300 p-3 rounded-lg hover:bg-primary hover:text-primary-content transition-all">
                <div className="font-bold flex items-center gap-2">
                  <span>💡</span> Interests
                </div>
                <p className="text-sm mt-1">Web & Mobile Dev</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="card-body py-3 text-center">
              <p className="font-medium text-sm">
                Tech enthusiast & lifelong learner 🌟
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
