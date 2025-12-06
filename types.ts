import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}