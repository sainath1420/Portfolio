import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl border-4 border-white dark:border-gray-800 relative">
                <img 
                  src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/918ded0d-ab25-4bfb-a8ab-7a6aef98f4a9/hfn8w3e5bumvdcxv51via/1751786627607-Media%20(2).jfif" 
                  alt="Sainath Vinnakota" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log('Image failed to load:', e);
                  }}
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sainath Vinnakota
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Python Developer specializing in FastAPI, Async Programming & AI/ML Integration
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Results-driven developer with 2.5+ years of experience designing scalable backend systems. 
              Expert in microservices architecture, Docker containerization, and modern Python frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-border hover:border-primary px-8 py-3 rounded-full transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/sainath1420"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinnakota-sainath/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:kasisainath14@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-8 w-8" />
              </a>
              <a
                href="tel:+919133839569"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};