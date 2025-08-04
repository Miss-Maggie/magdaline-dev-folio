import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MessageSquare, Users, Clock, Brain, Zap } from "lucide-react"

export function SoftSkills() {
  const softSkills = [
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Clear and effective communication with team members and clients",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach to problem-solving and project delivery",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Efficient project planning and deadline-oriented delivery",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      description: "Analytical problem-solving and strategic decision making",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Adaptability",
      description: "Quick learning and adaptation to new technologies and methods",
      color: "from-pink-500 to-pink-600"
    }
  ]

  return (
    <section id="soft-skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soft Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            The human skills that make collaboration and project success possible
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="p-8 text-center bg-card shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0 group-hover:bg-card-gradient">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} mb-6 mx-auto`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}