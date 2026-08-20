import React from 'react';
import { ENGAGEMENT_STEPS } from '../data/companyData';
import { Workflow, CheckCircle, ArrowDown, ChevronRight, ShieldCheck } from 'lucide-react';

export const EngagementSection: React.FC = () => {
  return (
    <section id="engagement" className="py-16 md:py-24 bg-slate-900/30 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>CLIENT ONBOARDING ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Engagement <span className="text-cyan-400">Approach</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            A proven 7-step onboarding roadmap ensuring risk-free transition, robust SOP calibration, and seamless steady-state NOC operations.
          </p>
        </div>

        {/* 7-Step Timeline Tree */}
        <div className="space-y-4">
          {ENGAGEMENT_STEPS.map((step, idx) => {
            const isLast = idx === ENGAGEMENT_STEPS.length - 1;
            const isSpecialSOP = step.step === 4;

            return (
              <div
                key={step.step}
                className={`rounded-2xl p-6 transition-all duration-300 border ${
                  isLast
                    ? 'bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border-cyan-500/40'
                    : isSpecialSOP
                    ? 'bg-slate-900/95 border-blue-500/30'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Step Number Badge */}
                  <div className="flex items-center gap-3 md:flex-col md:items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-md">
                      0{step.step}
                    </div>
                    {!isLast && <div className="hidden md:block w-px h-6 bg-slate-800" />}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-heading uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        {step.deliverable}
                      </span>
                    </div>

                    <p className="text-slate-200 text-sm font-medium leading-relaxed">
                      {step.description}
                    </p>

                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-1">
                      {step.details}
                    </p>

                    {isSpecialSOP && (
                      <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-cyan-500/20 flex items-start gap-2.5 text-xs text-cyan-200">
                        <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Continuous Inventory & SOP Governance:</strong> Server inventories and operational SOPs
                          are maintained and reviewed on a regular cadence to reflect infrastructure changes and new service deployments.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
