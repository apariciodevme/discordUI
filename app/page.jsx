import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

import Navbar from "@/components/Navbar";

import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsTiktok,
} from "react-icons/bs";

import { Passion_One } from "next/font/google";
const passionOne = Passion_One({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const infoSection = [
  {
    id: 1,
    image: "/section1.svg",
    title: "Create an invite-only place where you belong",
    description:
      "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
  },
  {
    id: 2,
    image: "/section2.svg",
    title: "Where hanging out is easy",
    description:
      "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
  },
  {
    id: 3,
    image: "/section3.svg",
    title: "From few to a fandom",
    description:
      "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div>
        {/*-------------------- Navbar section --------------------*/}
       <Navbar/>
        {/*-------------------- Navbar Desktop section --------------------*/}









        {/*-------------------- Hero section --------------------*/}

        <section>
          <div className="flex flex-col gap-6 p-6 pt-12 blueBg md:items-center md:gap-8 imgBg">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-normal  uppercase ${passionOne.className}`}
            >
              Imagine a place...
            </h1>
            <p className="w-2/4 text-sm font-light leading-6 md:mx-auto md:text-lg md:w-3/5 md:text-center">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <button className="flex items-center justify-between gap-2 px-8 py-3 text-xl font-medium duration-200 rounded-full bg-slate-100 text-slate-800 hover:text-blue-500 hover:shadow-2xl">
                <ArrowDownTrayIcon className="w-6" />
                Download for Mac
              </button>
              <button className="flex items-center justify-between gap-4 px-8 py-3 text-xl font-medium transition duration-200 rounded-full text-slate-100 bg-neutral-900 hover:bg-neutral-800 hover:shadow-xl">
                Open Discord in your browser
              </button>
            </div>
            <Image
              src={"/heroVertical.svg"}
              width={600}
              height={600}
              alt="hero image"
            />
          </div>
        </section>

        {/*-------------------- Info section --------------------*/}

        <section>
          <div className="flex flex-col items-center gap-32 p-6 pb-20 lg:justify-center bg-neutral-200 lg:hidden">
            {infoSection.map((info) => (
              <div key={info.id} className="flex flex-col gap-12">
                <img src={info.image} width={600} height={600} />
                <div className="flex flex-col items-start gap-6">
                  <h1
                    className={`text-3xl font-bold text-neutral-800 ${passionOne.className}`}
                  >
                    {info.title}
                  </h1>
                  <p className="text-neutral-700">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

        {/*-------------------- Info section XL --------------------*/}


          <div className="flex-col items-center hidden gap-32 p-6 pt-20 lg:flex lg:justify-center bg-neutral-200">
          {infoSection.map((info) => (
              <div key={info.id} className="flex ">
                <div className="flex flex-col items-start gap-6">
                  <h1
                    className={`text-3xl lg:text-4xl font-bold text-neutral-800 flex-wrap max-w-md ${passionOne.className}`}
                  >
                    {info.title}
                  </h1>
                  <p className="text-neutral-700 lg:w-96">{info.description}</p>
                </div>
                <img src={info.image} width={600} height={600} />

              </div>
            ))}
          </div>
        </section>





        <section>
          <div className="flex flex-col items-start gap-6 p-6 lg:items-center bg-neutral-100 lg:pt-20 ">
            <h1
              className={`text-4xl lg:text-6xl font-bold uppercase text-neutral-800 ${passionOne.className}`}
            >
              Reliable tech for staying close
            </h1>
            <p className="text-sm lg:text-lg text-neutral-700 lg:w-3/5 lg:text-center">
              Low-latency voice and video feels like you’re in the same room.
              Wave hello over video, watch friends stream their games, or gather
              up and have a drawing session with screen share.
            </p>
            <Image
              src={"/fishJuiceBox.svg"}
              width={600}
              height={600}
              alt="Fish drinking from juice box"
            />

            <div className="flex flex-col items-center justify-center w-full gap-12 starBg">
              <h1 className="text-3xl font-bold lg:text-4xl text-neutral-800">
                Ready to start your journey?
              </h1>
              <button className="flex items-center justify-between gap-2 py-4 mb-10 text-xl font-medium duration-200 bg-indigo-500 rounded-full px-36 text-neutral-50 hover:shadow-xl hover:bg-indigo-400 hover:shadow-neutral-400 ">
                <ArrowDownTrayIcon className="w-6" />
                Download for Mac
              </button>
            </div>
          </div>
        </section>

        {/*-------------------- Footer section --------------------*/}

        <section>
          <div className="min-h-screen p-6 bg-neutral-900 ">
            <div className="flex gap-6 pt-20 text-neutral-200 lg:pb-20">
              <BsTwitter size={22} />
              <BsInstagram size={22} />
              <BsFacebook size={22} />
              <BsYoutube size={22} />
              <BsTiktok size={22} />
            </div>

            {/*-------------------- Grid section --------------------*/}

            <div className="grid grid-cols-2 grid-rows-3 gap-8 ">
              <div>
                <h1 className="mb-6 text-indigo-500">Product</h1>
                <div className="flex flex-col items-start gap-2 text-neutral-100">
                  <Link href={"/"}>Download</Link>
                  <Link href={"/"}>Nitro</Link>
                  <Link href={"/"}>Status</Link>
                </div>
              </div>

              <div>
                <h1 className="mb-6 text-indigo-500">Company</h1>
                <div className="flex flex-col items-start gap-2 text-neutral-100">
                  <Link href={"/"}>About</Link>
                  <Link href={"/"}>Jobs</Link>
                  <Link href={"/"}>Brand</Link>
                  <Link href={"/"}>Newsroom</Link>
                </div>
              </div>

              <div className="row-span-2">
                <h1 className="mb-6 text-indigo-500">Resources</h1>
                <div className="flex flex-col items-start gap-2 text-neutral-100">
                  <Link href={"/"}>College</Link>
                  <Link href={"/"}>Support</Link>
                  <Link href={"/"}>Safety</Link>
                  <Link href={"/"}>Blog</Link>
                  <Link href={"/"}>Feedback</Link>
                  <Link href={"/"}>Build</Link>
                  <Link href={"/"}>Streamkit</Link>
                  <Link href={"/"}>Creators</Link>
                  <Link href={"/"}>Community</Link>
                  <Link href={"/"}>Official 3rd Party Merch</Link>
                </div>
              </div>
              <div className="row-span-2">
                <h1 className="mb-6 text-indigo-500">Policies</h1>
                <div className="flex flex-col items-start gap-2 text-neutral-100">
                  <Link href={"/"}>Terms</Link>
                  <Link href={"/"}>Privacy</Link>
                  <Link href={"/"}>Cookie Settings</Link>
                  <Link href={"/"}>Guidelines</Link>
                  <Link href={"/"}>Acknowledgements</Link>
                  <Link href={"/"}>Licenses</Link>
                  <Link href={"/"}>Moderation</Link>
                  <Link href={"/"}>Company Information</Link>
                </div>
              </div>
            </div>

            {/*------------------End Grid----------------*/}

            <div className="h-[0.8px] bg-indigo-500 w-full mt-10"></div>

            <div className="flex items-center justify-between mt-10">
              <Image
                src={"/discord-logo-white.png"}
                width={120}
                height={100}
                alt="logo"
              />
              <button className="px-3 py-2 text-sm font-semibold transition duration-200 bg-indigo-500 rounded-full text-neutral-50 hover:shadow-xl hover:bg-indigo-400 ">
                Sign up
              </button>{" "}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
