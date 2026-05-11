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
          {
            title: "Finish React Project",
             completed: true
             },
          {
             title: "Study Algorithms",
              completed: false 
            },
          { 
            title: "Review JavaScript Concepts",
             completed: false 
            },
          { 
            title: "Work on UI Design",
             completed: true
             },
        ];
  });

  const [newTask, setNewTask] = useState("");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todayTasks", JSON.stringify(todayTasks));
  }, [todayTasks]);

  function addTask() {
    if (!newTask.trim()) return;

    const task = {
      title: newTask,
      completed: false,
    };

    setTodayTasks((prev) => [...prev, task]);
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
    <div className="min-h-screen bg-[#0b1020] text-white p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">Dashboard</h1>
        <p className="text-gray-400 text-lg">
          Welcome back to your StudyFlow AI workspace.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-gray-400 text-sm mb-3">{stat.title}</h2>
            <p className="text-4xl font-bold text-violet-400 mb-2">
              {stat.value}
            </p>
            <span className="text-gray-500 text-sm">
              {stat.description}
            </span>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Tasks */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-semibold">Today's Tasks</h2>
            <span className="text-sm text-violet-400">
              {todayTasks.length} Tasks
            </span>
          </div>

          {/* Add Task */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="flex-1 bg-[#0f1729] border border-[#1f2a44] rounded-xl px-4 py-3 outline-none"
            />
            <button
              onClick={addTask}
              className="bg-violet-500 hover:bg-violet-600 px-6 py-3 rounded-xl"
            >
              Add
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {todayTasks.map((task, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#0f1729] p-4 rounded-xl"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleTask(index)}
                >
                  <div
                    className={`w-4 h-4 rounded-full ${
                      task.completed
                        ? "bg-green-500"
                        : "border-2 border-gray-500"
                    }`}
                  />
                  <p
                    className={`text-sm ${
                      task.completed
                        ? "line-through text-gray-500"
                        : "text-white"
                    }`}
                  >
                    {task.title}
                  </p>
                </div>

                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-400 hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Study Streak */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">Study Streak</h2>

          <div className="flex flex-col items-center text-center">
            <div className="w-40 h-40 rounded-full border-8 border-violet-500 flex items-center justify-center mb-6">
              <div>
                <h3 className="text-5xl font-bold text-violet-400">12</h3>
                <p className="text-gray-400">Days</p>
              </div>
            </div>

            <p className="text-gray-400">
              You have studied consistently for 12 days. Keep going.
            </p>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">AI Suggestions</h2>

          <div className="space-y-4">
            {aiSuggestions.map((text, index) => (
              <div
                key={index}
                className="bg-[#0f1729] p-4 rounded-xl border border-violet-500/20"
              >
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}