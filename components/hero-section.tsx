"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import FeaturedClients from "./featured-clients";
import BrandsSection from "./brands-section";
import SiteFooter from "./footer";
import SiteHeader from "./header";

export default function HeroSection() {
  const projects = [
    {
      title: "SearchFast",
      image: "/api/placeholder/400/400",
      categories: "AI - macOS - OPEN SOURCE",
      year: "2024",
      description: "AI Assistant for macOS with local-first architecture",
      tech: "Claude, Mistral, Whisper"
    },
    {
      title: "Easy UI Premium",
      image: "/api/placeholder/400/400", 
      categories: "UI/UX - SAAS - NEXTJS",
      year: "2024",
      description: "Premium NextJS templates generating $15k+ revenue",
      tech: "React, Tailwind, shadcn/ui"
    },
    {
      title: "Brand Studio",
      image: "/api/placeholder/400/400",
      categories: "AI - SOCIAL MEDIA - AUTOMATION",
      year: "2024", 
      description: "AI-powered social media growth platform",
      tech: "Next.js, TypeScript, OpenAI GPT-4"
    },
    {
      title: "AON APP",
      image: "/api/placeholder/400/400",
      categories: "AI - MOBILE - REACT NATIVE",
      year: "2024",
      description: "AI app for electronic device repair (Denmark startup)",
      tech: "React Native, Firebase, OpenAI"
    },
  ];

  const services = [
    "Web Development",
    "Software Development", 
    "AI Integration",
    "Mobile App Development",
    "SaaS Solutions",
    "UI/UX Design"
  ];

  const techStack = {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Java"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "React Native", "Node.js", "Express", "FastAPI", "Django"],
    ai: ["OpenAI", "Dall-E", "LLAMA Meta AI", "Langchain SDK", "Vercel AI SDK"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    cloud: ["AWS", "GCP", "Azure", "Vercel", "Cloudflare"]
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-light">
      <SiteHeader />
      <main className="px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-24 mt-8 sm:mt-12 lg:mt-20">
          <h1 className="max-w-[1200px] text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extralight leading-[1.1] tracking-[-0.02em]">
            WEB DESIGN & SOFTWARE DEVELOPMENT STUDIO
          </h1>
          <div className="mt-6 sm:mt-8 space-y-2 text-[0.7rem] tracking-wide">
            <p>MODERN • SCALABLE • AI-POWERED</p>
            <p>FROM PROTOTYPE TO PRODUCTION</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service, index) => (
              <span key={index} className="bg-black text-white px-4 py-2 text-xs tracking-wide">
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-[1.1] tracking-[-0.02em] mb-8">
            FEATURED PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="absolute inset-0 flex items-center justify-center text-blue-600 font-semibold text-lg">
                    {project.title}
                  </div>
                  <div className="absolute bottom-0 right-0 rotate-90 origin-bottom-right p-4 text-[0.65rem] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-[0.65rem] tracking-wider text-gray-600">
                    {project.categories}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm tracking-tight">{project.title}</h3>
                    <span className="text-[0.65rem]">{project.year}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{project.description}</p>
                  <p className="text-[0.6rem] text-blue-600 font-medium">{project.tech}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About & Tech Stack */}
        <section className="mt-24 mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-12">
            ABOUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg font-light leading-relaxed">
                TRANSFORMING IDEAS INTO SCALABLE DIGITAL SOLUTIONS WITH MODERN WEB TECHNOLOGIES AND AI INTEGRATION.
              </p>
            </div>
            <div>
              <p className="text-base font-light leading-relaxed text-gray-600 mb-6">
                From learning to building production-grade systems used by thousands. 
                I specialize in the modern web trifecta: React, Next.js, and Tailwind CSS, 
                enhanced with AI capabilities and cloud infrastructure. Whether it's a SaaS platform 
                generating revenue or an open-source tool serving developers worldwide, 
                I architect solutions from prototype to production.
              </p>
              <Button
                variant="default"
                className="rounded-[1rem] bg-black text-white px-8"
              >
                VIEW EXPERIENCE
              </Button>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-sm tracking-wider mb-4 font-medium">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.languages.map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm tracking-wider mb-4 font-medium">FRAMEWORKS</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frameworks.map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm tracking-wider mb-4 font-medium">AI & CLOUD</h3>
              <div className="flex flex-wrap gap-2">
                {[...techStack.ai, ...techStack.cloud].slice(0, 8).map((tech, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-300">
            <div>
              <div className="text-2xl font-light">$15k+</div>
              <div className="text-xs tracking-wider text-gray-600">REVENUE GENERATED</div>
            </div>
            <div>
              <div className="text-2xl font-light">100k+</div>
              <div className="text-xs tracking-wider text-gray-600">DEVELOPERS SERVED</div>
            </div>
            <div>
              <div className="text-2xl font-light">235+</div>
              <div className="text-xs tracking-wider text-gray-600">GITHUB STARS</div>
            </div>
            <div>
              <div className="text-2xl font-light">13+</div>
              <div className="text-xs tracking-wider text-gray-600">YEARS EXPERIENCE</div>
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
