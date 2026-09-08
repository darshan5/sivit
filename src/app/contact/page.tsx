"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const contactInfo = [
  {
    label: "Email",
    value: "info@sivit.com",
    href: "mailto:info@sivit.com",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    label: "Phone",
    value: "+1.215.488.1124",
    href: "tel:+12154881124",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    label: "Address",
    value: "2713 Easton Road, STE 1A, Willow Grove, PA 19090",
    href: "https://maps.google.com/?q=2713+Easton+Road+STE+1A+Willow+Grove+PA+19090",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
    ),
  },
];

export default function ContactPage() {
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Connect in person or{" "}
              <span className="text-primary">via the web</span>
            </h1>
            <p className="text-lg text-gray-text leading-relaxed max-w-2xl">
              We would love to hear about your project. Reach out and let&apos;s
              start a conversation about how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === "Address" ? "_blank" : undefined}
                      rel={
                        info.label === "Address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-text">{info.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-12 rounded-2xl overflow-hidden bg-white border border-gray-medium/50 aspect-[4/3] flex items-center justify-center">
                  <svg
                    viewBox="0 0 400 300"
                    fill="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <rect width="400" height="300" fill="#f0f4f8" />
                    {/* Abstract map grid */}
                    <path d="M0 60h400" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M0 120h400" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M0 180h400" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M0 240h400" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M80 0v300" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M160 0v300" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M240 0v300" stroke="#e2e8f0" strokeWidth="0.5" />
                    <path d="M320 0v300" stroke="#e2e8f0" strokeWidth="0.5" />
                    {/* Roads */}
                    <path
                      d="M50 280L180 140L280 180L350 80"
                      stroke="#cbd5e1"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 200L120 160L250 200L400 140"
                      stroke="#cbd5e1"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Location pin */}
                    <circle cx="200" cy="130" r="20" fill="#6C5CE7" opacity="0.15" />
                    <circle cx="200" cy="130" r="10" fill="#6C5CE7" opacity="0.3" />
                    <path
                      d="M200 118c-3.3 0-6 2.7-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z"
                      fill="#6C5CE7"
                    />
                    <circle cx="200" cy="124" r="2" fill="white" />
                    {/* Label */}
                    <rect x="148" y="96" width="104" height="20" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                    <text x="200" y="110" textAnchor="middle" fontSize="9" fill="#6C5CE7" fontWeight="600" fontFamily="system-ui">Willow Grove, PA</text>
                  </svg>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll delay={200}>
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-medium/50">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-text mb-8">
                    Fill out the form below and we will get back to you as soon
                    as possible.
                  </p>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-gray-medium bg-gray-light px-4 py-3 text-sm text-foreground placeholder:text-gray-text/50 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-gray-medium bg-gray-light px-4 py-3 text-sm text-foreground placeholder:text-gray-text/50 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What is this about?"
                        className="w-full rounded-xl border border-gray-medium bg-gray-light px-4 py-3 text-sm text-foreground placeholder:text-gray-text/50 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-xl border border-gray-medium bg-gray-light px-4 py-3 text-sm text-foreground placeholder:text-gray-text/50 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Send Message
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
