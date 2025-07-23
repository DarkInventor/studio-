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
      title: "DADEY",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-09%20at%208.18.01%E2%80%AFPM-nGXuNRpCVuv7fyjM3i7bRA8ZWdFS6z.png",
      categories: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
      year: "2022",
    },
    {
      title: "ASANTE",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-09%20at%208.18.32%E2%80%AFPM-h66bMFbEkv6Ur7L6NDGhdF7fYCI7bO.png",
      categories: "DESIGN - DEVELOPMENT",
      year: "2024",
    },
    {
      title: "AMEKPOR",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-09%20at%208.18.39%E2%80%AFPM-WXN3aEN8Dj0LnAwnJIHbY2AdYgp8qx.png",
      categories: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
      year: "2023",
    },
    {
      title: "KWABENA SPORTS",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-09%20at%208.18.45%E2%80%AFPM-hfpqHO2PlgT5uPBY9m5Wnx6tNRyKoc.png",
      categories: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-light">
      <SiteHeader />
      <main className="px-4 sm:px-6 lg:px-8">
        <section className="mb-12 sm:mb-16 lg:mb-24 mt-8 sm:mt-12 lg:mt-20">
          <h1 className="max-w-[1200px] text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extralight leading-[1.1] tracking-[-0.02em]">
            A RESEARCH AND STRATEGY DRIVEN DIGITAL DESIGN STUDIO
          </h1>
          <div className="mt-4 sm:mt-6 space-y-1 text-[0.65rem] tracking-wide">
            <p>CRAFTED FOR ENGAGEMENT</p>
            <p>CONSTRUCTED FOR CONNECTIVITY</p>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 rotate-90 origin-bottom-right p-4 text-[0.65rem] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  GO
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-[0.65rem] tracking-wider">
                  {project.categories}
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-sm tracking-tight">{project.title}</h2>
                  <span className="text-[0.65rem]">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="mt-24 mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-12">
            ABOUT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg font-light leading-relaxed">
                A GLOBAL DIGITAL DESIGN STUDIO TRANSFORMING THE WAY PEOPLE
                ENGAGE WITH BRANDS.
              </p>
            </div>
            <div>
              <p className="text-base font-light leading-relaxed text-gray-600">
                We are a close-knit group of inquisitive individuals who produce
                work that fills us with pride for clients and brands we deeply
                admire. Fostering collaboration as the cornerstone of our
                endeavors, we discern the essential skills needed for each
                project and assemble a remarkable team to craft something truly
                exceptional. By integrating strategy, branding, web design, and
                development, we construct digital encounters that revolutionize
                the manner in which individuals connect and engage with brands.
              </p>
              <Button
                variant="default"
                className="mt-6 rounded-[1rem] bg-black text-white px-8 "
              >
                ABOUT US
              </Button>
            </div>
          </div>
          <div className="relative w-full aspect-[16/9] mt-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-09%20at%208.26.15%E2%80%AFPM-i2HNYIHGxByqEk4RBP5jOApxamHOlP.png"
              alt="Our modern office space"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
      <FeaturedClients />
      <BrandsSection />
      <SiteFooter />
    </div>
  );
}
