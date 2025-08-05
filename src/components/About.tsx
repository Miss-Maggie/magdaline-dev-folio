import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import profilePicture from "@/assets/profile-picture.jpg"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:order-2"
          >
            <Card className="p-8 bg-card-gradient shadow-elegant transform hover:scale-105 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <div className="w-56 sm:w-64 h-56 sm:h-64 mx-auto rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                  <img 
                    src={profilePicture} 
                    alt="Magdaline Mutave - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/30"
                />
              </motion.div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Magdaline Mutave</h3>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-1"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating digital solutions 
              that make a difference. My journey in technology began with curiosity and has 
              evolved into a career focused on building robust, user-friendly applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise spanning from frontend frameworks like React and TypeScript 
              to backend technologies including Node.js and databases, I bring a 
              comprehensive approach to every project. I believe in writing clean, 
              maintainable code and delivering exceptional user experiences.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I'm always excited to tackle new challenges and learn from every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Kenya</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">2+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                <p className="text-muted-foreground">15+ Completed</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                <p className="text-muted-foreground">Full Stack</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}