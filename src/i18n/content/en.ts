import type { CvContent } from './types';

export const en: CvContent = {
  meta: {
    title: "Nam Nhat Pham — Software Engineer",
    description: "Backend engineer with 5+ years in Java/Spring Boot, B2B IoT, deployment tooling, and API migration. Based in Sindelfingen, Germany."
  },
  nav: {
    intro: "whoami",
    skills: "skills",
    experience: "experience",
    education: "education",
    projects: "projects",
    certificates: "certificates",
    languages: "languages",
    hobbies: "hobbies"
  },
  hero: {
    name: "Nam Nhat Pham",
    role: "Software Engineer",
    location: "Sindelfingen, Germany",
    email: "nam95.pn@gmail.com",
    linkedin: "https://www.linkedin.com/in/namnhatpham1995",
    github: "https://github.com/namnhatpham1995",
    summary: [
      {
        text: "5+ years",
        strong: true
      },
      {
        text: " building "
      },
      {
        text: "Java/Spring Boot",
        strong: true
      },
      {
        text: " services for B2B IoT. Built "
      },
      {
        text: "microservice-deployer",
        strong: true
      },
      {
        text: ", adopted across company teams. Migrated "
      },
      {
        text: "nearly half of the OEE REST API",
        strong: true
      },
      {
        text: " from Python to Java."
      }
    ]
  },
  workLocation: {
    base: "Sindelfingen, Germany",
    remote: {
      available: true,
      maximumDistanceKm: null,
      rule: "Remote work: yes, worldwide, including Vietnam. Working from any city in Vietnam is possible, but it must be discussed further with Nam and is not automatic.",
      vietnam: {
        possible: true,
        automatic: false,
        requiresFurtherDiscussion: true,
        examples: [
          "Hanoi",
          "Ho Chi Minh City"
        ],
        rule: "Remote work from any city in Vietnam is possible, including Hanoi and Ho Chi Minh City, but requires further discussion with Nam and is not automatically agreed."
      }
    },
    hybrid: {
      available: true,
      maximumDistanceKm: null,
      rule: "Hybrid work: yes, with no distance limit. Nam is open to relocation, in Germany or abroad."
    },
    onSite: {
      available: true,
      maximumDistanceKm: null,
      rule: "On-site work: yes, with no distance limit. Nam is open to relocation, in Germany or abroad."
    },
    guidance: "Nam is based in Sindelfingen, Germany, and is open to relocation and to remote work worldwide, so hybrid and on-site roles are not limited to a radius around Sindelfingen. Nam holds German permanent residency, which covers work in Germany only: for a role based outside Germany, say that work authorization must be confirmed with the employer rather than assuming it. For remote work from Vietnam, answer that it is possible from any Vietnamese city but requires further discussion with Nam and is not automatic."
  },
  skills: {
    heading: "ls skills/",
    groups: [
      {
        title: "Languages",
        items: [
          "Java",
          "Python",
          "TypeScript",
          "JavaScript",
          "Go",
          "Bash"
        ]
      },
      {
        title: "Backend & Frontend",
        items: [
          "Spring Boot",
          "Spring Security",
          "REST APIs",
          "OpenAPI/Swagger",
          "Next.js",
          "React",
          "Angular",
          "Tailwind CSS",
          "TanStack Query",
          "Flask"
        ]
      },
      {
        title: "Cloud, DevOps & Tools",
        items: [
          "AWS",
          "GitHub Actions",
          "Docker",
          "Kubernetes",
          "Linux",
          "Helm",
          "Chef"
        ]
      },
      {
        title: "Testing",
        items: [
          "JUnit",
          "Mockito",
          "Testcontainers",
          "Cypress",
          "Python testing"
        ]
      },
      {
        title: "Databases",
        items: [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Flyway"
        ]
      },
      {
        title: "Data & Machine Learning",
        items: [
          "pandas",
          "NumPy",
          "scikit-learn",
          "TensorFlow",
          "Keras",
          "PCA",
          "K-Means"
        ]
      },
      {
        title: "Practices",
        items: [
          "Agile/Scrum",
          "CI/CD",
          "Domain-Driven Design (DDD)",
          "Spec-Driven Development (SDD)"
        ]
      }
    ]
  },
  experience: {
    heading: "git log --experience",
    entries: [
      {
        role: "Software Engineer in R&D",
        company: "Cumulocity GmbH (formerly Software AG) — Digital Twin Management team",
        dates: "October 2022 - September 2026",
        bullets: [
          "Built microservice-deployer in Bash; adopted across teams as an official Cumulocity deployment tool.",
          "Migrated nearly half of the OEE REST API from Python to Java/Spring Boot.",
          "Delivered backend changes through pre-production, with unit tests, Cypress integration tests, and GitHub Actions CI/CD.",
          "Refactored pagination and migration flows with Builder, Factory Method, and Template Method patterns to reduce duplication and improve testability.",
          "Agreed B2B requirements and schema/API changes with senior teammates; fixed Angular integration after backend changes.",
          "Generated Swagger/OpenAPI documentation on each build and wrote Python simulations for stress and integration tests.",
          "Verified microservice integration with Cumulocity and prepared demos for business customers.",
          "Used GitHub Copilot and Claude Code for analysis, coding, debugging, and testing."
        ],
        emphasis: [
          "microservice-deployer",
          "adopted across teams",
          "nearly half",
          "Java/Spring Boot",
          "pre-production"
        ]
      },
      {
        role: "Software Engineer in R&D",
        company: "Software AG — Cumulocity Platform Core team",
        dates: "October 2021 - October 2022",
        bullets: [
          "Restored Kubernetes cluster creation by tracing a provisioning failure to a configuration conflict after a Cumulocity core update.",
          "Maintained Chef and Helm automation for Linux-based Cumulocity clusters.",
          "Automated AWS cluster provisioning with Bash and AWS CLI, reducing manual setup.",
          "Investigated provisioning and runtime failures across the Cumulocity core platform."
        ],
        emphasis: [
          "Kubernetes",
          "AWS cluster provisioning"
        ]
      },
      {
        role: "Software Developer / Team Lead",
        company: "VGU Forex Club",
        dates: "April 2018 - March 2019",
        bullets: [
          "Built and backtested MetaTrader 4/5 Expert Advisors and custom indicators from manual trading strategies.",
          "Led task planning and mentoring; helped teammates deliver trading tools from requirements through testing."
        ],
        emphasis: [
          "MetaTrader 4/5",
          "Led task planning and mentoring"
        ]
      }
    ]
  },
  education: {
    heading: "cat education.md",
    entries: [
      {
        degree: "M.Sc. High Integrity Systems",
        institution: "Frankfurt University of Applied Sciences",
        dates: "Apr 2019 – Sep 2021",
        description: "Safety-critical systems, formal verification, distributed systems."
      },
      {
        degree: "B.Eng. Electrical Engineering & IT",
        institution: "Frankfurt University of Applied Sciences & Vietnamese-German University (VGU)",
        dates: "Oct 2013 – Jul 2018",
        description: "Dual-degree program: embedded systems, software engineering, signal processing."
      }
    ]
  },
  projects: {
    heading: "ls projects/",
    entries: [
      {
        title: "Global Trade Network (GTN)",
        dates: "Sep 2026 – present",
        description: [
          "Cross-border business networking platform for TradeComply, live in production, with pages in English, German, and Vietnamese.",
          "Matching engine ranks offer and need fit between event participants and explains each match.",
          "TypeScript monorepo with Next.js 16/React 19, a typed Hono RPC API, and PostgreSQL via Drizzle (40+ tables, 100+ migrations).",
          "Model-agnostic LLM layer with interchangeable models classifies offers and needs; PII is scrubbed before any model call.",
          "Better Auth with exactly one access level per API route; privacy by design with full account deletion, anonymized analytics, and retention jobs.",
          "Vitest against real PostgreSQL, Playwright end-to-end tests, GitHub Actions, and Railway hosting with nightly backups."
        ],
        tech: [
          "TypeScript",
          "Next.js",
          "Hono",
          "PostgreSQL",
          "React",
          "Drizzle ORM",
          "Better Auth",
          "Zod",
          "Vitest",
          "Playwright",
          "GitHub Actions",
          "Railway",
          "LLM APIs"
        ],
        links: [
          {
            label: "Live preview",
            url: "https://frontend-pre-prod-3a07.up.railway.app/en" // TODO: swap pre-prod preview for production URL
          }
        ],
        emphasis: [
          "live in production",
          "Matching engine"
        ],
        roleNote: "Client project for TradeComply; features shipped as OpenSpec spec-driven proposals executed by AI coding agents (Claude Code, Codex) that I directed and reviewed."
      },
      {
        title: "Portfolio AI assistant",
        dates: "Sep 2026 – present",
        description: [
          "Built this portfolio’s voice and text assistant with FastAPI, Gemini Live, and WebSockets.",
          "Uses portfolio data and pre-approved answers for salary and availability questions.",
          "Google ADK handles two-way audio, scripted greetings, session resumption, and automatic reconnects.",
          "Embedding-based caching and fallback between two API keys reduce repeated calls and quota interruptions.",
          "Ten-minute sessions, daily quotas, origin/rate limits, PII redaction, and 90-day log deletion. Hosted on Railway; tested with pytest."
        ],
        tech: [
          "Python",
          "FastAPI",
          "Gemini Live API",
          "WebSockets",
          "Google ADK",
          "Gemini API",
          "PostgreSQL",
          "Railway",
          "pytest"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/portfolio-voice-agent"
          }
        ],
        emphasis: [
          "voice and text assistant",
          "pre-approved answers"
        ]
      },
      {
        title: "FinTrack — Personal finance",
        dates: "Jun 2026 – present",
        description: [
          "Personal finance app with a Java 21/Spring Boot API and Next.js frontend.",
          "Accounts, budgets, transactions, and analytics; JWT authentication with rotating refresh tokens.",
          "Architect and product owner; directed Claude Code implementation across accounts, transactions, budgets, and analytics.",
          "PostgreSQL with per-user data isolation, Flyway migrations, and recurring-transaction scheduling.",
          "Recharts dashboards, JUnit 5/Mockito tests, Docker Compose, and GitHub Actions CI/CD."
        ],
        tech: [
          "Java 21",
          "Spring Boot 3",
          "PostgreSQL",
          "Next.js",
          "TypeScript",
          "Flyway",
          "Docker",
          "GitHub Actions"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/personal-financial-management"
          },
          {
            label: "Live demo",
            url: "https://fintrack-three-wine.vercel.app/"
          }
        ],
        emphasis: [
          "Java 21/Spring Boot",
          "JWT authentication"
        ],
        roleNote: "Architecture and product ownership; implementation with Claude Code."
      },
      {
        title: "Storyboard — OpenSpec board",
        dates: "Jul 2026 – present",
        description: [
          "Turns OpenSpec markdown proposals into a project board with a Go backend and React frontend.",
          "Ships as a single executable for Windows, macOS, and Linux.",
          "Uses net/http and fsnotify to map files to Draft, In Progress, Complete, and Archived columns.",
          "Atomic, byte-preserving edits; modification-time and SHA-256 checks reject stale writes.",
          "Embeds the TypeScript/Vite/TanStack Query frontend with go:embed."
        ],
        tech: [
          "Go",
          "React",
          "TypeScript",
          "TanStack Query",
          "net/http",
          "fsnotify",
          "Vite"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Openspec-storyboard"
          }
        ],
        emphasis: [
          "project board",
          "single executable"
        ],
        roleNote: "Personal project to learn Go."
      },
      {
        title: "Hootden — Shared workspace",
        dates: "Aug 2026 – present",
        description: [
          "Notes and planning for solo work or shared workspaces, built with Go, Next.js, and PostgreSQL.",
          "Email/password and Google OAuth login with HttpOnly session tokens.",
          "Go 1.26 packages organized by domain; PostgreSQL access through pgx.",
          "COOKIE_DOMAIN shares the session cookie across the main domain and API subdomain on Railway and Vercel.",
          "Features planned in OpenSpec and implemented with AI coding agents; checked by Go tests and GitHub Actions end-to-end tests."
        ],
        tech: [
          "Go",
          "Next.js",
          "PostgreSQL",
          "TypeScript",
          "pgx",
          "goose",
          "OAuth2",
          "Docker",
          "GitHub Actions"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Hootden"
          }
        ],
        emphasis: [
          "shared workspaces",
          "HttpOnly session tokens"
        ],
        roleNote: "Personal Go project; implementation with AI coding agents."
      },
      {
        title: "Master’s thesis — Browser remote desktop",
        dates: "Feb – Aug 2021",
        description: [
          "Extended RemotePy so users can control a remote computer from a web browser.",
          "Added live screen streaming and mouse, keyboard, and touch input.",
          "Python/Flask backend with Werkzeug/Gunicorn and a custom CLI for worker and thread configuration.",
          "HTML/CSS/JavaScript frontend, MySQL authentication, and Docker/Apache server setup."
        ],
        tech: [
          "Python",
          "Flask",
          "Docker",
          "MySQL",
          "Werkzeug",
          "Gunicorn",
          "HTML",
          "CSS",
          "JavaScript"
        ],
        links: [
          {
            label: "Repository",
            url: "https://github.com/namnhatpham1995/Master-Thesis"
          },
          {
            label: "RemotePy module",
            url: "https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy"
          }
        ],
        emphasis: [
          "remote computer",
          "live screen streaming"
        ]
      },
      {
        title: "Udacity — Machine learning projects",
        dates: "2020",
        description: [
          "Compared three classifiers on 45,000 US Census records.",
          "Built a 102-species flower classifier with MobileNet; 71% test accuracy.",
          "Income prediction: Random Forest, Gaussian Naive Bayes, and AdaBoost, with log transforms, MinMax scaling, and one-hot encoding.",
          "Customer segmentation: about 891,000 records and 85 features; PCA reduced these to 28 components explaining about 87% of variance, followed by K-Means.",
          "Flower classification: TensorFlow/Keras transfer learning on Oxford Flowers, packaged as a Python inference CLI."
        ],
        tech: [
          "Python",
          "TensorFlow",
          "scikit-learn",
          "pandas",
          "NumPy",
          "Keras",
          "TensorFlow Hub",
          "Matplotlib",
          "Seaborn"
        ],
        links: [
          {
            label: "Finding Donors for CharityML",
            url: "https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML"
          },
          {
            label: "Creating Customer Segments with Arvato",
            url: "https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato"
          },
          {
            label: "Image Classifier with Deep Learning",
            url: "https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow"
          },
          {
            label: "Degree confirmation",
            url: "https://confirm.udacity.com/G9GHDGQU"
          }
        ],
        emphasis: [
          "45,000",
          "102-species",
          "71% test accuracy"
        ]
      }
    ]
  },
  certificates: {
    heading: "ls certificates/",
    entries: [
      {
        title: "Software AG Leadership Essentials Professional",
        date: "Nov 2023"
      },
      {
        title: "AWS Certified Developer – Associate",
        date: "Aug 2023",
        issuer: "AWS"
      },
      {
        title: "AWS Certified Cloud Practitioner",
        date: "Aug 2023",
        issuer: "AWS"
      },
      {
        title: "Lean Six Sigma White Belt",
        date: "Mar 2022"
      },
      {
        title: "Building Scalable Java Microservices with Spring Boot & Spring Cloud",
        date: "Sep 2021",
        issuer: "Coursera"
      },
      {
        title: "Intro to Machine Learning with TensorFlow",
        date: "Jun 2020",
        issuer: "Udacity Nanodegree Program"
      }
    ]
  },
  languages: {
    heading: "locale -a",
    entries: [
      {
        name: "Vietnamese",
        level: "Native"
      },
      {
        name: "English",
        level: "Fluent (C1)"
      },
      {
        name: "German",
        level: "Intermediate (B1)"
      }
    ]
  },
  hobbies: {
    heading: "cat hobbies.txt",
    items: [
      "Workout",
      "Traveling & hiking",
      "Cooking",
      "Gaming / hanging out with friends"
    ]
  }
};
