import Image from "next/image";
import Link from "next/link";

export default function FeaturedClients() {
  const featuredProjects = [
    {
      logo: "https://cdn.magicui.design/companies/OpenAI.svg",
      name: "SearchFast",
      description: "AI Assistant for macOS that's 100% free and open-source. Local-first, AI-powered assistant that sees what you see and listens when you speak. Integrates seamlessly with macOS apps using Claude, Mistral, Whisper, and Eleven Labs with no cloud data storage.",
      buttonText: "VIEW PROJECT",
      buttonLink: "#",
      tech: "Claude • Mistral • Whisper • macOS",
      status: "Open Source"
    },
    {
      logo: "https://cdn.magicui.design/companies/Vercel.svg", 
      name: "Easy UI Premium",
      description: "Beautifully designed NextJS website templates and sections generating $15k+ in revenue. Reduces landing page development time by 70% through pre-built conversion-optimized sections, landing pages and integrations. Serves 100k+ developers worldwide.",
      buttonText: "VIEW PROJECT",
      buttonLink: "#",
      tech: "Next.js • React • Tailwind • shadcn/ui",
      status: "$15k+ Revenue"
    },
    {
      logo: "https://cdn.magicui.design/companies/Meta.svg",
      name: "Brand Studio", 
      description: "AI-Powered Social Media Growth Platform for creating, managing, and scheduling thousands of high-converting posts for X and LinkedIn. Generate 1000s of posts, maintain brand consistency, and save 10+ hours per week.",
      buttonText: "VIEW PROJECT",
      buttonLink: "#", 
      tech: "Next.js • TypeScript • OpenAI GPT-4 • Supabase",
      status: "SaaS Platform"
    },
    {
      logo: "https://cdn.magicui.design/companies/Stripe.svg",
      name: "Reachactory",
      description: "SaaS/AI tool distribution platform generating $1.5K+ revenue. Developed with Next.js, React, and Tailwind CSS for optimal UI/UX. Utilizes Vercel, Buildspace, and Stripe for advanced functionality with agile methodologies.",
      buttonText: "VIEW PROJECT", 
      buttonLink: "#",
      tech: "Next.js • React • Stripe • Vercel",
      status: "$1.5k+ Revenue"
    },
    {
      logo: "https://cdn.magicui.design/companies/GitHub.svg",
      name: "Easy UI",
      description: "Open-source component library with 235+ GitHub stars delivering 50+ production-ready animated UI elements. Serves 100k+ developers with React/Tailwind components that complement shadcn/ui workflows.",
      buttonText: "VIEW GITHUB",
      buttonLink: "#",
      tech: "React • Tailwind • TypeScript • Open Source", 
      status: "235+ ⭐"
    },
    {
      logo: "https://cdn.magicui.design/companies/React.svg",
      name: "AON APP",
      description: "AI app to repair electronic devices (Fridge, Microwave, Washing machine) built for Denmark-based startup. Features React Native, Nativewind, shadcn UI, Firebase, and OpenAI API integration for intelligent device diagnostics.",
      buttonText: "VIEW PROJECT",
      buttonLink: "#",
      tech: "React Native • Firebase • OpenAI • shadcn/ui",
      status: "Startup Project"
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f5f5f5]">
      <div className="container px-4 md:px-0 lg:px-0 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-[4rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-12">
          FEATURED PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className="space-y-6 mt-10">
              <div className="flex items-center justify-between">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-[0.65rem] tracking-wider bg-black text-white px-3 py-1 rounded">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-medium tracking-tight">{project.name}</h3>
              <p className="text-[15px] leading-[1.6] text-gray-800 pr-8">
                {project.description}
              </p>
              <div className="text-[0.65rem] tracking-wider text-blue-600 font-medium">
                {project.tech}
              </div>
              <Link
                href={project.buttonLink}
                className="inline-flex h-8 items-center justify-center bg-black text-white px-5 text-[11px] tracking-[0.06em] hover:bg-black/90 rounded-full"
              >
                {project.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
