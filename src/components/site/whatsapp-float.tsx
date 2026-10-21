'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { COMPANY } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

export function WhatsAppFloat() {
  const { t } = useI18n();
  const s = t.ui.float;
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(s.waMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="max-w-[260px] rounded-2xl rounded-br-sm border border-emerald-900/10 bg-white p-4 shadow-xl"
            role="status"
          >
            <p className="text-sm font-semibold text-foreground">{s.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer external"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {s.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/30"
        aria-label={open ? s.close : s.open}
        aria-expanded={open}
      >
        <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" aria-hidden />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative">
              <MessageCircle className="h-6.5 w-6.5" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
