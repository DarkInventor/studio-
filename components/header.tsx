"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <Link className="text-sm sm:text-base tracking-tight font-semibold" href="/">
        EZ Studio®
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm tracking-tight">
          <li>
            <Link href="/projects" className="hover:underline">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline">
              SERVICES
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:underline">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#f5f5f5] z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-lg">
              <li>
                <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/experience" onClick={() => setIsMenuOpen(false)}>
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
