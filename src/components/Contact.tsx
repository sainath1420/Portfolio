import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "kasisainath14@gmail.com",
      href: "mailto:kasisainath14@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9133839569",
      href: "tel:+919133839569",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "vinnakota-sainath",
      href: "https://www.linkedin.com/in/vinnakota-sainath/",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "sainath1420",
      href: "https://github.com/sainath1420",
      color: "from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Hyderabad, India",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={contact.label} 
              className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {contact.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all text-sm"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">{contact.value}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Ready to Work Together?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and interesting projects. 
                Whether you're looking for a Python developer specializing in FastAPI and AI/ML integration, 
                or want to collaborate on something exciting, I'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="mailto:kasisainath14@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-border hover:border-primary px-8 py-3 rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/vinnakota-sainath/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025 Sainath Vinnakota.
        </p>
      </footer>
    </section>
  );
};