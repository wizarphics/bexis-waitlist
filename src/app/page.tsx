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

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
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
      <section className="pb-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0B0F17] border border-slate-800 shadow-2xl shadow-slate-300/30 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-lg bg-gradient-to-br from-[#08C4F2] to-blue-600 p-[1px]">
                  <div className="w-full h-full bg-[#0B0F17] rounded-[6px] flex items-center justify-center font-bold text-[#08C4F2] text-[9px]">BX</div>
                </div>
                <span className="text-xs font-bold text-white">Bexis</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-[#08C4F2] font-semibold">Candidate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-gradient-to-br from-[#08C4F2] to-blue-600 text-[#0B0F17] font-bold text-[8px] flex items-center justify-center">AR</div>
                <span className="text-[10px] font-bold text-white">Alex Rivera</span>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 border-r border-slate-800 p-3 space-y-3 hidden sm:block">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#08C4F2]/10 border border-[#08C4F2]/30 text-[#08C4F2]">
                  <LayoutGrid className="size-3.5" />
                  <span className="text-[11px] font-semibold">Overview</span>
                </div>
                {[
                  { label: 'My Applications', badge: '3' },
                  { label: 'AI Assessments', badge: '1' },
                  { label: 'Evidence & Portfolio', badge: '3' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-2 rounded-lg text-slate-400 hover:bg-slate-900 transition-colors">
                    <span className="text-[11px]">{item.label}</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-slate-800 text-[9px] font-bold text-slate-300">{item.badge}</span>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 space-y-4">
                {/* Alert Banner */}
                <div className="rounded-xl bg-gradient-to-r from-cyan-950/80 via-[#0a2038] to-blue-950/80 border border-[#08C4F2]/40 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-semibold text-[#08C4F2] bg-[#08C4F2]/20 px-2 py-0.5 rounded-full">Pending AI Assessment</span>
                    <p className="text-[11px] font-bold text-white">Senior Product Manager at TechNova</p>
                  </div>
                  <button className="px-3 py-1.5 bg-gradient-to-r from-[#08C4F2] to-blue-600 text-[#0B0F17] text-[9px] font-bold rounded-lg shrink-0">Start Assessment</button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { label: 'Applications', value: '3', sub: '2 Under Review', color: 'text-white' },
                    { label: 'AI Assessments', value: '1', sub: 'Scheduled', color: 'text-[#08C4F2]' },
                    { label: 'Linked Evidence', value: '3', sub: 'Verified by AI', color: 'text-emerald-400' },
                    { label: 'Shortlists', value: '1', sub: 'PixelWorks', color: 'text-purple-400' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-[#0f172a] border border-slate-800 p-3 space-y-0.5">
                      <div className="text-[9px] text-slate-400">{m.label}</div>
                      <div className={`text-lg font-bold ${m.color}`}>{m.value}</div>
                      <div className="text-[9px] text-slate-500">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Application Progress */}
                <div className="rounded-xl bg-[#0f172a] border border-slate-800 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white">Active Applications</span>
                    <span className="text-[9px] text-[#08C4F2] font-semibold cursor-pointer">View All →</span>
                  </div>

                  {[
                    { role: 'Senior Product Manager', company: 'TechNova', logo: 'TN', logoBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', stage: 3, status: 'Scheduled' },
                    { role: 'Backend Engineer', company: 'CodeCore', logo: 'CC', logoBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30', stage: 4, status: 'Under Review' },
                  ].map((app) => (
                    <div key={app.role} className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`size-7 rounded-md ${app.logoBg} border font-bold text-[8px] flex items-center justify-center`}>{app.logo}</div>
                          <div>
                            <p className="text-[10px] font-bold text-white">{app.role}</p>
                            <p className="text-[9px] text-slate-400">{app.company}</p>
                          </div>
                        </div>
                        <span className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${app.status === 'Scheduled' ? 'bg-cyan-950 text-[#08C4F2] border border-cyan-800' : 'bg-slate-800 text-slate-300'}`}>{app.status}</span>
                      </div>
                      {/* 5-step progress */}
                      <div className="grid grid-cols-5 gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <div key={s} className={`h-1 rounded-full ${s <= app.stage ? 'bg-[#08C4F2]' : 'bg-slate-800'}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Evidence Cards */}
                <div className="rounded-xl bg-[#0f172a] border border-slate-800 p-4 space-y-3">
                  <span className="text-[11px] font-bold text-white">Supporting Evidence</span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { title: 'E-commerce Microservices', type: 'GitHub', icon: 'GH', color: 'text-[#08C4F2] bg-[#08C4F2]/10', score: '92%' },
                      { title: 'Design System Library', type: 'Figma', icon: 'FG', color: 'text-pink-400 bg-pink-500/10', score: '89%' },
                      { title: 'AWS Solutions Architect', type: 'Cert', icon: 'AW', color: 'text-amber-400 bg-amber-500/10', score: 'Verified' },
                    ].map((ev) => (
                      <div key={ev.title} className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 space-y-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`size-5 rounded ${ev.color} flex items-center justify-center text-[7px] font-bold`}>{ev.icon}</div>
                          <span className="text-[9px] font-bold text-white truncate">{ev.title}</span>
                        </div>
                        <div className="flex items-center justify-between text-[8px]">
                          <span className="text-slate-400">{ev.type}</span>
                          <span className="text-[#08C4F2] font-bold">{ev.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="py-12 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={p.title} className={`group py-12 px-6 text-center ${i < 4 ? 'lg:border-r border-slate-200' : ''} ${i < 4 ? 'border-b sm:border-b-0 border-slate-200' : ''}`}>
                <div className="flex justify-center mb-8">
                  <div className={`w-24 h-24 rounded-3xl ${p.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <p.icon className={`size-12 ${p.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
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
      <section id="why-bexis" className="py-20 bg-white border-y border-slate-200">
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
                <div key={card.title} className="rounded-xl border border-slate-200 p-5 space-y-3 hover:border-[#472AF8]/20 hover:shadow-md transition-all">
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
            <button onClick={() => openWaitlist('employer')} className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#472AF8] bg-white hover:bg-slate-50 rounded-lg shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer">
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
