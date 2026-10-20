export type ProjectCategory = 'all' | 'analytics' | 'ml' | 'ai';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'analytics' | 'ml' | 'ai';
  categoryLabel: string;
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  approach: string;
  techStack: string[];
  features: string[];
  outcome: string;
  learnings: string;
  featuredMetric?: {
    value: string;
    label: string;
  };
}

export type PerspectiveId = 'analyze' | 'build' | 'explore';

export interface Perspective {
  id: PerspectiveId;
  label: string;
  headline: string;
  description: string;
  visualTheme: string;
  bullets: string[];
}

export type WorkflowStepId = 'understand' | 'explore' | 'model' | 'evaluate' | 'communicate';

export interface WorkflowStep {
  id: WorkflowStepId;
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  keyAction: string;
  deliverables: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  headline: string;
  description: string;
  skills: {
    name: string;
    level: string;
    practicalUse: string;
    relatedProject?: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  institution?: string;
  location?: string;
  description: string;
  tags: string[];
}
