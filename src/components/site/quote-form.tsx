'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, ShoppingBag, Droplets, TreePine, Building2 } from 'lucide-react';
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
import { COMPANY } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { cn } from '@/lib/utils';

type OrderType = 'air-bambu' | 'bambu-batang' | 'grosir' | 'korporat';

const ORDER_TYPES: { value: OrderType; label: string; icon: typeof Droplets }[] = [
  { value: 'air-bambu', label: 'Air Bambu (Retail)', icon: Droplets },
  { value: 'bambu-batang', label: 'Bambu Batang', icon: TreePine },
  { value: 'grosir', label: 'Grosir / Reseller', icon: ShoppingBag },
  { value: 'korporat', label: 'Korporat / Proyek', icon: Building2 },
];

/**
 * Formulir pemesanan/konsultasi — dipakai di halaman Kontak & Cara Pemesanan.
 * Data tersimpan via POST /api/contact (Prisma) + CTA WhatsApp.
 */
export function QuoteForm({ className }: { className?: string }) {
  const { t } = useI18n();
  const s = t.ui.quoteForm;
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [orderType, setOrderType] = useState<OrderType>('air-bambu');
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });

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
        description: err instanceof Error ? err.message : s.toastFailDesc,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    const otIndex = ORDER_TYPES.findIndex((o) => o.value === orderType);
    const otLabel = s.orderTypeLabels?.[otIndex] ?? ORDER_TYPES[otIndex]?.label ?? '';
    const waText = s.waMessage.split('{name}').join(form.name).split('{type}').join(otLabel);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('flex flex-col items-center rounded-3xl border border-primary/15 bg-card p-10 text-center shadow-xl shadow-emerald-900/5', className)}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-primary">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">
          {s.sentTitle}, {form.name.split(' ')[0]}! 🌿
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.sentBody}</p>
        <Button asChild className="mt-6 rounded-full bg-emerald-600 hover:bg-emerald-700">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noopener noreferrer external"
          >
            {s.waConfirmCta}
          </a>
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-5 rounded-3xl border border-primary/15 bg-card p-6 shadow-xl shadow-emerald-900/5 sm:p-8', className)}
      aria-label={s.ariaLabel}
    >
      <div>
        <h3 className="font-serif text-xl font-bold text-foreground">{s.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{s.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qf-nama">{s.nameLabel} *</Label>
          <Input
            id="qf-nama"
            placeholder={s.namePlaceholder}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            maxLength={120}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-wa">{s.phoneLabel} *</Label>
          <Input
            id="qf-wa"
            type="tel"
            inputMode="tel"
            placeholder={s.phonePlaceholder}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            maxLength={30}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="qf-email">{s.emailLabel}</Label>
          <Input
            id="qf-email"
            type="email"
            placeholder={s.emailPlaceholder}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={200}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qf-kota">{s.cityLabel}</Label>
          <Input
            id="qf-kota"
            placeholder={s.cityPlaceholder}
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            maxLength={80}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>{s.needTypeLabel}</Label>
        <div className="grid grid-cols-2 gap-2">
          {ORDER_TYPES.map((ot, i) => (
            <button
              key={ot.value}
              type="button"
              onClick={() => setOrderType(ot.value)}
              aria-pressed={orderType === ot.value}
              className={cn(
                'flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all duration-300',
                orderType === ot.value
                  ? 'border-primary bg-primary/10 text-primary shadow-sm'
                  : 'border-border text-foreground/70 hover:border-primary/40 hover:bg-primary/5'
              )}
            >
              <ot.icon className="h-4 w-4 shrink-0" aria-hidden />
              {s.orderTypeLabels?.[i] ?? ot.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="qf-pesan">{s.messageLabel} *</Label>
        <Textarea
          id="qf-pesan"
          placeholder={s.messagePlaceholder}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          required
          maxLength={2000}
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-primary py-6 text-base font-semibold shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
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
      <p className="text-center text-xs text-muted-foreground">{s.privacyNote}</p>
    </form>
  );
}
