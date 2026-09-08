import Image from "next/image";
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
    iconSrc: "/images/icon-interface.png",
    illustrationSrc: "/images/hero-website.png",
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
    iconSrc: "/images/icon-chart.png",
    illustrationSrc: "/images/services-mockup.jpg",
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
    iconSrc: "/images/icon-devices.png",
    illustrationSrc: "/images/icon-rockets.png",
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
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Image
                        src={area.iconSrc}
                        alt={area.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
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
                <Image
                  src={area.illustrationSrc}
                  alt={`${area.title} illustration`}
                  width={500}
                  height={350}
                  className="w-full rounded-2xl shadow-lg object-cover"
                />
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
