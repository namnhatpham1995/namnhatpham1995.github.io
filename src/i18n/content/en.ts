import type { CvContent } from './types';

export const en: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Software Engineer',
    description:
      'Software Engineer in Stuttgart, Germany — 5+ years building scalable backend services and cloud-native applications with Java, Spring Boot, and Python.',
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
    summary:
      'Software Engineer with 5+ years building scalable backend services and cloud-native applications on production platforms. Experienced with Python and TypeScript in production, strong CI/CD automation, backend architecture, and microservices decomposition. AWS certified.',
  },
  skills: {
    heading: 'ls skills/',
    groups: [
      { title: 'Languages', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'Next.js', 'Flask'],
      },
      { title: 'Cloud, DevOps & Tools', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm', 'Chef'] },
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
        dates: 'Oct 2022 – Sep 2026',
        bullets: [
          'Delivered end-to-end Digital Twin Management (DTM) features on the Cumulocity IoT platform, serving millions of connected assets.',
          'Adopted AI coding tools (GitHub Copilot, Claude Code) across the ticket lifecycle, significantly raising weekly delivery throughput.',
          'Refactored the DTM microservice to reduce class complexity and improve long-term maintainability.',
          'Led migration of the integration test suite to Cypress, speeding up test execution and CI feedback cycles.',
          'Migrated a Python-based OEE microservice to a Java Spring Boot microservice.',
          'Wrote Python simulation scripts for load and integration testing.',
          'Built and maintained GitHub Actions CI/CD pipelines for application and microservice delivery.',
          'Designed a Bash deployment helper that cut cross-team debugging time.',
        ],
      },
      {
        role: 'Software Engineer in R&D',
        company: 'Software AG — Cumulocity Platform Core team',
        dates: 'Oct 2021 – Oct 2022',
        bullets: [
          'Investigated and helped resolve Kubernetes cluster failures during provisioning and runtime, performing root-cause analysis across the Cumulocity core platform.',
          'Maintained and improved Chef cookbooks and Helm-based Kubernetes cluster automation used to provision and operate Cumulocity environments.',
          'Identified bottlenecks in cluster creation and contributed fixes and improvements to make provisioning faster and more reliable.',
          'Automated AWS provisioning with Bash and the AWS CLI, significantly cutting setup time.',
        ],
      },
      {
        role: 'Software Developer',
        company: 'VGU Forex Club',
        dates: 'Apr 2018 – Mar 2019',
        bullets: [
          'Converted manual trading strategies into rule-based Expert Advisors and custom indicators for MetaTrader 4/5.',
          'Backtested and optimized strategies against historical market data.',
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
          'Developed a web-based remote desktop control solution accessible through common web browsers.',
          'Built RemotePy, a Python Flask application forked and extended from an open-source remote-control base, adding browser-driven mouse, keyboard, and touch-screen control plus live screen streaming, served via a Werkzeug/Gunicorn backend with a custom CLI for worker and thread concurrency.',
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
      { name: 'German', level: 'Professional (B2)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Workout', 'Traveling & hiking', 'Cooking', 'Gaming / hanging out with friends'],
  },
};
