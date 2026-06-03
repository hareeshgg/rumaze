"use client"

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SplitText from "./SplitText";

const Contact = () => {
    const [budget, setBudget] = useState("10-20K");
    const budgetOptions = ["< $5K", "$5-10K", "$10-20K", "$20-50K"];

    return (
        <div className='max-w-8xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-24 md:mt-32 lg:mt-48' id="contact">
            {/* Header Section: "Let's create together" */}
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-center gap-8 pb-12 lg:pb-20'>
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
        </div>
    );
};

export default Contact;