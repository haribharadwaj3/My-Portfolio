export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 md:pt-32 px-4 relative"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Enhanced Profile Picture with glow, hover effect, and floating ring */}
          <div className="relative mx-auto w-36 h-36 mb-8 animate-fade-in group">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-spin-slow"></div>

            {/* Hover Ring Effect */}
            <div className="absolute -inset-1 rounded-full border-2 border-primary opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse-subtle"></div>

            {/* Floating Avatar */}
            <img
              src="/images/profile.jpg"
              alt="Hari Bharadwaj"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-lg group-hover:scale-105 transition-transform duration-500 ease-in-out animate-float"
            />
          </div>

          {/* Animated Text */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Hari
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Bharadwaj
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           I’m a developer who loves bringing ideas to life with clean code and smart solutions. Whether it’s designing smooth interfaces or solving tricky bugs, I’m all in for building things that work great and feel right.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};