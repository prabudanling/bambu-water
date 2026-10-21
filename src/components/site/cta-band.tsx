'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { waLink, COMPANY } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';

/**
 * Banner CTA di bagian bawah halaman — WhatsApp + formulir.
 */
export function CtaBand({
  title: titleProp,
  description: descriptionProp,
  waMessage,
}: {
  title?: string;
  description?: string;
  waMessage?: string;
}) {
  const { t } = useI18n();
  const s = t.ui.cta;
  const title = titleProp ?? s.title;
  const description = descriptionProp ?? s.description;

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-16" aria-label={s.ariaLabel}>
      <div aria-hidden className="animate-soft-pulse absolute -left-16 top-0 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />
      <div aria-hidden className="animate-soft-pulse absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl font-bold text-white sm:text-3xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-emerald-100/75 sm:text-base"
          >
            {description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden />
            {s.legal} • {COMPANY.whatsappDisplay}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row"
        >
          <Button asChild size="lg" className="rounded-full bg-emerald-500 px-7 text-white shadow-xl shadow-emerald-900/40 hover:bg-emerald-400">
            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer external" className="gap-2">
              <MessageCircle className="h-5 w-5" aria-hidden />
              {s.chatCta}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 px-7 text-white hover:bg-white/10 hover:text-white">
            <a href="#/kontak" className="gap-2">
              {s.formCta}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
