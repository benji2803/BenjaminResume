import React, { useMemo, useEffect, useState } from "react";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Moon, Sun, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ======== QUICK START ========
// 1) Edit the `profile` object below with your real info.
// 2) Add/remove sections as you like.
// 3) Click the Download button (prints clean PDF via browser print).
// 4) Optional: deploy to Netlify, Vercel, or GitHub Pages.

const profile = {
  name: "Your Name",
  title: "Your Role • Specialties",
  summary:
    "Short, high-impact summary (~2–4 lines). Mention domain strengths, years of experience, tools, and outcomes.",
  location: "City, State, Country",
  email: "you@example.com",
  phone: "+1 (555) 123-4567",
  website: "https://yourdomain.com",
  github: "https://github.com/your-handle",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Python",
    "Go",
  ],
  projects: [
    {
      name: "Project One",
      link: "https://project-one.example",
      description:
        "One-liner on what the project does and why it matters. Add metrics if possible.",
      highlights: [
        "Implemented X improving Y by 35%",
        "Designed Z architecture to scale to 1M requests/day",
      ],
      tech: ["React", "Node", "Postgres", "AWS"],
    },
    {
      name: "Project Two",
      link: "https://project-two.example",
      description:
        "Brief description that focuses on impact and your contributions.",
      highlights: ["Launched in 6 weeks", "98% Lighthouse performance"],
      tech: ["Next.js", "Vercel", "Prisma"],
    },
  ],
  experience: [
    {
      company: "Company A",
      role: "Senior Software Engineer",
      location: "Remote",
      start: "Jan 2023",
      end: "Present",
      bullets: [
        "Led development of X resulting in Y measurable impact.",
        "Owned end-to-end delivery for feature Z across A, B, C teams.",
        "Mentored 3 engineers; created internal tooling that reduced build times by 40%.",
      ],
      tech: ["TypeScript", "React", "AWS", "CI/CD"],
    },
    {
      company: "Company B",
      role: "Software Engineer",
      location: "Hybrid",
      start: "Aug 2020",
      end: "Dec 2022",
      bullets: [
        "Implemented data pipeline processing 20M+ events/day.",
        "Co-authored internal style guide adopted by 4 teams.",
      ],
      tech: ["Python", "Airflow", "Kafka", "Docker"],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "B.S. in Computer Science",
      dates: "2016 – 2020",
      notes: "GPA 3.8/4.0, Dean's List, ACM Chair",
    },
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", year: "2024" },
    { name: "Google Professional Cloud Developer", year: "2023" },
  ],
};

function useSystemTheme() {
  const prefersDark = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [dark, setDark] = useState(prefersDark);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, setDark };
}

export default function ResumeSite() {
  const { dark, setDark } = useSystemTheme();

  // SEO + JSON-LD Schema for Person/Resume
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      url: profile.website,
      jobTitle: profile.title,
      email: profile.email,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.location,
      },
      sameAs: [profile.github, profile.linkedin].filter(Boolean),
      knowsAbout: profile.skills,
    };

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(jsonLd);

    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);

  const printPDF = () => window.print();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{profile.name}</div>
          <div className="flex items-center gap-2 print:hidden">
            <Button variant="secondary" className="rounded-2xl" onClick={printPDF}>
              <Download className="h-4 w-4 mr-2" /> Download PDF
            </Button>
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="mx-auto max-w-5xl px-4 py-8 print:py-6">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name}</h1>
            <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">{profile.title}</p>
            <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{profile.summary}</p>
          </div>
          <Card className="md:col-span-1 shadow-sm print:shadow-none">
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${profile.email}`} className="underline underline-offset-2">{profile.email}</a></li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={`tel:${profile.phone}`} className="underline underline-offset-2">{profile.phone}</a></li>
                {profile.website && (
                  <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> <a href={profile.website} className="underline underline-offset-2" target="_blank" rel="noreferrer">{profile.website}</a></li>
                )}
                {profile.github && (
                  <li className="flex items-center gap-2"><Github className="h-4 w-4" /> <a href={profile.github} className="underline underline-offset-2" target="_blank" rel="noreferrer">GitHub</a></li>
                )}
                {profile.linkedin && (
                  <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /> <a href={profile.linkedin} className="underline underline-offset-2" target="_blank" rel="noreferrer">LinkedIn</a></li>
                )}
              </ul>
            </CardContent>
          </Card>
        </div>
      </header>

      {/* Skills */}
      <section className="mx-auto max-w-5xl px-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.map((s, i) => (
            <Badge key={i} className="rounded-full text-sm px-3 py-1">{s}</Badge>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-5xl px-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-4 space-y-4">
          {profile.experience.map((job, i) => (
            <Card key={i} className="shadow-sm print:shadow-none">
              <CardContent className="p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-medium">
                    {job.role} • <span className="text-slate-600 dark:text-slate-300">{job.company}</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{job.start} – {job.end}</div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{job.location}</div>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {job.tech?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.tech.map((t, k) => (
                      <Badge key={k} variant="secondary" className="rounded-full">{t}</Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-4 py-4">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {profile.projects.map((p, i) => (
            <Card key={i} className="shadow-sm print:shadow-none">
              <CardContent className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <a href={p.link} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-2">{p.name}</a>
                </div>
                <p className="mt-2 text-slate-700 dark:text-slate-300 text-sm">{p.description}</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                  {p.highlights?.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech?.map((t, k) => (
                    <Badge key={k} variant="outline" className="rounded-full">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="mx-auto max-w-5xl px-4 py-4 grid md:grid-cols-2 gap-4">
        <Card className="shadow-sm print:shadow-none">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold tracking-tight">Education</h2>
            <div className="mt-3 space-y-3">
              {profile.education.map((e, i) => (
                <div key={i}>
                  <div className="font-medium">{e.school}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{e.degree}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{e.dates}</div>
                  {e.notes && <div className="text-sm mt-1">{e.notes}</div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm print:shadow-none">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {profile.certifications.map((c, i) => (
                <li key={i} className="flex items-center justify-between gap-2">
                  <span>{c.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{c.year}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-sm text-slate-500 print:hidden">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind. 
          <a className="ml-1 underline underline-offset-2" href={profile.github} target="_blank" rel="noreferrer">Source</a>
        </p>
      </footer>

      {/* Print styles */}
      <style>{`
        @media print {
          html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:py-6 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
