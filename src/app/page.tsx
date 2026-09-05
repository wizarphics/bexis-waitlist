'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/waitlist-modal';
import {
  Search,
  ArrowRight,
  Brain,
  ShieldCheck,
  UserCheck,
  BarChart2,
  FileText,
  Check,
  Target,
  Lock,
  Eye,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<'candidate' | 'employer'>('candidate');

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const openWaitlist = (role: 'candidate' | 'employer' = 'employer') => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200/60 bg-white/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-0 cursor-pointer">
            <Image src="/bexis-icon.png" alt="BEXIS" width={32} height={32} className="shrink-0" />
            <span className="text-base font-black tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              Bex<span style={{ background: 'linear-gradient(90deg, #893EFB, #08C4F2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>s
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button onClick={() => scrollTo('how-it-works')} className="hover:text-[#472AF8] transition-colors cursor-pointer">How It Works</button>
            <button onClick={() => scrollTo('why-bexis')} className="hover:text-[#472AF8] transition-colors cursor-pointer">For Employers</button>
            <button onClick={() => scrollTo('principles')} className="hover:text-[#472AF8] transition-colors cursor-pointer">Principles</button>
          </nav>

          <button onClick={() => openWaitlist('employer')} className="px-5 py-2 text-sm font-semibold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg shadow-sm transition-all cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 pb-8 lg:pt-24 lg:pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#472AF8]/5 border border-[#472AF8]/15 text-[#472AF8] text-xs font-semibold tracking-wide">
              <span>Evidence-first hiring</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
              See Beyond{' '}
              <span className="text-[#472AF8]">the Résumé.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Understand candidates through experience, evidence, behavioral insight, and role alignment — not just what they claim on paper.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button onClick={() => openWaitlist('employer')} className="px-6 py-3 text-sm font-semibold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg shadow-md shadow-[#472AF8]/20 transition-all cursor-pointer flex items-center gap-2">
                Join the Waitlist
                <ArrowRight className="size-4" />
              </button>
              <button onClick={() => scrollTo('how-it-works')} className="px-6 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW — Candidate Profile Concept */}
      <section className="pb-0 overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-t-2xl bg-white border border-b-0 border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden" style={{ height: '560px' }}>
            {/* Top bar */}
            <div className="h-11 border-b border-slate-200 flex items-center px-4 gap-4 bg-slate-50/80">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="h-6 bg-white border border-slate-200 rounded-md flex items-center px-3 text-[10px] text-slate-400">
                  app.bexis.com/candidate/jane-doe
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex h-[calc(560px-44px)]">
              {/* Left: Candidate info */}
              <div className="w-72 border-r border-slate-200 p-5 space-y-5 hidden md:block shrink-0">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-full bg-[#472AF8] text-white flex items-center justify-center text-sm font-bold">JD</div>
                  <div>
                    <div className="text-sm font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>Jane Doe</div>
                    <div className="text-xs text-slate-500">Senior Product Manager</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Evidence Summary</div>
                  {[
                    { label: 'Experience', value: '8 years', color: 'bg-[#08C4F2]' },
                    { label: 'Evidence Score', value: 'Strong', color: 'bg-emerald-500' },
                    { label: 'Behavioral Fit', value: 'High', color: 'bg-[#472AF8]' },
                    { label: 'Role Alignment', value: '92%', color: 'bg-amber-500' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className="text-xs text-slate-600">{item.label}</span>
                      </div>
                      <span className="text-xs font-bold text-navy-900">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Verdict</div>
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2 flex items-center gap-2">
                    <Check className="size-4 text-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">Strong candidate — Recommend interview</span>
                  </div>
                </div>
              </div>

              {/* Right: Five pillar cards */}
              <div className="flex-1 p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>Candidate Assessment</div>
                    <div className="text-[10px] text-slate-500">Evidence-based evaluation across five dimensions</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#08C4F2]/10 text-[#08C4F2] text-[10px] font-semibold">
                    <Eye className="size-3" />
                    Full view available
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {[
                    { icon: FileText, title: 'Experience', desc: '8 years product leadership at Series B+ startups', score: 'Verified', color: 'text-[#08C4F2]', bg: 'bg-[#08C4F2]/10' },
                    { icon: Search, title: 'Evidence', desc: '3 shipped products, 2 patents, portfolio reviewed', score: 'Strong', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                    { icon: Brain, title: 'Behaviour', desc: 'Collaborative approach, data-driven decisions', score: 'High', color: 'text-[#472AF8]', bg: 'bg-[#472AF8]/10' },
                    { icon: BarChart2, title: 'Alignment', desc: '92% match to role requirements and team context', score: '92%', color: 'text-amber-500', bg: 'bg-amber-500/10' },
                    { icon: UserCheck, title: 'Decision', desc: 'Recommendation: proceed to final interview round', score: 'Advance', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                  ].map((card) => (
                    <div key={card.title} className="rounded-xl border border-slate-200 p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`size-8 rounded-lg ${card.bg} flex items-center justify-center`}>
                          <card.icon className={`size-4 ${card.color}`} />
                        </div>
                        <span className={`text-[10px] font-bold ${card.color}`}>{card.score}</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</div>
                        <div className="text-[10px] text-slate-500 leading-relaxed mt-1">{card.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="mt-4 rounded-xl border border-slate-200 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Recent Activity</div>
                  <div className="space-y-2.5">
                    {[
                      { time: '2h ago', text: 'Behavioral interview completed — scored 8.4/10 on collaborative problem-solving', dot: 'bg-[#472AF8]' },
                      { time: '1d ago', text: 'Portfolio evidence verified — 3 product launches confirmed with metrics', dot: 'bg-emerald-500' },
                      { time: '2d ago', text: 'CV analysis complete — 8 years experience in product management validated', dot: 'bg-[#08C4F2]' },
                    ].map((event, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${event.dot} mt-1.5 shrink-0`} />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] text-slate-400 mr-2">{event.time}</span>
                          <span className="text-[11px] text-slate-600">{event.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fade-off gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* FIVE PILLARS — The BEXIS Approach */}
      <section id="principles" className="pt-8 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#472AF8]">The Evidence Journey</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>
              Five dimensions. One clear picture.
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              BEXIS evaluates candidates across five dimensions — giving hiring teams a structured, evidence-based view.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {[
              {
                icon: FileText,
                title: 'Experience',
                desc: 'Understand what someone has actually done.',
                iconBg: 'bg-[#08C4F2]/10',
                iconColor: 'text-[#08C4F2]',
              },
              {
                icon: Search,
                title: 'Evidence',
                desc: 'Go beyond claims with real work and supporting proof.',
                iconBg: 'bg-emerald-500/10',
                iconColor: 'text-emerald-500',
              },
              {
                icon: Brain,
                title: 'Behaviour',
                desc: 'Understand how candidates approach situations.',
                iconBg: 'bg-[#472AF8]/10',
                iconColor: 'text-[#472AF8]',
              },
              {
                icon: BarChart2,
                title: 'Alignment',
                desc: 'See relevance to the role and company context.',
                iconBg: 'bg-amber-500/10',
                iconColor: 'text-amber-500',
              },
              {
                icon: UserCheck,
                title: 'Human Decision',
                desc: 'Give recruiters better context. Humans make the final call.',
                iconBg: 'bg-emerald-500/10',
                iconColor: 'text-emerald-500',
              },
            ].map((p, i) => (
              <div key={p.title} className={`py-10 px-6 text-center ${i < 4 ? 'lg:border-r border-slate-200' : ''} ${i < 4 ? 'border-b sm:border-b-0 border-slate-200' : ''}`}>
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-3xl ${p.iconBg} flex items-center justify-center`}>
                    <p.icon className={`size-10 ${p.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section id="how-it-works" className="py-20 bg-navy-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-white/10 overflow-hidden">
            {/* What's broken */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="inline-flex px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-slate-300">The problem</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Hiring is broken.
              </h2>
              <div className="space-y-0">
                {[
                  'Résumés don\'t always reflect capability',
                  'Interviews produce inconsistent signals',
                  'Candidate experience is difficult to verify',
                  'Decisions rely too heavily on intuition',
                  'Workflows are slow and fragmented',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-white/10 text-sm text-slate-300">{item}</div>
                ))}
              </div>
            </div>

            {/* The BEXIS way */}
            <div className="p-8 sm:p-10 space-y-6 bg-white/5">
              <div className="inline-flex px-3 py-1 rounded-md bg-[#08C4F2]/15 text-xs font-semibold text-[#08C4F2]">The solution</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                One platform. Evidence-first.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">Structured, transparent hiring from application to decision.</p>
              <div className="space-y-0">
                {[
                  'Richer candidate context in one place',
                  'Structured evidence — not just claims',
                  'Behavioral insight from real situations',
                  'Data-backed decisions with human oversight',
                  'Faster, fairer hiring workflows',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-white/10 text-sm text-slate-300">{item}</div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => openWaitlist('employer')} className="px-5 py-2.5 text-sm font-semibold text-navy-900 bg-white hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
                  Join Waitlist
                </button>
                <button onClick={() => scrollTo('why-bexis')} className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 rounded-lg transition-all cursor-pointer">
                  Why BEXIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BEXIS — Philosophy + Trust */}
      <section id="why-bexis" className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#472AF8]">Why BEXIS</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              AI provides insight. Evidence provides context.<br className="hidden sm:block" /> Humans make decisions.
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
              BEXIS is not trying to replace recruiters. It gives hiring teams better information — so every decision is informed, not gut-driven.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Eye, title: 'Explainable AI', desc: 'Every insight comes with evidence — no black-box scores.', color: 'bg-[#472AF8]/5 text-[#472AF8] border-[#472AF8]/10' },
              { icon: UserCheck, title: 'Human-First', desc: 'AI supports decisions. Humans always make the final call.', color: 'bg-[#08C4F2]/10 text-[#08C4F2] border-[#08C4F2]/10' },
              { icon: Brain, title: 'Behavioral Signals', desc: 'Structured evidence from how candidates actually work.', color: 'bg-[#472AF8]/5 text-[#472AF8] border-[#472AF8]/10' },
              { icon: ShieldCheck, title: 'Fair & Transparent', desc: 'No protected-class inferences. Evidence-based only.', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 p-6 space-y-3">
                <div className={`size-10 rounded-lg ${card.color} border flex items-center justify-center`}>
                  <card.icon className="size-5" />
                </div>
                <h4 className="text-base font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-[#472AF8] via-[#321DAE] to-[#1c105a] p-10 sm:p-14 text-center space-y-5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_60%)]" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to hire beyond the résumé?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed relative z-10">
            BEXIS is building a new evidence-first approach to hiring. Join the waitlist and be among the first to see it.
          </p>
          <div className="relative z-10">
            <button onClick={() => openWaitlist('employer')} className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#472AF8] bg-white hover:bg-slate-50 rounded-lg shadow-xl cursor-pointer">
              Join the Waitlist
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-0 cursor-pointer">
            <Image src="/bexis-icon.png" alt="BEXIS" width={24} height={24} className="shrink-0" />
            <span className="text-sm font-black tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              Bex<span style={{ background: 'linear-gradient(90deg, #893EFB, #08C4F2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>s
            </span>
          </button>
          <p className="text-xs text-slate-400">© 2026 Bexis. AI provides insight. Evidence provides context. Humans make decisions.</p>
        </div>
      </footer>

      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} defaultRole={waitlistRole} />
    </div>
  );
}
