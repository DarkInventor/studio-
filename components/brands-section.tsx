"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus, Code, Database, Brain, Smartphone, Cloud, CreditCard, Palette } from "lucide-react";

interface TechCategory {
  name: string;
  services: string;
  description: string;
  icon: React.ReactNode;
}

export default function BrandsSection() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const techStack: TechCategory[] = [
    {
      name: "Frontend Frameworks",
      services: "React • Next.js • Tailwind CSS • TypeScript",
      description: "Modern React ecosystem with Next.js for production-grade applications. Tailwind CSS for rapid UI development and TypeScript for type safety and better developer experience.",
      icon: <Code className="w-5 h-5" />
    },
    {
      name: "Backend & API",
      services: "Node.js • Express • FastAPI • Django",
      description: "Full-stack development with Node.js and Express for JavaScript backends, FastAPI for high-performance Python APIs, and Django for rapid prototyping and complex applications.",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "AI & Machine Learning",
      services: "OpenAI • Langchain • Vercel AI SDK • Fine-tuning",
      description: "Advanced AI integration using OpenAI GPT models, Langchain for complex AI workflows, Vercel AI SDK for streaming responses, and custom model fine-tuning for specialized use cases.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      name: "Mobile Development",
      services: "React Native • NativeWind • Expo",
      description: "Cross-platform mobile development with React Native, styled with NativeWind for consistent design systems, and Expo for rapid deployment and testing.",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      name: "Databases & Storage",
      services: "PostgreSQL • MongoDB • Firebase • Supabase",
      description: "Scalable database solutions from SQL (PostgreSQL) to NoSQL (MongoDB), with modern Backend-as-a-Service platforms like Firebase and Supabase for rapid development.",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "Cloud & Deployment",
      services: "AWS • Vercel • Cloudflare • Docker",
      description: "Enterprise-grade cloud infrastructure with AWS for scalable applications, Vercel for seamless Next.js deployment, Cloudflare for global CDN, and Docker for containerization.",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      name: "Payment & SaaS",
      services: "Stripe • PayPal • Lemon Squeezy • Subscriptions",
      description: "Complete payment integration solutions with Stripe for comprehensive payment processing, PayPal for global reach, and Lemon Squeezy for simplified SaaS billing.",
      icon: <CreditCard className="w-5 h-5" />
    },
    {
      name: "UI/UX & Design",
      services: "Figma • shadcn/ui • Framer Motion • Responsive",
      description: "Modern design workflow with Figma for prototyping, shadcn/ui for consistent component libraries, Framer Motion for smooth animations, and responsive design principles.",
      icon: <Palette className="w-5 h-5" />
    },
  ];

  const techLogos = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      name: "React"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      alt: "Next.js",
      name: "Next.js"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      name: "TypeScript"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      name: "Node.js"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      name: "Python"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      alt: "AWS",
      name: "AWS"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      name: "PostgreSQL"
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      name: "MongoDB"
    },
  ];

  return (
    <section className="bg-secondary/30 py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and frameworks that power our digital solutions
          </p>
        </div>

        {/* Interactive Tech Stack */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-2">
            {techStack.map((tech, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => setExpandedTech(expandedTech === tech.name ? null : tech.name)}
                  className="w-full group"
                >
                  <div className="flex items-center justify-between p-6 bg-card border rounded-xl hover:bg-secondary/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{tech.icon}</div>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground">{tech.services}</p>
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      {expandedTech === tech.name ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </button>
                
                {expandedTech === tech.name && (
                  <div className="mt-2 p-6 bg-card border rounded-xl animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Logos */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-8">Technologies We Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {techLogos.map((logo, index) => (
              <div
                key={index}
                className="group p-6 bg-card border rounded-xl hover:bg-secondary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ready to leverage these technologies for your project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary/50 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
