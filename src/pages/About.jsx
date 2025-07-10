import { Book } from "lucide-react";
import BackButton from "../components/BackButton";

function About() {
  return (
    <div className="w-full min-h-screen p-20 bg-gradient-to-br from-slate-900 via-purple-900 to bg-slate-900">
      <BackButton />
      <div className="flex flex-col items-center gap-9">
        <div className="size-20 animate-bounce rounded-full border-emerald-600 border-4 bg-gradient-to-br from-emerald-400 to-emerald-500 text-emerald-900 flex items-center justify-center shadow-inner">
          <Book className="size-10" />
        </div>
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-emerald-400">
          About Head & Tail
        </h1>

        <div className="space-y-5 text-center max-w-4xl">
          <p className="text-cyan-300 text-lg">
            Explore interactive logic-building and pattern recognition through
            our creative take on the classic Heads or Tails concept — no actual
            coin flipping, just your input and smart stacking!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4">
        {/* Card 1 - Yellow */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 shadow-lg p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">
            Manual Input, Visual Feedback
          </h3>
          <p className="text-yellow-900 text-sm leading-relaxed">
            Rather than tossing a coin, you select either <strong>Head</strong>{" "}
            or
            <strong>Tail</strong> from a dropdown. Your choices are stacked into
            columns based on simple logic — repeat values stack downward, while
            alternating values start new columns.
          </p>
        </div>

        {/* Card 2 - Emerald */}
        <div className="bg-emerald-100 border-l-4 border-emerald-500 shadow-lg p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">
            Real-Time Column Building
          </h3>
          <p className="text-emerald-900 text-sm leading-relaxed">
            Each time you submit a value, the interface updates instantly to
            reflect your growing stack — making it a hands-on exercise in how
            conditional logic and DOM rendering work.
          </p>
        </div>

        {/* Card 3 - Blue */}
        <div className="bg-blue-100 border-l-4 border-blue-500 shadow-lg p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Clean & Fair Input Flow
          </h3>
          <p className="text-blue-900 text-sm leading-relaxed">
            With dropdown validation and automatic reset after each submission,
            the interface ensures your inputs are intentional and clear —
            offering a smooth user experience.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 mt-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner text-white space-y-10">
        <h2 className="text-3xl font-bold text-center text-blue-300">
          Features & How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-yellow-300">Features</h3>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-emerald-400"></div>
              <p className="text-slate-200">
                Dynamic stack visualization based on your input.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-purple-400"></div>
              <p className="text-slate-200">
                Smart column logic — same values stack, new ones branch out.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-yellow-400"></div>
              <p className="text-slate-200">
                Modern glassmorphic UI with smooth transitions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-pink-400"></div>
              <p className="text-slate-200">
                Built-in validation to prevent empty submissions.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-blue-400"></div>
              <p className="text-slate-200">
                Auto-reset of dropdown after each entry for better UX.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-emerald-300">
              How It Works
            </h3>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-red-400"></div>
              <p className="text-slate-200">
                Choose either <strong>H</strong> or <strong>T</strong> from the
                dropdown.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-purple-400"></div>
              <p className="text-slate-200">
                Click the Submit button to record your choice.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-yellow-400"></div>
              <p className="text-slate-200">
                If it matches the previous column’s value, it stacks below.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-emerald-400"></div>
              <p className="text-slate-200">
                If it's a different value, a new column is started beside it.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-2 mt-2 rounded-full bg-pink-400"></div>
              <p className="text-slate-200">
                Keep adding values and watch the stack evolve visually.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
