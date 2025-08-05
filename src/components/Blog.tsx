import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "React with TypeScript: Why I Switched",
      snippet: "Exploring the benefits of using TypeScript with React and how it transformed my development workflow. From better error catching to improved code maintainability, TypeScript has become an essential part of my React development process. In this comprehensive guide, I'll walk you through the key benefits including compile-time error detection, enhanced IDE support, better refactoring capabilities, and improved team collaboration. We'll also cover practical migration strategies and common patterns that will help you make the transition smoothly.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      title: "How I Built My First Supabase App",
      snippet: "A step-by-step journey of building a full-stack application with Supabase. Learn about authentication, real-time features, and database management. This detailed tutorial covers everything from initial setup to deployment, including user authentication with social providers, real-time subscriptions for live data updates, file storage implementation, and row-level security policies. I'll share the challenges I faced and how I overcame them, plus performance optimization tips and best practices for production deployment.",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Supabase",
      image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=400&h=250&fit=crop"
    }
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden bg-card shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0 group hover:scale-105 hover:-translate-y-2 hover:rotate-1">
                <div className="relative overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(blogPosts[0].date)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].snippet}
                  </p>
                  
                </div>
              </Card>
            </motion.div>

            {/* Recent Posts */}
            <div className="space-y-6">
              {blogPosts.slice(1, 2).map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-card shadow-card-custom hover:shadow-elegant transition-all duration-300 border-0 group cursor-pointer hover:scale-105 hover:-translate-y-1 hover:rotate-1">
                    <div className="flex">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-24 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1 p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="px-8">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}