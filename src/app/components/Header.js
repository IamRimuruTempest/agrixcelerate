"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
    
      setColorchange(true);
    } else {
      setColorchange(false);

    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <nav className="z-40 overflow-hidden">
        <div
          className={`w-full ${
            colorChange ? "bg-[#E6E8EE]" : "bg-transparent"
          } fixed top-0 left-0 right-0 z-10`}
        >
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="#hero">
                  <Image
                    height={200}
                    width={200}
                    src="/agrixcelerate.png"
                    alt="logo"
                    sizes="(max-width: 768px) 100vw"
                    objectFit="none"
                  />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <AiOutlineClose width={30} height={30} alt="logo" />
                    ) : (
                      <AiOutlineMenu
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center  md:block md:pb-0 md:mt-0 bg-white md:bg-transparent lg:bg-transparent ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-auto md:h-auto items-center justify-center text-center md:flex ">
                  <li className=" text-[#142D58] py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:text-[#35A448]    md:hover:text-[#35A448] md:hover:bg-transparent ">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      About
                    </Link>
                  </li>
                  <li className=" text-[#142D58]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-[#35A448]    md:hover:text-[#35A448] md:hover:bg-transparent">
                    <Link href="#goal" onClick={() => setNavbar(!navbar)}>
                      Goals
                    </Link>
                  </li>
                  <li className=" text-[#142D58]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-[#35A448]    md:hover:text-[#35A448] md:hover:bg-transparent">
                    <Link href="#mechanics" onClick={() => setNavbar(!navbar)}>
                      Mechanics
                    </Link>
                  </li>
                  <li className="  text-[#142D58]  py-2 px-6 text-center  border-b-2 md:border-b-0  hover:text-[#35A448]    md:hover:text-[#35A448] md:hover:bg-transparent">
                    <Link href="#timeline" onClick={() => setNavbar(!navbar)}>
                      Timeline
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
