import { ImageResponse } from 'next/og';

/**
 * Apple Touch Icon 180×180 — iOS home screen.
 */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #062e1b 0%, #14532d 55%, #166534 100%)',
        }}
      >
        <svg width="110" height="110" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 6 C20 18 16 30 18 44 C24 52 40 52 46 44 C48 30 44 18 32 6 Z" fill="#a7f3d0" opacity="0.95" />
          <path d="M32 14 C26 24 24 34 25 44" stroke="#065f46" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M32 20 L40 30 M32 28 L24 38 M32 36 L38 44" stroke="#065f46" strokeWidth="3" strokeLinecap="round" />
          <circle cx="46" cy="20" r="6" fill="#fbbf24" />
        </svg>
      </div>
    ),
    size
  );
}
