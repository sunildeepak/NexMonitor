import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'markOnly';
}

export const NexLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  showTagline = false,
  className = '',
  variant = 'horizontal',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-4xl md:text-5xl',
  };

  const tagSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] md:text-xs tracking-[0.25em]',
    lg: 'text-xs md:text-sm tracking-[0.3em]',
    xl: 'text-sm md:text-base tracking-[0.35em]',
  };

  const isVertical = variant === 'vertical';

  return (
    <div
      id="nexmonitor-brand-logo"
      className={`inline-flex ${isVertical ? 'flex-col items-center text-center' : 'items-center gap-3 md:gap-4'} ${className}`}
    >
      {/* Precision SVG Vector Mark */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} transition-transform duration-300 hover:scale-105`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md animate-pulse-glow pointer-events-none" />

        <svg
          viewBox="0 0 200 200"
          className="w-full h-full relative z-10 drop-shadow-[0_4px_12px_rgba(0,180,216,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="nmBlueGradient" x1="20" y1="20" x2="100" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="50%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#03045e" />
            </linearGradient>

            <linearGradient id="nmGreenGradient" x1="100" y1="20" x2="180" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b5e48c" />
              <stop offset="50%" stopColor="#76c893" />
              <stop offset="100%" stopColor="#52b788" />
            </linearGradient>

            <linearGradient id="ringGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="50%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#023e8a" />
            </linearGradient>

            <linearGradient id="pulseLineGrad" x1="30" y1="135" x2="170" y2="135" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0.9" />
            </linearGradient>

            {/* Bevel Filter */}
            <filter id="bevel3D" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Outer Orbital Ring */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#ringGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            className="opacity-90"
          />
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="#00b4d8"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-40"
          />

          {/* Letter N (Blue) */}
          <path
            d="M 46 142 L 46 58 L 68 58 L 98 114 L 98 58 L 118 58 L 118 142 L 96 142 L 66 86 L 66 142 Z"
            fill="url(#nmBlueGradient)"
            filter="url(#bevel3D)"
            stroke="#38bdf8"
            strokeWidth="1.5"
          />

          {/* Letter M (Green) */}
          <path
            d="M 102 142 L 102 58 L 122 58 L 140 102 L 158 58 L 178 58 L 178 142 L 158 142 L 158 92 L 142 128 L 138 128 L 122 92 L 122 142 Z"
            fill="url(#nmGreenGradient)"
            filter="url(#bevel3D)"
            stroke="#a3e635"
            strokeWidth="1.5"
          />

          {/* Heartbeat ECG Waveform Across Bottom */}
          <path
            d="M 28 135 L 75 135 L 85 135 L 93 118 L 100 156 L 108 94 L 116 148 L 122 125 L 128 135 L 172 135"
            fill="none"
            stroke="url(#pulseLineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_8px_#00e5ff]"
          />
        </svg>
      </div>

      {/* Brand Text Typography */}
      {showText && (
        <div className={`flex flex-col ${isVertical ? 'items-center mt-3' : ''}`}>
          <div className="flex items-center tracking-wider">
            <span
              className={`font-heading font-extrabold ${textSizes[size]} text-white uppercase tracking-[0.14em] drop-shadow-md`}
            >
              NEX<span className="text-cyan-400">MONITOR</span>
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-4 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />
              <span
                className={`font-sans font-semibold uppercase text-slate-300 ${tagSizes[size]} whitespace-nowrap`}
              >
                MONITOR. MANAGE. ASSURE.
              </span>
              <span className="w-4 h-[2px] bg-gradient-to-r from-lime-400 to-transparent" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const NexBrandCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      id="nexmonitor-profile-card"
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 p-6 md:p-8 shadow-2xl shadow-cyan-950/50 ${className}`}
    >
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Top Logo */}
        <NexLogo size="xl" showText={true} showTagline={true} variant="vertical" />

        {/* Tagline Divider */}
        <div className="w-full max-w-md my-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* 5 Feature Icons Badge Bar */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl bg-slate-900/80 border border-cyan-500/20 rounded-xl p-3 backdrop-blur-sm">
          <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="w-8 h-8 rounded-full border border-cyan-400/60 flex items-center justify-center text-cyan-400 font-bold text-xs">
              24
            </div>
            <span className="text-[10px] font-bold tracking-wider text-slate-300 mt-1 uppercase">24X7 Monitoring</span>
          </div>

          <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-cyan-950/60 border border-cyan-400 flex items-center justify-center text-cyan-400 text-xs">
              🔔
            </div>
            <span className="text-[10px] font-bold tracking-wider text-slate-300 mt-1 uppercase">Alert Mgmt</span>
          </div>

          <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-sky-950/60 border border-sky-400 flex items-center justify-center text-sky-400 text-xs">
              📈
            </div>
            <span className="text-[10px] font-bold tracking-wider text-slate-300 mt-1 uppercase">Performance</span>
          </div>

          <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-400 flex items-center justify-center text-emerald-400 text-xs">
              ⚙️
            </div>
            <span className="text-[10px] font-bold tracking-wider text-slate-300 mt-1 uppercase">Incident Mgmt</span>
          </div>

          <div className="flex flex-col items-center text-center p-2 rounded-lg bg-slate-950/60 border border-slate-800 col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-full bg-lime-950/60 border border-lime-400 flex items-center justify-center text-lime-400 text-xs">
              🔒
            </div>
            <span className="text-[10px] font-bold tracking-wider text-slate-300 mt-1 uppercase">Reliable & Secure</span>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
          <a
            href="mailto:sales@nex-monitor.com"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>✉️</span> sales@nex-monitor.com
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="tel:+916305465482"
            className="flex items-center gap-1.5 text-lime-400 hover:text-lime-300 transition-colors"
          >
            <span>📞</span> +91 63054 65482
          </a>
        </div>
      </div>
    </div>
  );
};
