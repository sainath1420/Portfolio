import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Smart IMS",
      location: "Hyderabad, India",
      period: "Dec 2022 – Present",
      description: [
        "Designed and developed RESTful APIs using FastAPI to enhance communication between front-end and back-end systems for enterprise healthcare applications",
        "Implemented async APIs for improved performance and scalability",
        "Utilized Docker for consistent CI/CD deployments across dev, test, and sandbox environments",
        "Created API documentation and contributed to internal developer guides",
        "Collaborated with cross-functional teams in Agile sprints to gather and implement requirements",
        "Conducted code reviews and provided guidance to team members to maintain code quality",
        "Utilized Celery Tasks and FastAPI Background Tasks for larger workflows"
      ],
      technologies: ["FastAPI", "Python", "Docker", "Celery", "PostgreSQL", "Async Programming"],
      isCurrentRole: true
    },
    {
      title: "Intern",
      company: "Smart IMS",
      location: "Hyderabad, India",
      period: "Jun 2022 – Nov 2022",
      description: [
        "Created backend services using FastAPI with Pydantic models and SQLAlchemy",
        "Performed comprehensive API testing (GET, POST, PUT, DELETE) with Postman",
        "Practiced version control with Git and participated in code reviews",
        "Gained hands-on experience with modern Python development practices"
      ],
      technologies: ["FastAPI", "SQLAlchemy", "Pydantic", "Postman", "Git"],
      isCurrentRole: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in backend development and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl font-bold text-foreground">
                          {exp.title}
                        </CardTitle>
                        {exp.isCurrentRole && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-foreground">Recognition</h3>
              </div>
              <p className="text-muted-foreground">
                <strong>Extra Miler Award</strong> - Recognized for exceptional dedication and outstanding performance at Smart IMS
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};