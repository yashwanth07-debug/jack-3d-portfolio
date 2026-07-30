import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        service: '3D Modeling',
        message: '',
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight bg-linear-to-b from-[#646973] to-[#BBCCD7] bg-clip-text text-transparent">
                    Let&apos;s Create Something
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 mt-1 uppercase tracking-wide">
                    Share your vision and let&apos;s build together.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jack Peterson"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-hidden focus:border-[#B600A8]/80 transition-colors placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jack@example.com"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-hidden focus:border-[#B600A8]/80 transition-colors placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1.5 font-medium">
                      Project Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl bg-[#121212] border border-white/10 px-4 py-3 text-sm focus:outline-hidden focus:border-[#B600A8]/80 transition-colors"
                    >
                      <option value="3D Modeling">3D Modeling</option>
                      <option value="Rendering">Rendering</option>
                      <option value="Motion Design">Motion Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Web Design">Web Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D7E2EA]/50 mb-1.5 font-medium">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, deadline, or requirements..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-hidden focus:border-[#B600A8]/80 transition-colors resize-none placeholder:text-white/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] py-3.5 text-sm uppercase tracking-widest font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-500">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">Message Received!</h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm">
                  Thank you for reaching out. Jack will review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full border border-white/10 text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
