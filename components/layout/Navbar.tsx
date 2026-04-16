"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MurrayUnderline from "./MurrayUnderline";
import "@/app/styles/Navbar.css";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/events", label: "events" },
  { href: "/committee", label: "committee" },
  { href: "/sponsors", label: "sponsors" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = () => setMenuOpen((o) => !o);
  const closeNav = () => setMenuOpen(false);
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`sticky top-0 z-40 w-full h-24 bg-white nav-shadow-base ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/" aria-label="STACS home">
          <Image src="/Logo.png" alt="STACS" width={95} height={95} priority />
        </Link>

        <ul className="hidden sm:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={active}
                  className={`nav-link font-mono text-base lowercase tracking-wide ${
                    active ? "text-murray" : "text-gray-800 hover:text-murray"
                  }`}
                >
                  <span className="nav-bracket" data-side="left" aria-hidden="true">[</span>
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-bracket" data-side="right" aria-hidden="true">]</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={handleNav}
          className="sm:hidden cursor-pointer text-gray-800 hover:text-murray"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <AiOutlineMenu size={26} />
        </button>
      </div>

      <div
        className="nav-drawer fixed top-0 left-0 h-screen w-full bg-white z-50 border-t-4 border-murray flex flex-col"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <div className="flex w-full items-center justify-between px-6 py-6">
          <span className="font-mono text-sm tracking-widest text-murray">~/stacs</span>
          <button
            type="button"
            onClick={closeNav}
            className="cursor-pointer text-gray-800 hover:text-murray"
            aria-label="Close menu"
          >
            <AiOutlineClose size={26} />
          </button>
        </div>

        <ul className="flex flex-col px-8 py-6 gap-2">
          {NAV_LINKS.map((link, i) => {
            const active = isActive(link.href);
            return (
              <li
                key={link.href}
                className="nav-drawer-item"
                style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={closeNav}
                  data-active={active}
                  className={`nav-link font-mono text-2xl lowercase tracking-wide py-3 ${
                    active ? "text-murray" : "text-gray-800"
                  }`}
                >
                  <span className="nav-bracket" data-side="left" aria-hidden="true">[</span>
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-bracket" data-side="right" aria-hidden="true">]</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto px-8 pb-10">
          <div className="nav-drawer-flourish mb-8">
            <MurrayUnderline segmentStart={8} segmentLength={40} active={menuOpen} />
          </div>
          <div className="flex flex-row items-center gap-6 text-gray-800">
            <AiOutlineInstagram size={28} className="cursor-pointer hover:text-murray transition-colors" />
            <AiOutlineLinkedin size={28} className="cursor-pointer hover:text-murray transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
}
