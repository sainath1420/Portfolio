import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      href: "https://linkedin.com/in/yourusername",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Your City, Country",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card 
              key={contact.label} 
              className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-white`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {contact.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <span className="text-gray-600">{contact.value}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Ready to Work Together?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                I'm currently open to new opportunities and interesting projects. 
                Whether you're looking for a backend engineer or want to collaborate on something exciting, 
                I'd love to hear from you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="mailto:your.email@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-500 px-8 py-3 rounded-full transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500">
          © 2024 Your Name. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};