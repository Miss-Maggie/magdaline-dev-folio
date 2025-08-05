import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle, ArrowUp, Heart } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Miss-Maggie"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/magdaline-muthui-82b79a251"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/254708679439"
    }
  ]

  const quickLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "technical-skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" }
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Magdaline Muthui</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:magdalinemutave001@gmail.com"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                magdalinemutave001@gmail.com
              </a>
              <a
                href="https://wa.me/254708679439"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
              >
                +254 708 679 439
              </a>
              <p className="text-primary-foreground/80">Kenya</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-primary-foreground/80">
            <span>Made</span>
            {/* <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> */}
            <span>by Magdaline</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </span>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}