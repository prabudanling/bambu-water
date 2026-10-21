'use client';

import { useEffect, useReducer } from 'react';
import { useI18n } from './context';

/**
 * Loader terjemahan artikel (en/zh) — lazy per locale, cache module-level.
 * Untuk locale lain (27) → null → komponen fallback ke konten id.
 */
const cache = new Map<string, any>();
const loading = new Set<string>();

export function useArticleTranslations(): any | null {
  const { locale } = useI18n();
  const [, force] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    if (locale === 'id' || cache.has(locale) || loading.has(locale)) return;
    loading.add(locale);
    import(`@/lib/i18n/dictionaries/articles/${locale}.json`)
      .then((m: any) => {
        cache.set(locale, m.default);
        force();
      })
      .catch(() => {
        /* locale tanpa terjemahan artikel → fallback id */
      });
  }, [locale]);

  if (locale === 'id') return null;
  return cache.get(locale) ?? null;
}

/** Gabungkan artikel id dengan terjemahan (field terjemahan menang) */
export function mergedArticle(article: any, tr: any): any {
  if (!article) return article;
  const t = tr?.articles?.[article.slug];
  if (!t) return article;
  return { ...article, ...t };
}
