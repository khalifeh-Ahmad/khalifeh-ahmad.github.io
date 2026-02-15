export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  link?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  phone: string;
  linkedin: string;
  summary: string;
  dateOfBirth: string;
  gender: string;
  aboutme: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar?: string;
  rating: number;
}