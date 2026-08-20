import React from 'react';
import { NexLogo } from './NexLogo';
import { COMPANY_INFO } from '../data/companyData';
import { Printer, ArrowUp, ShieldCheck, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <NexLogo size="md" showText={true} showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              24×7 Infrastructure Monitoring, Structured Incident Management, and Scalable NOC IT Operations for Modern Enterprises.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-300 font-semibold">24×7 Active NOC Operations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Profile Sections
            </div>
            <ul className="space-y-1.5 font-medium">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About & Company Mission
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  12 Core Monitoring Services
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-cyan-400 transition-colors">
                  Tool-Agnostic Tech Ecosystem
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-cyan-400 transition-colors">
                  10-Stage NOC Operating Model
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Choose NexMonitor
                </a>
              </li>
              <li>
                <a href="#sla" className="hover:text-cyan-400 transition-colors">
                  Service Commitments & SLAs
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-cyan-400 transition-colors">
                  Reporting & Governance Cadence
                </a>
              </li>
              <li>
                <a href="#engagement" className="hover:text-cyan-400 transition-colors">
                  7-Step Client Engagement Approach
                </a>
              </li>
            </ul>
          </div>

          {/* Operations Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Direct Inquiries
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-cyan-400/80 uppercase">Founder / Operations Desk</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-cyan-300 font-mono text-slate-200 font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-blue-400/80 uppercase">Sales & Commercials</div>
                  <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-blue-300 font-mono text-slate-200 font-medium">
                    {COMPANY_INFO.salesEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-lime-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-lime-400/80 uppercase">Phone & WhatsApp</div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-lime-400 font-mono text-slate-200 font-medium">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="text-slate-400 text-xs pt-1 border-t border-slate-900">
                Founder: <span className="text-slate-200 font-semibold">{COMPANY_INFO.founder}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-cyan-400" />
                <span>Print / Download PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-slate-500 text-xs">
            © 2026 {COMPANY_INFO.name}. All rights reserved. • {COMPANY_INFO.edition}
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            {COMPANY_INFO.hashtags.map((tag) => (
              <span key={tag} className="text-cyan-400/80 hover:text-cyan-300">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors no-print cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
