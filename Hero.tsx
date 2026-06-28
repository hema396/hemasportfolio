import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowDownRight, Mail, Copy, Check, Terminal, Sparkles, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-screen pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative z-10 overflow-hidden">

      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-[#ff006e] -top-20 -left-20"></div>
      <div className="blob w-80 h-80 bg-[#8338ec] top-40 right-0"></div>
      <div className="blob w-72 h-72 bg-[#ffbe0b] bottom-0 left-1/3"></div>

      {/* Top Tag */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6"
      >
        <span className="font-mono text-sm md:text-base tracking-widest uppercase flex items-center gap-3 px-4 py-2 rounded-full maximal-card w-fit">
          <Sparkles size={16} className="text-[#ffbe0b] animate-spin" style={{ animationDuration: '4s' }} />
          <span className="gradient-text font-bold">01 // Full-Stack & AI Systems Engineer</span>
          <Star size={16} className="text-[#06d6a0]" />
        </span>
      </motion.div>

      {/* Giant Kinetic Display Title */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative animate-pop"
      >
        <h1 className="text-[64px] sm:text-[96px] md:text-[130px] lg:text-[156px] leading-[0.82] font-black uppercase tracking-[-0.04em] selection:bg-[#d4ff00] selection:text-black font-display drop-shadow-[0_0_40px_rgba(255,0,110,0.4)]">
          <span className="gradient-text">HEMA</span><br/>
          <span className="text-white" style={{ WebkitTextStroke: '2px #8338ec' }}>SUBBURAJ</span>
        </h1>
        {/* decorative zap */}
        <Zap size={48} className="absolute -top-6 -right-6 text-[#ffbe0b] hidden md:block animate-bounce" />
      </motion.div>

      {/* Bio & Location Details Row */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-t-2 border-dashed border-[#8338ec]/40 pt-10"
      >
        {/* Bio */}
        <div className="md:col-span-6 lg:col-span-6 maximal-card rounded-2xl p-6">
          <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-xl">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 bg-gradient-to-r from-[#ff006e] via-[#8338ec] to-[#06d6a0] text-white font-mono font-bold text-xs uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(131,56,236,0.6)] transition-all flex items-center gap-2 rounded-full"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight size={16} />
            </a>

            <button
              onClick={copyEmail}
              className="px-6 py-3 border-2 border-[#ffbe0b]/50 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:border-[#ffbe0b] hover:text-[#ffbe0b] transition-all flex items-center gap-2 rounded-full group"
            >
              {copied ? <Check size={16} className="text-[#06d6a0]" /> : <Copy size={16} className="text-gray-400 group-hover:text-[#ffbe0b]" />}
              <span>{copied ? "Email Copied!" : PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>

        {/* Location & Quick Specs */}
        <div className="md:col-span-6 lg:col-span-6 flex flex-col sm:flex-row md:justify-end gap-10 sm:gap-16">
          <div className="flex flex-col gap-1 maximal-card rounded-xl p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#ffbe0b] mb-2">Currently Based</div>
            <div className="text-2xl font-serif italic text-white">{PERSONAL_INFO.location}</div>
            <div className="text-xs font-mono text-gray-400 mt-1">Open to remote & onsite opportunities</div>
          </div>

          <div className="flex flex-col gap-1 maximal-card rounded-xl p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#06d6a0] mb-2">Academic Hub</div>
            <div className="text-xl font-medium text-white">B.E. CSE (2024–Pres.)</div>
            <div className="text-xs font-mono text-gray-300 mt-1">PSR Engineering College</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Side Vertical Label */}
      <div className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 items-center gap-4 rotate-90 origin-center pointer-events-none opacity-70">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] gradient-text whitespace-nowrap font-bold">
          Pushing boundaries in real-time AI & Web
        </span>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#ff006e] to-[#06d6a0]"></div>
      </div>

    </section>
  );
};
