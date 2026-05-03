"use client";

import { useState } from "react";
import SplitText from "./SplitText";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [budget, setBudget] = useState("10-20K");

  const budgetOptions = ["< $5K", "$5-10K", "$10-20K", "$20-50K"];

  return (
    <footer className='relative overflow-hidden pt-20 pb-10'>
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_80%,rgba(0,150,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_20%_40%,rgba(0,255,255,0.1)_0%,transparent_40%)]" />
      <div className='max-w-8xl mx-auto px-12'>
        <div className='flex flex-col gap-16'>
          {/* Header Section */}
          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-center gap-8'>
            <div className="flex flex-col">
              <SplitText
                text="Let's create"
                className="italic text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin leading-tight"
                delay={80}
                tag="p"
                textAlign="left"
                animateOnLoad={true}
              />
              <div className="flex items-center gap-4 lg:gap-8 self-end lg:self-auto lg:ml-24">
                <div className="w-16 h-16 lg:w-32 lg:h-32 text-cyan-400 opacity-80">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                    <circle cx="50" cy="50" r="1" fill="currentColor" />
                    {[...Array(24)].map((_, i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="50"
                        x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
                        y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity={0.6}
                      />
                    ))}
                  </svg>
                </div>
                <SplitText
                  text="together"
                  className="text-white text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-thin leading-tight"
                  delay={80}
                  tag="p"
                  textAlign="left"
                  animateOnLoad={true}
                />
              </div>
            </div>
          </div>

          {/* Form and CEO Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            <div className="lg:col-span-3 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex flex-col">
                  <label className="text-white/40 text-xs uppercase tracking-widest mb-2">Name</label>
                  <input className="input-field" type="text" placeholder="Your name" />
                </div>
                <div className="flex flex-col row-span-2 order-99 lg:order-0">
                  <label className="text-white/40 text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea className="input-field h-full min-h-[120px] resize-none" placeholder="Your project details"></textarea>
                </div>
                <div className="flex flex-col">
                  <label className="text-white/40 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input className="input-field" type="email" placeholder="Your email address" />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-white text-xl font-light">Project budget</p>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setBudget(option)}
                      className={`budget-btn ${budget === option ? "active" : ""}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button className="relative overflow-hidden w-full p-5 flex items-center justify-center gap-2 border border-white/30 rounded-full text-white text-xl transition-all duration-300 hover:border-white/60 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-[120%] after:h-[120%] after:bg-[radial-gradient(circle,rgba(0,150,255,0.4)_0%,transparent_70%)] after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
                <span className="relative z-10">Send request</span>
                <ArrowRight size={20} className="relative z-10" />
              </button>
            </div>

            <div className="lg:col-span-2 flex flex-col items-center border-t lg:border-t-0 lg:border-l border-white/10 pt-12 lg:pt-0 lg:pl-16">
              <div className="mb-12 text-center">
                <p className="text-white text-3xl font-light leading-snug">
                  Prefer <span className="italic">personal call</span><br />
                  with CEO?
                </p>
              </div>

              <img
                src="/ceo_headshot.png"
                alt="CEO"
                className="w-[120px] h-[120px] rounded-full object-cover grayscale mb-6"
              />

              <a href="mailto:hello@rumaze.digital" className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] italic font-light text-white flex items-center gap-4 mb-8 hover:opacity-70 transition-opacity whitespace-nowrap">
                <ArrowRight size={32} className="-rotate-45 shrink-0" />
                hello@rumaze.digital
              </a>

              <button className="w-full lg:w-auto px-8 py-4 bg-white text-black border border-white rounded-full uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-transparent hover:text-white transition-all">
                Schedule a call <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-4">
            {/* Left: Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-2 md:gap-12 w-full md:w-auto">
              <span className="text-white text-3xl font-bold tracking-tighter">rumaze</span>
              <span className="text-white/40 text-sm font-light mb-1">rumaze.digital © 2026</span>
            </div>

            {/* Center: Email */}
            <div className="w-full md:w-auto flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2 md:mb-1">
              <a href="mailto:hello@rumaze.digital" className="text-white/60 hover:text-white transition-colors underline underline-offset-4 text-sm">
                hello@rumaze.digital
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
                <a href="#" className="social-icon" aria-label="X (Twitter)">
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
                </a>
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
