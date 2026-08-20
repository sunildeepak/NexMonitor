import React, { useState, useEffect } from 'react';
import { NexLogo } from './NexLogo';
import { Printer, Phone, Mail, Menu, X, Shield, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About & Mission', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'NOC Model', href: '#model' },
    { label: 'Why NexMonitor', href: '#why-us' },
    { label: 'SLAs & Targets', href: '#sla' },
    { label: 'Reporting', href: '#governance' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'Contact', href: '#contact' },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <NexLogo size="sm" showText={true} showTagline={false} />
        </a>

        {/* Live Status Pill */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>NOC Active • 24×7×365</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-md transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="print-company-profile-btn"
            onClick={handlePrint}
            title="Print or Save PDF"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Print Profile</span>
          </button>

          <a
            id="nav-contact-cta"
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-lime-400 hover:from-cyan-300 hover:to-lime-300 rounded-lg shadow-sm shadow-cyan-500/20 transition-all font-heading"
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Connect NOC</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print PDF</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-lime-400 rounded-lg"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Connect NOC</span>
            </a>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-900 text-[11px] font-mono">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 px-2 py-1.5 rounded text-cyan-300 hover:bg-slate-900"
            >
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="truncate">{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.salesEmail}`}
              className="flex items-center gap-2 px-2 py-1.5 rounded text-blue-300 hover:bg-slate-900"
            >
              <Mail className="w-3 h-3 text-blue-400" />
              <span className="truncate">{COMPANY_INFO.salesEmail}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
