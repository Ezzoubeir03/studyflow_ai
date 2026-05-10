export default function Dashboard() {
  const stats = [
    {
      title: "Study Hours",
      value: "5.2h",
      description: "Today",
    },
    {
      title: "Completed Tasks",
      value: "12",
      description: "This Week",
    },
    {
      title: "Focus Sessions",
      value: "8",
      description: "Pomodoro Sessions",
    },
    {
      title: "Productivity",
      value: "92%",
      description: "Efficiency Rate",
    },
  ];

  const todayTasks = [
    {
      title: "Finish React Dashboard",
      completed: true,
    },
    {
      title: "Study Algorithms",
      completed: false,
    },
    {
      title: "Review JavaScript Concepts",
      completed: false,
    },
    {
      title: "Work on UI Design",
      completed: true,
    },
  ];

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

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-gray-400 text-sm mb-3">
              {stat.title}
            </h2>

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
        {/* Today's Tasks */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              Today's Tasks
            </h2>

            <span className="text-sm text-violet-400">
              4 Tasks
            </span>
          </div>

          <div className="space-y-4">
            {todayTasks.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#0f1729] p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      task.completed
                        ? "bg-green-500"
                        : "border-2 border-gray-500"
                    }`}
                  ></div>

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
              </div>
            ))}
          </div>
        </div>

        {/* Study Streak */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6">
            Study Streak
          </h2>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-40 h-40 rounded-full border-8 border-violet-500 flex items-center justify-center mb-6">
              <div>
                <h3 className="text-5xl font-bold text-violet-400">
                  12
                </h3>

                <p className="text-gray-400">Days</p>
              </div>
            </div>

            <p className="text-gray-400 max-w-sm">
              You have studied consistently for 12 days.
              Keep the momentum going.
            </p>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="bg-[#131c31] border border-[#1f2a44] rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            AI Suggestions
          </h2>

          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-[#0f1729] p-4 rounded-xl border border-violet-500/20"
              >
                <p className="text-gray-300 leading-relaxed">
                  {suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}