import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nama minimal 2 karakter').max(120),
  email: z
    .string()
    .trim()
    .max(200)
    .optional()
    .transform((v) => (v === '' ? undefined : v))
    .refine((v) => v === undefined || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Format email tidak valid'),
  phone: z.string().trim().min(8, 'Nomor telepon tidak valid').max(30),
  city: z.string().trim().max(80).optional(),
  orderType: z.enum(['air-bambu', 'bambu-batang', 'grosir', 'korporat']).default('air-bambu'),
  message: z.string().trim().min(5, 'Pesan minimal 5 karakter').max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: 'Permintaan tidak valid' },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        { success: false, error: first?.message ?? 'Data tidak valid' },
        { status: 422 }
      );
    }

    const saved = await db.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email ?? null,
        phone: parsed.data.phone,
        city: parsed.data.city ?? null,
        orderType: parsed.data.orderType,
        message: parsed.data.message,
      },
    });

    return NextResponse.json(
      { success: true, id: saved.id, message: 'Pesan Anda berhasil terkirim' },
      { status: 201 }
    );
  } catch (err) {
    console.error('[api/contact] error:', err);
    return NextResponse.json(
      { success: false, error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = await db.contactMessage.count();
    return NextResponse.json({ success: true, total: count });
  } catch {
    return NextResponse.json({ success: false, error: 'Gagal membaca data' }, { status: 500 });
  }
}
