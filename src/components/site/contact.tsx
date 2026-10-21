'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  ShoppingBag,
  Droplets,
  TreePine,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { COMPANY, OFFICES, CITIES } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';
import { cn } from '@/lib/utils';

type OrderType = 'air-bambu' | 'bambu-batang' | 'grosir' | 'korporat';

const ORDER_TYPES: { value: OrderType; label: string; icon: typeof Droplets }[] = [
  { value: 'air-bambu', label: 'Air Bambu (Retail)', icon: Droplets },
  { value: 'bambu-batang', label: 'Bambu Batang', icon: TreePine },
  { value: 'grosir', label: 'Grosir / Reseller', icon: ShoppingBag },
  { value: 'korporat', label: 'Korporat / Proyek', icon: ShoppingBag },
];

/** Fallback id — label aktif dari t.ui.contact.guarantees */
const GUARANTEES_FALLBACK: { title: string; text: string }[] = [
  { title: 'Balasan < 24 Jam', text: 'Respons cepat tim kami' },
  { title: 'Dokumen Lengkap', text: 'Untuk tender & pengadaan' },
  { title: 'Kemasan Aman', text: 'Standar ekspedisi nasional' },
  { title: 'Garansi Mutu', text: 'Retur bila tidak sesuai' },
];

export function Contact() {
  const { t } = useI18n();
  const s = t.ui.contact;
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>('air-bambu');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const guarantees =
    Array.isArray(s.guarantees) && s.guarantees.length > 0 ? s.guarantees : GUARANTEES_FALLBACK;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({
        title: s.toastIncompleteTitle,
        description: s.toastIncompleteDesc,
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, orderType }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error ?? s.errorFallback);
      setSent(true);
      toast({
        title: s.toastSuccessTitle,
        description: s.toastSuccessDesc,
      });
    } catch (err) {
      toast({
        title: s.toastFailTitle,
        description: (err as Error).message ?? s.toastFailDesc,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="relative overflow-hidden py-24 sm:py-28" aria-label={s.ariaLabel}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 C50 10 30 35 30 50 A20 20 0 0 0 70 50 C70 35 50 10 50 10 Z' fill='none' stroke='%2314532d' stroke-width='2'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Info kontak */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-7 text-emerald-50 shadow-xl shadow-emerald-900/25 sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-white">{s.officeTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/80">
                  {COMPANY.legalName} — {COMPANY.city}, {COMPANY.province}
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.phoneLabel}</p>
                      <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, '')}`} className="mt-0.5 block text-emerald-100/85 transition-colors hover:text-white">
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.emailLabel}</p>
                      <a href={`mailto:${COMPANY.email}`} className="mt-0.5 block text-emerald-100/85 transition-colors hover:text-white">
                        {COMPANY.email}
                      </a>
                      <a href={`mailto:${COMPANY.emailSales}`} className="block text-emerald-100/85 transition-colors hover:text-white">
                        {COMPANY.emailSales}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.addressLabel}</p>
                      <p className="mt-0.5 text-emerald-100/85">{OFFICES[0].address}</p>
                      <p className="mt-1 text-xs text-emerald-100/60">{s.branchesNote}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-teal-200">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.hoursLabel}</p>
                      <p className="mt-0.5 text-emerald-100/85">{COMPANY.operationalHours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Jaminan */}
              <div className="grid grid-cols-2 gap-4">
                {guarantees.map((g: { title: string; text: string }) => (
                  <div key={g.title} className="rounded-2xl border border-emerald-900/10 bg-white/80 p-4 shadow-sm backdrop-blur">
                    <p className="text-sm font-bold text-foreground">{g.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{g.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Formulir */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-xl shadow-emerald-900/10 sm:p-9">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-primary"
                  >
                    <CheckCircle2 className="h-10 w-10" aria-hidden />
                  </motion.span>
                  <h3 className="mt-6 font-serif text-2xl font-bold">{s.sentTitle}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {s.sentThanks} <strong className="text-foreground">{form.name}</strong>.{' '}
                    {s.sentBody}
                  </p>
                  <Button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', phone: '', city: '', message: '' });
                    }}
                    variant="outline"
                    className="mt-8 rounded-full border-primary/40 px-6 font-semibold text-primary hover:bg-primary/10"
                  >
                    {s.sendAnother}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-serif text-2xl font-bold">{s.formTitle}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.formSubtitle}</p>

                  <fieldset className="mt-6">
                    <legend className="mb-2.5 text-sm font-semibold text-foreground">
                      {s.orderLegend} <span className="text-destructive">*</span>
                    </legend>
                    <div className="grid grid-cols-2 gap-2.5">
                      {ORDER_TYPES.map((ot, i) => (
                        <button
                          key={ot.value}
                          type="button"
                          onClick={() => setOrderType(ot.value)}
                          aria-pressed={orderType === ot.value}
                          className={cn(
                            'flex items-center gap-2.5 rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all duration-300',
                            orderType === ot.value
                              ? 'border-primary bg-primary/10 text-primary shadow-sm'
                              : 'border-emerald-900/10 bg-white text-foreground/70 hover:border-primary/40'
                          )}
                        >
                          <ot.icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
                          {s.orderTypeLabels?.[i] ?? ot.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {s.nameLabel} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={s.namePlaceholder}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        {s.phoneLabel} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        placeholder={s.phonePlaceholder}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{s.emailLabel}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={s.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">{s.cityLabel}</Label>
                      <Select value={form.city} onValueChange={(v) => setForm({ ...form, city: v })}>
                        <SelectTrigger id="city" className="h-12 w-full rounded-xl">
                          <SelectValue placeholder={s.cityPlaceholder} />
                        </SelectTrigger>
                        <SelectContent className="max-h-64">
                          {CITIES.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                          <SelectItem value="lainnya">{s.cityOther}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="message">
                        {s.messageLabel} <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder={s.messagePlaceholder}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="resize-none rounded-xl"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="mt-7 h-14 w-full rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-base font-bold shadow-lg shadow-emerald-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        {s.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" aria-hidden />
                        {s.submitCta}
                      </>
                    )}
                  </Button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">{s.submitNote}</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
