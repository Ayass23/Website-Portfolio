'use client'

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Button from "@/components/buttons/Button";

const Navbar = () => {
  const [navbar, setNavbarOpen] = useState(true);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
        <Link href={"/"} className="text-2xl md:text-5xl  font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-600 font-bold">AM23</span></Link>
        <div className="mobile-menu block md:hidden">
          {navbar ? <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5" /></button> : <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XMarkIcon className="h-5 w-5" /></button>}

        </div>
        <div className="menu hidden md:block md:w-auto " id="navbar">
          <ul className="flex p-2 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link href={"/section"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About Me</Link>
            </li>
            <li>
              <Link href={"/"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">My Project</Link>
            </li>
            <li>
              <Link href={"/"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
      {navbar ? null :
        <ul className="flex flex-col py-4 items-center">
          <li>
            <Link href={"/"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] text-l rounded md:p-0 hover:text-white">About Me</Link>
          </li>
          <li>
            <Link href={"/"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] text-l rounded md:p-0 hover:text-white">My Project</Link>
          </li>
          <li>
            <Link href={"/"} className="block py-2 pl-2 pr-3 text-[#ADB7BE] text-l rounded md:p-0 hover:text-white">Contact Me</Link>
          </li>
        </ul>}
    </nav>
  )
}

export default Navbar