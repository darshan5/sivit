"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroDashboard from "@/components/HeroDashboard";

const rotatingConcepts = [
  "Create a Reflection of your Business",
  "Stay in Touch and Drive Repeat Business",
  "Simplify with Automation",
];

const services = [
  {
    title: "Web Design",
    description:
      "Brand pride and lasting impressions through custom, fast-loading websites optimized for SEO. Sites load within 3 seconds, guaranteed.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="5" width="26" height="20" rx="3" />
        <path d="M3 11h26" />
        <circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" />
        <circle cx="11" cy="8" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
        <path d="M8 17h6M8 21h10" strokeLinecap="round" />
        <rect x="20" y="15" width="6" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description:
      "Build your online presence across websites and review platforms. Focus on customer acquisition and positive engagement.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          d="M6 22V14M11 22V10M16 22V16M21 22V8M26 22V12"
          strokeLinecap="round"
        />
        <path
          d="M4 26h24"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "Eliminate redundant tasks through system automation, enabling instant data access and business growth.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="16" cy="16" r="11" />
        <path d="M16 10v6l4 3" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M5 5l3 3M27 5l-3 3"
          strokeLinecap="round"
        />
        <path d="M16 2v2M16 28v2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "IMAGINE",
    description: "Tell us about your dreams and aspirations",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "We design a plan that reflects your vision",
  },
  {
    number: "03",
    title: "CREATE",
    description: "Collaborate with us to create an exceptional product",
  },
  {
    number: "04",
    title: "LAUNCH",
    description: "Launch a site you are proud of. We'll be there to support it",
  },
];

const testimonials = [
  {
    quote:
      "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
    name: "Luis Desalvo",
    company: "CREO TECH",
  },
  {
    quote:
      "Beauty is when you can appreciate yourself. When you love yourself, that's when you're most beautiful.",
    name: "Shelia McCourtney",
    company: "ARCHITECT",
  },
];

export default function HomePage() {
  const [conceptIndex, setConceptIndex] = useState(0);
  const [conceptVisible, setConceptVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setConceptVisible(false);
      setTimeout(() => {
        setConceptIndex((i) => (i + 1) % rotatingConcepts.length);
        setConceptVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-primary-light/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text side */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
                <span className="text-sm font-medium text-primary">
                  IT Services &amp; Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Imagine, Design,{" "}
                <span className="text-primary">Implement</span>
              </h1>

              <p className="mt-6 text-lg text-gray-text leading-relaxed">
                We transform your ideas into practical digital solutions through
                planning, creativity, and focus.
              </p>

              {/* Rotating concepts */}
              <div className="mt-6 h-12 flex items-center">
                <div className="flex items-center gap-3">
                  <span className="w-1 h-8 rounded-full bg-primary" />
                  <span
                    className={`text-base font-medium text-foreground transition-all duration-400 ${
                      conceptVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    {rotatingConcepts[conceptIndex]}
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                >
                  Start a Project
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-gray-medium px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-gray-light hover:-translate-y-0.5"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Dashboard illustration */}
            <div className="hidden lg:block">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What We Do
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              End-to-end digital services that help your business grow
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 150}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-medium/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4"
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
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              We Design to Simplify
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Our proven four-step process delivers results every time
            </p>
          </AnimateOnScroll>

          {/* Timeline - Horizontal on desktop, Vertical on mobile */}
          <div className="relative">
            {/* Desktop horizontal timeline */}
            <div className="hidden md:block">
              {/* Connecting line */}
              <div className="absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <AnimateOnScroll key={step.title} delay={i * 200}>
                    <div className="relative flex flex-col items-center text-center">
                      {/* Node */}
                      <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-6 transition-colors hover:border-primary hover:bg-primary/5">
                        <span className="text-2xl font-bold text-primary">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-text leading-relaxed max-w-[200px]">
                        {step.description}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden space-y-0">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.title} delay={i * 150}>
                  <div className="relative flex gap-6 pb-12 last:pb-0">
                    {/* Vertical line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/20" />
                    )}
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-text leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What Our Partners Say
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <AnimateOnScroll key={testimonial.name} delay={i * 200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-medium/50">
                  {/* Quote icon */}
                  <svg
                    className="w-10 h-10 text-primary/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <blockquote className="text-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-text uppercase tracking-wider">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We would love to hear from you!
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:-translate-y-0.5"
            >
              Start a Project With Us
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
