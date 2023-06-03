import Image from "next/image";
import { Bars3Icon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

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
    <main className="flex flex-col justify-between min-h-screen ">
      <div>
        {/*-------------------- Navbar section --------------------*/}
        <nav className="flex items-center justify-between p-6">
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
          <div className="flex flex-col gap-6 p-6 mt-20">
            <h1
              className={`text-5xl font-bold tracking-tight  uppercase ${passionOne.className}`}
            >
              Imagine a place...
            </h1>
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
              src={"/heroVertical.svg"}
              width={1000}
              height={1000}
              alt="hero image"
            />
          </div>
        </section>

        {/*-------------------- Info section --------------------*/}

        <section>
          <div className="flex flex-col items-center gap-32 p-6 bg-neutral-200">
            {/*---------- box ----------*/}

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
        </section>

        {/*-------------------- Info section --------------------*/}

        <section>
          <div className="flex flex-col items-start gap-6 p-6 bg-neutral-100 ">
            <h1
              className={`text-4xl font-bold uppercase text-neutral-800 ${passionOne.className}`}
            >
              Reliable tech for staying close
            </h1>
            <p className="text-sm text-neutral-700">
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
            <h1 className="text-3xl font-bold text-neutral-800">Ready ro start your journey?</h1>
            <button className="flex items-center justify-between gap-2 py-4 text-xl font-medium duration-200 bg-indigo-500 rounded-full px-36 text-neutral-50 hover:shadow-xl hover:bg-indigo-400 hover:shadow-neutral-400 ">
                <ArrowDownTrayIcon className="w-6" />
                Download for Mac
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
