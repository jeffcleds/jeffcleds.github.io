export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  responsibilities: string[];
  logo?: string; // Added optional logo property
}

export interface Education {
  id: string;
  title: string;
  location: string;
  subtitle: string;
  date: string;
  logo?: string; // Path to logo image
}

export interface PortfolioLink {
  id: string;
  name: string;
  icon: string; // Emoji or Lucide icon name
  url: string;
  className?: string; // For specific styling if needed
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export const profileData = {
  name: "Ernie Joseph Cledera",
  profileImage: "/ernie-joseph-cledera.jpg", // Replace with your profile image path, e.g., "/profile.jpg"
  introduction: `My name is <span class="highlight">Ernie Joseph Cledera</span>, a tech-savvy Virtual Assistant with 3+ years of experience optimizing workflows, data management, and digital tools to deliver accurate, high-quality support. Strong communicator skilled in client relations, time management, and leveraging technology to boost productivity.`,
  birthDate: '1998-04-09',
  email: "cledera.ernie@gmail.com",
  phone: "+63 929 652 9698",
  location: "Philippines",
};

export const socialLinks = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "Linkedin", // Lucide icon name
    url: "https://www.linkedin.com/in/ernie-cledera/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "Github", // Lucide icon name
    url: "https://github.com/jeffcleds",
  },
  {
    id: "x",
    name: "X (Twitter)",
    icon: "X", // Lucide icon name
    url: "https://twitter.com/yourusername", // Placeholder
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "Instagram", // Lucide icon name
    url: "https://www.instagram.com/yourusername", // Placeholder
  },
];

export const experienceData: Experience[] = [
  {
    id: "mr-rooter",
    title: "Mr. Rooter Plumbing",
    subtitle: "Senior Dispatcher",
    date: "2023 - 2026",
    responsibilities: [
      "Coordinates schedules, assigns tasks, and monitors workflows to ensure timely service delivery.",
      "Communicates effectively between clients, teams, and management while maintaining accuracy in records and prioritizing urgent requests with a consistent 90% booking rate.",
    ],
    logo: "/mr-rooter-logo.png", // Example path for Mr. Rooter logo
  },
  {
    id: "bell-canada",
    title: "Bell Canada",
    subtitle: "Technical Service Representative",
    date: "2019 - 2020",
    responsibilities: [
      "Manage customers' account records, walkthrough their technical concerns in internet, satellite TV, and mobile phone services, provide support with billing concerns, and establish trust by providing excellent customer service and resolving telephone inquiries in a timely manner.",
      "Best in first call resolution. Best in average hold time resolving inquiries within 140 seconds.",
    ],
    logo: "/bell-canada-logo.png", // Example path for Bell Canada logo
  },
  {
    id: "concentrix",
    title: "Concentrix",
    subtitle: "Customer Service Representative",
    date: "2018 - 2019",
    responsibilities: [
      "Manages insurance claims, verifies coverage, and ensures compliance with policies and regulations.",
      "Provides clients with accurate information, resolves inquiries, and maintains detailed records to support smooth processing, resolving 95% of cases within first contact, improving satisfaction.",
    ],
    logo: "/concentrix-logo.png", // Example path for Concentrix logo
  },
  {
    id: "ateneo-intern",
    title: "Ateneo de Naga University",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
    logo: "/ateneo-logo.png", // Using existing Ateneo logo
  },
];

export const interestsData: string[] = [
  "🎮 Gaming",
  "🧰 PC Building / Modding",
  "🧠 Coding / Automation Projects",
  "📚 Reading",
  "📝 Journaling",
  "🎬 Watching Movies",
  "✈️ Traveling",
  "🎵 Playing Instruments",
  "🐟 Aquascaping",
];

export const softSkillsData: string[] = [
  "🧑‍🤝‍🧑 Leadership",
  "⚡ Multitasking",
  "💪 Work Ethic",
  "🎯 Decision-making",
  "🔍 Attention to detail",
  "🧩 Critical thinking",
  "🤝 Conflict resolution",
  "🛠 Problem-solving",
  "⏳ Time management",
  "🌱 Adaptability",
  "🗣 Communication",
  "🤝 Collaboration",
  "🎨 Creativity",
];

export const technicalSkillsData: string[] = [
  "💻 Programming (C++, Java, C#, Kotlin, Python)",
  "📱 Software & App Development",
  "🗄 Database Management",
  "🌐 Networking (Cisco)",
  "🔒 Cybersecurity",
  "🎨 UI/UX Design",
  "🌍 Web Development (HTML, CSS, JS)",
  "🤖 Artificial Intelligence",
  "☁️ Cloud Computing",
  "📊 Data Analysis",
  "📋 Project Management",
];

export const educationData: Education[] = [
  {
    id: "sti-college",
    title: "STI College Naga",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Science in Information Technology",
    date: "2022 - 2026",
    logo: "/sti-logo.png", // Replace with STI logo path, e.g., "/sti-logo.png"
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Engineering Technology Major in Computer Engineering Technology",
    date: "2014 - 2018",
    logo: "/ateneo-logo.png", // Replace with Ateneo logo path, e.g., "/ateneo-logo.png"
  },
];

export const softwareUsedData: { icon: string; name: string; className?: string }[] = [
  { icon: "VS", name: "Visual Studio", className: "bg-purple-700 text-white" },
  { icon: "VSC", name: "Visual Studio Code", className: "bg-blue-500 text-white" },
  { icon: "GPT", name: "ChatGPT", className: "bg-green-500 text-white" },
  { icon: "GH", name: "Github", className: "bg-gray-800 text-white" },
  { icon: "U", name: "Unity", className: "bg-gray-900 text-white" },
  { icon: "HS", name: "HubSpot", className: "bg-orange-500 text-white" },
  { icon: "ZD", name: "Zendesk", className: "bg-green-600 text-white" },
  { icon: "M365", name: "Microsoft 365", className: "bg-red-600 text-white" },
  { icon: "GS", name: "Google Suite", className: "bg-blue-600 text-white" },
  { icon: "GW", name: "Google Workspace", className: "bg-yellow-600 text-white" },
  { icon: "ST", name: "ServiceTitan", className: "bg-blue-800 text-white" },
  { icon: "NB", name: "Netbeans", className: "bg-blue-700 text-white" },
  { icon: "IDLE", name: "IDLE", className: "bg-orange-400 text-white" },
  { icon: "Z", name: "Zoom", className: "bg-blue-400 text-white" },
  { icon: "ZP", name: "Zapier", className: "bg-orange-700 text-white" },
  { icon: "A", name: "Asana", className: "bg-pink-500 text-white" },
  { icon: "M", name: "Monday", className: "bg-blue-500 text-white" },
  { icon: "S", name: "Slack", className: "bg-purple-500 text-white" },
  { icon: "O", name: "Outlook", className: "bg-blue-700 text-white" },
  { icon: "GHL", name: "GoHighLevel", className: "bg-red-700 text-white" },
  { icon: "SAP", name: "SAP", className: "bg-blue-800 text-white" },
  { icon: "C", name: "Cisco", className: "bg-blue-900 text-white" },
  { icon: "PT", name: "Packet Tracer", className: "bg-teal-600 text-white" },
  { icon: "PS", name: "Photoshop", className: "bg-blue-800 text-white" },
  { icon: "CNV", name: "Canva", className: "bg-purple-600 text-white" },
  { icon: "PR", name: "Premiere Pro", className: "bg-purple-900 text-white" },
  { icon: "AI", name: "Illustrator", className: "bg-orange-500 text-white" },
  { icon: "DW", name: "Dreamweaver", className: "bg-blue-700 text-white" },
  { icon: "CC", name: "CapCut", className: "bg-blue-500 text-white" },
  { icon: "NT", name: "Notion", className: "bg-gray-700 text-white" },
];

export const languagesData: string[] = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "HTML5",
  "CSS3",
  "PHP",
  "C++",
  "Visual Basic",
  "C#",
  "Kotlin",
  "SQL",
  "Lua",
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills and projects.",
    image: "/my-portfolio-website.jpg", // Updated path
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "/portfolio-details-under-maintenance", // Changed to the maintenance route
  },
  {
    id: 2,
    title: "Calabanga Community College - School Management System",
    description: "A comprehensive school management system designed for Calabanga Community College, handling student records, course management, and administrative tasks.",
    image: "/calabanga-sms.png", // Updated path
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/yourusername/calabanga-sms", // Placeholder
    liveLink: "/portfolio-details-under-maintenance", // Changed to the maintenance route
  },
  {
    id: 3,
    title: "Class Scheduler",
    description: "A web application to help students and instructors manage and visualize class schedules, assignments, and deadlines.",
    image: "/class-scheduler.png", // Updated path
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/yourusername/class-scheduler", // Placeholder
    liveLink: "/portfolio-details-under-maintenance", // Changed to the maintenance route
  },
  {
    id: 4,
    title: "Simple Calculator",
    description: "A basic interactive calculator application built with React and TypeScript, demonstrating fundamental UI and state management.",
    image: "/ai-calculator.png", // AI-generated photo
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/simple-calculator", // Placeholder
    liveLink: "/portfolio-details-under-maintenance", // Changed to the maintenance route
  },
];

export const diplomaData = {
  title: "Diploma",
  subtitle: "Animation and Graphic Design",
  location: "Delhi, India",
  date: "2017-18",
};

export const graduationData = {
  title: "Graduation",
  subtitle: "Bachelor of fine Arts",
  location: "IGNOU Delhi, India",
  date: "2017-21",
};