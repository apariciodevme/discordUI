"use client";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Bars3Icon, ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
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
        <div className="items-center hidden gap-12 text-sm lg:flex text-neutral-50">
          <Link href={"/"}>Download</Link>
          <Link href={"/"}>Nitro</Link>
          <Link href={"/"}>Discover</Link>
          <Link href={"/"}>Safety</Link>
          <Link href={"/"}>Support</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Carrers</Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="px-3 py-2 text-sm font-semibold transition rounded-full text-slate-900 bg-slate-50 hover:text-blue-500 hover:shadow-2xl">
            Login
          </button>
          <button onClick={handleNav} className="cursor-pointer lg:hidden ">
            {nav ? (
              <AiOutlineClose className="text-neutral-50" size={25} />
            ) : (
              <GiHamburgerMenu className="text-neutral-50" size={25} />
            )}
          </button>
        </div>
      </nav>

      {/*-----------------Mobile nav----------------------*/}
      <div className={
          nav
            ? "  absolute top-0 right-0 w-80 z-10 lg:hidden"
            : " absolute z-10 hidden"
        } >
      <div className="absolute top-0 flex flex-col items-start h-screen px-8 pt-8 rounded-xl gap-14 bg-neutral-50 w-80">
        <nav className="flex items-center justify-between w-full">
          <Image
            src={"/discord-logo-black.png"}
            width={120}
            height={120}
            alt="logo"
          />
          <button  onClick={handleNav} >
            <XMarkIcon className="w-6 text-neutral-800"  />
          </button>
        </nav>
        <div className="w-full h-[1.6px] bg-neutral-200"></div>
        <nav>
          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-900">
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>
              Home
            </Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Download</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Nitro</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Discover</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Safety</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Mod Academy</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Support</Link>
            <Link className="hover:underline decoration-2 decoration-solid decoration-black underline-offset-1"href={"/"}>Blog</Link>
            <Link className=" hover:underline decoration-2 decoration-solid decoration-black underline-offset-1" href={"/"}>Careers</Link>
          </div>
        </nav>
        <button className="flex items-center justify-between gap-2 px-8 py-2 text-sm font-medium duration-200 bg-indigo-500 rounded-full text-neutral-50 hover:shadow-xl hover:bg-indigo-400 hover:shadow-neutral-400 ">
          <ArrowDownTrayIcon className="w-6" />
          Download for Mac
        </button>{" "}
      </div>
      </div>
    </>
  );
};

export default Navbar;
