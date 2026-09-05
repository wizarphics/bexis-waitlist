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

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-500">
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
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
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

          {/* Hero Card Preview */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="size-2.5 rounded-full bg-slate-300" />
                  <div className="size-2.5 rounded-full bg-slate-300" />
                  <div className="size-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-white border border-slate-200 rounded-md flex items-center px-3">
                    <span className="text-xs text-slate-400">bexis.app/candidate/intelligence</span>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-xl bg-[#472AF8] text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-[#472AF8]/30">
                        JD
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>Jane Doe</h4>
                        <p className="text-xs text-slate-500">Senior Product Manager</p>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold inline-flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Strong Match
                    </div>
                    <div className="space-y-2.5 pt-2">
                      {[
                        { label: 'Ownership', value: 90 },
                        { label: 'Collaboration', value: 85 },
                        { label: 'Problem Solving', value: 88 },
                      ].map((s) => (
                        <div key={s.label}>
                          <div className="flex justify-between text-xs font-medium mb-1">
                            <span className="text-slate-500">{s.label}</span>
                            <span className="text-[#472AF8]">{s.value}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full bg-[#472AF8] rounded-full" style={{ width: `${s.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-5">
                    <div className="grid grid-cols-5 gap-2 text-center">
                      {['Apply', 'CV Review', 'AI Interview', 'Evidence', 'Decision'].map((step, i) => (
                        <div key={step} className="flex flex-col items-center gap-1.5">
                          <div className={`size-8 rounded-full text-xs font-bold flex items-center justify-center ${i < 3 ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' : i === 3 ? 'bg-[#472AF8]/10 text-[#472AF8] border border-[#472AF8]/20' : 'bg-slate-100 text-slate-400 border border-slate-200'}`}>
                            {i < 3 ? '✓' : i + 1}
                          </div>
                          <span className={`text-[10px] font-medium ${i === 3 ? 'text-[#472AF8]' : 'text-slate-400'}`}>{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="size-4 text-amber-500" />
                        <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">AI Insight</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Strong evidence of ownership and problem-solving. Leadership experience requires human review. Recommend proceeding to final interview stage.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Role Alignment</div>
                        <div className="text-2xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>92%</div>
                      </div>
                      <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Evidence Score</div>
                        <div className="text-2xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>87%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="py-20 bg-slate-50 border-y border-slate-200">
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
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* What's broken */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="inline-flex px-3 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">What&apos;s broken</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Hiring is broken.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">Most hiring teams struggle with:</p>
              <div className="space-y-0">
                {[
                  'Résumés that don\'t reflect actual capability',
                  'Unstructured interviews with inconsistent signals',
                  'No evidence beyond what candidates claim',
                  'Bias hidden in gut-feel decisions',
                  'Slow, disjointed hiring workflows',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-slate-200 text-sm text-slate-600">{item}</div>
                ))}
              </div>
            </div>

            {/* The BEXIS way */}
            <div className="p-8 sm:p-10 space-y-6 bg-slate-50">
              <div className="inline-flex px-3 py-1 rounded-md bg-[#472AF8]/10 text-xs font-semibold text-[#472AF8]">The BEXIS way</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                One platform. Evidence-first.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">Structured, transparent hiring from application to decision.</p>
              <div className="space-y-0">
                {[
                  'CV analysis extracts real experience automatically',
                  'AI behavioral interviews assess how candidates work',
                  'Evidence from GitHub, portfolios, and certifications',
                  'Every insight backed by data — no black boxes',
                  'Humans make the final call, always',
                ].map((item, i) => (
                  <div key={i} className="py-4 border-t border-slate-200 text-sm text-slate-600">{item}</div>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => openWaitlist('candidate')} className="px-5 py-2.5 text-sm font-semibold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg transition-all cursor-pointer">
                  Join Waitlist
                </button>
                <button onClick={() => scrollTo('principles')} className="px-5 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 hover:bg-slate-100 rounded-lg transition-all cursor-pointer">
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
