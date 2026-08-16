import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Rumaze Design Studio",
  description: "Terms and Conditions of service for Rumaze Design Studio.",
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-24 md:py-32 text-white">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <h1 className="text-4xl md:text-6xl font-light mb-8">Terms & Conditions</h1>
      <p className="text-white/40 text-sm mb-12">Last Updated: August 16, 2026</p>

      <div className="space-y-10 text-white/80 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of <strong>Rumaze Design Studio</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) at{" "}
            <a href="https://rumazedesign.in" className="underline">rumazedesign.in</a>, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">2. Intellectual Property Rights</h2>
          <p>
            All content published on this website—including 3D renders, architectural concepts, photographs, logos, graphic designs, and written content—is the exclusive intellectual property of Rumaze Design Studio.
            Unauthorized copying, reproduction, or redistribution of any material without prior written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">3. Nature of Website Content</h2>
          <p>
            The portfolio items, project imagery, and budget figures shown on this website are provided for informational and illustrative purposes only.
            Formal design scopes, timelines, and financial terms will be established through a separate written contract between Rumaze Design Studio and the client.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">4. Limitation of Liability</h2>
          <p>
            While we strive to keep information accurate and up to date, Rumaze Design Studio assumes no liability for temporary website outages or decisions made prior to signing a formal service agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">5. External Services</h2>
          <p>
            Our website may contain links to external services (such as appointment booking software or social networks). We are not responsible for the independent practices or content of third-party platforms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">6. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">7. Contact Information</h2>
          <p>
            For any questions or legal inquiries regarding these Terms, please reach out to us at:
          </p>
          <div className="text-white/90">
            <p><strong>Rumaze Design Studio</strong></p>
            <p>Email: <a href="mailto:contact@rumazedesign.in" className="underline">contact@rumazedesign.in</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
