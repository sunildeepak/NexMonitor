import React from 'react';
import { TECH_EXPERIENCE } from '../data/companyData';
import { Eye, Cloud, Cpu, Network, Radio, Check, Layers, Shield, Wrench } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Eye: <Eye className="w-5 h-5 text-cyan-400" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-lime-400" />,
  Network: <Network className="w-5 h-5 text-sky-400" />,
  Radio: <Radio className="w-5 h-5 text-indigo-400" />,
};

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech" className="py-16 md:py-24 bg-slate-950/80 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE ECOSYSTEM COMPATIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Technology & <span className="text-cyan-400">Monitoring Experience</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Deep hands-on domain expertise across industry-standard monitoring tools, cloud platforms, operating systems, and networking protocols.
          </p>
        </div>

        {/* 5 Tech Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {TECH_EXPERIENCE.map((category, index) => {
            const isLarge = index === 0; // Monitoring & Observability gets featured
            return (
              <div
                key={category.category}
                className={`rounded-2xl bg-slate-900/90 border border-slate-800 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {iconMap[category.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-mono text-slate-500 uppercase">Domain #{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-1.5">
                    {category.category}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm mb-5">
                    {category.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-semibold">
                    Supported Systems & Tools:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-200 border border-slate-800 hover:border-cyan-500/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool-Agnostic Guarantee Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-lime-950/40 border border-cyan-500/40 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-400 flex-shrink-0 mt-1">
                <Shield className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  Our Tool-Agnostic Philosophy
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-heading uppercase">
                  Seamless Integration With Your Existing Ecosystem
                </h4>
                <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                  NexMonitor follows a <strong className="text-white font-semibold">tool-agnostic approach</strong> and
                  can work with your organization's existing monitoring, ITSM, and infrastructure management platforms.
                  There is zero need to replace existing software or undertake costly migrations.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-2">
              <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <span className="text-xs text-slate-400 font-mono block">Zero Vendor Lock-in</span>
                <span className="text-sm font-bold text-lime-400">100% Native Alignment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
