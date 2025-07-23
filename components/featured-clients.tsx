import Image from "next/image";
import Link from "next/link";

export default function FeaturedClients() {
  const clients = [
    {
      logo: "https://cdn.magicui.design/companies/Spotify.svg",
      name: "Spotify",
      description:
        "Spotify reached out to us to create a new design system and conduct an overhaul of the brand's digital experience. The objective was to provide customers with seamless purchasing journeys and we did this by combining robust user experience with strong and engaging content.",
      buttonText: "VIEW CASE STUDY",
      buttonLink: "#",
    },
    {
      logo: "https://cdn.magicui.design/companies/Instagram.svg",
      name: "Off-White™",
      description:
        "We were brought in to refresh their primary digital properties with a particular focus on building a robust eCommerce capability that re-imaged the way consumers purchase tyres, wheels and batteries online. We achieved this by crafting an informative and intuitive purchasing experience, backed by comprehensive usability research and validation.",
      buttonText: "VIEW CASE STUDY",
      buttonLink: "#",
    },
    {
      logo: "https://cdn.magicui.design/companies/Amazon.svg",
      name: "Sky Studios",
      description:
        'In collaboration with sky\'s development partner +OneX, we created a "best-in-class" eCommerce experience underpinned and validated by an in-depth research study that focussed on incorporating the best possible UX principles and analyses.',
      buttonText: "VIEW WORK",
      buttonLink: "#",
    },
    {
      logo: "https://cdn.magicui.design/companies/Google.svg",
      name: "LILLÉ BABY",
      description:
        "In collaboration with Promise Brand Specialists, we were tasked to create an elevated digital experience to reflect the innovative and performance-oriented nature of the brand. The primary goal of the website was to provide a seamless digital service when looking for key information as well as placing and paying for cement orders online.",
      buttonText: "VIEW WORK",
      buttonLink: "#",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f5f5f5]">
      <div className="container px-4 md:px-0 lg:px-0 max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-[4rem] font-extralight leading-[1.1] tracking-[-0.02em] mb-12">
          FEATURED CLIENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {clients.map((client, index) => (
            <div key={index} className="space-y-6 mt-10">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={132}
                height={40}
                className="h-15 w-auto object-contain"
              />
              <p className="text-[15px] leading-[1.6] text-gray-800 pr-8">
                {client.description}
              </p>
              <Link
                href={client.buttonLink}
                className="inline-flex h-8 items-center justify-center bg-black text-white px-5 text-[11px] tracking-[0.06em] hover:bg-black/90 rounded-full"
              >
                {client.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
