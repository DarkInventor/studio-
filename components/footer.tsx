import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-20 lg:py-32">
        {/* Main CTA Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your project and turn your ideas into reality. 
            Whether it&apos;s a web app, mobile solution, or AI integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium group shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium border-2">
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">EZ Studio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transforming ideas into scalable digital solutions with modern technologies and AI integration.
              </p>
            </div>
            
            <div className="space-y-3">
              <Link 
                href="mailto:hello@ezstudio.dev" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                hello@ezstudio.dev
              </Link>
              <Link 
                href="tel:+15551234567" 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +1 (555) 123-4567
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Software Development",
                "AI Integration",
                "Mobile Applications",
                "SaaS Solutions",
                "UI/UX Design"
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-3">
              {[
                "React & Next.js",
                "TypeScript",
                "Node.js & Python", 
                "OpenAI & AI/ML",
                "AWS & Cloud",
                "Mobile Development"
              ].map((tech) => (
                <li key={tech}>
                  <span className="text-muted-foreground">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "/blog" },
                { label: "Privacy Policy", href: "/privacy" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-muted-foreground">
              © 2024 EZ Studio. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              
              <div className="h-4 w-px bg-border mx-2" />
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-muted-foreground hover:text-foreground"
              >
                Back to top
                <ArrowRight className="ml-1 w-3 h-3 rotate-[-90deg]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
