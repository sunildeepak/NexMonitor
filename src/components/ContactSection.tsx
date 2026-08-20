import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { NexLogo, NexBrandCard } from './NexLogo';
import {
  Mail,
  Phone,
  Globe,
  User,
  Send,
  Check,
  Copy,
  MessageSquare,
  Building,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    recipient: 'both',
    serviceInterest: '24x7 Infrastructure Monitoring',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`NOC Inquiry from ${formData.name} - ${formData.company || 'Enterprise'}`);
    const body = encodeURIComponent(
      `Hello NexMonitor Team,\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService of Interest: ${formData.serviceInterest}\n\nMessage / Infrastructure Scope:\n${formData.message}\n\nThank you!`
    );

    let mailtoUrl = `mailto:${COMPANY_INFO.email}?cc=${COMPANY_INFO.salesEmail}&subject=${subject}&body=${body}`;
    if (formData.recipient === 'sales') {
      mailtoUrl = `mailto:${COMPANY_INFO.salesEmail}?subject=${subject}&body=${body}`;
    } else if (formData.recipient === 'direct') {
      mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    }

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONNECT WITH NOC LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading uppercase tracking-tight">
            Get in Touch with <span className="text-cyan-400">NexMonitor</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Start a discovery conversation, discuss custom SLA requirements, or onboard 24×7 NOC monitoring for your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Brand Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">Corporate Headquarters</div>
                  <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">NexMonitor</h3>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Founder Details */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">Founder & Operations Head</div>
                  <div className="text-base font-bold text-white font-heading">{COMPANY_INFO.founder}</div>
                  <div className="text-xs text-cyan-300 font-mono mt-0.5">velpuri.shivakishore</div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3">
                {/* Primary Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">Direct / Founder Desk</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors font-mono block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.email, 'email1')}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-md hover:bg-slate-900 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email1' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Sales Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-500/30 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Sales & Proposals</div>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-blue-300 transition-colors font-mono block"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.salesEmail, 'salesEmail')}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-md hover:bg-slate-900 transition-colors"
                    title="Copy Sales Email"
                  >
                    {copiedField === 'salesEmail' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-lime-500/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-lime-950/80 text-lime-400 border border-lime-500/30 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-lime-400 uppercase font-semibold">Direct Phone / WhatsApp</div>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-lime-300 transition-colors font-mono block"
                      >
                        {COMPANY_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-lime-400 rounded-md hover:bg-slate-900 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Direct WhatsApp Callout */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}?text=Hello%20NexMonitor%20team,%20I%20am%20interested%20in%20your%2024x7%20NOC%20monitoring%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/40 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: +91 63054 65482</span>
                </a>
              </div>

              {/* Hashtags Strip */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-2">
                {COMPANY_INFO.hashtags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-cyan-400/80 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Brand Card Artifact preview */}
            <div className="no-print">
              <NexBrandCard />
            </div>
          </div>

          {/* Right: Interactive NOC Proposal / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 font-mono text-xs mb-2">
                  <Send className="w-3 h-3" />
                  <span>DIRECT INQUIRY CHANNEL</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading uppercase tracking-wide">
                  Request an Infrastructure Discovery Session
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Fill in your details below to immediately trigger an introductory scoping draft to our NOC desk.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-400 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading uppercase">
                    Inquiry Prepared & Email Dispatched!
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                    Your email client should have opened with your scoped requirements. You can also reach out directly to{' '}
                    <strong className="text-cyan-400">{COMPANY_INFO.email}</strong> or call{' '}
                    <strong className="text-lime-400">{COMPANY_INFO.phoneFormatted}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. TechCorp Systems"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@techcorp.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 555-0199 or +91..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Destination Routing */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2 font-semibold">
                      Route Inquiry To
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, recipient: 'both' })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                          formData.recipient === 'both'
                            ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>Both Desks</span>
                          {formData.recipient === 'both' && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">Direct + Sales (CC)</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, recipient: 'direct' })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                          formData.recipient === 'direct'
                            ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>Direct / Founder</span>
                          {formData.recipient === 'direct' && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{COMPANY_INFO.email}</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, recipient: 'sales' })}
                        className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                          formData.recipient === 'sales'
                            ? 'bg-blue-950/80 border-blue-400 text-blue-200'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>Sales Desk</span>
                          {formData.recipient === 'sales' && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5 truncate">{COMPANY_INFO.salesEmail}</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Primary Service Requirement
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                    >
                      <option value="24x7 Infrastructure Monitoring">24×7×365 Infrastructure Monitoring</option>
                      <option value="Network & Server Monitoring">Network & Server Monitoring</option>
                      <option value="Incident Management & Bridge Coordination">Incident Management & Bridge Coordination</option>
                      <option value="Application & Service Availability Monitoring">Application & Service Availability</option>
                      <option value="Full NOC Extension & Dedicated IT Support">Full NOC Extension & Dedicated IT Support</option>
                      <option value="Tool Integration & SOP Alignment">Tool Integration & SOP Alignment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Infrastructure Scope & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current monitoring tools, estimated number of servers/nodes, cloud platforms, or specific SLA targets..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-lime-400 hover:from-cyan-300 hover:to-lime-300 text-slate-950 font-bold text-sm font-heading uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Discovery Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500 pt-2">
                    <span>🔒 Confidential Data</span>
                    <span>•</span>
                    <span>⏱️ Rapid Response</span>
                    <span>•</span>
                    <span>🤝 No Vendor Lock-in</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
