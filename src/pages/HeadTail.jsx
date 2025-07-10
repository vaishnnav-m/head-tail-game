import { Sparkles } from "lucide-react";

function HeadTail() {
  return (
    <div className="h-screen flex flex-col items-center p-10 bg-gradient-to-br from-slate-900 via-purple-900 to bg-slate-900">
      <div className="flex flex-col items-center gap-5">
        <div className="h-fit flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-emerald-500 animate-pulse" />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-emerald-400">
            Head & Tail Game
          </h1>
          <Sparkles className="w-8 h-8 text-emerald-500 animate-pulse" />
        </div>
        <p className="text-lg text-slate-400">
          Choose H or T from the dropdown and build your stack! Watch as your
          selections create dynamic columns.
        </p>
      </div>
    </div>
  );
}

export default HeadTail;
