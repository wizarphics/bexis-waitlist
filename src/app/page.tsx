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
      <section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#472AF8]/5 border border-[#472AF8]/15 text-[#472AF8] text-xs font-semibold tracking-wide mb-8">
              <Sparkles className="size-3.5" />
              <span>AI-Powered Behavioral Intelligence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy-900 leading-[1.05] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              See Beyond
              <br />
              <span className="text-[#472AF8]">the Résumé.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
              Hiring decisions backed by evidence, not guesswork.
              Understand candidates through experience, behavioral intelligence,
              and real role alignment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button onClick={() => scrollTo('jobs')} className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#472AF8] hover:bg-[#3b22d0] rounded-lg shadow-lg shadow-[#472AF8]/25 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2">
                Explore Opportunities
                <ArrowRight className="size-4" />
              </button>
              <button onClick={() => openWaitlist('employer')} className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg transition-all cursor-pointer">
                For Employers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#08C4F2]">Core Principles</div>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>Built on trust and substance.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: FileText, title: 'Experience', desc: 'CV tells us where someone has been.', color: 'text-[#472AF8]' },
              { icon: Search, title: 'Evidence', desc: 'Work shows what they have actually done.', color: 'text-[#08C4F2]' },
              { icon: Brain, title: 'Behaviour', desc: 'Assessment reveals how they approach work.', color: 'text-[#472AF8]' },
              { icon: BarChart2, title: 'Alignment', desc: 'Role context makes evidence meaningful.', color: 'text-emerald-400' },
              { icon: UserCheck, title: 'Human Decision', desc: 'People always make the final call.', color: 'text-amber-400' },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3 hover:bg-white/10 transition-colors">
                <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <p.icon className={`size-5 ${p.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Open Opportunities</h2>
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
                <option>Internship</option>
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
            <div key={job.id} onClick={() => openWaitlist('candidate')} className="bg-white hover:border-purple-200 border border-slate-200 rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:shadow-slate-200/50 flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-lg ${job.logoBg} font-bold text-xs flex items-center justify-center`}>{job.logo}</div>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900 group-hover:text-[#472AF8] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{job.title}</h3>
                      <p className="text-xs text-slate-500">{job.company}</p>
                    </div>
                  </div>
                  {job.isRemote && <span className="px-2 py-0.5 rounded bg-cyan-50 border border-cyan-200 text-[#08C4F2] text-[10px] font-semibold">Remote</span>}
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
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#08C4F2]">How It Works</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>A better hiring process. For everyone.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">BEXIS structures the hiring process around evidence — not gut feel — giving candidates a fair shot and employers better context.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {[
              {
                label: 'For Candidates',
                labelColor: 'text-[#08C4F2]',
                title: 'Stand out on substance.',
                steps: [
                  { title: 'Apply & upload your CV', desc: 'BEXIS reads your CV and extracts experience, skills, and achievements automatically.' },
                  { title: 'Add supporting evidence', desc: 'Link your GitHub, portfolio, or certifications to back up your claims.' },
                  { title: 'Complete the AI behavioral interview', desc: '48 hours after applying, receive a behavioral assessment tailored to the role.' },
                  { title: 'Your profile is structured for review', desc: 'Evidence and assessment responses are organized into a clear profile.' },
                  { title: 'Humans make the decision', desc: 'A real person reviews your profile. BEXIS provides evidence — not verdicts.' },
                ],
                cta: 'Join Candidate Waitlist',
                ctaStyle: 'bg-white/10 hover:bg-white/20 border border-white/10 text-white',
                role: 'candidate' as const,
              },
              {
                label: 'For Employers',
                labelColor: 'text-[#472AF8]',
                title: 'Hire with structured evidence.',
                steps: [
                  { title: 'Set up your company profile', desc: 'Add your mission, values, and hiring philosophy to personalize assessments.' },
                  { title: 'Create a job with competencies', desc: 'Define roles and behavioral competencies. BEXIS generates questions automatically.' },
                  { title: 'AI scheduling runs automatically', desc: 'Behavioral interviews are scheduled 48 hours after application. No coordination needed.' },
                  { title: 'Review the Intelligence Profile', desc: 'Each candidate gets a structured profile with CV analysis, evidence, and AI insights.' },
                  { title: 'Make the decision', desc: 'Shortlist, hold, or reject — with clear reasoning on record.' },
                ],
                cta: 'Join Employer Waitlist',
                ctaStyle: 'bg-[#472AF8] hover:bg-[#3b22d0] text-white',
                role: 'employer' as const,
              },
            ].map((col) => (
              <div key={col.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${col.labelColor}`}>{col.label}</span>
                    <h3 className="text-xl font-bold text-white mt-1" style={{ fontFamily: 'var(--font-display)' }}>{col.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {col.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="size-6 rounded-md bg-white/10 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 text-slate-300">{i + 1}</div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => openWaitlist(col.role)} className={`w-full py-2.5 font-semibold text-sm rounded-lg transition-all cursor-pointer ${col.ctaStyle}`}>
                  {col.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BEXIS */}
      <section id="why-bexis" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                { icon: ShieldCheck, title: 'Explainable AI', desc: 'Every insight comes with evidence — no black-box scores.', color: 'bg-purple-50 text-[#472AF8] border-purple-100' },
                { icon: UserCheck, title: 'Human-First', desc: 'AI supports decisions. Humans always make the final call.', color: 'bg-cyan-50 text-[#08C4F2] border-cyan-100' },
                { icon: BarChart2, title: 'Behavioral Signals', desc: 'Structured evidence from assessment responses, not guesses.', color: 'bg-purple-50 text-[#472AF8] border-purple-100' },
                { icon: Target, title: 'Fair & Transparent', desc: 'No protected-class inferences. Evidence-based only.', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-slate-200 p-5 space-y-3 hover:border-purple-200 hover:shadow-md transition-all">
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
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
