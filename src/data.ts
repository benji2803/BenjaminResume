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
      name: "AI chatbot",
      link: "https://example.com",
      desc: 
        "Using command line tools and python, I personalized and deployed an AI chatbot that can answer questions I have offline without the use of modern web based AI tools. Becoming more dependent on the own data I collect and store locally.",
      stack: ["Coming Soon"],
    },
    {
      name: "Virtual Machine hosting",
      link: "https://example.com",
      desc:
        "This project was intended to practice and create sandbox enviroments and virtualize whole networks. This practice paired with CISCO mapping helped put into perspective the delicacies and challenges that IT professionals must overcome to create reliable networks for client buildings. I have simulated a 20 person Company with 10 mobile stations that are paired with windows 10 and are all ran through a router configured with windows server",
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
      dates: "August 2025 – December 2025",
      bullets: [
        "Networked and collaborated with many talented tech professionals to gain insights into cybersecurity practices and industry trends. Assigned to work on a project to create a secure web application using a React stack with a focus on frontend security.",
        "Created a safe frontend to backend connection for secure user data transmission containing sensitive information. Created a smoooth and accessible UI for users to easily navigate and interact with the web application.",
        "Worked with waymonauts from Waymo to help create an imitation launch of a waymo fleet to a city that could be of use of these AV's. Strategically planned with a group of interns as I was given the task to help create technical fail safes for certain scenarios that could happen in the city.",
      ],
    },
    {
      company: "Branford Quality Finishing",
      title: "IT assistant/Secretary",
      dates: "Jan 2016 – Sep 2022",
      bullets: [
        "Handled basic office and helpdesk task for a warehouse group of 10 employees such as printer server fixes, Computer wipes, Active directory, Onboarding & Offboarding process, legacy machine upkeeping",
        "More advanced server work with a network of timer based industrial ovens, Surveilence Camera server upkeep and logging, Excel sheet documenting, In house invoicing program upkeep",
      ],
    },
  ],
} as const;
