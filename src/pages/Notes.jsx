import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      title: "React Hooks",
      content: "Learn useEffect and useState deeply.",
      category: "React",
    },
    {
      title: "Binary Search",
      content: "Practice LeetCode binary search problems.",
      category: "Algorithms",
    },
    {
      title: "UI Inspiration",
      content: "Modern dashboard ideas and layouts.",
      category: "Design",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  function addNote() {
    if (!newTitle.trim() || !newContent.trim()) return;

    setNotes((prev) => [
      {
        title: newTitle,
        content: newContent,
        category: "General",
      },
      ...prev,
    ]);

    setNewTitle("");
    setNewContent("");
  }

  function deleteNote(indexToDelete) {
    setNotes((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1020] text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-5xl font-bold">
            Notes
          </h1>

          <p className="text-gray-400 mt-2">
            Organize your learning and ideas.
          </p>
        </div>

        <button
          onClick={addNote}
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
          + New Note
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-5 mb-8">

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">
          <p className="text-gray-400 text-sm">
            Total Notes
          </p>

          <h2 className="text-4xl font-bold text-violet-400 mt-2">
            {notes.length}
          </h2>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">
          <p className="text-gray-400 text-sm">
            Categories
          </p>

          <h2 className="text-4xl font-bold text-blue-400 mt-2">
            4
          </h2>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">
          <p className="text-gray-400 text-sm">
            Favorites
          </p>

          <h2 className="text-4xl font-bold text-pink-400 mt-2">
            12
          </h2>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="col-span-3">

          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6 h-full">

            <h2 className="text-2xl font-bold mb-6">
              Categories
            </h2>

            <div className="space-y-3">

              <button className="w-full text-left bg-violet-500/20 text-violet-300 px-4 py-3 rounded-2xl">
                ⚛ React
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                🧠 Algorithms
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                🎨 Design
              </button>

              <button className="w-full text-left hover:bg-[#1f2937] px-4 py-3 rounded-2xl transition">
                📚 General
              </button>
            </div>

          </div>
        </div>

        {/* CENTER NOTES */}
        <div className="col-span-6 space-y-6">

          {/* INPUT SECTION */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Create Note
            </h2>

            <div className="space-y-4">

              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Note title..."
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

              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Write your note..."
                rows={6}
                className="
                  w-full
                  bg-[#0f1729]
                  border border-[#1f2937]
                  rounded-2xl
                  px-5
                  py-4
                  outline-none
                  resize-none
                  focus:border-violet-500
                "
              />

            </div>
          </div>

          {/* NOTES GRID */}
          <div className="grid grid-cols-2 gap-5">

            {notes.map((note, i) => (
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

                <div className="flex justify-between items-start mb-4">

                  <span className="bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-xl">
                    {note.category}
                  </span>

                  <button
                    onClick={() => deleteNote(i)}
                    className="text-red-400 text-sm"
                  >
                    Delete
                  </button>
                </div>

                <h2 className="text-2xl font-bold mb-3">
                  {note.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {note.content}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-3 space-y-6">

          {/* RECENT ACTIVITY */}
          <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-5">
              Recent Activity
            </h2>

            <div className="space-y-4">

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  React Hooks
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Updated 2 hours ago
                </p>
              </div>

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  Binary Search
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Updated yesterday
                </p>
              </div>

              <div className="bg-[#0f1729] p-4 rounded-2xl">
                <p className="font-semibold">
                  UI Design
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Updated 3 days ago
                </p>
              </div>

            </div>
          </div>

          {/* QUICK TIPS */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Writing Tips
            </h2>

            <p className="leading-relaxed text-white/90">
              Organize notes into categories and keep summaries short for faster review.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}