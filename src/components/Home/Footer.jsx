import { Instagram, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import { footerLinks } from "../../utils/data";

const social = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const contactInfo = {
  email: "support@bino.ai",
  phone: "+1 (555) 123-4567",
  addressLine1: "123 Innovation Drive",
  addressLine2: "Suite 400, San Francisco, CA 94107",
};

const languages = ["English", "Español", "Français", "Deutsch", "中文"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding + newsletter + contact */}
        <div className="space-y-6">
          <div>
            <div className="text-3xl font-bold mb-2">
              Bi<span className="text-blue-400">no</span>
            </div>
            <p className="text-caption text-gray-400">
              Bino helps you create, edit, and publish faster using cutting-edge AI. Your productivity co-pilot for local discovery and action.
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-2">
            <h4 className="text-paragraph font-semibold mb-2">Stay in the loop</h4>
            <p className="text-caption text-gray-400 mb-2">
              Subscribe to updates, tips, and new feature announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg px-4 py-2 text-caption bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-caption font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-4">
            <h4 className="text-paragraph font-semibold mb-2">Contact</h4>
            <div className="text-caption text-gray-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4">📞</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex flex-col">
                <span>{contactInfo.addressLine1}</span>
                <span>{contactInfo.addressLine2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link groups */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-paragraph font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-caption text-gray-400">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-paragraph font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-caption text-gray-400">
              {footerLinks.product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-paragraph font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-caption text-gray-400">
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-paragraph font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-caption text-gray-400">
              {footerLinks.support.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal + extra */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h4 className="text-paragraph font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-caption text-gray-400">
                {footerLinks.legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="text-paragraph font-semibold mb-3">Language</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="text-xs px-3 py-1 border border-gray-700 rounded-full hover:bg-gray-800 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Social + extra */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.name} href={s.href} aria-label={s.name}>
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition" />
                  </a>
                );
              })}
            </div>
            <div className="text-caption text-gray-500">
              &copy; {new Date().getFullYear()} Bino. All rights reserved. Crafted with AI-powered intent.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar small print */}
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-4">
        <div>
          Built with ❤️ by the Bino team.{" "}
          <span className="underline hover:text-white cursor-pointer">Status</span> ·{" "}
          <span className="underline hover:text-white cursor-pointer">Security</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span>Global edition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
