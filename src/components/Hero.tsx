import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react"
import heroBackground from "@/assets/hero-bg.jpg"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.8), rgba(11, 25, 44, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent"
          >
            Magdaline Muthui
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-blue-100"
          >
            Full Stack Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl mb-8 text-blue-200 max-w-2xl mx-auto px-4"
          >
            Crafting elegant digital solutions with modern technologies. 
            Passionate about creating seamless user experiences and robust applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 px-4"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Hire Me
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              My Works
            </Button>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              <a href="/MAGDALINE MUTHUI.pdf" download>
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-12 px-4"
          >
            <a
              href="https://github.com/Miss-Maggie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/magdaline-muthui-82b79a251"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://wa.me/254708679439"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-glow transition-colors duration-300 transform hover:scale-110"
            >
              <MessageCircle size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="text-white h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}