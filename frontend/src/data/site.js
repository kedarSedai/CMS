/**
 * Central site configuration. Replace donation URL when Donorbox/Stripe is live.
 * Strapi mapping: later move these fields to a `global` single type or `site-settings`.
 */
export const site = {
  name: "Rising MVPs",
  tagline: "Youth, sports, music, academics, and community—rising together.",
  description:
    "Rising MVPs is a nonprofit founded by Rian Patel, empowering youth through sports, music, and academic growth while supporting communities in times of need.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://risingmvps.org",
  founder: "Rian Patel",
  email: "hello@risingmvps.org",
  phone: "(555) 010-2030",
  address: "Community HQ · United States",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
  /** One-time + recurring donations (Donorbox, Givebutter, Stripe Payment Link, etc.) */
  donateUrl:
    process.env.NEXT_PUBLIC_DONATE_URL ||
    "https://donorbox.org/your-campaign-placeholder",
  volunteerNotifyEmail: "volunteers@risingmvps.org",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/activities", label: "Rian’s Activities" },
  { href: "/service-projects", label: "Service Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/press", label: "Press" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
