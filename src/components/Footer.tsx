import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="Sivit"
                width={100}
                height={34}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Imagine, Design, Implement. We transform your ideas into practical
              digital solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:info@sivit.com"
                  className="hover:text-white transition-colors"
                >
                  info@sivit.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12154881124"
                  className="hover:text-white transition-colors"
                >
                  +1.215.488.1124
                </a>
              </li>
              <li className="leading-relaxed">
                2713 Easton Road, STE 1A
                <br />
                Willow Grove, PA 19090
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2012&ndash;2024 Sivit Inc. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:info@sivit.com"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
            <a
              href="tel:+12154881124"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
