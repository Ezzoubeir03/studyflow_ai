import Sidebar from "../components/Sidebar";

export default function Layout({ children}){
    return (
    <div className = "flex">
        <Sidebar />
        <main className="flex-1 min-h-screen bg-gray-100 p-6">
            {children}
        </main>
    </div>
    );
}