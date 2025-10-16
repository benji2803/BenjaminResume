// src/App.tsx
import { Routes, Route } from "react-router-dom";
import TerminalWindow from "./components/TerminalWindow";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import "./index.css";

export default function App() {
  return (
    <TerminalWindow title="aboutben@web: ~">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </TerminalWindow>
  );
}
