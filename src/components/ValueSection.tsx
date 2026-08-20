import React from 'react';
import { CLIENT_VALUE } from '../data/companyData';
import { Eye, Zap, HeartHandshake, TrendingUp, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-6 h-6 text-cyan-400" />,
  Zap: <Zap className="w-6 h-6 text-lime-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-sky-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-indigo-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
};

export const ValueSection: React.FC = () => {
  return (
    <section id="value" className="py-16 md:py-24 bg-slate-950/90 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE ROI & STRATEGIC OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Our Value <span className="text-cyan-400">To Clients</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Tangible operational improvements that empower your engineering teams and safeguard business continuity.
          </p>
        </div>

        {/* 5 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_VALUE.map((item, index) => {
            const isFullWidth = index === 4; // 5th item can look balanced
            return (
              <div
                key={item.title}
                className={`rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-cyan-400" />}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400 font-semibold">
                      {item.impactMetric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                  <span>Continuous Business Impact</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
