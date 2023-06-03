import Image from "next/image";
import { Bars3Icon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

import { Passion_One } from "next/font/google";
const passionOne = Passion_One({ subsets: ["latin"], weight: ['400', '700', '900'] } );




export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-8 ">
     
      <div>
        {/*-------------------- Navbar section --------------------*/}
        <nav className="flex items-center justify-between">
          <Image
            src={"/discord-logo-white.png"}
            width={130}
            height={100}
            alt="logo"
          />
          <div className="flex items-center gap-6">
            <button className="px-3 py-2 text-sm font-semibold transition rounded-full text-slate-900 bg-slate-50 hover:text-blue-500 hover:shadow-2xl">
              Login
            </button>
            <button>
              <Bars3Icon className="w-10 text-slate-50" />
            </button>
          </div>
        </nav>

        {/*-------------------- Hero section --------------------*/}

        <section>
          <div className="flex flex-col gap-6 mt-20">
            <h1 className={`text-5xl font-bold tracking-tight  uppercase ${passionOne.className}`}>Imagine a place...</h1>
            <p className="text-sm font-light leading-6">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="flex flex-col items-start gap-6 ">
              <button className="flex items-center justify-between gap-2 px-8 py-3 text-xl font-medium duration-200 rounded-full bg-slate-100 text-slate-800 hover:text-blue-500 hover:shadow-2xl">
                <ArrowDownTrayIcon className="w-6" /> 
                Download for Mac
              </button>
              <button className="flex items-center justify-between gap-4 px-8 py-3 text-xl font-medium transition duration-200 rounded-full text-slate-100 bg-neutral-900 hover:bg-neutral-800 hover:shadow-xl">
                Open Discord in your browser
              </button>
            </div>
            <Image
          src={'/heroVertical.svg'}
          width={1000}
          height={1000}
          alt="hero image"
          />
          </div>
         
        </section>
        
      </div>
    </main>
  );
}
