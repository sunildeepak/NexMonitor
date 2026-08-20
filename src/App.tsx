import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TechStackSection } from './components/TechStackSection';
import { OperatingModelSection } from './components/OperatingModelSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { SLASection } from './components/SLASection';
import { ReportingSection } from './components/ReportingSection';
import { EngagementSection } from './components/EngagementSection';
import { ValueSection } from './components/ValueSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Enterprise Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main id="main-content">
        {/* 1. Hero & Brand Profile Header */}
        <Hero />

        {/* 2. About NexMonitor & Foundational Mission */}
        <AboutSection />

        {/* 3. Comprehensive 12 Services Portfolio */}
        <ServicesSection />

        {/* 4. Technology & Monitoring Experience (Tool-Agnostic) */}
        <TechStackSection />

        {/* 5. NOC 10-Step Operating Model & Workflow Pipeline */}
        <OperatingModelSection />

        {/* 6. Why Choose NexMonitor (7 Core Differentiators) */}
        <WhyChooseSection />

        {/* 7. Service Commitment & Proposed Acknowledgement Targets (SLAs) */}
        <SLASection />

        {/* 8. Reporting & Governance Cadence (Daily, Weekly, Monthly) */}
        <ReportingSection />

        {/* 9. 7-Step Structured Engagement Approach */}
        <EngagementSection />

        {/* 10. Our Value to Clients (Impact & ROI) */}
        <ValueSection />

        {/* 11. Contact & Discovery Form */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

