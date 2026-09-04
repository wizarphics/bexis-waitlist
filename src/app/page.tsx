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
  Layers,
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
  description: string;
}

const JOBS_DATA: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Product Manager',
    company: 'TechNova',
    logo: 'TN',
    logoBg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    isRemote: true,
    location: 'London, UK',
    type: 'Full-time',
    level: 'Senior',
    industry: 'Technology',
    tags: ['Product Strategy', 'Agile', 'Roadmapping', 'Stakeholder Management'],
    extraTagsCount: 1,
    postedAgo: '20d ago',
    description:
      'Drive product vision and execution for high-impact initiatives. Collaborate closely with engineering and design teams to deliver exceptional user experiences.',
  },
  {
    id: 'job-2',
    title: 'Backend Engineer',
    company: 'CodeCore',
    logo: 'CC',
    logoBg: 'bg-blue-100 text-blue-700 border-blue-200',
    isRemote: true,
    location: 'Berlin, Germany',
    type: 'Full-time',
    level: 'Mid-Level',
    industry: 'Technology',
    tags: ['Python', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    extraTagsCount: 1,
    postedAgo: '18d ago',
    description:
      'Design, build, and maintain scalable backend services and APIs. Work with distributed systems and microservices architecture.',
  },
  {
    id: 'job-3',
    title: 'Data Analyst',
    company: 'DataSight',
    logo: 'DS',
    logoBg: 'bg-purple-100 text-purple-700 border-purple-200',
    isRemote: false,
    location: 'New York, USA',
    type: 'Full-time',
    level: 'Junior',
    industry: 'Data & Analytics',
    tags: ['SQL', 'Python', 'Tableau', 'Excel'],
    extraTagsCount: 1,
    postedAgo: '19d ago',
    description:
      'Turn complex data sets into actionable business insights. Build dashboards and present data-driven recommendations to leadership.',
  },
  {
    id: 'job-4',
    title: 'UI/UX Designer',
    company: 'PixelWorks',
    logo: 'PW',
    logoBg: 'bg-pink-100 text-pink-700 border-pink-200',
    isRemote: true,
    location: 'Amsterdam, Netherlands',
    type: 'Contract',
    level: 'Mid-Level',
    industry: 'Design',
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    extraTagsCount: 1,
    postedAgo: '22d ago',
    description:
      'Create intuitive, engaging user interfaces and experiences for web and mobile platforms. Conduct user research and maintain design systems.',
  },
  {
    id: 'job-5',
    title: 'Software Engineer',
    company: 'TechNova',
    logo: 'TN',
    logoBg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    isRemote: true,
    location: 'Remote',
    type: 'Full-time',
    level: 'Entry Level',
    industry: 'Technology',
    tags: ['TypeScript', 'React', 'Node.js', 'Git'],
    extraTagsCount: 1,
    postedAgo: '17d ago',
    description:
      'Develop modern frontend and full-stack web applications. Learn and grow within a supportive, fast-paced engineering team.',
  },
  {
    id: 'job-6',
    title: 'Head of Data Science',
    company: 'DataSight',
    logo: 'DS',
    logoBg: 'bg-purple-100 text-purple-700 border-purple-200',
    isRemote: false,
    location: 'New York, USA',
    type: 'Full-time',
    level: 'Lead / Manager',
    industry: 'Data & Analytics',
    tags: ['Machine Learning', 'Python', 'Team Leadership', 'MLOps'],
    extraTagsCount: 1,
    postedAgo: '23d ago',
    description:
      'Lead the data science organization in building state-of-the-art machine learning models and predictive analytics infrastructure.',
  },
];

const INDUSTRIES = [
  'All Industries',
  'Technology',
  'Data & Analytics',
  'Design',
  'Finance',
  'Healthcare',
];

export default function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [activeHeroTab, setActiveHeroTab] = useState<'intelligence' | 'ai'>('intelligence');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<'candidate' | 'employer'>('candidate');

  const filteredJobs = useMemo(() => {
    return JOBS_DATA.filter((job) => {
      if (
        searchKeyword.trim() &&
        !job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        !job.company.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        !job.tags.some((t) => t.toLowerCase().includes(searchKeyword.toLowerCase()))
      ) {
        return false;
      }

      if (
        searchLocation.trim() &&
        !job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
        !(job.isRemote && 'remote'.includes(searchLocation.toLowerCase()))
      ) {
        return false;
      }

      if (selectedLevel !== 'All Levels' && job.level !== selectedLevel) {
        return false;
      }

      if (selectedType !== 'All Types' && job.type !== selectedType) {
        return false;
      }

      if (selectedIndustry !== 'All Industries' && job.industry !== selectedIndustry) {
        return false;
      }

      return true;
    });
  }, [searchKeyword, searchLocation, selectedLevel, selectedType, selectedIndustry]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWaitlist = (role: 'candidate' | 'employer' = 'candidate') => {
    setWaitlistRole(role);
    setWaitlistOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-900">
      {/* Background Subtle Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[140px]" />
        <div className="absolute top-[800px] right-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-emerald-200/20 rounded-full blur-[160px]" />
      </div>

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200/80 bg-[#f8fafc]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative size-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <Image
                  src="/BEXIS LOGO.PNG"
                  alt="BEXIS"
                  width={22}
                  height={22}
                  className="rounded-md"
                />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1">
                Bexis
                <span className="text-cyan-600 font-normal text-sm sm:inline hidden">
                  — Beyond the résumé.
                </span>
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('jobs')}
              className="hover:text-cyan-600 transition-colors cursor-pointer"
            >
              Find Jobs
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-cyan-600 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('why-bexis')}
              className="hover:text-cyan-600 transition-colors cursor-pointer"
            >
              For Employers
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="hover:text-cyan-600 transition-colors cursor-pointer"
            >
              Resources
            </button>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => openWaitlist('candidate')}
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="size-3.5 text-cyan-600 animate-pulse" />
              <span>AI-Powered Behavioral Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              See Beyond <br />
              <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                the Résumé.
              </span>
            </h1>

            <div className="space-y-3 text-slate-600 text-lg leading-relaxed max-w-xl">
              <p>
                BEXIS helps organizations understand candidates through experience, evidence,
                behavioral intelligence and role alignment.
              </p>
              <p className="text-sm sm:text-base text-cyan-700 font-medium">
                AI provides insight. Evidence provides context. Humans make decisions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('jobs')}
                className="px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <span>Explore Jobs</span>
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => openWaitlist('employer')}
                className="px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Build Your Hiring Process
              </button>
            </div>
          </div>

          {/* Right Column: Hero Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xl shadow-cyan-200/40 backdrop-blur-xl">
              {/* Card Header & Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Candidate Intelligence
                  </span>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs">
                  <button
                    onClick={() => setActiveHeroTab('intelligence')}
                    className={`px-3 py-1 rounded-md transition-all font-medium cursor-pointer ${
                      activeHeroTab === 'intelligence'
                        ? 'bg-cyan-500 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    Candidate Intelligence
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('ai')}
                    className={`px-3 py-1 rounded-md transition-all font-medium cursor-pointer ${
                      activeHeroTab === 'ai'
                        ? 'bg-cyan-500 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    AI Analysis
                  </button>
                </div>
              </div>

              {/* Candidate Info Badge */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl p-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-lg flex items-center justify-center shadow-md">
                    JD
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">Jane Doe</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Senior Product Manager</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>Strong Match</span>
                </div>
              </div>

              {/* Competency Scores */}
              <div className="space-y-3.5 mb-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600">Ownership</span>
                    <span className="text-cyan-600">90%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600">Collaboration</span>
                    <span className="text-cyan-600">85%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600">Problem Solving</span>
                    <span className="text-cyan-600">88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: '88%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Process Tracker */}
              <div className="grid grid-cols-5 gap-1.5 text-center mb-6 py-3 px-2 rounded-xl bg-slate-100 border border-slate-200">
                <div className="flex flex-col items-center">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 text-xs font-bold flex items-center justify-center mb-1">
                    ✓
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">Apply</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 text-xs font-bold flex items-center justify-center mb-1">
                    ✓
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">CV Review</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 text-xs font-bold flex items-center justify-center mb-1">
                    ✓
                  </div>
                  <span className="text-[10px] font-medium text-slate-600">AI Interview</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-6 rounded-full bg-cyan-100 text-cyan-600 border border-cyan-200 text-xs font-bold flex items-center justify-center mb-1">
                    4
                  </div>
                  <span className="text-[10px] font-medium text-cyan-600 font-semibold">
                    Evidence
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="size-6 rounded-full bg-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center mb-1">
                    5
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">Decision</span>
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-3.5 text-xs">
                <div className="font-semibold text-amber-700 mb-1 flex items-center gap-1.5">
                  <span>AI Insight</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Strong evidence of ownership and problem-solving. Leadership experience requires
                  human review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section id="principles" className="relative z-10 border-y border-slate-200 bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl space-y-2 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Core Principles
            </div>
            <h2 className="text-3xl font-bold text-white">Built on trust and substance.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: FileText, title: 'Experience', desc: 'CV tells us where someone has been.', color: 'text-blue-400' },
              { icon: Search, title: 'Evidence', desc: 'Work shows what they have actually done.', color: 'text-cyan-400' },
              { icon: Brain, title: 'Behaviour', desc: 'Assessment reveals how they approach situations.', color: 'text-purple-400' },
              { icon: BarChart2, title: 'Alignment', desc: 'Role context makes evidence meaningful.', color: 'text-emerald-400' },
              { icon: UserCheck, title: 'Human Decision', desc: 'People always make the final call.', color: 'text-amber-400' },
            ].map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="space-y-3 rounded-2xl border border-slate-700/60 bg-slate-800/60 p-5 transition-all hover:-translate-y-1 hover:border-slate-600"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">
                    <Icon className={`size-5 ${principle.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-white">{principle.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPEN OPPORTUNITIES (FIND JOBS) SECTION */}
      <section id="jobs" className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Open Opportunities
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Find roles that match your experience and career goals.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-lg mb-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Job title, keyword, or skill..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10 transition-all"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10 transition-all"
              />
            </div>

            <div className="relative">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 appearance-none focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10 transition-all cursor-pointer"
              >
                <option value="All Levels">All Levels</option>
                <option value="Internship">Internship</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Junior">Junior</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Senior">Senior</option>
                <option value="Lead / Manager">Lead / Manager</option>
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="flex gap-2">
              <div className="relative flex-1">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 appearance-none focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/10 transition-all cursor-pointer"
                >
                  <option value="All Types">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
              </div>
              <button
                onClick={() => {}}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl text-sm transition-all cursor-pointer shrink-0 shadow-sm"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Header Summary & Category Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-sm font-semibold text-slate-500">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'opportunity' : 'opportunities'}{' '}
            found
          </p>

          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => openWaitlist('candidate')}
              className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-300 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-100/50 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-11 rounded-xl ${job.logoBg} border font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{job.company}</p>
                    </div>
                  </div>
                  {job.isRemote && (
                    <span className="px-2.5 py-1 rounded-md bg-cyan-50 border border-cyan-200 text-cyan-700 text-[11px] font-semibold">
                      Remote
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 flex-wrap">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-slate-400" />
                    {job.location}
                  </span>
                  <span>·</span>
                  <span>{job.type}</span>
                  <span>·</span>
                  <span className="text-slate-700 font-medium">{job.level}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {job.extraTagsCount > 0 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-400 text-[11px] font-medium">
                      +{job.extraTagsCount}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                <span className="text-slate-400 font-medium flex items-center gap-1">
                  <Clock className="size-3" />
                  {job.postedAgo}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWaitlist('candidate');
                  }}
                  className="font-semibold text-cyan-600 group-hover:text-cyan-500 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Join Waitlist</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
            <p className="text-slate-500 text-base">
              No opportunities found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchKeyword('');
                setSearchLocation('');
                setSelectedLevel('All Levels');
                setSelectedType('All Types');
                setSelectedIndustry('All Industries');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="relative z-10 py-20 bg-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A better hiring process. For everyone.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              BEXIS structures the hiring process around evidence — not gut feel — giving
              candidates a fair shot and giving employers the context to make better decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Candidates */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    For Candidates
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Stand out on substance.</h3>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      num: '1',
                      title: 'Apply & upload your CV',
                      desc: 'BEXIS reads your CV and extracts your experience, skills, projects, and achievements automatically.',
                    },
                    {
                      num: '2',
                      title: 'Add supporting evidence',
                      desc: 'Link your GitHub, portfolio, or certifications to back up the claims in your CV. Evidence is optional but strengthens your application.',
                    },
                    {
                      num: '3',
                      title: 'Complete the AI behavioral interview',
                      desc: '48 hours after applying, you receive a behavioral assessment tailored to the specific role. No trick questions — just your real experience.',
                    },
                    {
                      num: '4',
                      title: 'Your profile is structured for review',
                      desc: 'BEXIS organises your evidence and assessment responses into a clear profile for the hiring team.',
                    },
                    {
                      num: '5',
                      title: 'Humans make the decision',
                      desc: 'A real person reviews your profile and makes the hiring call. BEXIS provides evidence — not verdicts.',
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4">
                      <div className="size-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openWaitlist('candidate')}
                className="w-full py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-cyan-400 font-semibold text-sm rounded-xl transition-all cursor-pointer text-center"
              >
                Join Candidate Waitlist
              </button>
            </div>

            {/* For Employers */}
            <div
              id="employers"
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    For Employers
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Hire with structured evidence.
                  </h3>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      num: '1',
                      title: 'Set up your company profile',
                      desc: 'Add your mission, values, and hiring philosophy. BEXIS uses this context to personalise every assessment.',
                    },
                    {
                      num: '2',
                      title: 'Create a job with competencies',
                      desc: 'Define the role, responsibilities, and behavioral competencies that matter. BEXIS generates tailored assessment questions automatically.',
                    },
                    {
                      num: '3',
                      title: 'AI scheduling runs automatically',
                      desc: 'When a candidate applies, BEXIS schedules their behavioral interview 48 hours later. No manual coordination required.',
                    },
                    {
                      num: '4',
                      title: 'Review the Candidate Intelligence Profile',
                      desc: 'Each candidate gets a structured profile: CV analysis, evidence review, behavioral signals, role alignment, and explainable AI insights.',
                    },
                    {
                      num: '5',
                      title: 'Make the decision',
                      desc: 'Shortlist, hold, or reject — with clear reasoning on record. BEXIS supports the decision; your team owns it.',
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4">
                      <div className="size-7 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openWaitlist('employer')}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-cyan-500/20 text-center cursor-pointer"
              >
                Join Employer Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BEXIS SECTION */}
      <section id="why-bexis" className="relative z-10 py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                Why BEXIS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hiring is more than a résumé match.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                BEXIS combines CV analysis, work evidence, behavioral assessment, and role
                alignment — giving hiring teams structured evidence to support better decisions.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'CV tells us where someone has been.',
                  'Evidence helps show what they have done.',
                  'Behavioral assessment reveals how they approach situations.',
                  'Role alignment provides relevant context.',
                  'Humans make the final decision.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <Check className="size-4 text-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-cyan-300 hover:shadow-lg transition-all">
                <div className="size-10 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Explainable AI</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every insight comes with evidence — no black-box scores.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-cyan-300 hover:shadow-lg transition-all">
                <div className="size-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                  <UserCheck className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Human-First</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  AI supports decisions. Humans always make the final call.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-cyan-300 hover:shadow-lg transition-all">
                <div className="size-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                  <BarChart2 className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Behavioral Signals</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Structured evidence from assessment responses, not guesses.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 hover:border-cyan-300 hover:shadow-lg transition-all">
                <div className="size-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <Layers className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Fair & Transparent</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No protected-class inferences. Evidence-based only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 p-8 sm:p-12 text-center space-y-6 overflow-hidden shadow-2xl shadow-cyan-500/30">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-[500px] h-[300px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight relative z-10">
            Ready to hire beyond the résumé?
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed relative z-10">
            Set up your company account, define your hiring needs, and let BEXIS build a structured,
            evidence-based hiring process in minutes.
          </p>

          <div className="pt-2 relative z-10">
            <button
              onClick={() => openWaitlist('employer')}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-cyan-600 bg-white hover:bg-slate-50 rounded-xl shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="size-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                <Image
                  src="/BEXIS LOGO.PNG"
                  alt="BEXIS"
                  width={16}
                  height={16}
                  className="rounded-md"
                />
              </div>
            </div>
            <span className="text-sm font-bold text-slate-900">Bexis — Beyond the résumé.</span>
          </button>

          <p className="text-xs text-slate-400">
            © 2026 Bexis. AI provides insight. Evidence provides context. Humans make decisions.
          </p>
        </div>
      </footer>

      {/* WAITLIST MODAL */}
      <WaitlistModal
        open={waitlistOpen}
        onOpenChange={setWaitlistOpen}
        defaultRole={waitlistRole}
      />
    </div>
  );
}
