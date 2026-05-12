import { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("study_tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            title: "Finish React Dashboard",
            priority: "High",
            completed: false,
          },
          {
            title: "Practice LeetCode",
            priority: "Medium",
            completed: true,
          },
          {
            title: "Study Tailwind CSS",
            priority: "Low",
            completed: false,
          },
        ];
  });

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    localStorage.setItem("study_tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (!newTask.trim()) return;

    setTasks((prev) => [
      {
        title: newTask,
        priority,
        completed: false,
      },
      ...prev,
    ]);

    setNewTask("");
    setPriority("Medium");
  }

  function deleteTask(indexToDelete) {
    setTasks((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  function toggleTask(indexToToggle) {
    setTasks((prev) =>
      prev.map((task, index) =>
        index === indexToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function priorityColor(level) {
    if (level === "High") {
      return "text-red-400 bg-red-500/10";
    }

    if (level === "Medium") {
      return "text-yellow-400 bg-yellow-500/10";
    }

    return "text-green-400 bg-green-500/10";
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="min-h-screen bg-[#0b1020] text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Tasks
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Organize and complete your daily goals.
          </p>
        </div>

        <button
          onClick={addTask}
          className="
            bg-violet-500
            hover:bg-violet-600
            transition
            px-6
            py-3
            rounded-2xl
            font-semibold
          "
        >
          + Add Task
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

          <p className="text-sm text-gray-400">
            Total Tasks
          </p>

          <h2 className="text-4xl font-bold text-violet-400 mt-2">
            {tasks.length}
          </h2>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

          <p className="text-sm text-gray-400">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {completedTasks}
          </h2>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

          <p className="text-sm text-gray-400">
            Remaining
          </p>

          <h2 className="text-4xl font-bold text-red-400 mt-2">
            {tasks.length - completedTasks}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT PANEL */}
        <div className="col-span-3">

          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 h-full">

            <h2 className="text-2xl font-bold mb-6">
              Task Filters
            </h2>

            <div className="space-y-3">

              <button className="w-full text-left bg-violet-500/20 text-violet-300 px-4 py-3 rounded-2xl">
                📋 All Tasks
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                ✅ Completed
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                ⏳ Pending
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                🔥 High Priority
              </button>

            </div>

            {/* PRODUCTIVITY CARD */}
            <div className="mt-8 bg-[#0f1729] rounded-2xl p-5 border border-[#1f2937]">

              <p className="text-gray-400 text-sm mb-2">
                Productivity
              </p>

              <h2 className="text-5xl font-bold text-violet-400">
                82%
              </h2>

              <p className="text-gray-500 mt-3 text-sm">
                You completed more tasks than yesterday.
              </p>
            </div>

          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="col-span-6 space-y-6">

          {/* CREATE TASK */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Create New Task
            </h2>

            <div className="space-y-4">

              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter task..."
                className="
                  w-full
                  bg-[#0f1729]
                  border border-[#1f2937]
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  focus:border-violet-500
                "
              />

              <div className="flex justify-between gap-4">

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="
                    bg-[#0f1729]
                    border border-[#1f2937]
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    flex-1
                  "
                >
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>

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
                  Create
                </button>
              </div>

            </div>
          </div>

          {/* TASKS */}
          <div className="grid grid-cols-2 gap-5">

            {tasks.map((task, i) => (
              <div
                key={i}
                className="
                  bg-[#111827]
                  border border-[#1f2937]
                  rounded-3xl
                  p-5
                  hover:border-violet-500/40
                  hover:translate-y-[-3px]
                  transition
                "
              >

                {/* TOP */}
                <div className="flex justify-between items-start mb-5">

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-xl
                      text-sm
                      ${priorityColor(task.priority)}
                    `}
                  >
                    {task.priority}
                  </span>

                  <button
                    onClick={() => deleteTask(i)}
                    className="text-red-400 text-sm"
                  >
                    Delete
                  </button>
                </div>

                {/* TITLE */}
                <h2
                  className={`
                    text-2xl
                    font-bold
                    leading-relaxed
                    ${
                      task.completed
                        ? "line-through text-gray-500"
                        : ""
                    }
                  `}
                >
                  {task.title}
                </h2>

                {/* ACTIONS */}
                <div className="mt-6 flex justify-between items-center">

                  <button
                    onClick={() => toggleTask(i)}
                    className={`
                      px-4
                      py-2
                      rounded-xl
                      text-sm
                      font-semibold
                      ${
                        task.completed
                          ? "bg-green-500/20 text-green-400"
                          : "bg-[#1f2937]"
                      }
                    `}
                  >
                    {task.completed
                      ? "Completed"
                      : "Mark Done"}
                  </button>

                  <p className="text-gray-500 text-sm">
                    Today
                  </p>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-3 space-y-6">

          {/* DAILY GOAL */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8">

            <p className="text-white/80 mb-2">
              Daily Goal
            </p>

            <h1 className="text-6xl font-bold">
              8
            </h1>

            <p className="mt-3 text-white/90">
              Tasks planned today
            </p>
          </div>

          {/* FOCUS CARD */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Focus Tip
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Break large tasks into smaller parts to stay motivated and reduce mental overload.
            </p>

          </div>

          {/* ACTIVITY */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  React Dashboard
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Completed 1 hour ago
                </p>
              </div>

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  Tailwind Practice
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Added 3 hours ago
                </p>
              </div>

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  Algorithms Study
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  Pending
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}