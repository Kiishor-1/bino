import {
    Clock3,
    FileCheck2,
    Headset,
    Shield,
    BarChart3,
    Cloud, Cpu, ShieldCheck, Rocket, Plug, Lock, Globe, Layers, Workflow, User, Cog, Code, Zap
} from "lucide-react";

import MobileView from '../assets/mobile.png'
import DesctopView from '../assets/desktop.png'

export const benefits = [
    {
        icon: Clock3,
        title: "Save Time Daily",
        desc: "Automate repetitive tasks and focus on what matters.",
    },
    {
        icon: FileCheck2,
        title: "Create Flawless Content",
        desc: "Generate high-quality code, emails, and marketing content effortlessly.",
    },
    {
        icon: Headset,
        title: "Dedicated Support",
        desc: "Human support whenever you need it, plus 24/7 AI assistance.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        desc: "End-to-end encryption and GDPR-compliant data practices.",
    },
    {
        icon: BarChart3,
        title: "Make Data-Driven Decisions",
        desc: "Turn insights into action with built-in analytics and tracking.",
    },
    {
        icon: Cloud,
        title: "Cloud Sync & Accessibility",
        desc: "Access Bino from anywhere — mobile, desktop, or browser.",
    },
];

export const testimonials = [
    {
        name: "Aisha Sharma",
        role: "Marketing Lead, GenAI Corp",
        text: "Bino has drastically improved how our team collaborates and delivers. It’s like having a co-pilot for every task!",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Rohit Verma",
        role: "Product Manager, Brightly",
        text: "I was amazed by how intuitive and powerful the platform is. It saved me hours each week.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        name: "Meera Iyer",
        role: "Founder, BetaBoost",
        text: "Highly recommend it to any founder looking to scale faster. Seamless integration and rock-solid performance!",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        name: "Akash Thakur",
        role: "CEO, BetaBoost",
        text: "Highly recommend it to any founder looking to scale faster. Seamless integration and rock-solid performance!",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        name: "Jessica Nair",
        role: "Softwre Developer, BetaBoost",
        text: "Highly recommend it to any founder looking to scale faster. Seamless integration and rock-solid performance!",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
];

export const footerLinks = {
    company: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Team", href: "#" },
        { label: "Press", href: "#" },
    ],
    product: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Docs", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "API", href: "#" },
        { label: "Changelog", href: "#" },
    ],
    resources: [
        { label: "Guides", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Community", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Events", href: "#" },
    ],
    support: [
        { label: "Help Center", href: "#" },
        { label: "Status", href: "#" },
        { label: "Security", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
    ],
    legal: [
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Compliance", href: "#" },
    ],
};

export const features = [
    { title: "Core Intelligence", icon: Cpu, desc: "Advanced AI engine powering reliable responses and productivity." },
    { title: "Transparent AI", icon: ShieldCheck, desc: "Clear explanations behind every AI suggestion." },
    { title: "Eco-Friendly Performance", icon: Rocket, desc: "Designed for sustainable and energy-efficient AI performance." },
    { title: "User-Centric Privacy", icon: Lock, desc: "Data is protected and never sold. Full control stays with you." },
    { title: "Unified Multimodal AI", icon: Globe, desc: "Combine text, image, and audio into a single smart assistant." },
    { title: "User-Friendly Dashboard", icon: User, desc: "Simple and intuitive dashboard for managing tasks and access." },
    { title: "Customizable Models", icon: Cog, desc: "Fine-tune responses to match your team’s unique voice and tone." },
    { title: "Real-time Speed", icon: Zap, desc: "Lightning-fast responses to keep your workflow flowing." },
];

export const explorableFeatures = [
    {
        title: "Type, talk, and use it your way",
        description:
            "Use Bino how you like — type, talk or even upload an image to get started.",
        img:MobileView,
    },
    {
        title: "Powerful desktop workspace",
        description:
            "Use Bino on your desktop with an expanded layout, keyboard shortcuts, and integrated tools for deeper workflows and multitasking.",
        img: DesctopView,
    },
    {
        title: "Search the web",
        description:
            "Give Bino permission to browse so it can find the latest info for you.",
        img:MobileView,
    }
];