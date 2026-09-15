import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  sub: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  featured: boolean;
}

export interface ReturnPoint {
  icon: LucideIcon;
  text: string;
}

export interface Plan {
  name: string;
  price: string;
  tagline: string;
  featured: boolean;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}
