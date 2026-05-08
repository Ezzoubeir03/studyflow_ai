import { NavLink } from "react-router-dom";
import { LayoutDashboard, FileText, CheckSquare, Timer } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5">
            <h1 className="text-xl font-bold mb-8">StudyFlow AI</h1>
            <ul className="space-y-4">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `flex items-center gap-3 transition-colors ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                        }
                    >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/notes" 
                        className={({ isActive }) => 
                            `flex items-center gap-3 transition-colors ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                        }
                    >
                        <FileText size={20} />
                        <span>Notes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/tasks" 
                        className={({ isActive }) => 
                            `flex items-center gap-3 transition-colors ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                        }
                    >
                        <CheckSquare size={20} />
                        <span>Tasks</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/timer" 
                        className={({ isActive }) => 
                            `flex items-center gap-3 transition-colors ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                        }
                    >
                        <Timer size={20} />
                        <span>Timer</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}