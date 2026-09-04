'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
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
  const [role, setRole] = useState<'candidate' | 'employer'>(defaultRole);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => { setEmail(''); setName(''); setRole(defaultRole); setSubmitted(false); }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-white p-0 gap-0 overflow-hidden rounded-xl shadow-2xl">
        {!submitted ? (
          <>
            <div className="p-6 pb-0">
              <DialogHeader className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Sparkles className="size-4 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Early Access</span>
                </div>
                <DialogTitle className="text-xl font-bold text-navy-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Join the Bexis Waitlist
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-500 leading-relaxed">
                  Be among the first to experience AI-powered hiring that goes beyond the résumé.
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
                <Label htmlFor="waitlist-name" className="text-slate-600 text-xs font-medium">Name (optional)</Label>
                <Input id="waitlist-name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="h-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-500/20 rounded-lg" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="waitlist-email" className="text-slate-600 text-xs font-medium">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input id="waitlist-email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-400 focus-visible:ring-blue-500/20 rounded-lg" />
              </div>

              <button type="submit" disabled={submitting || !email.trim()} className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2">
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
              Thanks{name ? `, ${name}` : ''}! We&apos;ll reach out to <span className="text-blue-600 font-medium">{email}</span> when it&apos;s your turn.
            </p>
            <button onClick={handleClose} className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-lg transition-all cursor-pointer">Close</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
