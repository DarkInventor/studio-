import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";

export default function FeaturedClients() {
  const featuredProjects = [
    {
      logo: "https://cdn.magicui.design/companies/OpenAI.svg",
      name: "SearchFast",
      description: "AI Assistant for macOS that's 100% free and open-source. Local-first, AI-powered assistant that sees what you see and listens when you speak. Integrates seamlessly with macOS apps using Claude, Mistral, Whisper, and Eleven Labs with no cloud data storage.",
      buttonText: "View Project",
      buttonLink: "#",
      tech: "Claude • Mistral • Whisper • macOS",
      status: "Open Source",
      metrics: "10k+ Downloads",
      type: "open-source"
    },
    {
      logo: "https://cdn.magicui.design/companies/Vercel.svg", 
      name: "Easy UI Premium",
      description: "Beautifully designed NextJS website templates and sections generating $15k+ in revenue. Reduces landing page development time by 70% through pre-built conversion-optimized sections, landing pages and integrations. Serves 100k+ developers worldwide.",
      buttonText: "View Project",
      buttonLink: "#",
      tech: "Next.js • React • Tailwind • shadcn/ui",
      status: "$15k+ Revenue",
      metrics: "100k+ Developers",
      type: "saas"
    },
    {
      logo: "https://cdn.magicui.design/companies/Meta.svg",
      name: "Brand Studio", 
      description: "AI-Powered Social Media Growth Platform for creating, managing, and scheduling thousands of high-converting posts for X and LinkedIn. Generate 1000s of posts, maintain brand consistency, and save 10+ hours per week.",
      buttonText: "View Project",
      buttonLink: "#", 
      tech: "Next.js • TypeScript • OpenAI GPT-4 • Supabase",
      status: "SaaS Platform",
      metrics: "50k+ Users",
      type: "saas"
    },
    {
      logo: "https://cdn.magicui.design/companies/Stripe.svg",
      name: "Reachactory",
      description: "SaaS/AI tool distribution platform generating $1.5K+ revenue. Developed with Next.js, React, and Tailwind CSS for optimal UI/UX. Utilizes Vercel, Buildspace, and Stripe for advanced functionality with agile methodologies.",
      buttonText: "View Project", 
      buttonLink: "#",
      tech: "Next.js • React • Stripe • Vercel",
      status: "$1.5k+ Revenue",
      metrics: "Growing Fast",
      type: "saas"
    },
    {
      logo: "https://cdn.magicui.design/companies/GitHub.svg",
      name: "Easy UI",
      description: "Open-source component library with 235+ GitHub stars delivering 50+ production-ready animated UI elements. Serves 100k+ developers with React/Tailwind components that complement shadcn/ui workflows.",
      buttonText: "View GitHub",
      buttonLink: "#",
      tech: "React • Tailwind • TypeScript • Open Source", 
      status: "235+ ⭐",
      metrics: "100k+ Developers",
      type: "open-source"
    },
    {
      logo: "https://cdn.magicui.design/companies/React.svg",
      name: "AON APP",
      description: "AI app to repair electronic devices (Fridge, Microwave, Washing machine) built for Denmark-based startup. Features React Native, Nativewind, shadcn UI, Firebase, and OpenAI API integration for intelligent device diagnostics.",
      buttonText: "View Project",
      buttonLink: "#",
      tech: "React Native • Firebase • OpenAI • shadcn/ui",
      status: "Startup Project",
      metrics: "Funded Startup",
      type: "mobile"
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'open-source':
        return <Github className="w-4 h-4" />;
      case 'saas':
        return <Star className="w-4 h-4" />;
      default:
        return <ArrowRight className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'open-source':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'saas':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'mobile':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions delivering measurable results. From AI-powered applications to scalable SaaS platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 border-b bg-secondary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-background border flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.type)}`}>
                          {getTypeIcon(project.type)}
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="text-sm font-medium text-primary">
                  {project.metrics}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(' • ').map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  href={project.buttonLink}
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors group"
                >
                  {project.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in working together on your next project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary/50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
