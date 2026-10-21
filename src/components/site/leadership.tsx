'use client';

import { motion } from 'framer-motion';
import { Crown, Landmark, Users, HardHat, GraduationCap } from 'lucide-react';
import { LEADERSHIP, OPERATIONS_MANAGERS, PRODUCTION_TEAM_NOTE } from '@/lib/company';
import { useI18n } from '@/lib/i18n/context';
import { Reveal, StaggerContainer, StaggerItem } from './reveal';
import { SectionHeading } from './section-heading';

type Person = { name: string; role: string; shares?: string };

function PersonCard({ person, sharesLabel }: { person: Person; sharesLabel: string }) {
  const initials = person.name
    .replace(/(Hj\.|H\.|Drs\.|S\.E|S\.E\.|M\.M|S\.E\., M\.M\.|Mr\.)/g, '')
    .trim()
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group h-full rounded-2xl border border-emerald-900/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10"
      >
        <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-50 font-serif text-xl font-bold text-primary ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
          {initials}
          {person.role.includes('Utama') && (
            <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[0.6rem] font-black text-emerald-950 shadow">
              ★
            </span>
          )}
        </span>
        <h3 className="mt-4 font-serif text-base font-bold leading-snug text-foreground">{person.name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{person.role}</p>
        {person.shares && (
          <p className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            {sharesLabel} {person.shares}
          </p>
        )}
      </motion.div>
    </StaggerItem>
  );
}

export function Leadership() {
  const { t } = useI18n();
  const s = t.ui.leadership;
  const pendiri = t.data?.leadership?.pendiri ?? LEADERSHIP.pendiri;
  const komisaris = t.data?.leadership?.komisaris ?? LEADERSHIP.komisaris;
  const direktur = t.data?.leadership?.direktur ?? LEADERSHIP.direktur;
  const managers = t.data?.leadership?.managers ?? OPERATIONS_MANAGERS;
  const productionNote = t.data?.productionNote ?? PRODUCTION_TEAM_NOTE;

  return (
    <section
      id="pimpinan"
      className="relative overflow-hidden py-24 sm:py-28"
      aria-label={s.ariaLabel}
    >
      <div
        aria-hidden
        className="animate-soft-pulse pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={s.eyebrow}
          title={s.title}
          highlight={s.highlight}
          description={s.description}
        />

        {/* Dewan Pendiri */}
        <div className="mt-16">
          <Reveal className="mb-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <Crown className="h-5.5 w-5.5" aria-hidden />
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">{s.pendiriTitle}</h3>
          </Reveal>
          <StaggerContainer className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2" stagger={0.12}>
            {pendiri.map((p: Person) => (
              <PersonCard key={p.name} person={p} sharesLabel={s.sharesLabel} />
            ))}
          </StaggerContainer>
        </div>

        {/* Dewan Komisaris */}
        <div className="mt-16">
          <Reveal className="mb-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Landmark className="h-5.5 w-5.5" aria-hidden />
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">{s.komisarisTitle}</h3>
          </Reveal>
          <StaggerContainer className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3" stagger={0.12}>
            {komisaris.map((p: Person) => (
              <PersonCard key={p.name} person={p} sharesLabel={s.sharesLabel} />
            ))}
          </StaggerContainer>
        </div>

        {/* Dewan Direksi */}
        <div className="mt-16">
          <Reveal className="mb-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-5.5 w-5.5" aria-hidden />
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">{s.direkturTitle}</h3>
          </Reveal>
          <StaggerContainer className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {direktur.map((p: Person) => (
              <PersonCard key={p.name} person={p} sharesLabel={s.sharesLabel} />
            ))}
          </StaggerContainer>
        </div>

        {/* Divisi Manager Operasional */}
        <div className="mt-16">
          <Reveal className="mb-8 flex items-center justify-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700">
              <HardHat className="h-5.5 w-5.5" aria-hidden />
            </span>
            <h3 className="font-serif text-2xl font-bold text-foreground">{s.managersTitle}</h3>
          </Reveal>
          <StaggerContainer className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {managers.map((p: Person) => (
              <PersonCard key={p.name} person={p} sharesLabel={s.sharesLabel} />
            ))}
          </StaggerContainer>
        </div>

        {/* Catatan tim produksi */}
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 px-6 py-4 text-center text-sm text-emerald-900/85">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p>{productionNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
