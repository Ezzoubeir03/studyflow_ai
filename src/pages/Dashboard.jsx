import { useState, useEffect } from "react";

export default function Dashboard() {
  const stats = [
    { title: "Study Hours", value: "5.2h", description: "Today" },
    { title: "Completed Tasks", value: "12", description: "This Week" },
    { title: "Focus Sessions", value: "8", description: "Pomodoro Sessions" },
    { title: "Productivity", value: "92%", description: "Efficiency Rate" },
  ];

  const [todayTasks, setTodayTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todayTasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { title: "Finish React Project", completed: true },
          { title: "Study Algorithms", completed: false },
          { title: "Review JavaScript Concepts", completed: false },
          { title: "Work on UI Design", completed: true },
        ];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todayTasks", JSON.stringify(todayTasks));
  }, [todayTasks]);

  function addTask() {
    if (!newTask.trim()) return;

    setTodayTasks((prev) => [
      ...prev,
      { title: newTask, completed: false },
    ]);

    setNewTask("");
  }

  function deleteTask(indexToDelete) {
    setTodayTasks((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  function toggleTask(indexToToggle) {
    setTodayTasks((prev) =>
      prev.map((task, index) =>
        index === indexToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const aiSuggestions = [
    "You are most productive between 7 PM and 10 PM.",
    "Try a 25-minute Pomodoro session for better focus.",
    "Your study consistency improved by 18% this week.",
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 h-screen sticky top-0 bg-[#111827] border-r border-[#1f2937] flex flex-col justify-between p-6">

        <div>

          {/* LOGO */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-violet-400">
              StudyFlow
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Productivity System
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-3">

            <button className="w-full flex items-center gap-3 bg-violet-500/20 text-violet-300 px-4 py-3 rounded-2xl">
              📊 Dashboard
            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
              📝 Notes
            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
              ✅ Tasks
            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
              ⏱ Timer
            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
              📈 Analytics
            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
              ⚙ Settings
            </button>
          </div>
        </div>

        {/* USER CARD */}
        <div className="bg-[#1a2336] p-4 rounded-2xl border border-[#2a3446]">
          <p className="font-semibold">Ezzoubeir</p>

          <p className="text-sm text-gray-400 mt-1">
            Leveling up daily 🚀
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-hidden">

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Welcome back 👋
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Track your focus and finish your goals.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* CENTER SECTION */}
          <div className="col-span-8 space-y-6">

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5">

              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="
                    bg-gradient-to-br
                    from-[#151c2e]
                    to-[#101726]
                    border border-[#263041]
                    rounded-3xl
                    p-6
                    shadow-lg
                  "
                >
                  <p className="text-gray-400 text-sm mb-2">
                    {stat.title}
                  </p>

                  <h2 className="text-4xl font-bold text-violet-400">
                    {stat.value}
                  </h2>

                  <p className="text-gray-500 mt-2 text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* TASK BOARD */}
            <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 min-h-[500px]">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-6">

                <div>
                  <h2 className="text-3xl font-bold">
                    Today's Tasks
                  </h2>

                  <p className="text-gray-400 mt-1">
                    Stay focused and finish your goals.
                  </p>
                </div>

                <div className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-xl">
                  {todayTasks.length} Tasks
                </div>
              </div>

              {/* INPUT */}
              <div className="flex gap-4 mb-8">

                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="
                    flex-1
                    bg-[#0f1729]
                    border border-[#1f2937]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-violet-500
                  "
                />

                <button
                  onClick={addTask}
                  className="
                    bg-violet-500
                    hover:bg-violet-600
                    transition
                    px-8
                    rounded-2xl
                    font-semibold
                  "
                >
                  Add
                </button>
              </div>

              {/* TASKS GRID */}
              <div className="grid grid-cols-2 gap-4">

                {todayTasks.map((task, i) => (
                  <div
                    key={i}
                    className="
                      bg-[#101826]
                      p-5
                      rounded-2xl
                      border border-[#1f2937]
                      hover:border-violet-500/40
                      hover:translate-y-[-2px]
                      transition
                    "
                  >
                    <div
                      onClick={() => toggleTask(i)}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          task.completed
                            ? "bg-green-500"
                            : "border border-gray-500"
                        }`}
                      />

                      <p
                        className={`text-lg ${
                          task.completed
                            ? "line-through text-gray-500"
                            : ""
                        }`}
                      >
                        {task.title}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteTask(i)}
                      className="
                        mt-5
                        text-sm
                        text-red-400
                        hover:text-red-300
                      "
                    >
                      Delete Task
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-4 space-y-6">

            {/* STREAK */}
            <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-8 text-center min-h-[220px] flex flex-col justify-center">

              <p className="text-gray-400 mb-3">
                Current Streak
              </p>

              <h1 className="text-7xl font-bold text-violet-400">
                12
              </h1>

              <p className="text-gray-500 mt-3">
                Days Consistent
              </p>
            </div>

            {/* FOCUS CARD */}
            <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  Focus Rate
                </h2>

                <span className="text-violet-400 font-bold">
                  92%
                </span>
              </div>

              <div className="w-full bg-[#1f2937] rounded-full h-3">
                <div className="bg-violet-500 h-3 rounded-full w-[92%]" />
              </div>

              <p className="text-gray-400 text-sm mt-4">
                Your productivity is higher than last week.
              </p>
            </div>

            {/* AI INSIGHTS */}
            <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-5">
                AI Insights
              </h2>

              <div className="space-y-4">

                {aiSuggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="
                      bg-[#101826]
                      border border-[#1f2937]
                      rounded-2xl
                      p-4
                    "
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {suggestion}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK TIMER */}
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8">

              <p className="text-sm opacity-80 mb-2">
                Pomodoro Session
              </p>

              <h1 className="text-6xl font-bold mb-6">
                25:00
              </h1>

              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
                Start Focus
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}