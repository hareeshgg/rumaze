import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Rumaze Design Studio",
  description: "Privacy Policy for Rumaze Design Studio. Learn how we handle your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-24 md:py-32 text-white">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      <h1 className="text-4xl md:text-6xl font-light mb-8">Privacy Policy</h1>
      <p className="text-white/40 text-sm mb-12">Last Updated: August 16, 2026</p>

      <div className="space-y-10 text-white/80 font-light leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">1. Introduction</h2>
          <p>
            Welcome to <strong>Rumaze Design Studio</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            We respect your privacy and are committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website
            (<a href="https://rumazedesign.in" className="underline">rumazedesign.in</a>) and submit inquiries via our contact form.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">2. Information We Collect</h2>
          <p>
            When you reach out to us through our website contact form, we collect the following details:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>Your Project Details / Message</li>
            <li>Selected Project Budget Range</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">3. Purpose and Use of Collected Data</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-white font-medium mb-2">Our Strict Commitment:</p>
            <p className="text-white/80">
              The personal information collected through our contact form is <strong>used exclusively for contacting you regarding your specific inquiry or interior design project</strong>.
              We do <strong>not</strong> sell, rent, trade, share, or disclose your personal information to third-party advertisers or marketers, nor do we send promotional spam.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">4. Data Processing and Security</h2>
          <p>
            Submitted inquiries are securely transmitted to notify our internal team to handle your request.
            We take reasonable technical precautions to safeguard your information against unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">5. Your Legal Rights (India DPDP Act 2023)</h2>
          <p>
            Under applicable Indian data protection laws, including the Digital Personal Data Protection Act, 2023, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Access or request details about the personal information we hold about you.</li>
            <li>Request correction, updating, or deletion of your personal data.</li>
            <li>Withdraw your consent for future communication at any time.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl text-white font-normal">6. Contact & Grievance Redressal</h2>
          <p>
            If you have any questions or wish to exercise your data rights, please contact our team at:
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
