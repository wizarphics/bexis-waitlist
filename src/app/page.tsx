'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { WaitlistModal } from '@/components/waitlist-modal';
import {
  Search,
  MapPin,
  Sparkles,
  ArrowRight,
  Brain,
  ShieldCheck,
  UserCheck,
  BarChart2,
  FileText,
  Clock,
  ChevronDown,
  Check,
  Zap,
  Target,
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  logoBg: string;
  isRemote: boolean;
  location: string;
  type: string;
  level: string;
  industry: string;
  tags: string[];
  extraTagsCount: number;
  postedAgo: string;
}

const JOBS_DATA: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Product Manager',
    company: 'TechNova',
    logo: 'TN',
    logoBg: 'bg-emerald-100 text-emerald-700',
    isRemote: true,
    location: 'London, UK',
    type: 'Full-time',
    level: 'Senior',
    industry: 'Technology',
    tags: ['Product Strategy', 'Agile', 'Roadmapping'],
    extraTagsCount: 2,
    postedAgo: '20d ago',
  },
  {
    id: 'job-2',
    title: 'Backend Engineer',
    company: 'CodeCore',
    logo: 'CC',
    logoBg: 'bg-blue-100 text-blue-700',
    isRemote: true,
    location: 'Berlin, Germany',
    type: 'Full-time',
    level: 'Mid-Level',
    industry: 'Technology',
    tags: ['Python', 'Node.js', 'PostgreSQL'],
    extraTagsCount: 1,
    postedAgo: '18d ago',
  },
  {
    id: 'job-3',
    title: 'Data Analyst',
    company: 'DataSight',
    logo: 'DS',
    logoBg: 'bg-purple-100 text-purple-700',
    isRemote: false,
    location: 'New York, USA',
    type: 'Full-time',
    level: 'Junior',
    industry: 'Data & Analytics',
    tags: ['SQL', 'Python', 'Tableau'],
    extraTagsCount: 1,
    postedAgo: '19d ago',
  },
  {
    id: 'job-4',
    title: 'UI/UX Designer',
    company: 'PixelWorks',
    logo: 'PW',
    logoBg: 'bg-pink-100 text-pink-700',
    isRemote: true,
    location: 'Amsterdam, NL',
    type: 'Contract',
    level: 'Mid-Level',
    industry: 'Design',
    tags: ['Figma', 'User Research', 'Prototyping'],
    extraTagsCount: 1,
    postedAgo: '22d ago',
  },
  {
    id: 'job-5',
    title: 'Software Engineer',
    company: 'TechNova',
    logo: 'TN',
    logoBg: 'bg-emerald-100 text-emerald-700',
    isRemote: true,
    location: 'Remote',
    type: 'Full-time',
    level: 'Entry Level',
    industry: 'Technology',
    tags: ['TypeScript', 'React', 'Node.js'],
    extraTagsCount: 1,
    postedAgo: '17d ago',
  },
  {
    id: 'job-6',
    title: 'Head of Data Science',
    company: 'DataSight',
    logo: 'DS',
    logoBg: 'bg-purple-100 text-purple-700',
    isRemote: false,
    location: 'New York, USA',
    type: 'Full-time',
    level: 'Lead / Manager',
    industry: 'Data & Analytics',
    tags: ['ML', 'Python', 'Team Leadership'],
    extraTagsCount: 1,
    postedAgo: '23d ago',
  },
];

const INDUSTRIES = ['All Industries', 'Technology', 'Data & Analytics', 'Design', 'Finance', 'Healthcare'];

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<'candidate' | 'employer'>('candidate');

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      if (searchKeyword.trim() && !job.title.toLowerCase().includes(searchKeyword.toLowerCase()) && !job.company.toLowerCase().includes(searchKeyword.toLowerCase()) && !job.tags.some((t) => t.toLowerCase().includes(searchKeyword.toLowerCase()))) return false;
      if (searchLocation.trim() && !job.location.toLowerCase().includes(searchLocation.toLowerCase()) && !(job.isRemote && 'remote'.includes(searchLocation.toLowerCase()))) return false;
      if (selectedLevel !== 'All Levels' && job.level !== selectedLevel) return false;
      if (selectedType !== 'All Types' && job.type !== selectedType) return false;
      if (selectedIndustry !== 'All Industries' && job.industry !== selectedIndustry) return false;
      return true;
    });
  }, [searchKeyword, searchLocation, selectedLevel, selectedType, selectedIndustry]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const openWaitlist = (role: 'candidate' | 'employer' = 'candidate') => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200/60 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-0 group cursor-pointer">
            <Image src="/bexis-icon.png" alt="BEXIS" width={32} height={32} className="shrink-0" />
            <span className="text-base font-black tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              Bex<span style={{ background: 'linear-gradient(90deg, #893EFB, #08C4F2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>s
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-500">
            <button onClick={() => scrollTo('jobs')} className="hover:text-[#472AF8] transition-colors cursor-pointer">Find Jobs</button>
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
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#472AF8] via-[#321DAE] to-[#1c105a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(8,196,242,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,62,251,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                Hiring built on<br />
                <span className="text-[#08C4F2]">evidence,</span> not<br />
                guesswork
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-md mb-8">
                AI-powered behavioral intelligence that helps you understand
                candidates beyond the résumé.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => openWaitlist('candidate')} className="w-full sm:w-auto px-7 py-3 text-sm font-bold text-[#472AF8] bg-white hover:bg-slate-50 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                  Join the Waitlist
                  <ArrowRight className="size-4" />
                </button>
                <button onClick={() => scrollTo('how-it-works')} className="w-full sm:w-auto px-7 py-3 text-sm font-bold text-white/70 hover:text-white rounded-lg transition-all cursor-pointer">
                  See how it works →
                </button>
              </div>
            </div>

            {/* Floating UI mockup */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-10 rounded-lg bg-[#08C4F2]/20 flex items-center justify-center">
                    <span className="text-[#08C4F2] font-bold text-sm">AI</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Behavioral Intelligence</p>
                    <p className="text-xs text-white/40">Candidate assessment</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Ownership', score: 92 },
                    { label: 'Collaboration', score: 88 },
                    { label: 'Problem Solving', score: 85 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/60">{s.label}</span>
                        <span className="text-[#08C4F2] font-semibold">{s.score}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full bg-[#08C4F2] rounded-full" style={{ width: `${s.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="size-3 text-amber-400" />
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">AI Insight</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">Strong ownership signals. Recommend advancing to final interview.</p>
                </div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 size-20 rounded-full bg-[#08C4F2]/10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 size-24 rounded-full bg-[#893EFB]/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {['TechNova', 'CodeCore', 'DataSight', 'PixelWorks', 'Greenhouse'].map((name) => (
              <span key={name} className="text-base font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Built on trust and substance.</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: FileText, title: 'Experience', desc: 'Where someone has been.', color: 'text-[#472AF8]', bg: 'bg-[#472AF8]/5' },
              { icon: Search, title: 'Evidence', desc: 'What they have actually done.', color: 'text-[#08C4F2]', bg: 'bg-[#08C4F2]/5' },
              { icon: Brain, title: 'Behaviour', desc: 'How they approach work.', color: 'text-[#472AF8]', bg: 'bg-[#472AF8]/5' },
              { icon: BarChart2, title: 'Alignment', desc: 'Role context that matters.', color: 'text-[#472AF8]', bg: 'bg-[#472AF8]/5' },
              { icon: UserCheck, title: 'Human Decision', desc: 'People make the call.', color: 'text-[#08C4F2]', bg: 'bg-[#08C4F2]/5' },
            ].map((p) => (
              <div key={p.title} className={`rounded-xl ${p.bg} p-5 space-y-3 hover:shadow-md transition-all`}>
                <p.icon className={`size-6 ${p.color}`} />
                <h3 className="text-sm font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>A better hiring process.</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Evidence-based from start to finish. For candidates and employers.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Candidates */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-[#08C4F2]">For Candidates</span>
              <h3 className="text-xl font-bold text-navy-900 mt-1 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Stand out on substance.</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Apply & upload your CV', desc: 'We extract experience and skills automatically.' },
                  { step: '02', title: 'Add supporting evidence', desc: 'Link your GitHub, portfolio, or certifications.' },
                  { step: '03', title: 'Complete the AI interview', desc: 'A behavioral assessment tailored to the role.' },
                  { step: '04', title: 'Humans make the decision', desc: 'A real person reviews your profile.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="text-xs font-bold text-[#472AF8] bg-[#472AF8]/5 rounded-md px-2 py-1 shrink-0">{s.step}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900">{s.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => openWaitlist('candidate')} className="w-full mt-6 py-2.5 text-sm font-bold text-[#472AF8] border border-[#472AF8]/20 hover:bg-[#472AF8]/5 rounded-lg transition-all cursor-pointer">
                Join Candidate Waitlist
              </button>
            </div>

            {/* Employers */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-[#472AF8]">For Employers</span>
              <h3 className="text-xl font-bold text-navy-900 mt-1 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Hire with structured evidence.</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Create a job with competencies', desc: 'Define roles. BEXIS generates questions.' },
                  { step: '02', title: 'AI scheduling runs automatically', desc: 'Interviews scheduled 48h after application.' },
                  { step: '03', title: 'Review the Intelligence Profile', desc: 'CV analysis, evidence, and AI insights.' },
                  { step: '04', title: 'Make the decision', desc: 'Shortlist, hold, or reject — with reasoning.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <span className="text-xs font-bold text-[#472AF8] bg-[#472AF8]/5 rounded-md px-2 py-1 shrink-0">{s.step}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-navy-900">{s.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => openWaitlist('employer')} className="w-full mt-6 py-2.5 text-sm font-bold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg transition-all cursor-pointer">
                Join Employer Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BEXIS */}
      <section id="why-bexis" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Hiring is more than a résumé match.
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              CV analysis, work evidence, behavioral assessment, and role alignment — structured evidence for better decisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: 'Explainable AI', desc: 'Every insight comes with evidence. No black-box scores.' },
              { icon: UserCheck, title: 'Human-First', desc: 'AI supports decisions. Humans always make the final call.' },
              { icon: BarChart2, title: 'Behavioral Signals', desc: 'Structured evidence from assessment responses, not guesses.' },
              { icon: Target, title: 'Fair & Transparent', desc: 'No protected-class inferences. Evidence-based only.' },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-[#472AF8]/20 transition-all">
                <div className="size-10 rounded-lg bg-[#472AF8]/5 flex items-center justify-center mb-4">
                  <card.icon className="size-5 text-[#472AF8]" />
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>Open Opportunities</h2>
            <p className="text-slate-500">Find roles that match your experience and career goals.</p>
          </div>

          {/* Filters */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input type="text" placeholder="Job title or keyword..." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#472AF8] focus:ring-[#472AF8]/10 transition-all" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                <input type="text" placeholder="Location" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#472AF8] focus:ring-[#472AF8]/10 transition-all" />
              </div>
              <div className="relative">
                <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 appearance-none focus:outline-none focus:border-[#472AF8] focus:ring-[#472AF8]/10 transition-all cursor-pointer">
                  <option>All Levels</option>
                  <option>Entry Level</option>
                  <option>Junior</option>
                  <option>Mid-Level</option>
                  <option>Senior</option>
                  <option>Lead / Manager</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 appearance-none focus:outline-none focus:border-[#472AF8] focus:ring-[#472AF8]/10 transition-all cursor-pointer">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Remote</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                </div>
                <button className="px-4 py-2.5 bg-[#472AF8] hover:bg-[#3b22d0] text-white font-semibold rounded-lg text-sm transition-all cursor-pointer shadow-sm">Search</button>
              </div>
            </div>
          </div>

          {/* Industry tabs */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-sm font-medium text-slate-500">{filteredJobs.length} {filteredJobs.length === 1 ? 'opportunity' : 'opportunities'} found</p>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((ind) => (
                <button key={ind} onClick={() => setSelectedIndustry(ind)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${selectedIndustry === ind ? 'bg-[#472AF8] text-white shadow-sm' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <div key={job.id} onClick={() => openWaitlist('candidate')} className="bg-white hover:border-[#472AF8]/30 border border-slate-200 rounded-xl p-5 transition-all duration-200 hover:shadow-lg flex flex-col justify-between group cursor-pointer">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-lg ${job.logoBg} font-bold text-xs flex items-center justify-center`}>{job.logo}</div>
                      <div>
                        <h3 className="text-sm font-bold text-navy-900 group-hover:text-[#472AF8] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{job.title}</h3>
                        <p className="text-xs text-slate-500">{job.company}</p>
                      </div>
                    </div>
                    {job.isRemote && <span className="px-2 py-0.5 rounded bg-[#08C4F2]/10 text-[#08C4F2] text-[10px] font-semibold">Remote</span>}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <MapPin className="size-3" />
                    <span>{job.location}</span>
                    <span>·</span>
                    <span>{job.type}</span>
                    <span>·</span>
                    <span className="text-slate-600 font-medium">{job.level}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">{tag}</span>)}
                    {job.extraTagsCount > 0 && <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-medium">+{job.extraTagsCount}</span>}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
                  <span className="text-slate-400 flex items-center gap-1"><Clock className="size-3" />{job.postedAgo}</span>
                  <button onClick={(e) => { e.stopPropagation(); openWaitlist('candidate'); }} className="font-semibold text-[#472AF8] group-hover:text-[#3b22d0] flex items-center gap-1 transition-colors cursor-pointer">
                    Join Waitlist <ArrowRight className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-xl">
              <p className="text-slate-500">No opportunities found matching your criteria.</p>
              <button onClick={() => { setSearchKeyword(''); setSearchLocation(''); setSelectedLevel('All Levels'); setSelectedType('All Types'); setSelectedIndustry('All Industries'); }} className="mt-3 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-all cursor-pointer">Reset Filters</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#472AF8] to-[#321DAE] p-10 sm:p-14 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight relative z-10 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to hire beyond the résumé?
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto leading-relaxed relative z-10 mb-8">
              Get early access to evidence-based hiring. No credit card required.
            </p>
            <div className="relative z-10">
              <button onClick={() => openWaitlist('employer')} className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-[#472AF8] bg-white hover:bg-slate-50 rounded-lg transition-all cursor-pointer">
                Join the Waitlist
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
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
