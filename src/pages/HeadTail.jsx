import { Joystick, Sparkles } from "lucide-react";
import { useState } from "react";
import BackButton from "../components/BackButton";

function HeadTail() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!["H", "T"].includes(currentValue)) {
      setError("Please provide some value");
      return;
    }
    setError("");

    setSelectedValues((prevValue) => {
      const newValues = prevValue.map((values) => [...values]);
      const lastPosition = newValues.length - 1;

      if (!newValues.length || newValues[lastPosition][0] !== currentValue) {
        newValues.push([currentValue]);
      } else {
        console.log("inside else block:", newValues[lastPosition]);
        newValues[lastPosition].push(currentValue);
      }
      return newValues;
    });
    setCurrentValue("");
  }

  function handleClear() {
    setSelectedValues([]);
    setError("");
    setCurrentValue("");
  }

  function getName(value) {
    return value === "H" ? "Head" : "Tail";
  }

  function getClass(value) {
    return value === "H" ? "bg-purple-700" : "bg-blue-700";
  }

  return (
    <div className="min-h-screen flex flex-col gap-28 items-center p-10 bg-gradient-to-br from-slate-900 via-purple-900 to bg-slate-900">
      <BackButton />
      <div className="flex flex-col items-center gap-9">
        <div className="size-20 animate-bounce rounded-full border-blue-600 border-4 bg-gradient-to-br from-blue-400 to-blue-500 text-blue-900 flex items-center justify-center shadow-inner">
          <Joystick className="size-10" />
        </div>
        <div className="flex gap-5 items-center">
          <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-purple-400 to-blue-400">
            Head & Tail Game
          </h1>
          <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>

        <div className="space-y-5 text-center max-w-4xl">
          <p className="text-lg text-slate-400">
            Choose Head or Tail from the dropdown and build your stack! Watch as
            your selections create dynamic columns.
          </p>
        </div>
      </div>

      {/* selection section */}
      <div className="w-full max-w-xl rounded-2xl p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl text-center space-y-6">
        <h2 className="text-2xl font-semibold text-white">
          Make Your Selection
        </h2>

        <select
          className="w-full max-w-lg mx-auto px-4 py-2 text-white rounded-md bg-white/20  border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
          onChange={(e) => setCurrentValue(e.target.value)}
          value={currentValue}
        >
          <option id="option" value="">
            Select a value
          </option>
          <option id="option" value="H">
            Head
          </option>
          <option id="option" value="T">
            Tail
          </option>
        </select>

        {/* Submit button placeholder */}
        <div className="flex gap-3 px-20">
          <button
            onClick={handleClear}
            className="w-full max-w-xs mx-auto px-4 py-2 rounded-md border border-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            className="w-full max-w-xs mx-auto px-4 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
          >
            Submit
          </button>
        </div>

        {/* Validation message placeholder */}
        {error && <p className="text-sm text-red-400 italic">{error}</p>}
      </div>

      {/* table section */}
      <div className="flex justify-center gap-6 pt-6">
        {selectedValues.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center gap-1">
            {col.map((val, rowIndex) => (
              <div
                key={rowIndex}
                className={`size-14 flex items-center justify-center text-white font-bold ${getClass(
                  val
                )} rounded`}
              >
                {getName(val)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeadTail;
