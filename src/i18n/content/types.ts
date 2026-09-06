export interface NavLabels {
  intro: string;
  skills: string;
  experience: string;
  education: string;
  projects: string;
  certificates: string;
  languages: string;
  hobbies: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  dates: string;
  description: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  title: string;
  dates?: string;
  description: string[];
  tech: string[];
  links: ProjectLink[];
}

export interface CertificateEntry {
  title: string;
  date: string;
  issuer?: string;
  description?: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface SummarySegment {
  text: string;
  strong?: boolean;
}

export interface WorkLocationPolicy {
  base: string;
  remote: {
    available: boolean;
    maximumDistanceKm: number | null;
    rule: string;
    vietnam: {
      possible: boolean;
      automatic: boolean;
      requiresFurtherDiscussion: boolean;
      examples: string[];
      rule: string;
    };
  };
  hybrid: {
    available: boolean;
    maximumDistanceKm: number;
    rule: string;
  };
  onSite: {
    available: boolean;
    maximumDistanceKm: number;
    rule: string;
  };
  guidance: string;
}

export interface CvContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavLabels;
  hero: {
    name: string;
    role: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    summary: SummarySegment[];
  };
  workLocation: WorkLocationPolicy;
  skills: {
    heading: string;
    groups: SkillGroup[];
  };
  experience: {
    heading: string;
    entries: ExperienceEntry[];
  };
  education: {
    heading: string;
    entries: EducationEntry[];
  };
  projects: {
    heading: string;
    entries: ProjectEntry[];
  };
  certificates: {
    heading: string;
    entries: CertificateEntry[];
  };
  languages: {
    heading: string;
    entries: LanguageEntry[];
  };
  hobbies: {
    heading: string;
    items: string[];
  };
}
