'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after close animation
    setTimeout(() => {
      setEmail('');
      setName('');
      setRole(defaultRole);
      setSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-[#0f172a] border border-slate-800 text-white p-0 gap-0 overflow-hidden">
        {!submitted ? (
          <>
            <div className="p-6 pb-0">
              <DialogHeader className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Sparkles className="size-4 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                    Early Access
                  </span>
                </div>
                <DialogTitle className="text-xl font-bold text-white">
                  Join the Bexis Waitlist
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-400 leading-relaxed">
                  Be among the first to experience AI-powered hiring that goes beyond the résumé.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Role Toggle */}
              <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setRole('candidate')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    role === 'candidate'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  I&apos;m looking for a job
                </button>
                <button
                  type="button"
                  onClick={() => setRole('employer')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    role === 'employer'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  I&apos;m hiring
                </button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waitlist-name" className="text-slate-300 text-xs font-medium">
                  Name (optional)
                </Label>
                <Input
                  id="waitlist-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/20 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="waitlist-email" className="text-slate-300 text-xs font-medium">
                  Email <span className="text-cyan-400">*</span>
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus-visible:border-cyan-500 focus-visible:ring-cyan-500/20 rounded-xl"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || !email.trim()}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Joining...</span>
                  </>
                ) : (
                  <span>Join Waitlist</span>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                No spam. Unsubscribe anytime. We&apos;ll notify you when we launch.
              </p>
            </form>
          </>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto size-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 className="size-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">You&apos;re on the list!</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
              Thanks{name ? `, ${name}` : ''}! We&apos;ll reach out to{' '}
              <span className="text-cyan-400 font-medium">{email}</span> when it&apos;s your turn.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
