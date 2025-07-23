"use client";

import Image from "next/image";
import { useState } from "react";

interface Brand {
  name: string;
  services: string;
  description: string;
}

export default function BrandsSection() {
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  const brands: Brand[] = [
    {
      name: "LVMH",
      services: "RESEARCH · STRATEGY · DESIGN · DEVELOPMENT",
      description:
        "Luxury brand conglomerate. We provided comprehensive digital solutions across their portfolio.",
    },
    {
      name: "VIVIDSCAPE FLOW",
      services: "DESIGN",
      description:
        "Innovative design agency. We collaborated on cutting-edge UI/UX projects for their clients.",
    },
    {
      name: "ELEVATE DESIGN",
      services: "RESEARCH · STRATEGY · DESIGN · DEVELOPMENT",
      description:
        "Boutique design firm. We assisted in developing their digital presence and client projects.",
    },
    {
      name: "BENDPHIL",
      services: "STRATEGY · DESIGN · DEVELOPMENT",
      description:
        "Tech startup. We helped shape their product strategy and develop their MVP.",
    },
    {
      name: "VANIA",
      services: "RESEARCH · STRATEGY · DESIGN · DEVELOPMENT",
      description:
        "Fashion retailer. We overhauled their e-commerce platform and digital marketing strategy.",
    },
    {
      name: "KENYA AIRWAYS",
      services: "DESIGN · DEVELOPMENT",
      description:
        "National airline. We redesigned their booking system and mobile app for improved user experience.",
    },
    {
      name: "FENDY",
      services: "RESEARCH · STRATEGY · DESIGN · DEVELOPMENT",
      description:
        "Luxury fashion brand. We developed a comprehensive digital strategy and e-commerce solution.",
    },
    {
      name: "LEMA PRINT",
      services: "RESEARCH · DESIGN",
      description:
        "Print media company. We helped transition their business model to include digital services.",
    },
    {
      name: "JULIA DALLAMORE",
      services: "DESIGN · DEVELOPMENT",
      description:
        "Independent artist. We created a portfolio website and online store for her artwork.",
    },
  ];

  const images = [
    {
      url: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg",
      alt: "Modern office space with bicycle",
    },
    {
      url: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg",
      alt: "Person working on design sketches",
    },
    {
      url: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg",
      alt: "Desk setup with design materials",
    },
    {
      url: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg",
      alt: "Person looking at whiteboard",
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-10 lg:py-24">
      <div className="container px-4 md:px-0 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-[4rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-24">
          BRANDS WE&apos;VE WORKED WITH
        </h2>

        <div className="mb-24">
          {brands.map((brand, index) => (
            <div key={index}>
              <div className="grid grid-cols-[1fr,auto,auto] items-center py-6 border-t border-gray-300">
                <span className="text-[15px] font-medium">{brand.name}</span>
                <span className="text-[13px] text-gray-600 px-4">
                  {brand.services}
                </span>
                <button
                  onClick={() =>
                    setExpandedBrand(
                      expandedBrand === brand.name ? null : brand.name
                    )
                  }
                  className="text-[13px] hover:opacity-70 transition-opacity"
                  aria-expanded={expandedBrand === brand.name}
                  aria-controls={`description-${index}`}
                >
                  {expandedBrand === brand.name ? "LESS -" : "MORE +"}
                </button>
              </div>
              {expandedBrand === brand.name && (
                <div
                  id={`description-${index}`}
                  className="py-4 px-6 bg-[#f5f5f5] mt-2 mb-4"
                >
                  <p className="text-[14px] leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-24">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
