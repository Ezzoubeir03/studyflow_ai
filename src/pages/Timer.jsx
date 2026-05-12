import { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(8);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {

        if (seconds > 0) {
          setSeconds((prev) => prev - 1);

        } else {

          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);

          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }

      }, 1000);
    }

    return () => clearInterval(interval);

  }, [isRunning, seconds, minutes]);

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  }

  function setPomodoro() {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  }

  function setShortBreak() {
    setMinutes(5);
    setSeconds(0);
    setIsRunning(false);
  }

  function setLongBreak() {
    setMinutes(15);
    setSeconds(0);
    setIsRunning(false);
  }

  return (
    <div className="min-h-screen bg-[#0b1020] text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Focus Timer
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Stay productive and train your concentration.
          </p>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] px-6 py-4 rounded-2xl">
          <p className="text-sm text-gray-400">
            Sessions Today
          </p>

          <h2 className="text-3xl font-bold text-violet-400">
            {sessions}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT PANEL */}
        <div className="col-span-3 space-y-6">

          {/* TIMER MODES */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Timer Modes
            </h2>

            <div className="space-y-3">

              <button
                onClick={setPomodoro}
                className="
                  w-full
                  bg-violet-500/20
                  text-violet-300
                  px-4
                  py-4
                  rounded-2xl
                  text-left
                "
              >
                🍅 Pomodoro
              </button>

              <button
                onClick={setShortBreak}
                className="
                  w-full
                  hover:bg-[#1f2937]
                  transition
                  px-4
                  py-4
                  rounded-2xl
                  text-left
                "
              >
                ☕ Short Break
              </button>

              <button
                onClick={setLongBreak}
                className="
                  w-full
                  hover:bg-[#1f2937]
                  transition
                  px-4
                  py-4
                  rounded-2xl
                  text-left
                "
              >
                🌙 Long Break
              </button>

            </div>
          </div>

          {/* PRODUCTIVITY CARD */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <p className="text-gray-400 text-sm mb-2">
              Focus Rate
            </p>

            <h2 className="text-5xl font-bold text-violet-400">
              92%
            </h2>

            <p className="text-gray-500 mt-3">
              Your concentration improved this week.
            </p>
          </div>

        </div>

        {/* CENTER TIMER */}
        <div className="col-span-6">

          <div className="
            bg-gradient-to-br
            from-[#151c2e]
            to-[#101726]
            border border-[#263041]
            rounded-[40px]
            p-10
            shadow-2xl
            text-center
            h-full
            flex
            flex-col
            justify-center
          ">

            {/* STATUS */}
            <div className="mb-8">

              <span className="
                bg-violet-500/20
                text-violet-300
                px-5
                py-2
                rounded-full
                text-sm
              ">
                {isRunning ? "Running" : "Paused"}
              </span>

            </div>

            {/* TIMER */}
            <div className="mb-10">

              <h1 className="
                text-[120px]
                font-bold
                text-violet-400
                leading-none
              ">
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </h1>

            </div>

            {/* PROGRESS BAR */}
            <div className="w-full bg-[#1f2937] rounded-full h-4 mb-10 overflow-hidden">

              <div
                className="
                  bg-violet-500
                  h-4
                  rounded-full
                  transition-all
                  duration-1000
                "
                style={{
                  width: `${(minutes / 25) * 100}%`,
                }}
              />

            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 flex-wrap">

              <button
                onClick={startTimer}
                className="
                  bg-green-500
                  hover:bg-green-600
                  transition
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-lg
                "
              >
                ▶ Start
              </button>

              <button
                onClick={pauseTimer}
                className="
                  bg-yellow-500
                  hover:bg-yellow-600
                  transition
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-lg
                "
              >
                ⏸ Pause
              </button>

              <button
                onClick={resetTimer}
                className="
                  bg-red-500
                  hover:bg-red-600
                  transition
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  text-lg
                "
              >
                ↺ Reset
              </button>

            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-3 space-y-6">

          {/* DAILY STATS */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Today's Stats
            </h2>

            <div className="space-y-5">

              <div className="bg-[#0f1729] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">
                  Focus Time
                </p>

                <h2 className="text-3xl font-bold text-violet-400 mt-2">
                  4.5h
                </h2>
              </div>

              <div className="bg-[#0f1729] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">
                  Break Time
                </p>

                <h2 className="text-3xl font-bold text-blue-400 mt-2">
                  42m
                </h2>
              </div>

              <div className="bg-[#0f1729] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">
                  Completed Sessions
                </p>

                <h2 className="text-3xl font-bold text-pink-400 mt-2">
                  8
                </h2>
              </div>

            </div>
          </div>

          {/* AI TIPS */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Focus Tips
            </h2>

            <div className="space-y-4 text-white/90">

              <p>
                🎧 Use calm music during focus sessions.
              </p>

              <p>
                📵 Keep your phone away while studying.
              </p>

              <p>
                💧 Drink water between Pomodoro sessions.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}