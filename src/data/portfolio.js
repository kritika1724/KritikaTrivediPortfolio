import {
  FaBasketballBall,
  FaCloud,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLayerGroup,
  FaLightbulb,
  FaLinkedinIn,
  FaPlane,
  FaRocket,
  FaSpa,
  FaUtensils,
} from "react-icons/fa";
import hobbyTravel from "../assets/hobbies/airplanelight.jpeg";
import hobbyBadminton from "../assets/hobbies/badminton2.jpeg";
import hobbyCoding from "../assets/hobbies/coding2.jpeg";
import hobbyCooking from "../assets/hobbies/cooking2.jpeg";
import hobbyYoga from "../assets/hobbies/yoga.jpeg";

export const profile = {
  name: "Kritika Trivedi",
  role: "Software Engineer",
  tagline: "Software Engineer • Open to Technical Roles • Always Learning",
  intro:
    "I build software projects across web and development workflows, and I am open to diverse technical roles where I can contribute, learn quickly, and grow.",
  github: "https://github.com/kritika1724",
  repositories: "https://github.com/kritika1724?tab=repositories",
  linkedin: "https://www.linkedin.com/in/kritika-trivedi-86b213246/",
  leetcode: "https://leetcode.com/u/kritika2117/",
  card: "https://my-card-eight-iota.vercel.app/",
};

export const navItems = [
  { label: "About", id: "about", path: "/about" },
  { label: "Education", id: "education", path: "/education" },
  { label: "Skills", id: "skills", path: "/skills" },
  { label: "Projects", id: "projects", path: "/projects" },
  { label: "Hobbies", id: "hobbies", path: "/hobbies" },
  { label: "Contact", id: "contact", path: "/contact" },
];

export const externalLinks = [
  { label: "LeetCode", href: profile.leetcode },
  { label: "My Card", href: profile.card },
];

export const heroFocus = [
  {
    icon: FaLaptopCode,
    title: "Technical Foundation",
    copy: "Hands-on experience with software projects, core development concepts, and practical problem solving.",
  },
  {
    icon: FaCloud,
    title: "Project Experience",
    copy: "Built projects across web, software, and machine learning while continuing to explore areas like cloud.",
  },
  {
    icon: FaLightbulb,
    title: "Adaptable Approach",
    copy: "Open to diverse technical roles, quick to learn, and comfortable working with new tools and problem spaces.",
  },
];

export const stats = [
  { value: "7", label: "featured projects" },
  { value: "2026", label: "graduation timeline" },
  { value: "14+", label: "tools and technologies" },
  { value: "Open", label: "to technical roles" },
];

export const aboutHighlights = [
  {
    icon: FaRocket,
    title: "Hands-on builder",
    copy: "I like learning by making projects that combine logic, structure, and real UI decisions.",
  },
  {
    icon: FaCode,
    title: "Clean execution",
    copy: "I enjoy turning ideas into experiences that feel interactive, readable, and practical.",
  },
  {
    icon: FaLightbulb,
    title: "Curious mindset",
    copy: "Exploring new tools and technologies is a core part of how I keep growing.",
  },
];

export const aboutSkills = [
  "React.js",
  "Java",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
  "Ethical Hacking",
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    college: "AKTU University",
    year: "2022 - 2026",
    metric: "CGPA: 7.8",
  },
  {
    degree: "Higher Secondary",
    college: "Rajkiya Abhinav Vidyalay",
    year: "2021 - 2022",
    metric: "Percentage: 78%",
  },
  {
    degree: "Secondary School",
    college: "Jagran Public School",
    year: "2019 - 2020",
    metric: "Percentage: 81%",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    copy: "Designing responsive, interactive interfaces with a strong focus on usability.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    title: "Backend",
    copy: "Building application logic, routing, data handling, and API-driven flows.",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "SQL"],
  },
  {
    title: "Programming",
    copy: "Core languages I use to learn concepts, solve problems, and implement solutions.",
    skills: ["Java", "C/C++", "Python"],
  },
  {
    title: "Workflow & Foundations",
    copy: "Tools and fundamentals that support collaboration, version control, and security awareness.",
    skills: ["Git & GitHub", "Ethical Hacking"],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A live e-commerce website with real-time product listings, secure user authentication, cart management, and payment integration. Built with a React frontend and deployed for public access.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    status: "Completed",
    link: "https://kannauj-attars.onrender.com/",
    feature: "Real-time product listings, authentication, cart, and payments.",
  },
  {
    title: "Stock Monitoring Tool",
    description:
      "Built a stock-tracking app with real-time data, secure authentication, and MongoDB integration. Added unit tests (Jest) and prepping AWS deployment.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    link: "https://github.com/kritika1724/Fullstack-stock-monitoring",
    feature: "Real-time tracking, secure auth, database integration, and tests.",
  },
  {
    title: "Essence Exchange",
    description:
      "Developed a perfume marketplace with secure authentication, ownership-based CRUD operations, and a validated review system for a smoother user experience.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS"],
    status: "Completed",
    link: "https://github.com/kritika1724/EssenceExchange",
    feature: "Marketplace flows, ownership-based CRUD, and validated reviews.",
  },
  {
    title: "Fake News Detection Model",
    description: "Developed a ML model to classify news as fake or genuine.",
    techStack: ["Python", "Logistic Regression", "Pandas", "Scikit-learn"],
    link: "https://github.com/kritika1724/fakenewsdetection",
    feature: "Binary classification workflow with Python ML tooling.",
  },
  {
    title: "Portfolio & College Helpdesk Website",
    description:
      "Created a responsive personal portfolio and college helpdesk site.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/kritika1724/portfolio",
    feature: "Responsive static web experience for portfolio and support use cases.",
  },
  {
    title: "Mini Chatting App",
    description:
      "Built a chat app with message creation, editing, deletion, and server-side rendering.",
    techStack: ["Node.js", "Express", "MongoDB", "EJS"],
    link: "https://github.com/kritika1724/mini-chatting-app-backend",
    feature: "Message create, edit, delete flows with server-rendered views.",
  },
  {
    title: "Express Quora Clone",
    description:
      "A simple Quora-like CRUD web app built with Express.js, EJS, and Method-Override. Users can create, read, update, and delete posts dynamically.",
    techStack: ["Express.js", "EJS", "MongoDB", "Node.js"],
    status: "Completed",
    link: "https://github.com/kritika1724/Express-quora-clone",
    feature: "Dynamic post CRUD with Express routing and EJS templates.",
  },
];

export const hobbies = [
  {
    title: "Travel",
    desc: "I love exploring new places, discovering hidden gems, and capturing memorable moments. Traveling inspires me and fuels my creativity!",
    img: hobbyTravel,
    icon: FaPlane,
  },
  {
    title: "Playing Outdoor Games",
    desc: "I love staying active by playing outdoor games like badminton and tennis. It keeps me energized, competitive, and refreshed!",
    img: hobbyBadminton,
    icon: FaBasketballBall,
  },
  {
    title: "Coding & Problem Solving",
    desc: "I love solving problems and building creative solutions with code. Experimenting keeps me curious and motivated!",
    img: hobbyCoding,
    icon: FaLaptopCode,
  },
  {
    title: "Cooking & Foodie Adventures",
    desc: "I love experimenting in the kitchen and trying new recipes. Being a foodie, I enjoy creating and tasting delicious dishes!",
    img: hobbyCooking,
    icon: FaUtensils,
  },
  {
    title: "Yoga & Mindfulness",
    desc: "Practicing yoga and mindfulness helps me stay focused, balanced, and calm.",
    img: hobbyYoga,
    icon: FaSpa,
  },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "Projects", href: profile.repositories, icon: FaExternalLinkAlt },
];

export const sectionIcons = {
  education: FaGraduationCap,
  projects: FaLayerGroup,
};
