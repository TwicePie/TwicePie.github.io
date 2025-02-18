const Contact = () => {
  return (
    <div className="container mx-auto max-w-6xl">
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
  );
};

export default Contact;
