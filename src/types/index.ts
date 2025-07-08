// Tipos para el portafolio
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  duties: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export interface Skill {
  icon: React.ReactNode;
  name: string;
  level?: number;
}
