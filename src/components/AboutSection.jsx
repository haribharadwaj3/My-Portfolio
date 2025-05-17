import { Compass, Code, Brain } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center heading-underline">
  About <span className="text-primary">Me</span>
</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border-2 border-[#a99cc9] hover:border-primary/50 transition-all duration-300 space-y-6 shadow-lg hover:shadow-[#4C1D95]/30">
            <h3 className="text-4xl font-semibold">
              <span className="text-primary">Developer</span> by Passion,{" "}
              <span className="text-primary">Engineer</span> by Training.
            </h3>

            
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1.0">•</span>
                  <p className="text-muted-foreground">
                    I'm Hari Bharadwaj, a passionate and self-driven tech enthusiast currently pursuing a B.Tech in Information Technology at IARE. I enjoy building responsive web applications, exploring new tech stacks, and constantly refining my skills.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1.0">•</span>
                  <p className="text-muted-foreground">
                    I also have a deep passion for coding and problem-solving, which drives me to tackle challenges with creativity and precision. I'm always looking to grow, learn, and contribute to real-world projects, especially those that push the boundaries of innovation.
                  </p>
                </div>
              </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button backdrop-blur-sm">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 backdrop-blur-sm"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Brain className="h-6 w-6 text-primary" />
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
        <p className="text-muted-foreground">
          Building intelligent systems using machine learning, deep learning and data-driven algorithms.
        </p>
      </div>
    </div>
  </div>
</div>

            <div className="gradient-border p-6 card-hover">
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Compass className="h-6 w-6 text-primary" />
    </div>

    <div className="text-left">
      <h4 className="font-semibold text-lg">Lifelong Learner</h4>
      <p className="text-muted-foreground">
        Continuously exploring new technologies and expanding my skill set to stay ahead in the tech world.
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};