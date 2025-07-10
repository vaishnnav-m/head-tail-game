import {
  ArrowRight,
  Bitcoin,
  Brain,
  Info,
  Joystick,
  Layers,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to bg-slate-900 flex flex-col gap-14 items-center p-20 ">
      <div className="flex flex-col items-center gap-9">
        <div className="size-20 animate-bounce rounded-full border-yellow-600 border-4 bg-gradient-to-br from-yellow-400 to-yellow-500 text-yellow-900 flex items-center justify-center shadow-inner">
          <Bitcoin className="size-10" />
        </div>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-emerald-400">
          Head & Tail
        </h1>

        <div className="space-y-5 text-center max-w-4xl">
          <p className="text-slate-300 text-xl">
            Welcome to the interactive letter-matching game of Head and Tail!
          </p>
          <span className="text-slate-400 text-xl">
            Explore a simple yet fun logic-based app where you add Head and Tail
            values, visualize them in columns, and see how they build up over
            time.
          </span>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-300">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Dynamic Stack View</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-300">
            <Brain className="w-4 h-4 text-purple-400" />
            <span>Smart Column Logic</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-300">
            <RotateCcw className="w-4 h-4 text-emerald-400" />
            <span>Auto Reset & Validation</span>
          </div>
        </div>
      </div>

      <div className="flex gap-10 max-w-5xl">
        <Link
          to="/head-tail"
          className="relative bg-gradient-to-br from-blue-600 to to-purple-700 p-10 rounded-xl space-y-5 group hover:scale-103 duration-300 ease-in"
        >
          <div className="absolute right-5 top-5 size-2 bg-purple-900 rounded-full animate-pulse"></div>
          <div className="flex text-white gap-2">
            <Joystick />
            <h2 className="text-2xl font-bold">Start Playing</h2>
          </div>
          <p className="text-slate-200">
            Select Head or Tail from a dropdown and build dynamic columns based
            on your input. Try it out now!
          </p>
          <div className="flex font-semibold text-slate-200 gap-1">
            <span>Play Now</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
        <Link
          to="/about"
          className="relative bg-gradient-to-br from-emerald-600 to-teal-700 p-10 rounded-xl space-y-5 group hover:scale-103 duration-300 ease-in"
        >
          <div className="absolute right-5 top-5 size-2 bg-emerald-900 rounded-full animate-pulse"></div>
          <div className="flex text-white gap-2">
            <Info />
            <h2 className="text-2xl font-bold">Learn More</h2>
          </div>
          <p className="text-slate-200">
            Understand how the app works, how inputs are stacked, and explore
            the simple logic behind the Head & Tail page.
          </p>
          <div className="font-semibold flex text-slate-200 gap-1">
            <span>Learn More</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="right-5 top-5 size-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span className="text-slate-400">Make a move Head or Tail ?</span>
        <div className="right-5 top-5 size-2 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Home;
