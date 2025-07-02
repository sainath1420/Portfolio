import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Bot,
  Shield,
  Zap,
  Globe
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python (Async/Sync)", "Java", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="h-6 w-6" />,
      skills: ["FastAPI", "Django", "Streamlit", "SQLAlchemy", "SQLModel", "Pydantic", "Pandas", "Pytest", "asyncio"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Docker", "Git", "JIRA", "Postman", "PgAdmin", "DBeaver"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Messaging & Processing",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Kafka", "Zookeeper", "Celery", "FastAPI Background Tasks"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "AI/ML & Advanced",
      icon: <Bot className="h-6 w-6" />,
      skills: ["LangChain", "AGNO", "RAGAS", "AI Agents", "MCP", "RAG", "LLMs"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend systems and AI-powered applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 bg-card/50 backdrop-blur-sm"
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
                      className="bg-muted hover:bg-muted/80 text-foreground transition-colors duration-200"
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full border border-border/50">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">Always learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};