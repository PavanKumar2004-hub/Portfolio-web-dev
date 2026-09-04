export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: "Full Stack" | "Frontend";
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  title: string;
  organization: string;
  period: string;
  scoreOrDuration?: string;
  description: string[];
  badge: string;
}

export const PERSONAL_INFO = {
  name: "Jaya Chandra Prakash Pavan Kumar Putta",
  shortName: "Pavan Kumar",
  title: "Full Stack Web Developer",
  headline: "Full Stack Web Developer | MERN & Next.js",
  subHeadline:
    "Building scalable, high-performance web applications with clean component architecture and production-ready technologies.",
  summary:
    "Motivated Full Stack Web Developer with strong skills in JavaScript, React, Next.js, and Node.js, focused on building scalable and high-performance web applications. Developed multiple real-world full-stack projects demonstrating practical experience in frontend development, backend API integration, authentication, and responsive UI design. Strong understanding of component-based architecture, clean coding practices, and performance optimization.",
  location: "Andhra Pradesh, India",
  email: "chandra77807@gmail.com",
  phone: "+91 9701127627",
  resumePath: "/P.J.C.P_Pavan_Kumar_MERN_.pdf",
  resumeFilename: "P.J.C.P_Pavan_Kumar_MERN_.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/pavankumar200411",
    github: "https://github.com/PavanKumar2004-hub",
  },
  stats: [
    { label: "B.Tech CGPA", value: "8.44" },
    { label: "Full-Stack Apps", value: "Production Ready" },
    { label: "Internship", value: "10-Week AICTE" },
    { label: "Responsive UI", value: "100% Mobile First" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Modern, dynamic client architectures with pixel-perfect responsive execution",
    skills: [
      { name: "Next.js" },
      { name: "React.js" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Responsive Design" },
    ],
  },
  {
    category: "Backend & API Services",
    icon: "Server",
    description: "Secure, scalable RESTful APIs, auth pipelines, and messaging queues",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Redis" },
      { name: "JWT Authentication" },
      { name: "BullMQ" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "Relational and NoSQL schemas optimized for performance and integrity",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Database Indexing" },
      { name: "Query Optimization" },
    ],
  },
  {
    category: "Core Engineering & Architecture",
    icon: "Cpu",
    description: "Architectural patterns for speed, reusability, and clean code",
    skills: [
      { name: "Component Architecture" },
      { name: "State Management" },
      { name: "Asynchronous Programming" },
      { name: "API Optimization" },
      { name: "Performance Optimization" },
      { name: "Lazy Loading" },
      { name: "Code Splitting" },
    ],
  },
  {
    category: "Developer Tools & Platforms",
    icon: "Terminal",
    description: "Modern development toolchain and AI-accelerated workflows",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Codex" },
      { name: "Cursor" },
      { name: "Antigravity" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "eh-cart",
    title: "EH_CART",
    subtitle: "Full-Stack E-Commerce Platform",
    timeline: "April 2025 – June 2025",
    description:
      "Comprehensive e-commerce system with JWT authentication, Stripe integration, separate admin/vendor portals, and background job queues (BullMQ/Redis) for automated campaigns.",
    highlights: [
      "Engineered end-to-end e-commerce flow: catalog browsing, interactive cart, secure checkout, and order tracking.",
      "Implemented role-based access control (RBAC) with JWT for customers, vendors, and platform admins.",
      "Built resilient RESTful APIs for product listing/search, cart operations, order processing, and user management.",
      "Crafted modular UI using Next.js, Tailwind CSS, and Radix UI primitives for reusable and responsive components.",
      "Integrated Stripe for automated payments and BullMQ/Redis worker queues for transactional email campaigns.",
      "Optimized PostgreSQL queries, API endpoints, and client rendering for fast initial loads.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Stripe",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveUrl: "https://eh-cart-store.vercel.app",
    githubUrl: "https://github.com/PavanKumar2004-hub/EH_CART_FINAL",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "job-portal",
    title: "Job Portal Application",
    subtitle: "Modern Job Search & Hiring Platform",
    timeline: "2025",
    description:
      "Modern frontend application for job board functionalities with a highly responsive UI, streamlined application flow, and fast client-side filtering.",
    highlights: [
      "Built clean, recruiter-friendly layouts with intuitive job search, filters, and categorized job listings.",
      "Engineered dynamic client-side filtering for rapid job discovery by role, tech stack, and location.",
      "Ensured 100% mobile, tablet, and desktop responsiveness with fluid layouts and accessible navigation.",
      "Integrated REST API endpoints for real-time listings, seamless state transitions, and smooth error states.",
    ],
    techStack: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "REST APIs",
      "Responsive Design",
      "Vercel",
    ],
    liveUrl: "https://job-frontend-amber.vercel.app",
    githubUrl: "https://github.com/PavanKumar2004-hub/job-Frontend",
    featured: true,
    category: "Frontend",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "internship-aicte",
    type: "experience",
    title: "Web Full Stack Developer Intern",
    organization: "AICTE Virtual Internship",
    period: "10-Week Virtual Internship",
    scoreOrDuration: "10 Weeks",
    badge: "Internship",
    description: [
      "Completed intensive 10-week virtual internship focused on end-to-end full stack web development.",
      "Gained hands-on experience in component-based UI development, backend API integration, and database operations.",
      "Improved understanding of real-world development workflows, git collaboration, clean coding practices, and debugging.",
    ],
  },
  {
    id: "education-btech",
    type: "education",
    title: "Bachelor of Technology (B.Tech) - ECE",
    organization: "Swarnandhra College of Engineering and Technology, Seetharampuram",
    period: "2023 – 2026",
    scoreOrDuration: "CGPA: 8.44",
    badge: "Graduation",
    description: [
      "Major in Electronics and Communication Engineering with strong emphasis on software engineering and algorithms.",
      "Consistently achieved academic excellence with an aggregate CGPA of 8.44.",
      "Active participant in technical symposiums, web development workshops, and open-source projects.",
    ],
  },
  {
    id: "education-diploma",
    type: "education",
    title: "Diploma - Electronics and Communication Engineering (ECE)",
    organization: "VSM College of Engineering, Ramachandrapuram",
    period: "2020 – 2023",
    scoreOrDuration: "Percentage: 83.26%",
    badge: "Diploma",
    description: [
      "Graduated with Distinction scoring 83.26%.",
      "Built strong foundation in circuit design, computer hardware, logic design, and basic programming concepts.",
    ],
  },
];
