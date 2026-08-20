import React from 'react';
import { NexLogo } from './NexLogo';
import { CORE_PILLARS, COMPANY_INFO } from '../data/companyData';
import {
  Activity,
  BellRing,
  Gauge,
  ShieldAlert,
  Lock,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Cpu,
  Layers,
  Phone,
  Mail,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5" />,
  BellRing: <BellRing className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
};

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-lime-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Company Profile Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700/60 text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold">{COMPANY_INFO.edition}</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="hidden sm:inline">GLOBAL NOC DESK</span>
            <span className="text-slate-700">•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              OPERATIONS ACTIVE
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Primary Text Scope */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              {/* Brand Logo Banner */}
              <div className="mb-4">
                <NexLogo size="lg" showText={true} showTagline={true} variant="horizontal" />
              </div>

              <h1
                id="hero-main-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.1] uppercase"
              >
                24×7 INFRASTRUCTURE MONITORING <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-lime-400 bg-clip-text text-transparent">
                  & INCIDENT MANAGEMENT
                </span>
              </h1>

              <p className="text-base sm:text-lg font-medium text-cyan-200/90 font-mono tracking-wide">
                {COMPANY_INFO.subtitle}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Delivering high-reliability, responsive, and tool-agnostic NOC services. We help organizations improve
              infrastructure visibility, rapidly validate and triage alerts, eliminate costly downtime, and establish a
              seamless 24×7 extension to internal IT operations.
            </p>

            {/* Quick KPI stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xl font-bold font-mono text-cyan-400">24×7×365</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Surveillance</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xl font-bold font-mono text-lime-400">≤ 5 Min</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">P1 Intake SLA</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xl font-bold font-mono text-sky-400">100%</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Tool-Agnostic</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xl font-bold font-mono text-emerald-400">SOP</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Aligned Runbooks</div>
              </div>
            </div>

            {/* CTA Buttons & Direct Email Links */}
            <div className="space-y-3 pt-2 no-print">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm font-heading tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium transition-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Contact Operations</span>
                </a>

                <a
                  href="tel:+916305465482"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-lime-400 border border-lime-500/30 text-sm font-mono transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 63054 65482</span>
                </a>
              </div>

              {/* Direct Email Access Strip */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="text-slate-500 font-mono text-[11px] uppercase tracking-wider">Direct Channels:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-cyan-500/30 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-colors font-mono"
                  title="Direct Founder / Operations Email"
                >
                  <Mail className="w-3 h-3 text-cyan-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.salesEmail}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-blue-500/30 text-slate-300 hover:text-blue-300 hover:border-blue-400 transition-colors font-mono"
                  title="Sales & Business Inquiries"
                >
                  <Mail className="w-3 h-3 text-blue-400" />
                  <span>{COMPANY_INFO.salesEmail}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right / Visual Brand Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md relative">
              {/* Decorative corner brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-lime-400/60 rounded-bl pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-lime-400/60 rounded-br pointer-events-none" />

              {/* Core Badge Visual */}
              <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 p-6 shadow-2xl shadow-cyan-950/60 relative overflow-hidden">
                {/* Glow ring */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-lime-500/10 rounded-full blur-3xl" />

                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <NexLogo size="lg" showText={true} showTagline={true} variant="vertical" />
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-3" />

                  {/* 5 Integrated Operational Badges */}
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="w-7 h-7 rounded-md bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white uppercase font-heading">24×7 Monitoring</div>
                        <div className="text-[9px] text-slate-400 font-mono">Continuous surveillance</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="w-7 h-7 rounded-md bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400">
                        <BellRing className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white uppercase font-heading">Alert Mgmt</div>
                        <div className="text-[9px] text-slate-400 font-mono">Noise suppression & triage</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="w-7 h-7 rounded-md bg-sky-950 border border-sky-500/40 flex items-center justify-center text-sky-400">
                        <Gauge className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white uppercase font-heading">Performance</div>
                        <div className="text-[9px] text-slate-400 font-mono">Threshold telemetry</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="w-7 h-7 rounded-md bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                        <ShieldAlert className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white uppercase font-heading">Incident Mgmt</div>
                        <div className="text-[9px] text-slate-400 font-mono">Bridge & escalation</div>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-between p-2 rounded-lg bg-slate-900/90 border border-lime-500/30">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-lime-950 border border-lime-500/40 flex items-center justify-center text-lime-400">
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-lime-300 uppercase font-heading">
                            Reliable & Secure
                          </div>
                          <div className="text-[9px] text-slate-400 font-mono">SOC & SOP alignment</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-lime-500/20 text-lime-400 border border-lime-500/40">
                        VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{COMPANY_INFO.salesEmail}</span>
                    <span className="text-lime-400 font-semibold">{COMPANY_INFO.phoneFormatted}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
