'use client'


import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoIosArrowDown} from 'react-icons/io'
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-6 blueBg">
        <Image
          src={"/discord-logo-white.png"}
          width={120}
          height={100}
          alt="logo"
        />

        <div className="flex items-center gap-6">
          <button className="px-3 py-2 text-sm font-semibold transition rounded-full text-slate-900 bg-slate-50 hover:text-blue-500 hover:shadow-2xl">
            Login
          </button>
          <button onClick={handleNav} className="cursor-pointer lg:hidden ">
            {nav ? <AiOutlineClose className="text-neutral-50" size={25} /> : <GiHamburgerMenu className="text-neutral-50" size={25} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
