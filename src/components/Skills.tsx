import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  GitBranch, 
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Python", "Java", "Go", "C#", ".NET", "Express.js", "FastAPI", "Spring Boot"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "GitHub Actions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "APIs & Integration",
      icon: <Globe className="h-6 w-6" />,
      skills: ["REST APIs", "GraphQL", "gRPC", "Microservices", "Message Queues", "WebSockets"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Frameworks",
      icon: <Code className="h-6 w-6" />,
      skills: ["Git", "Linux", "Nginx", "Apache", "Postman", "Swagger", "Jest", "Pytest"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Security & Performance",
      icon: <Shield className="h-6 w-6" />,
      skills: ["OAuth", "JWT", "SSL/TLS", "Load Balancing", "Caching", "Performance Optimization"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <span className="text-lg font-semibold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
            <Zap className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Always learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};