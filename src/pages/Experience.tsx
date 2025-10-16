import { motion } from "framer-motion";
import TerminalWindow from "../components/TerminalWindow";
import ExperienceTable from "../components/ExperienceTable";

export default function Experience() {
  return (
    <TerminalWindow title="experience" className="terminal-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 text-emerald-200"
      >
        <h2 className="text-2xl text-emerald-300 mb-4">Experience</h2>
        <ExperienceTable />
      </motion.div>
    </TerminalWindow>
  );
}
