import React from 'react';
import { ABOUT_CONTENT, COMPANY_INFO } from '../data/companyData';
import { Target, Compass, Users, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950/60 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>COMPANY PROFILE & CORE OBJECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            About <span className="text-cyan-400">NexMonitor</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Structured monitoring, scalable NOC operations, and enterprise-grade IT infrastructure support.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main About Overview */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />

              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading uppercase tracking-wide flex items-center gap-3 mb-4">
                <span className="w-2.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-sm inline-block" />
                Company Overview
              </h3>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                {ABOUT_CONTENT.overview}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {ABOUT_CONTENT.objective}
              </p>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-slate-300 text-sm leading-relaxed">
                <span className="text-cyan-400 font-semibold font-mono uppercase text-xs block mb-1">
                  Strategic Partnership
                </span>
                {ABOUT_CONTENT.vision}
              </div>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase font-heading">Reliable NOC</div>
                    <div className="text-[11px] text-slate-400">Continuous 24×7 uptime vigilance</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase font-heading">Responsive Action</div>
                    <div className="text-[11px] text-slate-400">Prompt alert triage & escalation</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase font-heading">Scalable Model</div>
                    <div className="text-[11px] text-slate-400">Elastic support as systems expand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Our Mission Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-lime-400/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                    <Target className="w-3.5 h-3.5" />
                    <span>FOUNDATIONAL MANDATE</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">2026 EDITION</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide mb-4">
                  Our Mission
                </h3>

                <blockquote className="text-slate-100 text-base sm:text-lg italic font-medium leading-relaxed border-l-2 border-cyan-400 pl-4 py-1">
                  "{ABOUT_CONTENT.mission}"
                </blockquote>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                  Target Outcomes:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-slate-800 text-xs font-medium">
                    ⚡ Detect Issues Earlier
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-lime-300 border border-slate-800 text-xs font-medium">
                    ⏱️ Respond Faster
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-sky-300 border border-slate-800 text-xs font-medium">
                    🛡️ Maintain Continuity
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-indigo-300 border border-slate-800 text-xs font-medium">
                    💼 Cost-Effective NOC
                  </span>
                </div>
              </div>
            </div>

            {/* Leadership & Identity Note */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 uppercase font-mono">Founder & Leadership</div>
                <div className="text-sm font-bold text-white font-heading">{COMPANY_INFO.founder}</div>
              </div>
              <div className="text-right font-mono text-xs text-cyan-400">
                <span>{COMPANY_INFO.brandMotto}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
