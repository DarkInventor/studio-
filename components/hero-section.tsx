"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import FeaturedClients from "./featured-clients";
import BrandsSection from "./brands-section";
import SiteFooter from "./footer";
import SiteHeader from "./header";

export default function HeroSection() {
  const projects = [
    {
      title: "SearchFast",
      image: "/api/placeholder/400/400",
      categories: "AI • macOS • OPEN SOURCE",
      year: "2024",
      description: "AI Assistant for macOS with local-first architecture. Serving developers worldwide.",
      tech: "Claude, Mistral, Whisper",
      metrics: "10k+ Downloads"
    },
    {
      title: "Easy UI Premium",
      image: "/api/placeholder/400/400", 
      categories: "UI/UX • SAAS • NEXTJS",
      year: "2024",
      description: "Premium NextJS templates generating consistent revenue for clients.",
      tech: "React, Tailwind, shadcn/ui",
      metrics: "$15k+ Revenue"
    },
    {
      title: "Brand Studio",
      image: "/api/placeholder/400/400",
      categories: "AI • SOCIAL MEDIA • AUTOMATION",
      year: "2024", 
      description: "AI-powered social media growth platform with advanced analytics.",
      tech: "Next.js, TypeScript, OpenAI GPT-4",
      metrics: "50k+ Users"
    },
    {
      title: "AON APP",
      image: "/api/placeholder/400/400",
      categories: "AI • MOBILE • REACT NATIVE",
      year: "2024",
      description: "AI app for electronic device repair, funded Denmark startup.",
      tech: "React Native, Firebase, OpenAI",
      metrics: "Funded Startup"
    },
  ];

  const services = [
    { name: "Web Development", icon: "🌐" },
    { name: "Software Development", icon: "💻" }, 
    { name: "AI Integration", icon: "🤖" },
    { name: "Mobile App Development", icon: "📱" },
    { name: "SaaS Solutions", icon: "☁️" },
    { name: "UI/UX Design", icon: "🎨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/30">
      <SiteHeader />
      <main className="container">
        {/* Hero Section */}
        <section className="pt-12 pb-20 lg:pt-20 lg:pb-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium text-muted-foreground border">
              <Star className="w-4 h-4 text-yellow-500" />
              Trusted by 50+ startups worldwide
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
              <span className="block">Web Design &</span>
              <span className="block gradient-text">Software Development</span>
              <span className="block text-muted-foreground font-normal">Studio</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We create modern, scalable digital solutions with cutting-edge technologies. 
              From prototype to production, powered by AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-medium group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-secondary/50"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Services Pills */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6">OUR EXPERTISE</p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-card border rounded-full px-6 py-3 hover:bg-secondary/50 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium flex items-center gap-2">
                    <span className="group-hover:scale-110 transition-transform duration-200">{service.icon}</span>
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="pb-20 lg:pb-32">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real solutions that drive results. From AI-powered applications to scalable SaaS platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{project.title}</h3>
                      <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {project.metrics}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="text-xs font-medium text-muted-foreground tracking-wide">
                    {project.categories}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="pt-2 border-t">
                    <p className="text-xs font-medium text-primary">{project.tech}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About & Tech Stack */}
        <section className="pb-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">
                About EZ Studio
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Transforming ideas into scalable digital solutions</strong> with modern web technologies and AI integration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From learning to building production-grade systems used by thousands. 
                  We specialize in the modern web stack: React, Next.js, and Tailwind CSS, 
                  enhanced with AI capabilities and cloud infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="rounded-full group">
                    View Experience
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="rounded-full">
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-slide-up space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card border rounded-xl">
                  <div className="text-3xl font-bold text-primary">$15k+</div>
                  <div className="text-sm text-muted-foreground mt-1">Revenue Generated</div>
                </div>
                <div className="text-center p-6 bg-card border rounded-xl">
                  <div className="text-3xl font-bold text-primary">100k+</div>
                  <div className="text-sm text-muted-foreground mt-1">Developers Served</div>
                </div>
                <div className="text-center p-6 bg-card border rounded-xl">
                  <div className="text-3xl font-bold text-primary">235+</div>
                  <div className="text-sm text-muted-foreground mt-1">GitHub Stars</div>
                </div>
                <div className="text-center p-6 bg-card border rounded-xl">
                  <div className="text-3xl font-bold text-primary">13+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
              </div>

              {/* Tech Stack Highlights */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technology Stack</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium mb-2 text-muted-foreground">Frontend</div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2 text-muted-foreground">AI & Cloud</div>
                    <div className="flex flex-wrap gap-2">
                      {["OpenAI", "AWS", "Vercel", "Python"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FeaturedClients />
      <BrandsSection />
      <SiteFooter />
    </div>
  );
}
