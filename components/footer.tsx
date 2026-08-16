"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='relative overflow-hidden pt-20 pb-10'>
      {/* Content */}
      <div className='max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <div className='flex flex-col gap-16'>

          {/* Bottom Bar */}
          <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-4">
            {/* Left: Logo, Copyright & Legal links */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full md:w-auto">
              <div className="flex items-end gap-2">
                <Image src="/rumaze-text.png" alt="Rumaze Design Studio" width={100} height={16} className="h-4 w-auto" />
                <span className="text-white/40 text-sm font-light">©{new Date().getFullYear()}</span>
              </div>
              <div className="flex gap-4 text-xs text-white/40 font-light md:ml-4">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Center: Email */}
            <div className="w-full md:w-auto flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:mb-1">
              <a href="mailto:contact@rumazedesign.in" className="text-white/60 hover:text-white transition-colors underline underline-offset-4 text-sm">
                contact@rumazedesign.in
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <div className="flex gap-6 md:gap-8">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* <a href="#" className="social-icon" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Threads">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12c-3 0-5.5-1.5-5.5-4.5S9 3 12 3s5.5 1.5 5.5 4.5V12c0 2.5-2 4.5-4.5 4.5S8.5 14.5 8.5 12V9.5C8.5 8.1 9.6 7 11 7s2.5 1.1 2.5 2.5V13c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V10.5c0-.3.2-.5.5-.5s.5.2.5.5V12" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a> */}
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
