import type { CvContent } from './types';

export const de: CvContent = {
  meta: {
    title: "Nam Nhat Pham — Software-Ingenieur",
    description: "Backend-Entwickler mit über 5 Jahren Erfahrung in Java/Spring Boot, B2B-IoT, Deployment-Werkzeugen und API-Migration. Standort: Sindelfingen."
  },
  nav: {
    intro: "Profil",
    skills: "Fähigkeiten",
    experience: "Berufserfahrung",
    education: "Ausbildung",
    projects: "Projekte",
    certificates: "Zertifikate",
    languages: "Sprachen",
    hobbies: "Hobbys"
  },
  hero: {
    name: "Nam Nhat Pham",
    role: "Software-Ingenieur",
    location: "Sindelfingen, Deutschland",
    email: "nam95.pn@gmail.com",
    linkedin: "https://www.linkedin.com/in/namnhatpham1995",
    github: "https://github.com/namnhatpham1995",
    summary: [
      {
        text: "Über 5 Jahre",
        strong: true
      },
      {
        text: " Erfahrung mit "
      },
      {
        text: "Java/Spring Boot",
        strong: true
      },
      {
        text: " für B2B-IoT. "
      },
      {
        text: "microservice-deployer",
        strong: true
      },
      {
        text: " entwickelt; als internes Produkt teamübergreifend eingesetzt. "
      },
      {
        text: "Fast die Hälfte der OEE-REST-API",
        strong: true
      },
      {
        text: " von Python nach Java migriert."
      }
    ]
  },
  workLocation: {
    base: "Sindelfingen, Deutschland",
    remote: {
      available: true,
      maximumDistanceKm: null,
      rule: "Remote-Arbeit: ja, weltweit, auch aus Vietnam. Arbeiten aus jeder vietnamesischen Stadt ist möglich, muss aber mit Nam weiter besprochen werden und ist nicht automatisch zugesagt.",
      vietnam: {
        possible: true,
        automatic: false,
        requiresFurtherDiscussion: true,
        examples: [
          "Hanoi",
          "Ho-Chi-Minh-Stadt"
        ],
        rule: "Remote-Arbeit aus jeder Stadt in Vietnam ist möglich, einschließlich Hanoi und Ho-Chi-Minh-Stadt, erfordert aber eine weitere Abstimmung mit Nam und ist nicht automatisch vereinbart."
      }
    },
    hybrid: {
      available: true,
      maximumDistanceKm: null,
      rule: "Hybridarbeit: ja, ohne Entfernungsgrenze. Nam ist offen für einen Umzug, in Deutschland oder ins Ausland."
    },
    onSite: {
      available: true,
      maximumDistanceKm: null,
      rule: "Arbeiten vor Ort: ja, ohne Entfernungsgrenze. Nam ist offen für einen Umzug, in Deutschland oder ins Ausland."
    },
    guidance: "Nam wohnt in Sindelfingen, Deutschland, ist offen für einen Umzug und für Remote-Arbeit weltweit, daher sind Hybrid- und Vor-Ort-Stellen nicht auf einen Radius um Sindelfingen beschränkt. Nam besitzt eine deutsche Niederlassungserlaubnis, die nur für Arbeit in Deutschland gilt: Bei einer Stelle außerhalb Deutschlands soll erklärt werden, dass die Arbeitserlaubnis mit dem Arbeitgeber geklärt werden muss, statt sie vorauszusetzen. Bei Remote-Arbeit aus Vietnam soll erklärt werden, dass sie aus jeder vietnamesischen Stadt möglich ist, aber mit Nam weiter besprochen werden muss und nicht automatisch zugesagt ist."
  },
  skills: {
    heading: "ls skills/",
    groups: [
      {
        title: "Programmiersprachen",
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
        title: "Tests",
        items: [
          "JUnit",
          "Mockito",
          "Testcontainers",
          "Cypress",
          "Python-Tests"
        ]
      },
      {
        title: "Datenbanken",
        items: [
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Redis",
          "Flyway"
        ]
      },
      {
        title: "Daten & Machine Learning",
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
        title: "Praktiken",
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
        role: "Software-Ingenieur in F&E",
        company: "Cumulocity GmbH (vormals Software AG) — Digital Twin Management Team",
        dates: "Oktober 2022 - September 2026",
        bullets: [
          "microservice-deployer in Bash entwickelt; als offizielles Deployment-Werkzeug bei Cumulocity teamübergreifend eingesetzt.",
          "Fast die Hälfte der OEE-REST-API von Python nach Java/Spring Boot migriert.",
          "Backend-Änderungen bis zur Vorproduktion umgesetzt, mit Unit-Tests, Cypress-Integrationstests und GitHub-Actions-CI/CD.",
          "Paginierung und Migrationsabläufe mit Builder-, Factory-Method- und Template-Method-Mustern überarbeitet: weniger doppelter Code, bessere Testbarkeit.",
          "B2B-Anforderungen sowie Schema- und API-Änderungen mit erfahrenen Kollegen abgestimmt; Integrationsfehler im Angular-Frontend behoben.",
          "Swagger/OpenAPI-Dokumentation bei jedem Build erzeugt und Python-Simulationen für Stress- und Integrationstests geschrieben.",
          "Zusammenspiel der Microservices mit Cumulocity geprüft und Demos für Geschäftskunden vorbereitet.",
          "GitHub Copilot und Claude Code für Analyse, Implementierung, Fehlersuche und Tests genutzt."
        ],
        emphasis: [
          "microservice-deployer",
          "teamübergreifend",
          "Fast die Hälfte",
          "Java/Spring Boot",
          "Vorproduktion"
        ]
      },
      {
        role: "Software-Ingenieur in F&E",
        company: "Software AG — Cumulocity Platform Core Team",
        dates: "Oktober 2021 - Oktober 2022",
        bullets: [
          "Erstellung von Kubernetes-Clustern nach einem Cumulocity-Core-Update wiederhergestellt; Ursache war ein Konfigurationskonflikt.",
          "Chef- und Helm-Automatisierung für Linux-basierte Cumulocity-Cluster gepflegt.",
          "AWS-Cluster mit Bash und AWS CLI automatisiert bereitgestellt und manuelle Einrichtung reduziert.",
          "Fehler bei Bereitstellung und Betrieb auf der Cumulocity-Kernplattform untersucht."
        ],
        emphasis: [
          "Kubernetes-Clustern",
          "AWS-Cluster"
        ]
      },
      {
        role: "Software-Entwickler / Teamleiter",
        company: "VGU Forex Club",
        dates: "April 2018 - März 2019",
        bullets: [
          "Expert Advisors und Indikatoren für MetaTrader 4/5 aus manuellen Handelsstrategien entwickelt und mit historischen Daten getestet.",
          "Aufgabenplanung und Mentoring übernommen; Kollegen von der Anforderungsanalyse bis zum Testen der Handelswerkzeuge begleitet."
        ],
        emphasis: [
          "MetaTrader 4/5",
          "Aufgabenplanung und Mentoring"
        ]
      }
    ]
  },
  education: {
    heading: "cat education.md",
    entries: [
      {
        degree: "Master of Science | High Integrity Systems",
        institution: "Frankfurt University of Applied Sciences",
        dates: "Apr 2019 – Sep 2021",
        description: "Sicherheitskritische Systeme, formale Verifikation, verteilte Systeme."
      },
      {
        degree: "Bachelor of Engineering | Elektrotechnik und Informationstechnik",
        institution: "Frankfurt University of Applied Sciences & Vietnamesisch-Deutsche Universität (VGU)",
        dates: "Okt 2013 – Jul 2018",
        description: "Doppelabschluss: eingebettete Systeme, Softwareentwicklung, Signalverarbeitung."
      }
    ]
  },
  projects: {
    heading: "ls projects/",
    entries: [
      // TODO: native review
      {
        title: "Global Trade Network (GTN)",
        dates: "Sep 2026 – heute",
        description: [
          "Grenzüberschreitende B2B-Networking-Plattform für TradeComply, live in Produktion, mit Seiten auf Englisch, Deutsch und Vietnamesisch.",
          "Matching-Engine bewertet die Passung von Angeboten und Bedarfen zwischen Event-Teilnehmenden und erklärt jeden Treffer.",
          "TypeScript-Monorepo mit Next.js 16/React 19, typisierter Hono-RPC-API und PostgreSQL über Drizzle (40+ Tabellen, 100+ Migrationen).",
          "Modellagnostische LLM-Schicht mit austauschbaren Modellen klassifiziert Angebote und Bedarfe; PII wird vor jedem Modellaufruf entfernt.",
          "Better Auth mit genau einer Zugriffsstufe pro API-Route; Privacy by Design mit vollständiger Kontolöschung, anonymisierter Analyse und Aufbewahrungsjobs.",
          "Vitest gegen echtes PostgreSQL, Playwright-E2E-Tests, GitHub Actions und Hosting auf Railway mit nächtlichen Backups."
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
            label: "Live-Vorschau",
            url: "https://frontend-pre-prod-3a07.up.railway.app/en" // TODO: swap pre-prod preview for production URL
          }
        ],
        emphasis: [
          "live in Produktion",
          "Matching-Engine"
        ],
        roleNote: "Kundenprojekt für TradeComply; Features als OpenSpec-Spezifikationen geliefert und von KI-Coding-Agenten (Claude Code, Codex) umgesetzt, die ich gesteuert und geprüft habe."
      },
      {
        title: "Portfolio-KI-Assistent",
        dates: "Sep 2026 – heute",
        description: [
          "Sprach- und Textassistent dieses Portfolios mit FastAPI, Gemini Live und WebSockets entwickelt.",
          "Nutzt Portfoliodaten und freigegebene Antworten für Fragen zu Gehalt und Verfügbarkeit.",
          "Google ADK übernimmt bidirektionales Audio, Begrüßung, Sitzungsfortsetzung und automatische Wiederverbindung.",
          "Embedding-basierter Cache und Wechsel zwischen zwei API-Schlüsseln verringern wiederholte Aufrufe und Kontingent-Unterbrechungen.",
          "Zehn-Minuten-Sitzungen, Tageskontingent, Origin- und Rate-Limit-Schutz, PII-Redaktion und Protokolllöschung nach 90 Tagen. Hosting auf Railway; Tests mit pytest."
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
          "Sprach- und Textassistent",
          "freigegebene Antworten"
        ]
      },
      {
        title: "FinTrack — Persönliche Finanzen",
        dates: "Jun 2026 – heute",
        description: [
          "Finanzanwendung mit Java-21/Spring-Boot-API und Next.js-Frontend.",
          "Konten, Budgets, Transaktionen und Auswertungen; JWT-Authentifizierung mit rotierenden Refresh-Tokens.",
          "Architektur und Produktverantwortung übernommen; Umsetzung mit Claude Code entlang der Bounded Contexts gesteuert.",
          "PostgreSQL mit Datentrennung pro Benutzer, Flyway-Migrationen und Planung wiederkehrender Transaktionen.",
          "Recharts-Dashboards, Tests mit JUnit 5/Mockito, Docker Compose und GitHub-Actions-CI/CD."
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
            label: "Live-Demo",
            url: "https://fintrack-three-wine.vercel.app/"
          }
        ],
        emphasis: [
          "Java-21/Spring-Boot-API",
          "JWT-Authentifizierung"
        ],
        roleNote: "Architektur und Produktverantwortung; Umsetzung mit Claude Code."
      },
      {
        title: "Storyboard — OpenSpec-Projektboard",
        dates: "Jul 2026 – heute",
        description: [
          "Stellt OpenSpec-Markdown-Vorschläge als Projektboard dar, mit Go-Backend und React-Frontend.",
          "Einzelne ausführbare Datei für Windows, macOS und Linux.",
          "net/http und fsnotify ordnen Dateien den Spalten Entwurf, In Bearbeitung, Abgeschlossen und Archiviert zu.",
          "Atomare, byteerhaltende Änderungen; Änderungszeit und SHA-256-Prüfsumme verhindern veraltete Schreibvorgänge.",
          "TypeScript/Vite/TanStack-Query-Frontend mit go:embed eingebettet."
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
          "Projektboard",
          "Einzelne ausführbare Datei"
        ],
        roleNote: "Eigenes Projekt zum Lernen von Go."
      },
      {
        title: "Hootden — Gemeinsamer Arbeitsbereich",
        dates: "Aug 2026 – heute",
        description: [
          "Notizen und Planung allein oder in gemeinsamen Arbeitsbereichen, mit Go, Next.js und PostgreSQL.",
          "Anmeldung per E-Mail/Passwort und Google OAuth mit HttpOnly-Sitzungstokens.",
          "Go 1.26 mit Paketen nach Fachdomäne; PostgreSQL-Zugriff über pgx.",
          "COOKIE_DOMAIN teilt das Sitzungscookie zwischen Hauptdomain und API-Subdomain auf Railway und Vercel.",
          "Funktionen in OpenSpec geplant und mit KI-Programmierassistenten umgesetzt; Go-Tests und End-to-End-Tests in GitHub Actions."
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
          "gemeinsamen Arbeitsbereichen",
          "HttpOnly-Sitzungstokens"
        ],
        roleNote: "Eigenes Go-Projekt; Umsetzung mit KI-Programmierassistenten."
      },
      {
        title: "Masterarbeit — Fernsteuerung im Browser",
        dates: "Feb – Aug 2021",
        description: [
          "RemotePy erweitert, um entfernte Rechner im Browser zu steuern.",
          "Live-Bildschirmübertragung sowie Maus-, Tastatur- und Touch-Eingaben ergänzt.",
          "Python/Flask-Backend mit Werkzeug/Gunicorn und eigener CLI für Worker- und Thread-Konfiguration.",
          "HTML/CSS/JavaScript-Frontend, MySQL-Authentifizierung und Serverumgebung mit Docker/Apache."
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
            label: "RemotePy-Modul",
            url: "https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy"
          }
        ],
        emphasis: [
          "im Browser",
          "Live-Bildschirmübertragung"
        ]
      },
      {
        title: "Udacity — Machine-Learning-Projekte",
        dates: "2020",
        description: [
          "Drei Klassifikationsmodelle anhand von 45.000 US-Volkszählungsdatensätzen verglichen.",
          "MobileNet-Modell für 102 Blumenarten trainiert; 71 % Testgenauigkeit.",
          "Einkommensvorhersage mit Random Forest, Gaussian Naive Bayes und AdaBoost; Log-Transformation, MinMax-Skalierung und One-Hot-Encoding.",
          "Kundensegmentierung mit rund 891.000 Datensätzen und 85 Merkmalen: PCA mit 28 Komponenten und rund 87 % erklärter Varianz, danach K-Means.",
          "Blumenklassifikation mit TensorFlow/Keras und Transfer Learning auf Oxford Flowers; als Python-CLI zur Inferenz bereitgestellt."
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
            label: "Abschlussbestätigung",
            url: "https://confirm.udacity.com/G9GHDGQU"
          }
        ],
        emphasis: [
          "45.000",
          "102 Blumenarten",
          "71 % Testgenauigkeit"
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
        date: "Mär 2022"
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
        name: "Vietnamesisch",
        level: "Muttersprache"
      },
      {
        name: "Englisch",
        level: "Fließend (C1)"
      },
      {
        name: "Deutsch",
        level: "Mittelstufe (B1)"
      }
    ]
  },
  hobbies: {
    heading: "cat hobbies.txt",
    items: [
      "Sport",
      "Reisen und Wandern",
      "Kochen",
      "Spielen und Zeit mit Freunden"
    ]
  }
};
