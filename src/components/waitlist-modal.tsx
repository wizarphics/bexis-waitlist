'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type WaitlistModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: 'candidate' | 'employer';
};

export function WaitlistModal({ open, onOpenChange, defaultRole = 'candidate' }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState<'candidate' | 'employer'>(defaultRole);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;
    if (role === 'employer' && !company.trim()) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/v1/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          type: role === 'employer' ? 'employer' : 'candidate',
          name: name.trim(),
          email: email.trim(),
          ...(role === 'employer' && company.trim() ? { company: company.trim() } : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.message || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => { setEmail(''); setName(''); setCompany(''); setRole(defaultRole); setSubmitted(false); setError(''); }, 300);
  };

  const isEmployer = role === 'employer';

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white p-0 gap-0 overflow-hidden rounded-xl shadow-2xl">
        {!submitted ? (
          <>
            <div className="p-6 pb-0">
              <DialogHeader className="text-left">
                <div className="flex items-center gap-0 mb-2">
                  <Image src="/bexis-icon.png" alt="" width={28} height={28} className="shrink-0" />
                  <span className="text-sm font-black tracking-tight text-slate-900" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                    Bex<span style={{ background: 'linear-gradient(90deg, #3b82f6, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>i</span>s
                  </span>
                </div>
                <DialogTitle className="text-xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Join the Bexis Waitlist
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-500 leading-relaxed">
                  Be among the first to experience hiring that goes beyond the résumé.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button type="button" onClick={() => setRole('candidate')} className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all cursor-pointer ${role === 'candidate' ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                  I&apos;m looking for a job
                </button>
                <button type="button" onClick={() => setRole('employer')} className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all cursor-pointer ${role === 'employer' ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                  I&apos;m hiring
                </button>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="waitlist-name" className="text-slate-600 text-xs font-medium">Name <span className="text-red-500">*</span></Label>
                <Input id="waitlist-name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className="h-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#472AF8] focus-visible:ring-[#472AF8]/20 rounded-lg" />
              </div>

              {isEmployer && (
                <div className="space-y-1.5">
                  <Label htmlFor="waitlist-company" className="text-slate-600 text-xs font-medium">Company <span className="text-red-500">*</span></Label>
                  <Input id="waitlist-company" type="text" placeholder="Company name" value={company} onChange={(e) => setCompany(e.target.value)} required className="h-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#472AF8] focus-visible:ring-[#472AF8]/20 rounded-lg" />
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="waitlist-email" className="text-slate-600 text-xs font-medium">
                  Work email <span className="text-red-500">*</span>
                </Label>
                <Input id="waitlist-email" type="email" placeholder={isEmployer ? 'you@company.com' : 'you@email.com'} value={email} onChange={(e) => setEmail(e.target.value)} required className="h-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-[#472AF8] focus-visible:ring-[#472AF8]/20 rounded-lg" />
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <button type="submit" disabled={submitting || !email.trim() || !name.trim() || (isEmployer && !company.trim())} className="w-full py-2.5 bg-[#472AF8] hover:bg-[#3b22d0] text-white font-semibold text-sm rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2">
                {submitting ? (<><Loader2 className="size-4 animate-spin" /><span>Joining...</span></>) : <span>Join Waitlist</span>}
              </button>

              <p className="text-[11px] text-slate-400 text-center">No spam. Unsubscribe anytime. We&apos;ll notify you when we launch.</p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto size-14 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="size-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>You&apos;re on the list!</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              Thanks{name ? `, ${name}` : ''}! We&apos;ll reach out to <span className="text-[#472AF8] font-medium">{email}</span> when it&apos;s your turn.
            </p>
            <button onClick={handleClose} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-all cursor-pointer">Close</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
