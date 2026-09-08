"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo.png"
              alt="Sivit"
              width={120}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-gray-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-light transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-gray-medium px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-foreground/70 hover:text-foreground hover:bg-gray-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 text-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
