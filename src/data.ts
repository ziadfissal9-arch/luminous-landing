import {
  Send,
  Layers,
  ShieldCheck,
  UserPlus,
  Wallet,
  TrendingUp,
  Eye,
} from "lucide-react";
import type {
  Feature,
  NavLink,
  Plan,
  ReturnPoint,
  Stat,
  Testimonial,
} from "./types";

// ===== Navigation =====
export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Resources", href: "#experience" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contacts", href: "#footer" },
];

// ===== Trusted-by companies (rendered as clean wordmarks) =====
export const logos: string[] = ["Vertex", "Nimbus", "Quanta", "Lumen", "Orbit", "Stride"];

// ===== Hero stats (the 4 metrics row) =====
export const stats: Stat[] = [
  { value: "49%", label: "Revenue business", sub: "Maximize your earning potential with smart tools" },
  { value: "250K", label: "In annual revenue", sub: "Financial tools designed to boost your revenue" },
  { value: "89+", label: "Month of runway", sub: "From expense management to profit forecasting" },
  { value: "5M", label: "Premium Users", sub: "Through smart tools, real-time analytics are part" },
];

// ===== Features (How it works) =====
export const features: Feature[] = [
  {
    icon: Send,
    title: "Free Transfers",
    desc: "Discover proven strategies, expert advice, and the right tools to help you grow your business revenue.",
    featured: true,
  },
  {
    icon: Layers,
    title: "Multiple Account",
    desc: "Maximize your earning potential with smart, scalable financial tools designed to boost your business.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Unmatched Security",
    desc: "Through smart tools, real-time analytics and personalized financial insights, we empower companies.",
    featured: false,
  },
  {
    icon: UserPlus,
    title: "Free Registration",
    desc: "From expense management to profit forecasting, our platform helps entrepreneurs and freelancers grow.",
    featured: false,
  },
];

// ===== Returns / reserve account checklist =====
export const returnPoints: ReturnPoint[] = [
  { icon: Wallet, text: "Open your accounts" },
  { icon: TrendingUp, text: "Transfer your money" },
  { icon: Eye, text: "Watch your balance grow" },
];

// ===== Pricing =====
export const plans: Plan[] = [
  {
    name: "Basic",
    price: "0",
    tagline: "Perfect to start and explore core tools",
    featured: false,
    features: [
      "Access to standard financial tools",
      "Personalized recommendations based on your preferences",
      "Explore the app and every feature at no cost",
    ],
  },
  {
    name: "Premium",
    price: "9.99",
    tagline: "Advanced tools to scale your operations",
    featured: true,
    features: [
      "Access to advanced financial tools and analytics",
      "Priority customer support, any time",
      "Real-time reports and reconciliation",
    ],
  },
  {
    name: "Enterprise",
    price: "27.99",
    tagline: "Custom solutions for larger teams",
    featured: false,
    features: [
      "Dedicated account manager and onboarding",
      "Custom integrations and single sign-on (SSO)",
      "Volume-based pricing across your organization",
    ],
  },
];

// ===== Testimonials =====
export const testimonials: Testimonial[] = [
  {
    quote:
      "Keeping track of my expenses and investments was always a hassle, but now with Luminous everything just clicks. It pays for itself.",
    name: "Isabella Anderson",
    role: "E-commerce Seller",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "I've been using this platform for the past six months and it's made managing my finances so much easier. The payment integrations helped me grow.",
    name: "Joseph Martinez",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "This platform completely changed the way I manage my finances. The budgeting features are intuitive and save me hours every single week.",
    name: "Christopher White",
    role: "Freelance Designer",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

// ===== Sign-up side panel benefits =====
export const authBenefits: string[] = [
  "No credit card required to start",
  "Bank-level 256-bit encryption",
  "Cancel anytime, no questions asked",
];

// Avatars used for social proof (hero + auth pages)
export const proofAvatars: string[] = [
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
];
