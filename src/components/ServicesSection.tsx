import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/companyData';
import {
  Clock,
  Server,
  Layers,
  CheckCircle2,
  Wrench,
  FileText,
  PhoneCall,
  Database,
  CalendarCheck,
  BarChart3,
  SearchCode,
  ShieldCheck,
  Search,
  CheckCircle,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  SearchCode: <SearchCode className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'core', label: 'Core Monitoring' },
    { id: 'incident', label: 'Incident Management' },
    { id: 'operations', label: 'Operations & Maintenance' },
    { id: 'governance', label: 'Governance & Analytics' },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900/30 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>END-TO-END NOC SCOPE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              12 comprehensive service pillars designed to secure 24×7 uptime, structured incident governance, and complete
              infrastructure peace of mind.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-300">
            <div>
              <span className="text-cyan-400 font-bold text-base block">12/12</span>
              <span>Active Pillars</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-lime-400 font-bold text-base block">24/7/365</span>
              <span>Coverage</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 no-print">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-950 border border-slate-800 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Services Grid (All 12 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isIncident = service.category === 'incident';
            const isGov = service.category === 'governance';
            const isOps = service.category === 'operations';

            const accentBorder = isIncident
              ? 'group-hover:border-blue-500/50'
              : isGov
              ? 'group-hover:border-lime-500/50'
              : isOps
              ? 'group-hover:border-indigo-500/50'
              : 'group-hover:border-cyan-500/50';

            const iconBg = isIncident
              ? 'bg-blue-950/80 text-blue-400 border-blue-500/30'
              : isGov
              ? 'bg-lime-950/80 text-lime-400 border-lime-500/30'
              : isOps
              ? 'bg-indigo-950/80 text-indigo-400 border-indigo-500/30'
              : 'bg-cyan-950/80 text-cyan-400 border-cyan-500/30';

            return (
              <div
                key={service.id}
                id={service.id}
                className={`group rounded-2xl bg-slate-900/80 border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between ${accentBorder}`}
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`p-2.5 rounded-xl border ${iconBg}`}>
                      {iconComponents[service.iconName] || <CheckCircle className="w-5 h-5" />}
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-500 group-hover:text-cyan-400 transition-colors">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-heading tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                {service.deliverables && (
                  <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      Key Highlights:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2 py-0.5 rounded text-[11px] bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty Search Feedback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-950/60 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No services matched your query "{searchQuery}".</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-slate-900 text-cyan-400 text-xs font-semibold hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
