import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { TechnicalSkills } from "@/components/TechnicalSkills"
import { SoftSkills } from "@/components/SoftSkills"
import { Services } from "@/components/Services"
import { Projects } from "@/components/Projects"
import { Blog } from "@/components/Blog"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ThemeToggle } from "@/components/ThemeToggle"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <About />
      <TechnicalSkills />
      <SoftSkills />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
