"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <Link className="text-sm sm:text-base tracking-tight" href="/">
        DesignMinds®
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm tracking-tight">
          <li>
            <Link href="/case-studies" className="hover:underline">
              CASE STUDIES
            </Link>
          </li>
          <li>
            <Link href="/work" className="hover:underline">
              WORK
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              ABOUT
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
                <Link href="/case-studies" onClick={() => setIsMenuOpen(false)}>
                  CASE STUDIES
                </Link>
              </li>
              <li>
                <Link href="/work" onClick={() => setIsMenuOpen(false)}>
                  WORK
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  ABOUT
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
