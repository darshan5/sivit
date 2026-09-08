import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export const metadata = {
  title: "Services | Sivit Inc",
  description:
    "Custom web design, digital marketing, and automation services for small businesses and freelancers.",
};

const serviceAreas = [
  {
    tagline: "Create a Reflection",
    title: "Web Design",
    description:
      "Your website is the digital face of your business. We build custom sites that reflect your brand identity and make lasting impressions.",
    features: [
      {
        title: "Custom Development",
        description:
          "Website development tailored to your brand identity, built from the ground up to tell your story.",
      },
      {
        title: "Full Management",
        description:
          "Continuous maintenance, security updates, and performance monitoring so you can focus on your business.",
      },
      {
        title: "Optimization",
        description:
          "Designed to load in 3 seconds, guaranteed. Google SEO optimization to ensure your customers find you.",
      },
    ],
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="4" y="8" width="40" height="28" rx="4" />
        <path d="M4 16h40" />
        <circle cx="10" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <rect x="10" y="22" width="12" height="3" rx="1.5" />
        <rect x="10" y="28" width="18" height="2" rx="1" opacity="0.5" />
        <rect x="28" y="20" width="12" height="12" rx="2" />
        <path d="M16 40h16" strokeLinecap="round" />
      </svg>
    ),
    illustration: (
      <svg viewBox="0 0 400 280" fill="none" className="w-full" aria-hidden="true">
        <rect x="30" y="20" width="340" height="240" rx="16" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="1" />
        {/* Browser window */}
        <rect x="60" y="50" width="280" height="180" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="60" y="50" width="280" height="30" rx="10" fill="#f0f0f5" />
        <rect x="60" y="72" width="280" height="8" fill="#f0f0f5" />
        <circle cx="78" cy="65" r="4" fill="#ff6b6b" opacity="0.7" />
        <circle cx="90" cy="65" r="4" fill="#ffd93d" opacity="0.7" />
        <circle cx="102" cy="65" r="4" fill="#6BCB77" opacity="0.7" />
        {/* Page content mockup */}
        <rect x="76" y="92" width="120" height="8" rx="4" fill="#6C5CE7" opacity="0.3" />
        <rect x="76" y="108" width="180" height="5" rx="2.5" fill="#e2e8f0" />
        <rect x="76" y="118" width="160" height="5" rx="2.5" fill="#e2e8f0" />
        <rect x="76" y="132" width="80" height="24" rx="12" fill="#6C5CE7" opacity="0.2" />
        <rect x="76" y="168" width="100" height="48" rx="6" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="190" y="168" width="100" height="48" rx="6" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="1" />
        {/* Speed indicator */}
        <circle cx="330" cy="180" r="24" stroke="#6C5CE7" strokeWidth="3" opacity="0.2" />
        <path d="M330 156 A24 24 0 1 1 306 180" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" />
        <text x="330" y="184" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6C5CE7" fontFamily="system-ui">3s</text>
      </svg>
    ),
  },
  {
    tagline: "Stay In Touch",
    title: "Digital Marketing",
    description:
      "Build meaningful connections with your audience across every digital touchpoint. Drive engagement and grow your customer base.",
    features: [
      {
        title: "Guest Feedback Management",
        description:
          "Monitor and respond to reviews across platforms, turning feedback into opportunities for growth.",
      },
      {
        title: "Social Media Presence",
        description:
          "Strategic social media management that builds community and keeps your brand top of mind.",
      },
      {
        title: "Marketing Campaigns",
        description:
          "Targeted campaigns designed to reach the right audience and drive measurable results.",
      },
    ],
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M8 30V18M16 30V12M24 30V20M32 30V10M40 30V16" strokeLinecap="round" />
        <path d="M4 36h40" strokeLinecap="round" />
        <path d="M8 18l8-6 8 8 8-10 8 6" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      </svg>
    ),
    illustration: (
      <svg viewBox="0 0 400 280" fill="none" className="w-full" aria-hidden="true">
        <rect x="30" y="20" width="340" height="240" rx="16" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="1" />
        {/* Chart bars */}
        <rect x="70" y="180" width="30" height="50" rx="4" fill="#6C5CE7" opacity="0.2" />
        <rect x="115" y="150" width="30" height="80" rx="4" fill="#6C5CE7" opacity="0.3" />
        <rect x="160" y="120" width="30" height="110" rx="4" fill="#6C5CE7" opacity="0.5" />
        <rect x="205" y="100" width="30" height="130" rx="4" fill="#6C5CE7" opacity="0.7" />
        <rect x="250" y="70" width="30" height="160" rx="4" fill="#6C5CE7" opacity="0.9" />
        <rect x="295" y="50" width="30" height="180" rx="4" fill="#6C5CE7" />
        {/* Growth arrow */}
        <path d="M85 175 L310 45" stroke="#6C5CE7" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <circle cx="310" cy="45" r="6" fill="#6C5CE7" opacity="0.6" />
        {/* Labels */}
        <text x="85" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">Jan</text>
        <text x="130" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">Feb</text>
        <text x="175" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">Mar</text>
        <text x="220" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">Apr</text>
        <text x="265" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">May</text>
        <text x="310" y="248" textAnchor="middle" fontSize="9" fill="#a0aec0" fontFamily="system-ui">Jun</text>
      </svg>
    ),
  },
  {
    tagline: "Simplify Operations",
    title: "Automation",
    description:
      "Free your team from repetitive work. We build systems that automate tasks, streamline workflows, and unlock business intelligence.",
    features: [
      {
        title: "Business Solutions",
        description:
          "Custom integrations and workflows that connect your tools and eliminate manual data entry.",
      },
      {
        title: "Task Automation",
        description:
          "Automated processes for invoicing, scheduling, notifications, and more — saving hours every week.",
      },
      {
        title: "Business Intelligence",
        description:
          "Dashboards and reporting that give you instant access to the data that matters most.",
      },
    ],
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="6" y="10" width="14" height="12" rx="3" />
        <rect x="28" y="10" width="14" height="12" rx="3" />
        <rect x="17" y="28" width="14" height="12" rx="3" />
        <path d="M13 22v6h5M35 22v6h-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    illustration: (
      <svg viewBox="0 0 400 280" fill="none" className="w-full" aria-hidden="true">
        <rect x="30" y="20" width="340" height="240" rx="16" fill="#f8f9fa" stroke="#e2e8f0" strokeWidth="1" />
        {/* Workflow nodes */}
        <rect x="60" y="60" width="80" height="50" rx="10" fill="white" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.8" />
        <text x="100" y="90" textAnchor="middle" fontSize="10" fill="#6C5CE7" fontFamily="system-ui">Input</text>

        <rect x="160" y="115" width="80" height="50" rx="10" fill="white" stroke="#6C5CE7" strokeWidth="1.5" />
        <text x="200" y="145" textAnchor="middle" fontSize="10" fill="#6C5CE7" fontFamily="system-ui">Process</text>

        <rect x="260" y="60" width="80" height="50" rx="10" fill="white" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.8" />
        <text x="300" y="90" textAnchor="middle" fontSize="10" fill="#6C5CE7" fontFamily="system-ui">Output</text>

        <rect x="260" y="170" width="80" height="50" rx="10" fill="white" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.6" />
        <text x="300" y="200" textAnchor="middle" fontSize="10" fill="#6C5CE7" fontFamily="system-ui">Report</text>

        {/* Connecting arrows */}
        <path d="M140 85 L160 130" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.4" />
        <path d="M240 140 L260 90" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.4" />
        <path d="M240 145 L260 190" stroke="#6C5CE7" strokeWidth="1.5" opacity="0.4" />

        {/* Decorative dots */}
        <circle cx="100" cy="180" r="4" fill="#6C5CE7" opacity="0.15" />
        <circle cx="80" cy="200" r="3" fill="#6C5CE7" opacity="0.1" />
        <circle cx="120" cy="210" r="5" fill="#6C5CE7" opacity="0.1" />

        {/* Gear icon in center */}
        <circle cx="200" cy="140" r="8" fill="#6C5CE7" opacity="0.1" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 mb-8">
              <span className="text-sm font-medium text-primary">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Everything you need to{" "}
              <span className="text-primary">grow online</span>
            </h1>
            <p className="text-lg text-gray-text leading-relaxed max-w-2xl">
              From design to deployment to marketing, we provide the complete
              digital toolkit for small businesses and freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {serviceAreas.map((area, index) => (
        <section
          key={area.title}
          className={`py-24 ${index % 2 === 0 ? "bg-gray-light" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
              }`}
            >
              {/* Text content */}
              <AnimateOnScroll>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      {area.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary uppercase tracking-wider">
                        {area.tagline}
                      </p>
                      <h2 className="text-3xl font-bold text-foreground">
                        {area.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-text leading-relaxed mb-8">
                    {area.description}
                  </p>

                  <div className="space-y-6">
                    {area.features.map((feature) => (
                      <div key={feature.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-text leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Illustration */}
              <AnimateOnScroll delay={200}>
                {area.illustration}
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Let us know about your project and we will build a plan together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a Project
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
