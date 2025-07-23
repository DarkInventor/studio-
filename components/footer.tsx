import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  return (
    <section className="w-full bg-[#f5f5f5] py-24">
      <div className="container px-4 md:px-6 max-w-[1400px] mx-auto">
        <div className="mb-24">
          <div className="text-[13px] mb-4">NEXT PAGE</div>
          <div className="flex items-baseline gap-4">
            <h1 className="text-[4.5rem] font-[350] tracking-[-0.02em]">
              PROJECTS
            </h1>
            <span className="text-[2rem] font-[350]">20+</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-[2rem] font-[350] leading-tight">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER
            </h2>
            <Button className="bg-black text-white rounded-[1.1rem] hover:bg-black/90 text-[13px] px-6 h-10">
              START PROJECT
            </Button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">
                BUSINESS INQUIRIES
              </div>
              <div className="space-y-1">
                <div className="text-[15px]">HELLO@EZSTUDIO.DEV</div>
                <div className="text-[15px]">+1 (555) 123-4567</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">SERVICES</div>
              <div className="space-y-1">
                <div className="text-[15px]">WEB DEVELOPMENT</div>
                <div className="text-[15px]">SOFTWARE DEVELOPMENT</div>
                <div className="text-[15px]">AI INTEGRATION</div>
                <div className="text-[15px]">MOBILE APPS</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">SPECIALIZATIONS</div>
              <div className="space-y-1">
                <div className="text-[15px]">SAAS PLATFORMS</div>
                <div className="text-[15px]">E-COMMERCE SOLUTIONS</div>
                <div className="text-[15px]">API DEVELOPMENT</div>
                <div className="text-[15px]">UI/UX DESIGN</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">TECH STACK</div>
              <div className="space-y-1">
                <div className="text-[15px]">REACT • NEXT.JS • TYPESCRIPT</div>
                <div className="text-[15px]">NODE.JS • PYTHON • AI/ML</div>
                <div className="text-[15px]">AWS • VERCEL • CLOUDFLARE</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <div className="text-[13px]">EZ STUDIO® ©2024</div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[13px] hover:opacity-70">
              GITHUB
            </Link>
            <Link href="#" className="text-[13px] hover:opacity-70">
              LINKEDIN
            </Link>
            <Link href="#" className="text-[13px] hover:opacity-70">
              TWITTER
            </Link>
            <Link href="#" className="text-[13px] hover:opacity-70">
              BACK TO TOP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
