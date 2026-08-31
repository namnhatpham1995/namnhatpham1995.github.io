import type { CvContent } from './types';

// German strings ported from the legacy assets/js/translations.js dictionary where still
// valid; anything covering the new CV content (updated dates, FinTrack, skills) is newly
// translated and flagged below for native review.
export const de: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Software-Ingenieur',
    // TODO: native review
    description:
      'Software-Ingenieur mit über 5 Jahren Erfahrung in der Entwicklung produktiver Backend-Dienste, REST-APIs und Microservices auf einer Enterprise-IoT-Plattform für Millionen von Assets und Geräten.',
  },
  nav: {
    intro: 'profil',
    skills: 'fähigkeiten',
    experience: 'berufserfahrung',
    education: 'ausbildung',
    projects: 'projekte',
    certificates: 'zertifikate',
    languages: 'sprachen',
    hobbies: 'hobbys',
  },
  hero: {
    name: 'Nam Nhat Pham',
    role: 'Software-Ingenieur',
    location: 'Stuttgart, Deutschland',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    // TODO: native review — updated to match the 2026 general CV summary
    // TODO: native review - CV summary refreshed on 2026-08-31
    summary: [
      { text: "Software-Ingenieur mit " },
      { text: "über 5 Jahren", strong: true },
      { text: " Erfahrung und Schwerpunkt auf " },
      { text: "Java/Spring-Boot", strong: true },
      { text: "-Backend-Diensten, REST-APIs und Microservices für B2B-Kunden auf einer IoT-Plattform, die Millionen von Assets und Geräten verbindet. Entwickelte " },
      { text: "microservice-deployer", strong: true },
      { text: ", das als offizielles internes Produkt teamübergreifend eingesetzt wird, und wirkte an der OEE-Migration von Python zu Spring Boot mit. Erfahrung mit " },
      { text: "CI/CD-Automatisierung", strong: true },
      { text: ", Integrationstests, Docker und Kubernetes." },
    ],
  },
  skills: {
    heading: 'ls skills/',
    // TODO: native review — expanded from 4 to 6 groups per 2026 CV
    groups: [
      { title: 'Sprachen', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Next.js', 'Flask'],
      },
      // TODO: native review — Linux added per updated CV
      { title: 'Cloud, DevOps & Tools', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Linux', 'Helm', 'Chef'] },
      { title: 'Testing', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress'] },
      { title: 'Datenbanken', items: ['PostgreSQL', 'MySQL'] },
      { title: 'Praktiken', items: ['Agile/Scrum', 'CI/CD'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    // TODO: native review — dates and bullets updated to match 2026 CV (Cumulocity: Oct 2022–present,
    // Software AG: Oct 2021–Oct 2022; legacy translations.js had different dates/role split)
    entries: [
      {
        role: 'Software-Ingenieur in F&E',
        company: 'Cumulocity GmbH (vormals Software AG) — Digital Twin Management Team',
        dates: "Oktober 2022 - heute",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Entwickelte microservice-deployer, einen Bash-Wrapper für c8y-cli, um Uploads von Cumulocity-Microservices, Plugins und Anwendungen zu vereinheitlichen. Das Werkzeug wurde zu einem offiziellen internen Produkt, das teamübergreifend eingesetzt wird und doppelte Arbeit bei Deployments reduziert.",
          "Migrierte fast die Hälfte der OEE-REST-API von Python zu Java/Spring Boot und trug damit zur abgeschlossenen Migration des Teams bei. Reduzierte doppelten Code mit Factory- und Builder-Patterns und zerlegte große Methoden in kleinere, testbare Einheiten, um die Wartbarkeit zu verbessern. Analysierte vorhandene Logik und verbesserte oder ergänzte sie bei Bedarf.",
          "Erarbeite mit erfahrenen Teamkollegen B2B-Anforderungen und stimme Änderungen an Schemata, Modellen und REST-APIs sowie Fehlerbehebungen für den Digital-Twin-Management-Microservice ab.",
          "Verantworte die Umsetzung bis zum Deployment in der Vorproduktionsumgebung: implementiere die vereinbarten Java/Spring-Boot-Änderungen, schreibe Unit- und Cypress-Integrationstests und verbessere GitHub-Actions-CI/CD-Pipelines für automatisierte Validierung und Regressionsprüfungen. Prüfe das Zusammenspiel zwischen Microservice und Cumulocity und stelle die Funktionalität für Demos mit Geschäftskunden bereit.",
          "Unterstütze Anpassungen des Angular-Frontends nach Änderungen an Backend-APIs und behebe Integrationsfehler, damit Frontend und Backend konsistent zusammenarbeiten.",
          "Automatisierte die API-Dokumentation über die Swagger/OpenAPI-Konfiguration bei jedem Microservice-Build, sodass die Spezifikation mit geringem manuellem Aufwand aktuell bleibt.",
          "Entwickelte Python-Simulationsskripte für Stress- und Integrationstests der OEE-Anwendung.",
          "Nutze GitHub Copilot und Claude Code im gesamten Ticketablauf, von der Anforderungsanalyse und Implementierung bis zur Fehlersuche und zum Testen.",
        ],
      },
      {
        role: 'Software-Ingenieur in F&E',
        company: 'Software AG — Cumulocity Platform Core Team',
        dates: "Oktober 2021 - Oktober 2022",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Stellte die Erstellung von Kubernetes-Clustern wieder her, indem ich Logs analysierte und einen Konfigurationskonflikt nach Cumulocity-Core-Updates identifizierte. Meldete das Problem und aktualisierte die betroffenen Einstellungen.",
          "Untersuchte Kubernetes-Clusterfehler während der Bereitstellung und im laufenden Betrieb, führte Ursachenanalysen auf der Cumulocity-Kernplattform durch und unterstützte deren Behebung.",
          "Pflegte und verbesserte Chef-Cookbooks und Helm-basierte Kubernetes-Automatisierung für Linux-basierte Cumulocity-Umgebungen und trug zur Behebung von Engpässen bei der Bereitstellung bei.",
          "Automatisierte die Bereitstellung von AWS-Clustern mit Bash und AWS-CLI-Skripten, verringerte manuelle Einrichtungsarbeit und verkürzte die Bereitstellungszeit.",
        ],
      },
      {
        role: 'Software-Entwickler / Teamleiter',
        company: 'VGU Forex Club',
        dates: "April 2018 - März 2019",
        // TODO: native review - confirmed CV experience refreshed on 2026-08-31
        bullets: [
          "Überführte manuelle Handelsstrategien in Expert Advisors und benutzerdefinierte Indikatoren für MetaTrader 4 und 5 und führte anschließend Backtests mit historischen Marktdaten durch.",
          "Leitete das Entwicklungsteam durch Aufgabenverteilung und Mentoring. Unterstützte Mitglieder dabei, Kundenbedürfnisse selbstständig zu analysieren, Anforderungen zu formulieren, die Entwicklung zu planen und MetaTrader-Handelswerkzeuge zu implementieren, zu testen und auszuliefern.",
        ],
      },
    ],
  },
  education: {
    heading: 'cat education.md',
    entries: [
      {
        degree: 'Master of Science | High Integrity Systems',
        institution: 'Frankfurt University of Applied Sciences',
        dates: 'Apr 2019 – Sep 2021',
        description: 'Sicherheitskritische Systeme, formale Verifikation, verteilte Systeme.',
      },
      {
        degree: 'Bachelor of Engineering | Elektrotechnik und Informationstechnik',
        institution: 'Frankfurt University of Applied Sciences & Vietnamesisch-Deutsche Universität (VGU)',
        dates: 'Okt 2013 – Jul 2018',
        description: 'Doppelabschluss: eingebettete Systeme, Softwareentwicklung, Signalverarbeitung.',
      },
    ],
  },
  projects: {
    heading: 'ls projects/',
    entries: [
      {
        title: 'FinTrack — Persönliches Finanzmanagement',
        dates: 'Jun 2026 – heute',
        // TODO: native review
        description: [
          'Architekt und Product Owner, steuert Claude Code über Bounded Contexts (Konten, Transaktionen, Budgets, Analytics) hinweg.',
          'Next.js-14-Frontend (TypeScript, Tailwind) mit einer Java-21/Spring-Boot-3-REST-API.',
          'JWT-Authentifizierung mit rotierenden Refresh-Tokens, Isolation pro Benutzer, Flyway-verwaltetes PostgreSQL-Schema, Planung wiederkehrender Transaktionen.',
          'Recharts-Analytics-Dashboard; Testabdeckung mit JUnit 5 + Mockito; Docker Compose + GitHub Actions für CI/CD.',
        ],
        tech: ['Next.js', 'TypeScript', 'Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Docker', 'GitHub Actions'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/personal-financial-management' },
          { label: 'Live-Demo', url: 'https://fintrack-three-wine.vercel.app/' },
        ],
      },
      {
        title: 'Storyboard — OpenSpec-Projektboard',
        dates: 'Jul 2026 – heute',
        // TODO: native review
        description: [
          'Eigeninitiiertes Projekt, um Go zu lernen und die eigene Weiterentwicklung dieses Systems im Jira-Stil über OpenSpec-Proposals und -Tasks zu steuern.',
          'Go-Backend (net/http, fsnotify), das OpenSpec-Markdown-Dateien in die Board-Spalten Draft/In Progress/Complete/Archived parst, mit byteerhaltenden, atomaren Edits.',
          'Optimistic-Concurrency-Writes mit Dateiänderungszeit + SHA-256-Hash; verwirft veraltete Schreibvorgänge, statt neuere Arbeit stillschweigend zu überschreiben.',
          'React/TypeScript/Vite/TanStack-Query-Frontend, per go:embed in die Go-Binary eingebettet für Single-Binary-Distribution unter Windows/Mac/Linux.',
        ],
        tech: ['Go', 'net/http', 'fsnotify', 'React', 'TypeScript', 'Vite', 'TanStack Query'],
        links: [{ label: 'Repository', url: 'https://github.com/namnhatpham1995/Openspec-storyboard' }],
      },
      {
        title: 'M.Sc.-Thesis: Remote-Desktop-Steuerung aus einer SaaS-Anwendung',
        dates: 'Feb – Aug 2021',
        // TODO: native review
        description: [
          'Bereitstellung einer webbasierten Remote-Desktop-Steuerung, zugänglich über gängige Webbrowser.',
          'Weiterentwicklung von RemotePy, einem bestehenden Open-Source-Projekt zur Fernsteuerung auf Basis von Python und Flask, um browsergesteuerte Maus-, Tastatur- und Touch-Steuerung sowie Live-Bildschirmstreaming, bereitgestellt über ein Werkzeug/Gunicorn-Backend mit eigener CLI zur Konfiguration von Worker- und Thread-Nebenläufigkeit.',
          'Entwurf des browserseitigen Frontends mit HTML-, CSS- und JavaScript-Templates für die Echtzeit-Interaktion der Fernsteuerung.',
          'MySQL-basierte Authentifizierung; Containerisierung der Serverumgebung mit Docker und Apache.',
        ],
        tech: ['Python', 'Flask', 'Werkzeug', 'Gunicorn', 'HTML', 'CSS', 'JavaScript', 'Docker', 'MySQL'],
        links: [
          { label: 'Repository', url: 'https://github.com/namnhatpham1995/Master-Thesis' },
          { label: 'RemotePy-Modul', url: 'https://github.com/namnhatpham1995/Master-Thesis/tree/main/RemotePy' },
        ],
      },
      {
        title: 'Udacity: Intro to Machine Learning with TensorFlow',
        dates: '2020',
        // TODO: native review
        description: [
          'Aufbau und Vergleich von drei Klassifikationsmodellen des überwachten Lernens (Random Forest, Gaussian Naive Bayes, AdaBoost) auf US-Volkszählungsdaten (45.000 Datensätze) mit Log-Transformation, MinMax-Skalierung und One-Hot-Encoding, verglichen mit einer naiven Baseline.',
          'Kundensegmentierungsanalyse auf Basis realer deutscher demografischer Daten (Arvato/AZ Direct, ca. 891.000 Datensätze, 85 Merkmale), unter Einsatz von PCA (28 Komponenten, ca. 87 % erklärte Varianz) und K-Means-Clustering zur Identifikation über- und unterrepräsentierter Segmente.',
          'Aufbau eines Bilderkennungsmodells mit TensorFlow/Keras mittels Transfer Learning (MobileNet) zur Erkennung von 102 Blumenarten (Oxford-Flowers-Datensatz) mit 71 % Testgenauigkeit, verpackt in ein Python-Kommandozeilentool zur Inferenz.',
        ],
        tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Keras', 'TensorFlow Hub', 'Matplotlib', 'Seaborn'],
        links: [
          { label: 'Finding Donors for CharityML', url: 'https://github.com/namnhatpham1995/Udacity-Finding-Donors-for-CharityML' },
          {
            label: 'Creating Customer Segments with Arvato',
            url: 'https://github.com/namnhatpham1995/Udacity-Creating-Customer-Segments-with-Arvato',
          },
          { label: 'Image Classifier with Deep Learning', url: 'https://github.com/namnhatpham1995/Udacity-Image-Classifier-TensorFlow' },
          { label: 'Abschlussbestätigung', url: 'https://confirm.udacity.com/G9GHDGQU' },
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
      { title: 'Lean Six Sigma White Belt', date: 'Mär 2022' },
      { title: 'Building Scalable Java Microservices with Spring Boot & Spring Cloud', date: 'Sep 2021', issuer: 'Coursera' },
      { title: 'Intro to Machine Learning with TensorFlow', date: 'Jun 2020', issuer: 'Udacity Nanodegree Program' },
    ],
  },
  languages: {
    heading: 'locale -a',
    entries: [
      { name: 'Vietnamesisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'Fließend (C1)' },
      // TODO: native review
      { name: 'Deutsch', level: 'Mittelstufe (B1)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Workout', 'Reisen & Wandern', 'Kochen', 'Spielen oder mit Freunden ausgehen'],
  },
};
