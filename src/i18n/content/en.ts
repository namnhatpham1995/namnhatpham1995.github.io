import type { CvContent } from './types';

export const en: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Software Engineer',
    description:
      'Software Engineer with 5+ years delivering production backend services, REST APIs, and microservices on an enterprise IoT platform connecting millions of assets and devices.',
  },
  nav: {
    intro: 'whoami',
    skills: 'skills',
    experience: 'experience',
    education: 'education',
    projects: 'projects',
    certificates: 'certificates',
    languages: 'languages',
    hobbies: 'hobbies',
  },
  hero: {
    name: 'Nam Nhat Pham',
    role: 'Software Engineer',
    location: 'Stuttgart, Germany',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    summary: [
      { text: "Software Engineer with " },
      { text: "5+ years", strong: true },
      { text: " of experience, focused on " },
      { text: "Java/Spring Boot", strong: true },
      { text: " backend services, REST APIs, and microservices for B2B customers on an IoT platform connecting millions of assets and devices. Built " },
      { text: "microservice-deployer", strong: true },
      { text: ", adopted across company teams as an official internal product, and contributed to the OEE migration from Python to Spring Boot. Experience in " },
      { text: "CI/CD automation", strong: true },
      { text: ", integration testing, Docker, and Kubernetes." },
    ],
  },
  skills: {
    heading: 'ls skills/',
    groups: [
      { title: 'Languages', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Next.js', 'Flask'],
      },
      { title: 'Cloud, DevOps & Tools', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Linux', 'Helm', 'Chef'] },
      { title: 'Testing', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress'] },
      { title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
      { title: 'Practices', items: ['Agile/Scrum', 'CI/CD'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    entries: [
      {
        role: 'Software Engineer in R&D',
        company: 'Cumulocity GmbH (formerly Software AG) — Digital Twin Management team',
        dates: "October 2022 - Present",
        bullets: [
          "Built microservice-deployer, a Bash wrapper around c8y-cli, to standardize uploads of Cumulocity microservices, plugins, and applications. It became an official internal product adopted across company teams, reducing duplicated deployment work.",
          "Migrated nearly half of the OEE REST API from Python to Java/Spring Boot, contributing to the team's completed migration. Reduced duplication using Factory and Builder patterns and split large methods into smaller, testable units to improve maintainability. Reviewed existing logic and improved or introduced logic where needed.",
          "Collaborate with senior teammates to document B2B requirements and agree on schema, model, REST API changes, and bug fixes for the Digital Twin Management microservice.",
          "Own delivery from implementation through pre-production deployment: develop the agreed Java/Spring Boot changes, write unit and Cypress integration tests, and improve GitHub Actions CI/CD to automate validation and regression checks. Verify microservice-to-Cumulocity integration and deploy working functionality for business customer demos.",
          "Support Angular frontend updates following backend API changes, debugging and fixing integration issues to keep frontend and backend behavior consistent.",
          "Automated API documentation through Swagger/OpenAPI configuration on every microservice build, keeping the specification current with minimal manual effort.",
          "Developed Python simulation scripts for stress and integration testing of the OEE application.",
          "Use GitHub Copilot and Claude Code across the ticket lifecycle, from requirements analysis and implementation to debugging and testing.",
        ],
      },
      {
        role: 'Software Engineer in R&D',
        company: 'Software AG — Cumulocity Platform Core team',
        dates: "October 2021 - October 2022",
        bullets: [
          "Restored Kubernetes cluster creation by analyzing logs and identifying a configuration conflict following Cumulocity core updates. Reported the issue and updated the affected settings.",
          "Investigated and helped resolve Kubernetes cluster failures during provisioning and runtime, performing root-cause analysis across the Cumulocity core platform.",
          "Maintained and improved Chef cookbooks and Helm-based Kubernetes automation for Linux-based Cumulocity environments, contributing fixes to provisioning bottlenecks.",
          "Automated AWS cluster provisioning with Bash and AWS CLI scripts, reducing manual setup work and shortening provisioning time.",
        ],
      },
      {
        role: 'Software Developer / Team Lead',
        company: 'VGU Forex Club',
        dates: "April 2018 - March 2019",
        bullets: [
          "Converted manual trading strategies into MetaTrader 4 and 5 Expert Advisors and custom indicators, then backtested them against historical market data.",
          "Led the development team through task delegation and mentoring. Helped members become independent in analyzing customer needs, defining requirements, planning development, and implementing, testing, and delivering MetaTrader trading tools.",
        ],
      },
    ],
  },
  education: {
    heading: 'cat education.md',
    entries: [
      {
        degree: 'M.Sc. High Integrity Systems',
        institution: 'Frankfurt University of Applied Sciences',
        dates: 'Apr 2019 – Sep 2021',
        description: 'Safety-critical systems, formal verification, distributed systems.',
      },
      {
        degree: 'B.Eng. Electrical Engineering & IT',
        institution: 'Frankfurt University of Applied Sciences & Vietnamese-German University (VGU)',
        dates: 'Oct 2013 – Jul 2018',
        description: 'Dual-degree program: embedded systems, software engineering, signal processing.',
      },
    ],
  },
  projects: {
    heading: 'ls projects/',
    entries: [
      {
        title: 'FinTrack — Personal Finance Management App',
        dates: 'Jun 2026 – present',
        description: [
          'Architect and product owner directing Claude Code across bounded contexts (accounts, transactions, budgets, analytics).',
          'Next.js 14 (TypeScript, Tailwind) frontend with a Java 21 / Spring Boot 3 REST API.',
          'JWT auth with rotating refresh tokens, per-user data isolation, Flyway-managed PostgreSQL schema, recurring-transaction scheduling.',
          'Recharts-based analytics dashboard; JUnit 5 + Mockito test coverage; Docker Compose + GitHub Actions for CI/CD.',
        ],
        tech: ['Next.js', 'TypeScript', 'Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/personal-financial-management' },
          { label: 'Live demo', url: 'https://fintrack-three-wine.vercel.app/' },
        ],
      },
      {
        title: 'Storyboard — OpenSpec Project Board',
        dates: 'Jul 2026 – present',
        description: [
          'Self-initiated project to learn Go and to manage this system’s own development via OpenSpec proposals and tasks, Jira-style.',
          'Go backend (net/http, fsnotify) parsing OpenSpec markdown on disk into Draft/In Progress/Complete/Archived board columns with byte-preserving, atomic edits.',
          'Optimistic-concurrency writes carrying file modification time + SHA-256 hash; rejects stale writes instead of silently overwriting newer work.',
          'React/TypeScript/Vite/TanStack Query frontend embedded into the Go binary via go:embed for single-binary distribution across Windows/Mac/Linux.',
        ],
        tech: ['Go', 'net/http', 'fsnotify', 'React', 'TypeScript', 'Vite', 'TanStack Query'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/Openspec-storyboard' }],
      },
      {
        title: 'M.Sc. Thesis: Remote Desktop Control from a SaaS Application',
        dates: 'Feb – Aug 2021',
        description: [
          'Delivered a web-based remote desktop control solution accessible through common web browsers.',
          'Upgraded RemotePy, an existing open-source Python Flask remote-control project, adding browser-driven mouse, keyboard, and touch-screen control plus live screen streaming, served via a Werkzeug/Gunicorn backend with a custom CLI for worker and thread concurrency.',
          'Designed the browser-facing frontend with HTML, CSS, and JavaScript templates to drive real-time remote-control interactions.',
          'MySQL-backed authentication; containerized the server environment with Docker and Apache.',
        ],
        tech: ['Python', 'Flask', 'Werkzeug', 'Gunicorn', 'HTML', 'CSS', 'JavaScript', 'Docker', 'MySQL'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/Master-Thesis' },
          { label: 'RemotePy module', url: 'https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy' },
        ],
      },
      {
        title: 'Udacity: Intro to Machine Learning with TensorFlow',
        dates: '2020',
        description: [
          'Built and benchmarked three supervised learning classifiers (Random Forest, Gaussian Naive Bayes, AdaBoost) on U.S. Census income data (45K records) using log-transform, MinMax scaling, and one-hot encoding, benchmarked against a naive baseline.',
          'Built a customer segmentation analysis on German demographic data (Arvato/AZ Direct, ~891K records, 85 features), applying PCA (28 components, ~87% variance explained) and K-Means clustering to identify over- and under-represented segments.',
          'Built a TensorFlow/Keras image classifier via MobileNet transfer learning to recognize 102 flower species (Oxford Flowers dataset), reaching 71% test accuracy, packaged into a Python CLI tool for inference.',
        ],
        tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'TensorFlow Hub', 'Matplotlib', 'Seaborn'],
        links: [
          { label: 'Finding Donors for CharityML', url: 'https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML' },
          {
            label: 'Creating Customer Segments with Arvato',
            url: 'https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato',
          },
          { label: 'Image Classifier with Deep Learning', url: 'https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow' },
          { label: 'Degree confirmation', url: 'https://confirm.udacity.com/G9GHDGQU' },
        ],
      },
    ],
  },
  certificates: {
    heading: 'ls certificates/',
    entries: [
      { title: 'Software AG Leadership Essentials Professional', date: 'Nov 2023' },
      { title: 'AWS Certified Developer – Associate', date: 'Aug 2023', issuer: 'AWS' },
      { title: 'AWS Certified Cloud Practitioner', date: 'Aug 2023', issuer: 'AWS' },
      { title: 'Lean Six Sigma White Belt', date: 'Mar 2022' },
      { title: 'Building Scalable Java Microservices with Spring Boot & Spring Cloud', date: 'Sep 2021', issuer: 'Coursera' },
      { title: 'Intro to Machine Learning with TensorFlow', date: 'Jun 2020', issuer: 'Udacity Nanodegree Program' },
    ],
  },
  languages: {
    heading: 'locale -a',
    entries: [
      { name: 'Vietnamese', level: 'Native' },
      { name: 'English', level: 'Fluent (C1)' },
      { name: 'German', level: 'Intermediate (B1)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Workout', 'Traveling & hiking', 'Cooking', 'Gaming / hanging out with friends'],
  },
};
