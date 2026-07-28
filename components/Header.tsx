'use client';

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b">

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold text-[#234034]"
        >
          Pasta De Café
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[#234034] font-medium">

          <Link
            href="/menu"
            className="hover:text-[#00A859] transition"
          >
            Menu
          </Link>

          <Link
            href="/meals"
            className="hover:text-[#00A859] transition"
          >
            Meals by PDC
          </Link>

          <Link
            href="/subscription"
            className="hover:text-[#00A859] transition"
          >
            Food Subscription
          </Link>

          <Link
            href="/curate"
            className="hover:text-[#00A859] transition"
          >
            Create Your Bowl
          </Link>

          <Link
            href="/social-proof"
            className="hover:text-[#00A859] transition"
          >
            Social Proof
          </Link>

          <Link
            href="/gift-cards"
            className="hover:text-[#00A859] transition"
          >
            Gift Cards
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#00A859] transition"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <Link
            href="/subscription"
            className="hidden md:inline-block bg-[#234034] text-white px-6 py-3 rounded-full hover:bg-[#00A859] transition"
          >
            Order on Chowdeck
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#234034]"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5 text-[#234034] font-medium shadow-lg">

          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/menu"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>

          <Link
            href="/meals"
            onClick={() => setIsMenuOpen(false)}
          >
            Meals by PDC
          </Link>

          <Link
            href="/subscription"
            onClick={() => setIsMenuOpen(false)}
          >
            Food Subscription
          </Link>

          <Link
            href="/curate"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Your Bowl
          </Link>

          <Link
            href="/social-proof"
            onClick={() => setIsMenuOpen(false)}
          >
            Social Proof
          </Link>

          <Link
            href="/gift-cards"
            onClick={() => setIsMenuOpen(false)}
          >
            Gift Cards
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/subscription"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#234034] text-white text-center py-3 rounded-full"
          >
            Order on Chowdeck
          </Link>

        </div>
      )}

    </header>
  );
}