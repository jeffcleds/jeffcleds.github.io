export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  responsibilities: string[];
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

export const profileData = {
  name: "Ernie Joseph Cledera",
  profileImage: "/placeholder.svg", // Replace with your profile image path, e.g., "/profile.jpg"
  introduction: `My name is Ernie Joseph Cledera, a tech-savvy Virtual Assistant with 3+ years of experience optimizing workflows, data management, and digital tools to deliver accurate, high-quality support. Strong communicator skilled in client relations, time management, and leveraging technology to boost productivity.`,
  birthDate: '1998-04-09',
  email: "cledera.ernie@gmail.com",
  phone: "+63 929 652 9698",
  location: "Philippines",
};

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
  },
  {
    id: "ateneo-intern",
    title: "Ateneo de Naga University",
    subtitle: "Engineering Intern",
    date: "2016",
    responsibilities: [
      "Completed a 3-month Engineering Internship at Ateneo De Naga University, providing hardware and technical support throughout the university and conducted network design and troubleshooting, install different types of operating systems and attended seminars regarding cybersecurity.",
    ],
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
    logo: "/placeholder.svg", // Replace with STI logo path, e.g., "/sti-logo.png"
  },
  {
    id: "ateneo-university",
    title: "Ateneo De Naga University",
    location: "Naga City, Philippines",
    subtitle: "Bachelor of Engineering Technology Major in Computer Engineering Technology",
    date: "2014 - 2018",
    logo: "/placeholder.svg", // Replace with Ateneo logo path, e.g., "/ateneo-logo.png"
  },
];

export const editingToolsData: { icon: string; name: string; className?: string }[] = [
  { icon: "Ae", name: "After Effects", className: "bg-purple-600 text-white" },
  { icon: "Pr", name: "Premiere Pro", className: "bg-blue-600 text-white" },
  { icon: "🎨", name: "DaVinci Resolve", className: "bg-gray-800 text-white" },
];

export const languagesData: { flag: string; name: string }[] = [
  { flag: "🇵🇭", name: "Filipino" },
  { flag: "🇬🇧", name: "English (UK)" },
  { flag: "🇺🇸", name: "English (US)" },
];

export const portfolioLinksData: PortfolioLink[] = [
  { id: "bento", name: "Bento", icon: "🎨", url: "https://bento.me/yourusername", className: "bg-green-500 text-white" },
  { id: "behance", name: "Behance", icon: "Bē", url: "https://behance.net/yourusername", className: "bg-blue-700 text-white" },
  { id: "instagram", name: "Instagram", icon: "📷", url: "https://instagram.com/jeffcleds", className: "bg-pink-500 text-white" },
  { id: "youtube", name: "Youtube", icon: "▶️", url: "https://youtube.com/@yourusername", className: "bg-red-600 text-white" },
  { id: "dribbble", name: "Dribbble", icon: "🏀", url: "https://dribbble.com/yourusername", className: "bg-pink-700 text-white" },
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