import { motion } from "framer-motion";
import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data";

export default function Projects() {
  return (
    <TerminalWindow title="projects" className="terminal-full">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="p-6 grid md:grid-cols-2 gap-4 text-emerald-200"
      >
        {profile.projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-emerald-700/50 p-4 rounded hover:bg-emerald-900/10 transition"
          >
            <h3 className="text-emerald-300 font-semibold">{p.name}</h3>
            <p className="text-sm">{p.desc}</p>
            <div className="text-xs text-emerald-400 mt-1">
              {p.stack.join(" · ")}
            </div>
          </a>
        ))}
      </motion.div>
    </TerminalWindow>
  );
}
