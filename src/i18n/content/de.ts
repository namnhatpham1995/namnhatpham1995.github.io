import type { CvContent } from './types';

// German strings ported from the legacy assets/js/translations.js dictionary where still
// valid; anything covering the new CV content (updated dates, FinTrack, skills) is newly
// translated and flagged below for native review.
export const de: CvContent = {
  meta: {
    title: 'Nam Nhat Pham — Software-Ingenieur',
    // TODO: native review
    description:
      'Software-Ingenieur in Stuttgart, Deutschland — über 5 Jahre Erfahrung im Aufbau skalierbarer Backend-Dienste und cloud-nativer Anwendungen mit Java, Spring Boot und Python.',
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
    role: 'Software-Ingenieur',
    location: 'Stuttgart, Deutschland',
    email: 'nam95.pn@gmail.com',
    linkedin: 'https://www.linkedin.com/in/namnhatpham1995',
    github: 'https://github.com/namnhatpham1995',
    // TODO: native review — figure updated from "6+" (legacy site) to "5+" per 2026 CV
    summary:
      'Software-Ingenieur mit über 5 Jahren Erfahrung im Aufbau skalierbarer Backend-Dienste und cloud-nativer Anwendungen auf Produktionsplattformen. Erfahrung mit Python und TypeScript im Produktivbetrieb, fundierte CI/CD-Automatisierung, Backend-Architektur und Microservice-Zerlegung. AWS-zertifiziert.',
  },
  skills: {
    heading: 'ls skills/',
    // TODO: native review — expanded from 4 to 6 groups per 2026 CV
    groups: [
      { title: 'Sprachen', items: ['Java', 'Python', 'TypeScript', 'Bash'] },
      {
        title: 'Backend & Frontend',
        items: ['Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'Next.js', 'Flask'],
      },
      { title: 'Cloud, DevOps & Tools', items: ['AWS', 'GitHub Actions', 'Docker', 'Kubernetes', 'Chef'] },
      { title: 'Testing', items: ['JUnit', 'Mockito', 'Testcontainers', 'Cypress'] },
      { title: 'Datenbanken', items: ['PostgreSQL', 'MySQL'] },
      { title: 'Praktiken', items: ['Agile/Scrum', 'CI/CD'] },
    ],
  },
  experience: {
    heading: 'git log --experience',
    // TODO: native review — dates and bullets updated to match 2026 CV (Cumulocity: Oct 2022–Sep 2026,
    // Software AG: Oct 2021–Oct 2022; legacy translations.js had different dates/role split)
    entries: [
      {
        role: 'Software-Ingenieur in F&E',
        company: 'Cumulocity GmbH (vormals Software AG) — Digital Twin Management Team',
        dates: 'Okt 2022 – Sep 2026',
        bullets: [
          'Umsetzung von Digital-Twin-Management(DTM)-Features auf der Cumulocity-IoT-Plattform für Millionen verbundener Assets.',
          'Einsatz von KI-Coding-Tools (GitHub Copilot, Claude Code) über den gesamten Ticket-Lebenszyklus, wodurch der Durchsatz von 1-2 auf bis zu 3 Tickets pro Woche gesteigert wurde.',
          'Refactoring des DTM-Microservice zur Reduzierung der Klassenkomplexität und Verbesserung der langfristigen Wartbarkeit.',
          'Leitung der Migration der Integrationstest-Suite zu Cypress, wodurch sich Testausführung und CI-Feedback-Zyklen beschleunigten.',
          'Migration eines Python-basierten OEE-Microservice zu einem Java-Spring-Boot-Microservice.',
          'Python-Simulationsskripte für Last- und Integrationstests.',
          'Aufbau und Pflege von GitHub-Actions-CI/CD-Pipelines für Anwendungen und Microservices.',
          'Entwurf eines Bash-Deployment-Helfers, der die teamübergreifende Debugging-Zeit reduzierte.',
        ],
      },
      {
        role: 'Software-Ingenieur in F&E',
        company: 'Software AG — Cumulocity Platform Core Team',
        dates: 'Okt 2021 – Okt 2022',
        bullets: [
          'Plattform-Debugging und Ursachenanalyse auf der Cumulocity-Kernplattform.',
          'Erstellung von Chef-Cookbooks und Entwurf der Kubernetes-Cluster-Architektur.',
          'Automatisierung der AWS-Bereitstellung mit Bash und der AWS CLI, wodurch die Einrichtungszeit um rund 10 % reduziert wurde.',
        ],
      },
      {
        role: 'Software-Entwickler',
        company: 'VGU Forex Club',
        dates: 'Apr 2018 – Mär 2019',
        bullets: [
          'Umsetzung manueller Handelsstrategien in regelbasierte Expert Advisors und eigene Indikatoren für MetaTrader 4/5.',
          'Backtesting und Optimierung von Strategien anhand historischer Marktdaten.',
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
        dates: '2025 – heute',
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
        title: 'M.Sc.-Thesis: Remote-Desktop-Steuerung aus einer SaaS-Anwendung',
        dates: 'Feb – Aug 2021',
        // TODO: native review
        description: [
          'Entwicklung einer webbasierten Remote-Desktop-Steuerung, zugänglich über gängige Webbrowser.',
          'Aufbau von RemotePy, einer von einer Open-Source-Basis geforkten und erweiterten Python-Flask-Anwendung, mit browsergesteuerter Maus-, Tastatur- und Touch-Steuerung sowie Live-Bildschirmstreaming, bereitgestellt über ein Werkzeug/Gunicorn-Backend mit eigener CLI zur Konfiguration von Worker- und Thread-Nebenläufigkeit.',
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
      { title: 'telc Deutsch B1', date: 'Jul 2024' },
      { title: 'Software AG Leadership Essentials Professional', date: 'Nov 2023' },
      { title: 'AWS Certified Developer – Associate', date: 'Aug 2023', issuer: 'AWS' },
      { title: 'AWS Certified Cloud Practitioner', date: 'Aug 2023', issuer: 'AWS' },
      { title: 'Lean Six Sigma White Belt', date: 'Mär 2022' },
      { title: 'Building Scalable Java Microservices with Spring Boot & Spring Cloud', date: 'Sep 2021', issuer: 'Coursera' },
      { title: 'Intro to Machine Learning with TensorFlow', date: 'Jun 2020', issuer: 'Udacity Nanodegree Program' },
      { title: 'IELTS 7.0', date: 'Okt 2018' },
    ],
  },
  languages: {
    heading: 'locale -a',
    entries: [
      { name: 'Vietnamesisch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'Fließend (C1)' },
      { name: 'Deutsch', level: 'Berufliche Kenntnisse (B2)' },
    ],
  },
  hobbies: {
    heading: 'cat hobbies.txt',
    items: ['Workout', 'Reisen & Wandern', 'Kochen', 'Spielen oder mit Freunden ausgehen'],
  },
};
