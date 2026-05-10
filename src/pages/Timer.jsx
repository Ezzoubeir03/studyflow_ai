import { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {

        if (seconds > 0) {
          setSeconds(seconds - 1);

        } else {

          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);

          } else {
            setMinutes(minutes - 1);
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

  return (
    <div className="min-h-screen bg-[#0b1020] text-white flex items-center justify-center p-8">
      
      <div className="bg-[#131c31] border border-[#1f2a44] rounded-3xl p-10 w-full max-w-md shadow-2xl text-center">
        
        <h1 className="text-4xl font-bold mb-8">
          Pomodoro Timer
        </h1>

        {/* Timer Display */}
        <div className="text-7xl font-bold text-violet-400 mb-10">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Start
          </button>

          <button
            onClick={pauseTimer}
            className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Pause
          </button>

          <button
            onClick={resetTimer}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}