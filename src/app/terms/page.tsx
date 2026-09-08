export const metadata = {
  title: "Terms of Service | Sivit Inc",
  description:
    "Sivit Inc terms of service — the terms and conditions governing use of our website and services.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
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
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website at sivit.com (the
                &ldquo;Site&rdquo;) or engaging the services of Sivit Inc
                (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our Site or services.
              </p>
            </div>

            {/* Description of Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Description of Services
              </h2>
              <p className="mb-4">
                Sivit Inc provides IT consulting and digital services to small
                businesses and freelancers. Our services include, but are not
                limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom website design and development</li>
                <li>Search engine optimization (SEO) and digital marketing</li>
                <li>Business process automation</li>
                <li>IT consulting and strategy</li>
              </ul>
              <p className="mt-4">
                Specific deliverables, timelines, and pricing are defined in
                individual service agreements between Sivit Inc and the client.
              </p>
            </div>

            {/* Use of the Website */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Use of the Website
              </h2>
              <p className="mb-4">
                You agree to use this Site only for lawful purposes and in a
                manner that does not infringe upon the rights of others or
                restrict their use of the Site. You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the Site in any way that violates applicable local, state,
                  national, or international law
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the Site, its
                  servers, or any connected systems
                </li>
                <li>
                  Use the Site to transmit any harmful, threatening, or
                  objectionable material
                </li>
                <li>
                  Reproduce, duplicate, or copy any material from the Site for
                  commercial purposes without prior written consent
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this Site, including text, graphics, logos, images,
                and software, is the property of Sivit Inc or its licensors and
                is protected by applicable intellectual property laws.
              </p>
              <p className="mb-4">
                For client projects:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-foreground">
                    Client content
                  </span>{" "}
                  &mdash; all content, text, images, and other materials provided
                  by the client remain the property of the client
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Sivit code and frameworks
                  </span>{" "}
                  &mdash; proprietary code, frameworks, tools, and methodologies
                  developed by Sivit Inc remain the property of Sivit Inc. We
                  grant clients a non-exclusive license to use these as part of
                  their delivered project
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Custom work
                  </span>{" "}
                  &mdash; ownership of custom code and designs created
                  specifically for a client project is transferred to the client
                  upon full payment, unless otherwise specified in a service
                  agreement
                </li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Payment Terms
              </h2>
              <p>
                Payment terms, schedules, and methods are outlined in individual
                service agreements. Unless otherwise stated, invoices are due
                within 30 days of issuance. We reserve the right to suspend or
                terminate services for accounts with overdue balances.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                To the fullest extent permitted by law, Sivit Inc shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of profits,
                data, business opportunities, or goodwill, arising out of or
                related to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or inability to use the Site or our services</li>
                <li>Any errors or omissions in content on the Site</li>
                <li>
                  Unauthorized access to or alteration of your data or
                  transmissions
                </li>
                <li>
                  Any third-party conduct or content related to the Site or our
                  services
                </li>
              </ul>
              <p className="mt-4">
                Our total liability for any claim arising from or related to
                these terms or our services shall not exceed the amount you paid
                to Sivit Inc in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Disclaimer of Warranties
              </h2>
              <p>
                The Site and our services are provided on an &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; basis without warranties of any
                kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement. We do not warrant that the Site
                will be uninterrupted, error-free, or free of harmful
                components.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Sivit Inc, its
                officers, directors, employees, and agents from any claims,
                liabilities, damages, losses, or expenses (including reasonable
                attorneys&apos; fees) arising out of or related to your use of
                the Site, your violation of these Terms of Service, or your
                violation of any rights of a third party.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Third-Party Links
              </h2>
              <p>
                Our Site may contain links to third-party websites or services
                that are not owned or controlled by Sivit Inc. We have no
                control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party sites. Your
                use of third-party websites is at your own risk.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Termination
              </h2>
              <p>
                We reserve the right to terminate or suspend your access to the
                Site at our sole discretion, without notice, for conduct that we
                believe violates these Terms of Service or is harmful to other
                users, us, or third parties, or for any other reason.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of the Commonwealth of Pennsylvania,
                without regard to its conflict of law principles. Any disputes
                arising from these terms or your use of the Site or our services
                shall be resolved exclusively in the state or federal courts
                located in Montgomery County, Pennsylvania.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may revise these Terms of Service at any time by updating
                this page. Changes take effect immediately upon posting. Your
                continued use of the Site after any changes constitutes your
                acceptance of the revised terms. We encourage you to review
                these terms periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-gray-light border border-gray-medium/50 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about these Terms of Service, please
                contact us:
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
