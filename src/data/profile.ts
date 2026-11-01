export const profile = {
  name: 'Jimy',
  role: 'Technical Lead | Backend Engineer',
  location: 'Jakarta, Indonesia',
  phone: '+62 812-7822-7182',
  email: 'jimy1897@gmail.com',
  linkedin: 'https://linkedin.com/in/jimy',
  linkedinLabel: 'linkedin.com/in/jimy',
  yearsExperience: '4+',
  summaryParagraphs: [
    "I'm a Backend Engineer and Technical Lead with 4+ years designing and scaling production backend systems across government data integration, financial services, and HRIS platforms. I primarily work with Node.js, TypeScript, PostgreSQL, and microservices architecture — covering REST API development, system design, database optimization, and backend performance.",
    "Beyond writing code, I take ownership of technical decisions and work closely with frontend, DevOps, and QA teams to deliver stable systems. I've led engineering teams on API contracts, database structures, and development practices, and I'm currently focused on backend systems that handle complex business requirements and large-scale data integration.",
  ],
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: 'Ministry of Home Affairs',
    role: 'Back-end Developer',
    period: 'May 2025 — Present',
    location: 'Jakarta',
    current: true,
    bullets: [
      'Designed and developed scalable RESTful APIs and relational database schemas for national-level data integration systems.',
      'Spearheaded the standardization of API architectures for all regional governments (Pemerintah Daerah), unifying data exchange protocols.',
      'Developed and deployed an automated integration system, eliminating manual onboarding processes for connected platforms.',
      'Optimized API performance and reliability in SIPD-HUB, supporting high-demand digital public services.',
      'Contributed to PELITA, enabling efficient data exchange across government platforms.',
    ],
  },
  {
    company: 'Independent — Technical Lead (Back-end)',
    role: 'Freelance (Part-time)',
    period: 'Feb 2023 — Jan 2026',
    location: 'Jakarta',
    bullets: [
      'Led backend architecture and end-to-end development for 5+ freelance projects with teams of 3–6 developers, successfully delivering scalable system designs, API contracts, and optimized data models.',
      'Acted as the primary technical decision-maker, guiding implementation teams, conducting rigorous code reviews, and ensuring strict architectural consistency.',
      'Designed and delivered high-performance RESTful APIs and integration layers, focusing on reducing latency, improving maintainability, and ensuring system uptime.',
    ],
  },
  {
    company: 'PT Kognitif Skema Indonesia',
    role: 'Back-end Developer',
    period: 'Jun 2022 — Mar 2025',
    location: 'Jakarta',
    bullets: [
      'Managed end-to-end backend development for multiple high-traffic web and mobile applications using Node.js and modern frameworks.',
      'Designed and implemented scalable architectures and third-party API integrations, ensuring secure and seamless data flows.',
      'Optimized relational database schemas and complex queries in PostgreSQL/MySQL, significantly improving application response times and data reliability.',
    ],
  },
  {
    company: 'PT Kyoai Medical Center',
    role: 'Web Developer',
    period: 'Jan 2022 — Jun 2022',
    location: 'Jakarta',
    bullets: [
      'Maintained and enhanced internal web applications for the E-Registration system, supporting high-volume patient registration and operational workflows.',
      'Implemented new features and improvements based on functional requirements, ensuring system stability and usability.',
      'Collaborated with internal stakeholders to troubleshoot issues and deliver timely enhancements.',
    ],
  },
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Backend', items: ['Node.js', 'Express.js', 'Adonis.js', 'REST API', 'Microservices', 'JWT Authentication'] },
  { label: 'Frontend / Mobile', items: ['React Native', 'React.js', 'Next.js'] },
  { label: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { label: 'DevOps', items: ['Linux', 'Nginx', 'PM2', 'Docker'] },
  { label: 'AI-Assisted Development', items: ['OpenAI Codex CLI', 'Claude Code'] },
  { label: 'Tools', items: ['Git', 'GitHub / GitLab', 'Trello', 'Postman', 'Swagger', 'Firebase'] },
]

export const coreCompetencies: string[] = [
  'Architecture Design',
  'Performance Optimization',
  'Database Optimization',
  'API Design',
  'Team Leadership',
]

export const certifications = [
  {
    title: 'Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    date: 'October 2025',
  },
]

export const education = [
  {
    degree: 'Bachelor of Information System',
    school: 'STMIK Insan Pembangunan',
    period: 'Sep 2017 — Jun 2021',
  },
]

export type Project = {
  name: string
  tagline: string
  tags: string[]
  summary: string
  role: string
  contribution: string
  image: string
}

export const projects: Project[] = [
  {
    name: 'HCMS',
    tagline: 'Human Capital Management System',
    tags: ['Node.js', 'REST API', 'Workflow Automation'],
    summary: 'End-to-end HR platform covering recruitment, contracts, payroll, and leave management.',
    role: 'Technical Lead',
    contribution: 'System architecture, API design, and leading the development team.',
    image: '/projects/hcms.webp',
  },
  {
    name: 'PELITA',
    tagline: 'National Government Data Integration Portal',
    tags: ['Node.js', 'REST API', 'Data Integration'],
    summary: 'Ministry of Home Affairs data portal integrating large-scale data from ministries, agencies, and regional governments nationwide.',
    role: 'Backend Developer',
    contribution: 'API standardization across regional governments, integration automation, and performance optimization.',
    image: '/projects/pelita.webp',
  },
  {
    name: 'XOCR.AI',
    tagline: 'Xtended OCR — Document Extraction Platform',
    tags: ['Node.js', 'REST API', 'OCR Integration'],
    summary: 'Platform for extracting structured data from scanned documents and images.',
    role: 'Backend Developer',
    contribution: 'API development, document processing, and data validation.',
    image: '/projects/xocr.webp',
  },
  {
    name: 'FMS',
    tagline: 'Finance Management System',
    tags: ['Node.js', 'REST API', 'Dashboard Integration'],
    summary: 'Platform for recording, organizing, and monitoring cash inflows and outflows.',
    role: 'Backend Developer',
    contribution: 'API development, financial data processing, and dashboard integration.',
    image: '/projects/fms.webp',
  },
]

export const stats = [
  { value: '4+', label: 'Years of Experience' },
  { value: '5+', label: 'Freelance Projects Led' },
  { value: '3–6', label: 'Team Size Managed' },
  { value: '1', label: 'National-Scale Integration System' },
]
