import { motion } from "framer-motion";
import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data";

function Line({ children }: { children: React.ReactNode }) {
  return (
    <div className="leading-relaxed">
      <span className="text-emerald-300">$</span> echo{" "}
      {children}
    </div>
  );
}

export default function Contact() {
  return (
    <TerminalWindow title="contact" className="terminal-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center text-center text-emerald-200"
      >
        <div className="space-y-2">
          {/* email */}
          <Line>
            <a
              href={`mailto:${profile.email}`}
              className="text-emerald-400 hover:underline"
              aria-label="Send email"
            >
              "{profile.email}"
            </a>
          </Line>

          {/* github */}
          <Line>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
              aria-label="Open GitHub profile"
            >
              "{profile.github}"
            </a>
          </Line>

          {/* linkedin */}
          <Line>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
              aria-label="Open LinkedIn profile"
            >
              "{profile.linkedin}"
            </a>
          </Line>

          {/* instagram */}
          <Line>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
              aria-label="Open Instagram profile"
            >
              "{profile.instagram}"
            </a>
          </Line>
        </div>

       
      </motion.div>
    </TerminalWindow>
  );
}
