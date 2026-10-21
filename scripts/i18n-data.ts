/**
 * Ekstrak data terstruktur dari company.ts → dictionaries/data/id.json
 * Jalankan: bun run scripts/i18n-data.ts
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  BENEFITS,
  FAQS,
  PRODUCTS,
  PROCESS,
  DELIVERY_TIERS,
  PRICING,
  STATS,
  NUTRITION,
  LEADERSHIP,
  OPERATIONS_MANAGERS,
  OFFICES,
  PRODUCTION_TEAM_NOTE,
  BRAND_CLAIM,
  COMPANY,
} from '../src/lib/company';

const data = {
  brandClaim: BRAND_CLAIM,
  tagline: COMPANY.tagline,
  productionNote: PRODUCTION_TEAM_NOTE,
  benefits: BENEFITS,
  faqs: FAQS,
  products: PRODUCTS,
  process: PROCESS,
  deliveryTiers: DELIVERY_TIERS,
  stats: STATS,
  nutrition: NUTRITION,
  pricing: PRICING,
  leadership: {
    pendiri: LEADERSHIP.pendiri,
    komisaris: LEADERSHIP.komisaris,
    direktur: LEADERSHIP.direktur,
    managers: OPERATIONS_MANAGERS,
    offices: OFFICES.map((o) => ({ id: o.id, label: o.label, city: o.city })),
  },
};

const out = join(process.cwd(), 'src/lib/i18n/dictionaries/data/id.json');
writeFileSync(out, JSON.stringify({ data }, null, 1));
console.log(`✅ data/id.json — benefits:${BENEFITS.length} faqs:${FAQS.length} products:${PRODUCTS.length} process:${PROCESS.length} delivery:${DELIVERY_TIERS.length} stats:${STATS.length} nutrition:${NUTRITION.length}`);
