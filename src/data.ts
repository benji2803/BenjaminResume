export const profile = {
  name: "Benjamin Maldonado",
  roleCycle: ["Cybersecuity", "Frontend Security", "UI/UX Design"],
  location: "Los Angeles, CA",
  email: "benwebfl@gmail.com",
  instagram: "https://www.instagram.com/benchi255/",
  github: "https://github.com/benji2803",
  linkedin: "https://www.linkedin.com/in/benjamin-maldonado-043447269/",
  summary:
    "Web developer specializing in building and maintaining scalable, high-traffic web applications with clean,safe, accessible UI. Please feel free to explore my page and ask me any questions! ",
  skills: ["React", "TypeScript", "Tailwind", "Vite", "Node", "REST", "MongoDB", "AWS Cloud Foundation", "Azure Cloud Foundation", "Java", "Python", "Javascript", "CSS", "Bash Scripting", "Git", "Linux kernel"],
  projects: [
    {
      name: "MissionSecure",
      link: "https://mission-secure.vercel.app/",
      desc:
        "Collaborated on a researched based quiz website on Cybersecurity Ethics & Policies fully integrated with AI grading & Feedback and an automated info board on the latest tech talk. Was aassigned Frontend design & Security and ensured smooth, safe and user friendly design.",
      stack: ["React", "TypeScript", "Tailwind", "Vite"],
    },
    {
      name: "Coming Soon",
      link: "https://example.com",
      desc:
        "Coming Soon",
      stack: ["Coming Soon"],
    },
  ],
  experience: [
    {
      company: "After School All Stars",
      title: "Program Leader",
      dates: "2022 – Present",
      bullets: [
        "Handled an after-school program of 30+ students, teaching coding and web development helping students grasp basic programming concepts in a fun and engaging way.",
        "Organized and led fun weekly coding workshops and activities, fostering a collaborative learning environment.",
      ],
    },
    {
      company: "LA Tech ",
      title: "Cybersecurity Intern",
      dates: "2025 – Present",
      bullets: [
        "Networked and collaborated with many talented tech professionals to gain insights into cybersecurity practices and industry trends. Assigned to work on a project to create a secure web application using a React stack with a focus on frontend security.",
        "Created a safe frontend to backend connection for secure user data transmission containing sensitive information. Created a smoooth and accessible UI for users to easily navigate and interact with the web application.",
      ],
    },
  ],
} as const;
