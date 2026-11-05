'use client';

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientBadges } from './components/ClientBadges';
import { InteractiveConsole } from './components/InteractiveConsole';
import { ProductPods } from './components/ProductPods';
import { BottleneckSandbox } from './components/BottleneckSandbox';
import { RoiCalculator } from './components/RoiCalculator';
import { CustomerSpotlight } from './components/CustomerSpotlight';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { ReportModal } from './components/ReportModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoInitialData, setDemoInitialData] = useState<{ company?: string; intent?: string } | undefined>(undefined);
  
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportProjectName, setReportProjectName] = useState('Torre Biscayne - HVAC & Remodelación');

  const handleOpenDemo = (initialData?: { company?: string; intent?: string }) => {
    setDemoInitialData(initialData);
    setDemoModalOpen(true);
  };

  const handleOpenReportModal = (projectName: string) => {
    setReportProjectName(projectName);
    setReportModalOpen(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090E] text-[#F3F4F6] selection:bg-violet-500 selection:text-white">
      {/* RunPod-style Top Navigation */}
      <Navbar 
        onOpenDemo={handleOpenDemo}
        onScrollTo={handleScrollTo}
      />

      <main>
        {/* Hero Section with CLI / API switcher & key metrics */}
        <Hero 
          onOpenDemo={handleOpenDemo}
          onScrollTo={handleScrollTo}
        />

        {/* Enterprise Client Banner & Standards */}
        <ClientBadges />

        {/* Live Interactive Site Pods Console */}
        <InteractiveConsole 
          onOpenReportModal={handleOpenReportModal}
          onOpenDemo={handleOpenDemo}
        />

        {/* 4 Core Product Pods (Site Vision, Bottleneck Intelligence, Facility Services, Compliance) */}
        <ProductPods 
          onOpenDemo={handleOpenDemo}
          onScrollTo={handleScrollTo}
        />

        {/* Interactive Bottleneck Detection & Mitigation Sandbox */}
        <BottleneckSandbox 
          onOpenReportModal={handleOpenReportModal}
          onOpenDemo={handleOpenDemo}
        />

        {/* Interactive ROI & Capacity Calculator */}
        <RoiCalculator 
          onOpenDemo={handleOpenDemo}
        />

        {/* Case Study: Software Enterprise Quality (SEQ) Implementation */}
        <CustomerSpotlight 
          onOpenDemo={handleOpenDemo}
          onOpenReportModal={handleOpenReportModal}
        />

        {/* Performance Comparison: By SEQ vs Legacy Methods */}
        <ComparisonTable 
          onOpenDemo={handleOpenDemo}
        />

        {/* Transparent RunPod-style Pricing Tiers */}
        <PricingSection 
          onOpenDemo={handleOpenDemo}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Call to Action Banner */}
        <CtaBanner 
          onOpenDemo={handleOpenDemo}
          onScrollTo={handleScrollTo}
        />
      </main>

      {/* RunPod-style Clean Dark Footer */}
      <Footer 
        onScrollTo={handleScrollTo}
        onOpenDemo={handleOpenDemo}
      />

      {/* Modals */}
      {demoModalOpen && (
        <DemoModal 
          initialData={demoInitialData}
          onClose={() => setDemoModalOpen(false)}
          onOpenReportModal={handleOpenReportModal}
        />
      )}

      {reportModalOpen && (
        <ReportModal 
          projectName={reportProjectName}
          onClose={() => setReportModalOpen(false)}
        />
      )}
    </div>
  );
}
