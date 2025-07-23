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
              CASE STUDIES
            </h1>
            <span className="text-[2rem] font-[350]">04</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-[2rem] font-[350] leading-tight">
              WE WOULD LOVE TO HEAR FROM YOU. LET&apos;S WORK — TOGETHER
            </h2>
            <Button className="bg-black text-white rounded-[1.1rem] hover:bg-black/90 text-[13px] px-6 h-10">
              CONTACT US
            </Button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">
                BUSINESS INQUIRIES
              </div>
              <div className="space-y-1">
                <div className="text-[15px]">HELLO@DESIGNMINDSAGENCY.COM</div>
                <div className="text-[15px]">+322 XX XXX XXXX</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">SLOVENIA</div>
              <div className="space-y-1">
                <div className="text-[15px]">133A RYE LANE</div>
                <div className="text-[15px]">KRICKIZSKA MP19 47BQ</div>
                <div className="text-[15px]">SLOVENIA</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">OPEN POSITIONS</div>
              <div className="space-y-1">
                <div className="text-[15px]">JUNIOR-MID DIGITAL DESIGNER</div>
                <div className="text-[15px]">JUNIOR WEB DESIGNER</div>
                <div className="text-[15px]">BACKEND DEVELOPER</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[13px] text-gray-600">KENYA</div>
              <div className="space-y-1">
                <div className="text-[15px]">14 KENYATTA STREET</div>
                <div className="text-[15px]">CBD00, 19801</div>
                <div className="text-[15px]">NAIROBI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-300">
          <div className="text-[13px]">DESIGNMINDS® ©2023</div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[13px] hover:opacity-70">
              DRIBBBLE
            </Link>
            <Link href="#" className="text-[13px] hover:opacity-70">
              INSTAGRAM
            </Link>
            <Link href="#" className="text-[13px] hover:opacity-70">
              BEHANCE
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
