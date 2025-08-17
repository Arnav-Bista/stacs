"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  const isActive = (path: string) => {
    return pathname === path;
  }

  return (
    <nav className="top-0 w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={95}
            height={95}
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li>
              <Link href="/" className={`ml-10 uppercase text-xl hover:text-gray-500 ${
                isActive('/') ? 'text-primary' : 'text-gray-800'
              }`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className={`ml-10 uppercase text-xl hover:text-gray-500 ${
                isActive('/events') ? 'text-primary' : 'text-gray-800'
              }`}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/committee" className={`ml-10 uppercase text-xl hover:text-gray-500 ${
                isActive('/committee') ? 'text-primary' : 'text-gray-800'
              }`}>
                committee
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className={`ml-10 uppercase text-xl hover:text-gray-500 ${
                isActive('/sponsors') ? 'text-primary' : 'text-gray-800'
              }`}>
                sponsors
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={`fixed top-0 left-0 h-screen w-full bg-slate-500 p-10 z-50 transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-100"}`}>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`block py-4 cursor-pointer ${
                  isActive('/') ? 'text-primary' : 'text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                onClick={() => setMenuOpen(false)}
                className={`block py-4 cursor-pointer ${
                  isActive('/events') ? 'text-primary' : 'text-white'
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/committee"
                onClick={() => setMenuOpen(false)}
                className={`block py-4 cursor-pointer ${
                  isActive('/committee') ? 'text-primary' : 'text-white'
                }`}
              >
                Committee
              </Link>
            </li>
            <li>
              <Link
                href="/sponsors"
                onClick={() => setMenuOpen(false)}
                className={`block py-4 cursor-pointer ${
                  isActive('/sponsors') ? 'text-primary' : 'text-white'
                }`}
              >
                Sponsors
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineLinkedin size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
