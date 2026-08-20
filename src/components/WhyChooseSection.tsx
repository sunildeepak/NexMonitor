import React from 'react';
import { WHY_CHOOSE_LIST } from '../data/companyData';
import {
  Clock4,
  Zap,
  Sliders,
  Cpu,
  FileCheck,
  TrendingDown,
  Handshake,
  CheckCircle2,
  Award,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Clock4: <Clock4 className="w-5 h-5 text-cyan-400" />,
  Zap: <Zap className="w-5 h-5 text-lime-400" />,
  Sliders: <Sliders className="w-5 h-5 text-sky-400" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-emerald-400" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-teal-400" />,
  Handshake: <Handshake className="w-5 h-5 text-cyan-300" />,
};

export const WhyChooseSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-950/90 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>STRATEGIC COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Why Choose <span className="text-cyan-400">NexMonitor</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Engineered from the ground up to deliver responsive, transparent, and scalable NOC operational excellence.
          </p>
        </div>

        {/* 7 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_LIST.map((item, idx) => {
            const isFeatured = idx === 6; // Long-Term Partnership is spanning full width or featured
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-slate-900/90 border border-slate-800 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 border-cyan-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {iconMap[item.icon] || <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
                    </div>

                    {item.metric && (
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-semibold">
                        {item.metric}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-xs text-slate-500 font-bold">0{item.id}.</span>
                    <h3 className="text-lg font-bold text-white font-heading uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-cyan-400/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
