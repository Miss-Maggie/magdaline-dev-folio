import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Settings, 
  HeadphonesIcon, 
  FileText, 
  Wrench,
  Code,
  ArrowRight
} from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Design",
      description: "Modern, responsive websites that deliver exceptional user experiences across all devices.",
      features: ["Responsive Design", "UI/UX Focus", "Performance Optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Building robust, scalable web applications with modern technologies and best practices.",
      features: ["Full-Stack Development", "React & TypeScript", "Database Integration"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Comprehensive system monitoring, updates, and optimization to ensure peak performance.",
      features: ["Regular Updates", "Performance Monitoring", "Security Patches"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support Consulting",
      description: "Strategic guidance on building effective customer support systems and processes.",
      features: ["Process Design", "Team Training", "Support Tools"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Clear, comprehensive documentation for APIs, systems, and user guides.",
      features: ["API Documentation", "User Guides", "System Architecture"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Wrench,
      title: "Tech Support & Troubleshooting",
      description: "Expert technical support and problem resolution for various technology challenges.",
      features: ["Issue Diagnosis", "Quick Resolution", "Preventive Measures"],
      color: "from-pink-500 to-pink-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Services Offered
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Professional services to help your business thrive in the digital world
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="p-8 h-full bg-card shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0 group-hover:bg-card-gradient">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-6`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}