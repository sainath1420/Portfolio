import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "DMS SVH College of Engineering",
      location: "Machilipatnam",
      period: "Jun 2019 – Apr 2022",
      grade: "CGPA: 7.58/10",
      type: "graduation"
    },
    {
      degree: "Diploma in Engineering",
      institution: "AANM & VVRSR Polytechnic College",
      location: "Gudlavalleru",
      period: "2016 – 2019",
      grade: "84%",
      type: "diploma"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Viswa Vignan E.M High School",
      location: "Gudivada",
      period: "2016",
      grade: "CGPA: 9.5/10",
      type: "school"
    }
  ];

  const certifications = [
    {
      title: "Java Certification",
      provider: "Frontlines EduTech",
      icon: "☕"
    },
    {
      title: "HTML & CSS Certification",
      provider: "Bitlabs",
      icon: "🌐"
    },
    {
      title: "SQL Certification",
      provider: "Skills Caravan",
      icon: "🗄️"
    },
    {
      title: "Data Science & GenAI Workshop",
      provider: "Innomatics Research Labs",
      icon: "🤖"
    }
  ];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case "graduation":
        return <GraduationCap className="h-6 w-6" />;
      case "diploma":
        return <BookOpen className="h-6 w-6" />;
      case "school":
        return <Award className="h-6 w-6" />;
      default:
        return <GraduationCap className="h-6 w-6" />;
    }
  };

  const getEducationColor = (type: string) => {
    switch (type) {
      case "graduation":
        return "from-blue-500 to-purple-500";
      case "diploma":
        return "from-green-500 to-teal-500";
      case "school":
        return "from-orange-500 to-red-500";
      default:
        return "from-blue-500 to-purple-500";
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Academic Qualifications</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getEducationColor(edu.type)} text-white`}>
                      {getEducationIcon(edu.type)}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-600" />
                      <span className="text-foreground font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Card */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Certifications</h3>
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Certifications & Workshops
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors duration-200">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                        <p className="text-muted-foreground text-xs">{cert.provider}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Academic Excellence</h3>
              </div>
              <p className="text-muted-foreground">
                Consistent academic performance across all educational levels with strong foundation in engineering and technology
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};