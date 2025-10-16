import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin } from "./Icons";
import { profile } from "../data";


const TABS = [
  { label: "home", href: "/" },
  { label: "skills", href: "/skills" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },   
  { label: "contact", href: "/contact" },
];

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({ title = "terminal", children, className = "" }: Props) {
  const location = useLocation();

  return (
    <div className={`terminal-loader ${className}`}>
      <div className="terminal-header">
        <span className="terminal-title">{title}</span>
        <div className="terminal-controls">
          <span className="control close" />
          <span className="control minimize" />
          <span className="control maximize" />
        </div>

        <nav className="terminal-nav">
          {TABS.map((t) => (
            <Link key={t.href} to={t.href} className={`tab ${location.pathname === t.href ? "active" : ""}`}>
              {t.label}
            </Link>
          ))}
          {profile.github && (
            <a className="tab flex items-center" href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github />
            </a>
          )}
          {profile.linkedin && (
            <a className="tab flex items-center" href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin />
            </a>
          )}
        </nav>
      </div>

      <div className="terminal-content">{children}</div>
    </div>
  );
}
