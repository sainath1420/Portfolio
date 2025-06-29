import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "A comprehensive RESTful API for e-commerce applications with user management, product catalog, order processing, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe API"],
      githubUrl: "https://github.com/yourusername/ecommerce-api",
      liveUrl: "https://api.yourproject.com",
      features: ["JWT Authentication", "Payment Processing", "Order Management", "Admin Dashboard"]
    },
    {
      title: "Real-time Chat System",
      description: "Scalable real-time messaging system with WebSocket connections, message persistence, and user presence tracking.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Python", "FastAPI", "WebSockets", "MongoDB", "Redis"],
      githubUrl: "https://github.com/yourusername/chat-system",
      liveUrl: "https://chat.yourproject.com",
      features: ["Real-time Messaging", "User Presence", "Message History", "File Sharing"]
    },
    {
      title: "Microservices Architecture",
      description: "Distributed system with multiple microservices for user management, notifications, and data processing with service discovery.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Go", "Docker", "Kubernetes", "gRPC", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/microservices",
      features: ["Service Discovery", "Load Balancing", "Circuit Breaker", "Monitoring"]
    },
    {
      title: "Data Analytics Pipeline",
      description: "ETL pipeline for processing large datasets with real-time analytics and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Apache Kafka", "Elasticsearch", "Docker", "AWS"],
      githubUrl: "https://github.com/yourusername/analytics-pipeline",
      features: ["Real-time Processing", "Data Visualization", "Automated Reports", "Scalable Architecture"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Some of the projects I've built that showcase my backend development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300"
            asChild
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};