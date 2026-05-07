import { Link } from "react-router-dom";

export default function Sidebar(){
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5">
            <h1 className= "text-xl font-bold mb-8">StudyFlow AI</h1>
            <ul className="space-y-4">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/notes">Notes</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/timer">Timer</Link></li>
            </ul>
        </div>
    );
}