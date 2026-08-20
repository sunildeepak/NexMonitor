import React from 'react';
import { REPORTING_GOVERNANCE } from '../data/companyData';
import { BarChart2, Calendar, Clock, TrendingUp, CheckCircle, FileSpreadsheet } from 'lucide-react';

export const ReportingSection: React.FC = () => {
  return (
    <section id="governance" className="py-16 md:py-24 bg-slate-950/90 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>TRANSPARENT METRICS & KPI AUDITING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Reporting & <span className="text-cyan-400">Governance</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Structured daily operational summaries, weekly trend analyses, and monthly strategic executive scorecards.
          </p>
        </div>

        {/* 3 Cadence Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REPORTING_GOVERNANCE.map((gov) => {
            const isDaily = gov.cadence === 'Daily';
            const isWeekly = gov.cadence === 'Weekly';
            const isMonthly = gov.cadence === 'Monthly';

            const headerColor = isDaily
              ? 'text-cyan-400 border-cyan-500/40 bg-cyan-950/60'
              : isWeekly
              ? 'text-blue-400 border-blue-500/40 bg-blue-950/60'
              : 'text-lime-400 border-lime-500/40 bg-lime-950/60';

            const icon = isDaily ? (
              <Clock className="w-5 h-5 text-cyan-400" />
            ) : isWeekly ? (
              <Calendar className="w-5 h-5 text-blue-400" />
            ) : (
              <TrendingUp className="w-5 h-5 text-lime-400" />
            );

            return (
              <div
                key={gov.cadence}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
              >
                <div>
                  {/* Cadence Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-lg border font-mono text-xs font-bold uppercase ${headerColor}`}>
                      {gov.cadence} Digest
                    </div>
                    {icon}
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wide mb-2">
                    {gov.cadence} Reporting
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-5">{gov.purpose}</p>

                  {/* Checklist of deliverables */}
                  <div className="space-y-2.5">
                    <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider font-semibold">
                      Included Governance Metrics:
                    </div>
                    <ul className="space-y-2">
                      {gov.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Frequency</span>
                  <span className="text-slate-200 font-semibold">{gov.cadence} Automated Dispatch</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
