import { motion } from "framer-motion";
import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data";
import { TypeLine, TypeCycle } from "../components/Typewriter";
import { useState } from "react";

export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);

  return (
    <TerminalWindow title="home" className="terminal-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-full flex flex-col justify-center items-center gap-3 text-emerald-200"
      >
        {/* $ whoami */}
        <div>
          <span className="prompt">$</span>{" "}
          <TypeLine text="WELCOME I AM" onDone={() => setShowName(true)} />
        </div>

        {/* Benjamin Maldonado (reveals after command finishes) */}
        {showName && (
          <div className="text-3xl font-bold">
            <TypeLine text={profile.name} speed={35} startDelay={150} onDone={() => setShowRole(true)} />
          </div>
        )}

        {/* Cycling role phrases */}
        {showRole && (
          <div className="text-xl text-emerald-400">
            <TypeCycle phrases={profile.roleCycle} />
          </div>
        )}

        {/* Optional summary fades in after a moment */}
        {showRole && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="max-w-xl text-center text-emerald-200/90"
          >
            {profile.summary}
          </motion.p>
        )}
      </motion.div>
    </TerminalWindow>
  );
}
