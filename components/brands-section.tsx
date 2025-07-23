"use client";

import Image from "next/image";
import { useState } from "react";

interface TechCategory {
  name: string;
  services: string;
  description: string;
}

export default function BrandsSection() {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const techStack: TechCategory[] = [
    {
      name: "FRONTEND FRAMEWORKS",
      services: "REACT · NEXT.JS · TAILWIND CSS · TYPESCRIPT",
      description:
        "Modern React ecosystem with Next.js for production-grade applications. Tailwind CSS for rapid UI development and TypeScript for type safety and better developer experience.",
    },
    {
      name: "BACKEND & API",
      services: "NODE.JS · EXPRESS · FASTAPI · DJANGO",
      description:
        "Full-stack development with Node.js and Express for JavaScript backends, FastAPI for high-performance Python APIs, and Django for rapid prototyping and complex applications.",
    },
    {
      name: "AI & MACHINE LEARNING",
      services: "OPENAI · LANGCHAIN · VERCEL AI SDK · FINE-TUNING",
      description:
        "Advanced AI integration using OpenAI GPT models, Langchain for complex AI workflows, Vercel AI SDK for streaming responses, and custom model fine-tuning for specialized use cases.",
    },
    {
      name: "MOBILE DEVELOPMENT",
      services: "REACT NATIVE · NATIVEWIND · EXPO",
      description:
        "Cross-platform mobile development with React Native, styled with NativeWind for consistent design systems, and Expo for rapid deployment and testing.",
    },
    {
      name: "DATABASES & STORAGE",
      services: "POSTGRESQL · MONGODB · FIREBASE · SUPABASE",
      description:
        "Scalable database solutions from SQL (PostgreSQL) to NoSQL (MongoDB), with modern Backend-as-a-Service platforms like Firebase and Supabase for rapid development.",
    },
    {
      name: "CLOUD & DEPLOYMENT",
      services: "AWS · VERCEL · CLOUDFLARE · DOCKER",
      description:
        "Enterprise-grade cloud infrastructure with AWS for scalable applications, Vercel for seamless Next.js deployment, Cloudflare for global CDN, and Docker for containerization.",
    },
    {
      name: "PAYMENT & SAAS",
      services: "STRIPE · PAYPAL · LEMON SQUEEZY · SUBSCRIPTION",
      description:
        "Complete payment integration solutions with Stripe for comprehensive payment processing, PayPal for global reach, and Lemon Squeezy for simplified SaaS billing.",
    },
    {
      name: "UI/UX & DESIGN",
      services: "FIGMA · SHADCN/UI · FRAMER MOTION · RESPONSIVE",
      description:
        "Modern design workflow with Figma for prototyping, shadcn/ui for consistent component libraries, Framer Motion for smooth animations, and responsive design principles.",
    },
  ];

  const techLogos = [
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      alt: "Next.js",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-10 lg:py-24">
      <div className="container px-4 md:px-0 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-[4rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-24">
          TECHNOLOGY STACK
        </h2>

        <div className="mb-24">
          {techStack.map((tech, index) => (
            <div key={index}>
              <div className="grid grid-cols-[1fr,auto,auto] items-center py-6 border-t border-gray-300">
                <span className="text-[15px] font-medium">{tech.name}</span>
                <span className="text-[13px] text-gray-600 px-4">
                  {tech.services}
                </span>
                <button
                  onClick={() =>
                    setExpandedTech(
                      expandedTech === tech.name ? null : tech.name
                    )
                  }
                  className="text-[13px] hover:opacity-70 transition-opacity"
                  aria-expanded={expandedTech === tech.name}
                  aria-controls={`description-${index}`}
                >
                  {expandedTech === tech.name ? "LESS -" : "MORE +"}
                </button>
              </div>
              {expandedTech === tech.name && (
                <div
                  id={`description-${index}`}
                  className="py-4 px-6 bg-[#f5f5f5] mt-2 mb-4"
                >
                  <p className="text-[14px] leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-24">
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-8 bg-white rounded-lg shadow-sm"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={80}
                height={80}
                className="object-contain w-16 h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
