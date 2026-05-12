import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-[#0b1020] text-white min-h-screen">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;