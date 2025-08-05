import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/ecommerce-platform",
      demo: "https://ecommerce-demo.netlify.app"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application built with React, TypeScript, and Supabase. Real-time updates and team collaboration features.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/task-manager",
      demo: "https://task-manager-demo.netlify.app"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful visualizations. Built with React and integrated with OpenWeather API.",
      tags: ["React", "API", "Charts", "CSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/weather-dashboard",
      demo: "https://weather-dashboard-demo.netlify.app"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, comment system, and admin panel. Built with React and Express.",
      tags: ["React", "Express", "PostgreSQL", "Markdown"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6ac3b?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/blog-platform",
      demo: "https://blog-platform-demo.netlify.app"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills. Built with React, TypeScript, and Framer Motion.",
      tags: ["React", "TypeScript", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/portfolio",
      demo: "https://magdalinemutave.netlify.app"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with rooms, file sharing, and emoji support. Built with React and Socket.io.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      github: "https://github.com/magdalinemutave/chat-app",
      demo: "https://chat-app-demo.netlify.app"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden bg-card shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}