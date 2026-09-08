import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "About | Sivit Inc",
  description:
    "Sivit Inc is a small IT services organization delivering modern, high-performance websites for small businesses and freelancers.",
};

const pillars = [
  {
    title: "Beautiful",
    description:
      "Prioritizing first impressions and creating designs that reflect your business identity.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M20 6C14 6 9 11 9 17c0 8 11 18 11 18s11-10 11-18c0-6-5-11-11-11z"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="17" r="4" />
      </svg>
    ),
  },
  {
    title: "Intuitive",
    description:
      "Ensuring user-friendly navigation for quick comprehension.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="20" cy="20" r="14" />
        <path d="M20 12v8l5.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fast",
    description:
      "Page load times under 4 seconds with optimization focus.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M22 6l-4 14h10L18 34"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 mb-8">
              <span className="text-sm font-medium text-primary">
                About Sivit
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Transform your ideas into a{" "}
              <span className="text-primary">practical solution</span>
            </h1>
            <p className="text-lg text-gray-text leading-relaxed max-w-2xl">
              A small organization with straightforward objectives: deliver
              modern, high-performance websites customers can take pride in. We
              specialize in marketing and automation websites, partnering with
              small businesses and freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Every project we build stands on three pillars
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} delay={i * 150}>
                <div className="text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-medium/50 transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-gray-text leading-relaxed">
                  <p>
                    Based in Willow Grove, Pennsylvania &mdash; in the suburbs of
                    Philadelphia &mdash; Sivit Inc is an IT services company dedicated
                    to helping small businesses and freelancers establish a strong
                    digital presence.
                  </p>
                  <p>
                    We build custom websites, handle SEO and marketing, and
                    provide automation services that simplify operations. Our team
                    believes that great technology should be accessible to
                    businesses of all sizes.
                  </p>
                  <p>
                    Since 2012, we have partnered with organizations across
                    industries to bring their digital visions to life, one project
                    at a time.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              {/* Abstract illustration */}
              <div className="relative">
                <svg
                  viewBox="0 0 400 320"
                  fill="none"
                  className="w-full"
                  aria-hidden="true"
                >
                  {/* Background shapes */}
                  <rect
                    x="40"
                    y="40"
                    width="320"
                    height="240"
                    rx="20"
                    fill="#f8f9fa"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />

                  {/* Connected nodes suggesting network/collaboration */}
                  <circle cx="120" cy="120" r="30" fill="#6C5CE7" opacity="0.1" />
                  <circle cx="120" cy="120" r="12" fill="#6C5CE7" />

                  <circle cx="280" cy="100" r="25" fill="#6C5CE7" opacity="0.1" />
                  <circle cx="280" cy="100" r="10" fill="#a29bfe" />

                  <circle cx="200" cy="200" r="35" fill="#6C5CE7" opacity="0.1" />
                  <circle cx="200" cy="200" r="14" fill="#6C5CE7" />

                  <circle cx="320" cy="220" r="20" fill="#6C5CE7" opacity="0.1" />
                  <circle cx="320" cy="220" r="8" fill="#a29bfe" />

                  <circle cx="80" cy="230" r="22" fill="#6C5CE7" opacity="0.1" />
                  <circle cx="80" cy="230" r="9" fill="#6C5CE7" />

                  {/* Connecting lines */}
                  <line
                    x1="132"
                    y1="120"
                    x2="270"
                    y2="100"
                    stroke="#6C5CE7"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <line
                    x1="130"
                    y1="132"
                    x2="190"
                    y2="190"
                    stroke="#6C5CE7"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <line
                    x1="214"
                    y1="200"
                    x2="312"
                    y2="220"
                    stroke="#6C5CE7"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <line
                    x1="186"
                    y1="200"
                    x2="89"
                    y2="225"
                    stroke="#6C5CE7"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />
                  <line
                    x1="280"
                    y1="110"
                    x2="214"
                    y2="192"
                    stroke="#6C5CE7"
                    strokeWidth="1.5"
                    opacity="0.2"
                  />

                  {/* Label */}
                  <text
                    x="200"
                    y="280"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#a0aec0"
                    fontFamily="system-ui"
                  >
                    Connected &middot; Collaborative &middot; Creative
                  </text>
                </svg>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Willow Grove, Pennsylvania
            </h2>
            <p className="text-gray-text text-lg leading-relaxed">
              Located in the suburbs of Philadelphia, we serve businesses
              locally and across the country.
            </p>
            <p className="mt-4 text-sm text-gray-text">
              2713 Easton Road, STE 1A, Willow Grove, PA 19090
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
