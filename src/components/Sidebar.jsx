import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Timer,
  Brain,
} from "lucide-react";

export default function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: FileText,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Timer",
      path: "/timer",
      icon: Timer,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 border-r border-gray-800 p-6">
      
      <div className="flex items-center gap-3 mb-12">
        <Brain className="text-purple-400" size={32} />

        <div>
          <h1 className="text-2xl font-bold text-white">
            StudyFlow
          </h1>

          <p className="text-sm text-gray-400">
            AI Workspace
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-purple-500/20 text-purple-400"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {link.name}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}