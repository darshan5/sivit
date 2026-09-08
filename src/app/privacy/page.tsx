export const metadata = {
  title: "Privacy Policy | Sivit Inc",
  description:
    "Sivit Inc privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 mb-8">
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-text leading-relaxed">
              Last updated: September 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12 text-gray-text leading-relaxed">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <p>
                Sivit Inc (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                &ldquo;us&rdquo;) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website at
                sivit.com or engage with our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you voluntarily provide to us when
                you use our contact form or communicate with us directly. This
                may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">Name</span>{" "}
                  &mdash; so we can address you personally in our response
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Email address
                  </span>{" "}
                  &mdash; so we can reply to your inquiry
                </li>
                <li>
                  <span className="font-medium text-foreground">Subject</span>{" "}
                  &mdash; to understand the nature of your request
                </li>
                <li>
                  <span className="font-medium text-foreground">Message</span>{" "}
                  &mdash; the details of your inquiry or project requirements
                </li>
              </ul>
              <p className="mt-4">
                We do not collect sensitive personal information such as social
                security numbers, financial data, or health information through
                our website.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                The information we collect is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and provide requested information about our services</li>
                <li>To communicate with you about projects, proposals, and service agreements</li>
                <li>To improve our website, services, and overall user experience</li>
                <li>To send occasional updates about our services, only if you have opted in</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    Essential cookies
                  </span>{" "}
                  &mdash; required for the website to function properly
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Analytics cookies
                  </span>{" "}
                  &mdash; help us understand how visitors interact with our site
                  (e.g., Google Analytics)
                </li>
              </ul>
              <p className="mt-4">
                You can control cookie preferences through your browser
                settings. Disabling cookies may affect certain features of the
                website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Third-Party Services
              </h2>
              <p>
                We may use third-party services such as Google Analytics to
                collect and analyze usage data. These services have their own
                privacy policies governing the use of your information. We do
                not sell, trade, or otherwise transfer your personal information
                to outside parties, except as described in this policy or as
                required by law.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required or permitted by law.
                Contact form submissions are retained for the duration of our
                business relationship and for a reasonable period thereafter to
                address any follow-up inquiries.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Data Security
              </h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not directed at individuals under
                the age of 13. We do not knowingly collect personal information
                from children. If we become aware that we have inadvertently
                collected such information, we will take steps to delete it
                promptly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. Any changes will be posted on this page with
                an updated &ldquo;Last updated&rdquo; date. We encourage you to
                review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-gray-light border border-gray-medium/50 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  <a
                    href="mailto:info@sivit.com"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    info@sivit.com
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  <a
                    href="tel:+12154881124"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    +1.215.488.1124
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground">Address:</span>{" "}
                  2713 Easton Road, STE 1A, Willow Grove, PA 19090
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
