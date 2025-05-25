import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import CodingSection from "../components/CodingSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      
      <StarBackground />
      <Navbar />
      <main className="relative z-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CodingSection />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};