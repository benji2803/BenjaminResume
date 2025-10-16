import { profile } from "../data";

export default function ExperienceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse border border-emerald-700/40 text-emerald-200">
        <thead>
          <tr className="bg-emerald-900/30 text-emerald-300">
            <th className="p-2 border border-emerald-700/40">Company</th>
            <th className="p-2 border border-emerald-700/40">Title</th>
            <th className="p-2 border border-emerald-700/40">Dates</th>
            <th className="p-2 border border-emerald-700/40">Highlights</th>
          </tr>
        </thead>
        <tbody>
          {profile.experience.map((exp) => (
            <tr key={exp.company} className="hover:bg-emerald-900/10 transition">
              <td className="p-2 border border-emerald-700/40">{exp.company}</td>
              <td className="p-2 border border-emerald-700/40">{exp.title}</td>
              <td className="p-2 border border-emerald-700/40">{exp.dates}</td>
              <td className="p-2 border border-emerald-700/40">
                <ul className="list-disc pl-4 space-y-1 text-sm text-emerald-300/90">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
