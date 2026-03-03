"use client";

import Link from "next/link";
import CoreButton from "@/components/ui/CoreButton";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[#1C2230]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="text-lg font-bold tracking-tight">
        mentivo<span className="text-[#3B82F6]">.</span>
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex items-center gap-8 text-base text-neutral-300">
        <Link href="/mentors" className="hover:text-white transition">
          Browse Mentors
        </Link>
        <Link href="/#how-it-works" className="hover:text-white transition">
          How it works
        </Link>
      </div>

      {/* Right CTA */}
      <CoreButton size="sm" className="cursor-pointer">
        Sign in →
      </CoreButton>
    </nav>
  );
}