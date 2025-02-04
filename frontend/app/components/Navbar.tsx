"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen);
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
            <Link href="/link1">
              <li className="ml-10 uppercase text-xl text-gray-800 hover:text-gray-500">
                page1
              </li>
            </Link>
            <Link href="/link2">
              <li className="ml-10 uppercase text-xl text-gray-800 hover:text-gray-500">
                page2
              </li>
            </Link>
            <Link href="/link3">
              <li className="ml-10 uppercase text-xl text-gray-800 hover:text-gray-500">
                page3
              </li>
            </Link>
            <Link href="/sponsors">
              <li className="ml-10 uppercase text-xl text-gray-800 hover:text-gray-500">
                sponsors
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={
        menuOpen
          ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-500 p-10 ease-in duration-500"
          : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/link1">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                page1
              </li>
            </Link>
            <Link href="/link2">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                page2
              </li>
            </Link>
            <Link href="/link3">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                page3
              </li>
            </Link>
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
