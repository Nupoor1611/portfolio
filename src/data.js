// All site content lives here. Edit this file, no component changes needed.
export const profile = {
  name: "Nupoor Dhamanse",
  title: "Software Developer",
  city: "Navi Mumbai",
  tagline:
    "Front-end developer who also builds the backend, from React screens to Spring Boot APIs.",
  email: "nupoordhamanse@gmail.com",
  // Add your profile URLs to show them in the Contact section. Leave null to hide.
  github: null,
  linkedin: null,
  about: [
    "I am a software developer with a Bachelor of Engineering in Computer Engineering from Mumbai University and hands-on experience building mobile and web applications, with a focus on the front end.",
    "I like turning real business needs into usable software, from workforce attendance tools and an internal sales CRM to a full-stack clothing store with online payments. I keep learning new technologies and care about clean, reliable code.",
    "Alongside development, I have worked in client-facing operations roles, which strengthened my communication, documentation and problem-solving skills.",
  ],
  facts: [
    ["Degree", "B.E. Computer Engineering"],
    ["College", "Pillai College of Engineering, Mumbai University"],
    ["Aggregate", "8.34 out of 10"],
    ["Main stack", "React, React Native, Java, Spring Boot"],
    ["Based in", "Navi Mumbai, Maharashtra, India"],
  ],
};

export const projects = [
  {
    title: "Vastraa, an online clothing store",
    kind: "Personal project, full-stack",
    image: "/projects/vastraa.svg",
    description:
      "A full-stack e-commerce app. The Spring Boot REST backend uses JWT authentication with user and admin roles, JPA with MySQL, Cloudinary for product images, and Razorpay payments with server-side signature checks, plus Cash on Delivery. The React front end has search, filters, sorting, pagination, reviews, a cart, checkout, order history and an admin panel for managing products.",
    tags: [
      "Java",
      "Spring Boot",
      "JWT",
      "MySQL",
      "React",
      "Razorpay",
      "Cloudinary",
    ],
    live: null,
    code: null,
  },
  {
    title: "Team2Log",
    kind: "Professional project at Copia Consultancy, mobile and web",
    image: "/projects/team2log.svg",
    description:
      "Workforce management for teams spread across locations, such as IT, factory installations, machine sales and street teams. People fill in attendance and timesheets and apply for leave, which keeps distributed teams coordinated.",
    tags: ["Mobile", "Web", "Front end"],
    live: null,
    code: null,
  },
  {
    title: "CE-CRM",
    kind: "Professional project at Copia Consultancy, mobile and web",
    image: "/projects/cecrm.svg",
    description:
      "An internal sales and marketing app for employees. They create and manage leads, search customer records, get lead updates, assess opportunities and view reports and dashboards. It is internal only, so it is not publicly downloadable.",
    tags: ["Mobile", "CRM", "Dashboards"],
    live: null,
    code: null,
  },
  {
    title: "Tracing an IP address behind a VPN",
    kind: "Final year project, July 2022 to April 2023",
    image: "/projects/vpn.svg",
    description:
      "Traces the real IP address of cybercriminals who hide behind server or VPN addresses. It detects whether an address belongs to a proxy or VPN provider and, if so, returns the relevant information.",
    tags: ["Networking", "Security"],
    live: null,
    code: null,
  },
];

export const academicProjects = [
  [
    "Medicine Reminder System",
    "Semester III, July 2020",
    "A mobile app that gives older users an accurate medication history and timely reminders.",
  ],
  [
    "Calorie Counter App",
    "Semester IV, January 2021",
    "Tracks the calories a user eats each day, with custom plans and a self-set daily limit.",
  ],
  [
    "Yoga and Diet Scheduler",
    "Semester V, July 2021",
    "A website that uses machine learning to recommend nutrition plans and yoga poses.",
  ],
  [
    "Algoviz, algorithm visualization",
    "Semester VI, January 2022",
    "Shows step by step how algorithms work, so students can understand them more easily.",
  ],
];

export const skills = [
  {
    group: "Languages and frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "React JS",
      "React Native",
      "Java",
      "Spring Boot",
      "Python",
      "Flutter",
      "Dart",
      "C",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  { group: "Databases", items: ["SQL", "MySQL", "JPA / Hibernate"] },
  {
    group: "Tools",
    items: [
      "Git and GitHub",
      "Postman",
      "Visual Studio",
      "IntelliJ",
      "Eclipse",
      "Android Studio",
      "Figma",
      "Adobe Photoshop",
      "XAMPP",
    ],
  },
  {
    group: "Also",
    items: ["Microsoft Word", "Excel", "PowerPoint", "Windows"],
  },
];

export const experience = [
  {
    role: "Executive",
    org: "CBRE South Asia Pvt. Ltd., Airoli",
    period: "July 2026 to present",
    points: [
      "Resolve employee and client inquiries and track complaints, escalating complex issues.",
      "Manage work permits, entry passes and material gate passes, and coordinate access control across departments.",
      "Prepare the Daily Manpower Report, occupancy reports and escalation matrices, and verify attendance and manpower data.",
    ],
  },
  {
    role: "Helpdesk Executive",
    org: "Compass Group Pvt. Ltd., Airoli",
    period: "January 2025 to June 2026",
    points: [
      "Handled employee and client inquiries and complaint tracking with a focus on satisfaction.",
      "Issued and managed work permits, entry passes and gate passes, and kept occupancy and lost-and-found records.",
      "Kept client-wise and building-wise escalation matrices up to date.",
    ],
  },
  {
    role: "Software Developer",
    org: "Copia Consultancy Services Pvt. Ltd.",
    period: "February 2024 to December 2024",
    points: [
      "Developed and tested applications, including Team2Log and CE-CRM, and worked on front-end UI and UX.",
      "Researched new technologies to improve system efficiency, and analysed and corrected code errors.",
      "Took part in daily stand-ups to report progress and discuss solutions.",
    ],
  },
  {
    role: "Trainee Engineer Intern",
    org: "Copia Consultancy Services Pvt. Ltd.",
    period: "September 2023 to January 2024",
    points: [
      "Built and tested features with senior engineers, and debugged issues to improve reliability.",
      "Used Git for version control and collaboration, and coordinated installations and testing.",
    ],
  },
];

export const education = [
  {
    role: "Bachelor of Engineering, Computer Engineering",
    org: "Pillai College of Engineering, Mumbai University",
    period: "Current aggregate 8.34 out of 10",
    points: [],
  },
];

export const certifications = [
  "Programming for Everybody (Getting Started with Python), Coursera",
  "Pandas and Python, Kaggle",
  "Web Development Essentials, ITVEDANT",
  "Problem Solving through Programming in C, NPTEL",
  "TCS iON Career Skills, TCS iON",
  "Workshops: Fundamentals of C Programming; Web Development using UI/UX and Graphic Design; iOS Application Development",
];
