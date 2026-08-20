import React from 'react';
import { SLA_TARGETS } from '../data/companyData';
import { ShieldAlert, AlertTriangle, AlertCircle, Info, Clock, AlertOctagon, HelpCircle } from 'lucide-react';

export const SLASection: React.FC = () => {
  const getBadgeStyle = (priority: string) => {
    switch (priority) {
      case 'P1':
        return {
          badge: 'bg-rose-950/80 text-rose-300 border-rose-500/50',
          targetBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
          icon: <AlertOctagon className="w-5 h-5 text-rose-400" />,
        };
      case 'P2':
        return {
          badge: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
          targetBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
        };
      case 'P3':
        return {
          badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/50',
          targetBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          icon: <AlertCircle className="w-5 h-5 text-cyan-400" />,
        };
      default:
        return {
          badge: 'bg-slate-900 text-slate-300 border-slate-700',
          targetBg: 'bg-slate-800 text-slate-300 border-slate-700',
          icon: <Info className="w-5 h-5 text-slate-400" />,
        };
    }
  };

  return (
    <section id="sla" className="py-16 md:py-24 bg-slate-900/30 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>OPERATIONAL SLA TARGETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Service <span className="text-cyan-400">Commitment</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Guaranteed alert ingestion, validation, and intake triage timelines aligned with severity tiers.
          </p>
        </div>

        {/* SLA Matrix Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {SLA_TARGETS.map((item) => {
            const styling = getBadgeStyle(item.priority);
            return (
              <div
                key={item.priority}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between transition-all hover:border-slate-700 hover:shadow-xl"
              >
                <div>
                  {/* Top Priority Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${styling.badge}`}>
                        {item.priority}
                      </span>
                      <span className="text-xs font-bold text-white uppercase font-heading">{item.level}</span>
                    </div>
                    {styling.icon}
                  </div>

                  {/* Big Target Metric */}
                  <div className={`p-3 rounded-xl border text-center my-3 ${styling.targetBg}`}>
                    <div className="text-[10px] uppercase font-mono tracking-wider font-semibold opacity-80">
                      Proposed Acknowledgement
                    </div>
                    <div className="text-2xl font-black font-mono tracking-tight">{item.target}</div>
                  </div>

                  {/* Impact and Description */}
                  <div className="space-y-2 mt-4 text-xs">
                    <div>
                      <span className="text-slate-400 font-mono uppercase text-[10px] block">Severity Context:</span>
                      <p className="text-slate-200 font-medium leading-relaxed">{item.description}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-slate-400 font-mono uppercase text-[10px] block">Illustrative Example:</span>
                      <p className="text-slate-300 italic">{item.example}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Intake SLA</span>
                  <span className="text-emerald-400 font-semibold">Live Clock</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Essential Governance and Boundary Clarifications */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 text-xs sm:text-sm space-y-3">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">Discovery & Agreement Notice:</strong> These acknowledgement
                targets are proposed and subject to final agreement following scope discovery and SLA discussions.
              </p>
              <p className="text-slate-400 leading-relaxed">
                <strong className="text-slate-300 font-medium">Response vs. Resolution Clarification:</strong> Response
                and acknowledgement targets are distinct from resolution time. Resolution timelines may depend on client
                teams, third-party vendors, hardware replacement, access permissions, change approvals, and other factors
                outside NexMonitor's direct control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
