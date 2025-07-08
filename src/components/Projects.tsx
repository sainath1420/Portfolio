import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Bot, Database, Shield, BarChart3, Video, Microscope, Brain } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "CompleteIQ",
      description: "An intelligent platform designed to streamline and enhance various business processes through AI-powered automation and analytics, providing comprehensive insights and solutions.",
      icon: <Brain className="h-6 w-6" />,
      technologies: ["Python", "AI/ML", "FastAPI", "Data Analytics", "Automation"],
      githubUrl: "https://github.com/sainath1420/CompleteIQ",
      features: ["AI-Powered Automation", "Business Intelligence", "Data Analytics", "Process Optimization", "Comprehensive Insights"]
    },
    {
      title: "Xymphony AI (Agent Development Platform)",
      description: "Developed a scalable backend using FastAPI and Python to integrate multiple LLM providers (OpenAI, Google, Anthropic) via a unified API interface with modular agent architecture.",
      icon: <Bot className="h-6 w-6" />,
      technologies: ["FastAPI", "Python", "LangChain", "RAG", "RAGAS", "Docker", "OpenAI", "Anthropic"],
      githubUrl: "https://github.com/sainath1420",
      features: ["Multi-LLM Integration", "Custom Agent Tools", "RAG Capabilities", "Performance Evaluation", "CI/CD Pipeline"]
    },
    {
      title: "Clinical Trial Management System (CTMS)",
      description: "Designed and developed a comprehensive system to streamline the planning, tracking, and management of clinical trials with integrated authentication and document management.",
      icon: <Shield className="h-6 w-6" />,
      technologies: ["FastAPI", "Keycloak", "Microservices", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/sainath1420",
      features: ["Keycloak Integration", "EDC System Integration", "Version Control", "Data Compliance", "Secure Storage"]
    },
    {
      title: "Sample Management System (SMS)",
      description: "Built a system to efficiently store, track, and manage blood and tissue samples, improving laboratory workflow with enhanced performance and scalability.",
      icon: <Microscope className="h-6 w-6" />,
      technologies: ["FastAPI", "Python", "Microservices", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/sainath1420",
      features: ["Sample Tracking", "Laboratory Workflow", "Secure Storage", "Data Confidentiality", "Scalable Architecture"]
    },
    {
      title: "AI-Powered Document Retrieval System",
      description: "Built a document retrieval system using LangChain and RAG to enhance search capabilities by integrating external knowledge sources with Ollama for model deployment.",
      icon: <Database className="h-6 w-6" />,
      technologies: ["LangChain", "RAG", "Ollama", "Python", "FastAPI"],
      githubUrl: "https://github.com/sainath1420",
      features: ["Knowledge Integration", "Enhanced Search", "Model Management", "Efficient Performance", "Scalable Deployment"]
    },
    {
      title: "YouTube Video Analyzer",
      description: "Developed a comprehensive tool to analyze YouTube videos by extracting metadata, comments, and engagement metrics to provide insights on video performance and audience behavior.",
      icon: <Video className="h-6 w-6" />,
      technologies: ["Python", "Data Scraping", "Analytics", "FastAPI"],
      githubUrl: "https://github.com/sainath1420",
      features: ["Metadata Extraction", "Comment Analysis", "Engagement Metrics", "Performance Insights", "Strategy Optimization"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've built that showcase my backend development and AI/ML integration skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-muted">
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
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-border hover:border-primary px-8 py-3 rounded-full transition-all duration-300"
            asChild
          >
            <a href="https://github.com/sainath1420" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};