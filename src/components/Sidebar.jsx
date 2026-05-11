export default function Sidebar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#111827]">

      <h1 className="text-2xl font-bold text-purple-400">
        StudyFlow AI
      </h1>

      <div className="flex items-center gap-6 text-gray-300">

        <a
          href="/"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition"
        >
          📊 Dashboard
        </a>

        <a
          href="/notes"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition"
        >
          📝 Notes
        </a>

        <a
          href="/tasks"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition"
        >
          ✅ Tasks
        </a>

        <a
          href="/timer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-purple-500/20 hover:text-white transition"
        >
          ⏱ Timer
        </a>

      </div>

    </nav>
  );
}