'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/waitlist-modal';
import {
  Search,
  Sparkles,
  ArrowRight,
  Brain,
  ShieldCheck,
  UserCheck,
  BarChart2,
  FileText,
  Check,
  Zap,
  Target,
  LayoutGrid,
} from 'lucide-react';

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<'candidate' | 'employer'>('candidate');

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const openWaitlist = (role: 'candidate' | 'employer' = 'candidate') => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200/60 bg-white/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-0 group cursor-pointer">
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

          <button onClick={() => openWaitlist('candidate')} className="px-5 py-2 text-sm font-semibold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg shadow-sm transition-all cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#472AF8]/5 border border-[#472AF8]/15 text-[#472AF8] text-xs font-semibold tracking-wide">
              <Sparkles className="size-3.5" />
              <span>AI-Powered Behavioral Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
              See Beyond{' '}
              <span className="text-[#472AF8]">the Résumé.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              BEXIS helps organizations understand candidates through experience, evidence,
              behavioral intelligence, and role alignment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button onClick={() => openWaitlist('candidate')} className="px-6 py-3 text-sm font-semibold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg shadow-md shadow-[#472AF8]/20 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2">
                Join the Waitlist
                <ArrowRight className="size-4" />
              </button>
              <button onClick={() => openWaitlist('employer')} className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-all cursor-pointer">
                For Employers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="pb-0 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="rounded-t-2xl bg-white border border-b-0 border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden flex" style={{ height: '620px' }}>
            {/* Sidebar */}
            <div className="w-48 bg-[#0f172a] p-3 space-y-1 hidden sm:flex flex-col shrink-0">
              <div className="flex items-center gap-2 px-2 py-3 mb-2">
                <Image src="/bexis-icon.png" alt="BEXIS" width={24} height={24} className="shrink-0" />
                <span className="text-xs font-bold text-white">Bexis</span>
              </div>
              <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1">Employer</div>
              {[
                { label: 'Overview', active: true },
                { label: 'Jobs', active: false },
                { label: 'Applications', active: false, badge: '47' },
                { label: 'Candidates', active: false },
                { label: 'Interviews', active: false },
                { label: 'Evidence', active: false },
                { label: 'Insights', active: false },
                { label: 'Reports', active: false },
                { label: 'Team', active: false },
                { label: 'Settings', active: false },
              ].map((item) => (
                <div key={item.label} className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] transition-colors ${item.active ? 'bg-[#472AF8] text-white font-semibold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                  <span>{item.label}</span>
                  {item.badge && <span className="px-1.5 py-0.5 rounded-full bg-slate-700 text-[8px] font-bold">{item.badge}</span>}
                </div>
              ))}
              <div className="mt-auto pt-4 border-t border-slate-800 flex items-center gap-2 px-2">
                <div className="size-7 rounded-full bg-[#472AF8] text-white flex items-center justify-center text-[8px] font-bold">SC</div>
                <div>
                  <div className="text-[10px] font-bold text-white">Sarah Chen</div>
                  <div className="text-[8px] text-slate-500">HR Manager</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6 min-w-0 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>HR Dashboard</h3>
                  <p className="text-xs text-slate-500">TechNova · Hiring overview for August 2026</p>
                </div>
                <button className="px-4 py-2 bg-[#472AF8] hover:bg-[#3b22d0] text-white text-xs font-semibold rounded-lg transition-all cursor-pointer">+ Create Job</button>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { label: 'Active Jobs', value: '6' },
                  { label: 'Total Applications', value: '47', sub: '+12 this week', color: 'text-[#472AF8]' },
                  { label: 'AI Interviews', value: '12' },
                  { label: 'Assessments Done', value: '28', icon: '✓' },
                  { label: 'Under Review', value: '9' },
                  { label: 'Hires', value: '3', icon: '🏆' },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-slate-200 p-3.5 space-y-1">
                    <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
                    <div className={`text-2xl font-bold text-navy-900 ${m.color || ''}`} style={{ fontFamily: 'var(--font-display)' }}>{m.value}</div>
                    {m.sub && <div className="text-[10px] text-[#472AF8] font-semibold">{m.sub}</div>}
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Bar Chart */}
                <div className="rounded-xl border border-slate-200 p-5 space-y-3">
                  <span className="text-sm font-bold text-navy-900">Candidate Pipeline</span>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Applications', pct: 78, count: 47 },
                      { label: 'CV Reviewed', pct: 52, count: 31 },
                      { label: 'Interview', pct: 38, count: 23 },
                      { label: 'Under Review', pct: 22, count: 13 },
                      { label: 'Shortlisted', pct: 12, count: 7 },
                      { label: 'Hired', pct: 5, count: 3 },
                    ].map((bar) => (
                      <div key={bar.label} className="flex items-center gap-3">
                        <span className="text-[10px] text-slate-500 w-20 text-right shrink-0">{bar.label}</span>
                        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#472AF8] rounded-full" style={{ width: `${bar.pct}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-400 w-5 text-right">{bar.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400 pt-2 border-t border-slate-100">
                    <span>0</span><span>15</span><span>30</span><span>45</span><span>60</span>
                  </div>
                </div>

                {/* Donut Chart */}
                <div className="rounded-xl border border-slate-200 p-5 flex items-center justify-between">
                  <div className="space-y-3">
                    <span className="text-sm font-bold text-navy-900 block">Interview Completion</span>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 text-xs">
                        <span className="size-2.5 rounded-full bg-[#08C4F2]" />
                        <span className="text-slate-500">Completed</span>
                        <span className="font-bold text-navy-900 ml-auto">28</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs">
                        <span className="size-2.5 rounded-full bg-[#472AF8]" />
                        <span className="text-slate-500">Scheduled</span>
                        <span className="font-bold text-navy-900 ml-auto">12</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs">
                        <span className="size-2.5 rounded-full bg-slate-300" />
                        <span className="text-slate-500">Pending</span>
                        <span className="font-bold text-navy-900 ml-auto">7</span>
                      </div>
                    </div>
                  </div>
                  {/* Donut SVG */}
                  <div className="relative size-32">
                    <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#08C4F2" strokeWidth="4" strokeDasharray="61.5 26.6" strokeLinecap="round" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#472AF8" strokeWidth="4" strokeDasharray="25.8 62.3" strokeDashoffset="-61.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Recent Applications */}
              <div className="rounded-xl border border-slate-200 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-navy-900">Recent Applications</span>
                  <span className="text-xs text-[#472AF8] font-semibold cursor-pointer">View all →</span>
                </div>
                <div className="space-y-0">
                  {[
                    { name: 'Jane Doe', initials: 'JD', bg: 'bg-[#472AF8] text-white', role: 'Senior Product Manager', date: 'Applied 2026-08-14', status: 'Interview Scheduled', statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                    { name: 'John Smith', initials: 'JS', bg: 'bg-[#08C4F2] text-white', role: 'Senior Product Manager', date: 'Applied 2026-08-13', status: 'Shortlisted', statusColor: 'bg-[#472AF8]/5 text-[#472AF8] border-[#472AF8]/20' },
                    { name: 'Aisha Ibrahim', initials: 'AI', bg: 'bg-emerald-500 text-white', role: 'Senior Product Manager', date: 'Applied 2026-08-12', status: 'Rejected', statusColor: 'bg-red-50 text-red-600 border-red-200' },
                    { name: 'David Lee', initials: 'DL', bg: 'bg-amber-500 text-white', role: 'Backend Engineer', date: 'Applied 2026-08-14', status: 'Under Review', statusColor: 'bg-slate-50 text-slate-600 border-slate-200' },
                  ].map((app) => (
                    <div key={app.name} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`size-9 rounded-full ${app.bg} flex items-center justify-center text-[10px] font-bold`}>{app.initials}</div>
                        <div>
                          <p className="text-xs font-bold text-navy-900">{app.name}</p>
                          <p className="text-[10px] text-slate-500">{app.role} · {app.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${app.statusColor}`}>{app.status}</span>
                        <button className="text-[10px] font-semibold text-slate-500 hover:text-[#472AF8] border border-slate-200 rounded-md px-2.5 py-1 transition-colors cursor-pointer">Review</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Fade-off gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="pt-8 pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#472AF8]">Core Principles</div>
            <h2 className="text-3xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>Built on trust and substance.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            {[
              {
                icon: FileText,
                title: 'Experience',
                desc: 'CV tells us where someone has been — skills, roles, and career trajectory.',
                iconBg: 'bg-[#08C4F2]/10',
                iconColor: 'text-[#08C4F2]',
              },
              {
                icon: Search,
                title: 'Evidence',
                desc: 'Work samples, GitHub, and portfolios show what they have actually done.',
                iconBg: 'bg-emerald-500/10',
                iconColor: 'text-emerald-500',
              },
              {
                icon: Brain,
                title: 'Behaviour',
                desc: 'AI behavioral interviews reveal how they approach real work situations.',
                iconBg: 'bg-[#472AF8]/10',
                iconColor: 'text-[#472AF8]',
              },
              {
                icon: BarChart2,
                title: 'Alignment',
                desc: 'Competencies mapped to role context — evidence scored against what matters.',
                iconBg: 'bg-amber-500/10',
                iconColor: 'text-amber-500',
              },
              {
                icon: UserCheck,
                title: 'Human Decision',
                desc: 'AI provides insight. People always make the final call.',
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-navy-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-white/10 overflow-hidden">
            {/* What's broken */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="inline-flex px-3 py-1 rounded-md bg-white/10 text-xs font-semibold text-slate-300">What&apos;s broken</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Hiring is broken.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">Most hiring teams struggle with:</p>
              <div className="space-y-0">
                {[
                  'Résumés that don\'t reflect actual capability',
                  'Unstructured interviews with inconsistent signals',
                  'No evidence beyond what candidates claim',
                  'Bias hidden in gut-feel decisions',
                  'Slow, disjointed hiring workflows',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-white/10 text-sm text-slate-300">{item}</div>
                ))}
              </div>
            </div>

            {/* The BEXIS way */}
            <div className="p-8 sm:p-10 space-y-6 bg-white/5">
              <div className="inline-flex px-3 py-1 rounded-md bg-[#08C4F2]/15 text-xs font-semibold text-[#08C4F2]">The BEXIS way</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                One platform. Evidence-first.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">Structured, transparent hiring from application to decision.</p>
              <div className="space-y-0">
                {[
                  'CV analysis extracts real experience automatically',
                  'AI behavioral interviews assess how candidates work',
                  'Evidence from GitHub, portfolios, and certifications',
                  'Every insight backed by data — no black boxes',
                  'Humans make the final call, always',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-white/10 text-sm text-slate-300">{item}</div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => openWaitlist('candidate')} className="px-5 py-2.5 text-sm font-semibold text-navy-900 bg-white hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
                  Join Waitlist
                </button>
                <button onClick={() => scrollTo('principles')} className="px-5 py-2.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/10 rounded-lg transition-all cursor-pointer">
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BEXIS */}
      <section id="why-bexis" className="py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-bold uppercase tracking-widest text-[#472AF8]">Why BEXIS</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Hiring is more than a résumé match.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                BEXIS combines CV analysis, work evidence, behavioral assessment, and role alignment — giving hiring teams structured evidence to support better decisions.
              </p>
              <div className="space-y-3 pt-1">
                {['CV tells us where someone has been.', 'Evidence helps show what they have done.', 'Behavioral assessment reveals how they approach situations.', 'Role alignment provides relevant context.', 'Humans make the final decision.'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <Check className="size-4 text-[#472AF8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: 'Explainable AI', desc: 'Every insight comes with evidence — no black-box scores.', color: 'bg-[#472AF8]/5 text-[#472AF8] border-[#472AF8]/10' },
                { icon: UserCheck, title: 'Human-First', desc: 'AI supports decisions. Humans always make the final call.', color: 'bg-[#08C4F2]/10 text-[#08C4F2] border-[#08C4F2]/10' },
                { icon: BarChart2, title: 'Behavioral Signals', desc: 'Structured evidence from assessment responses, not guesses.', color: 'bg-[#472AF8]/5 text-[#472AF8] border-[#472AF8]/10' },
                { icon: Target, title: 'Fair & Transparent', desc: 'No protected-class inferences. Evidence-based only.', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-slate-200 p-5 space-y-3">
                  <div className={`size-9 rounded-lg ${card.color} border flex items-center justify-center`}>
                    <card.icon className="size-4.5" />
                  </div>
                  <h4 className="text-base font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
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
            Define your hiring needs and let BEXIS build a structured, evidence-based process in minutes.
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
