import React, { useState } from 'react';
import { NOC_OPERATING_MODEL, OPERATING_ALIGNMENT } from '../data/companyData';
import { GitCommit, CheckCircle, ArrowRight, Settings2, Sliders, ChevronRight } from 'lucide-react';

export const OperatingModelSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const currentStepData = NOC_OPERATING_MODEL.find((s) => s.step === selectedStep) || NOC_OPERATING_MODEL[0];

  return (
    <section id="model" className="py-16 md:py-24 bg-slate-900/40 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>INCIDENT LIFECYCLE & EXECUTION FLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Our NOC <span className="text-cyan-400">Operating Model</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            A disciplined 10-stage operating methodology ensuring rapid issue detection, precise alert validation, SOP
            execution, and continuous operational feedback.
          </p>
        </div>

        {/* 10-Step Interactive Pipeline Flow */}
        <div className="mb-12">
          {/* Horizontal scrollable stepper bar on desktop / wrapped on mobile */}
          <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-xl overflow-x-auto">
            <div className="flex items-center min-w-max gap-2 py-1">
              {NOC_OPERATING_MODEL.map((step, idx) => {
                const isActive = step.step === selectedStep;
                const isPast = step.step < selectedStep;

                return (
                  <React.Fragment key={step.step}>
                    <button
                      onClick={() => setSelectedStep(step.step)}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isActive
                            ? 'bg-slate-950 text-cyan-300'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="font-heading uppercase tracking-wider text-xs whitespace-nowrap">
                        {step.name}
                      </span>
                    </button>

                    {idx < NOC_OPERATING_MODEL.length - 1 && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Active Step Details Panel */}
          <div className="mt-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 font-mono text-xs">
                  STAGE 0{currentStepData.step} OF 10
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading uppercase tracking-wide">
                  {currentStepData.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentStepData.summary}
                </p>
              </div>

              <div className="lg:col-span-8 bg-slate-950/80 rounded-xl p-5 border border-slate-800">
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-3">
                  Key Operational Procedures in this Stage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentStepData.actions.map((act, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alignment Points With Client Operations */}
        <div className="mt-12 pt-10 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-2">
              <Sliders className="w-3.5 h-3.5 text-lime-400" />
              <span>CUSTOMIZED INTEGRATION MATRIX</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">
              Our Operating Model Aligns With Your Ecosystem
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              NexMonitor embeds directly into your existing operational rhythms and standards:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPERATING_ALIGNMENT.map((item, index) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading tracking-wide uppercase">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
