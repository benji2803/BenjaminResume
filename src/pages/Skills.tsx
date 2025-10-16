import { motion } from "framer-motion";
import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data";

export default function Skills() {
  return (
    <TerminalWindow title="skills" className="terminal-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="p-6 text-emerald-200"
      >
        <h2 className="text-2xl text-emerald-300 mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {profile.skills.map((s) => (
            <li key={s} className="border border-emerald-600 rounded px-3 py-1">
              {s}
            </li>
          ))}
        </ul>
      </motion.div>
    </TerminalWindow>
  );
}
