import { ImageResponse } from 'next/og';
import { services, getServiceBySlug } from '@/data/services';

export const runtime = 'edge';
export const alt = 'Will writing matching service — vetted London specialists';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const headlineMap: Record<string, string> = {
  'single-will':               'Single wills in London',
  'mirror-wills':              'Mirror wills for couples',
  'lasting-power-of-attorney': 'Lasting power of attorney',
  'trust-planning':            'Trust planning, London estates',
  'estate-planning':           'Estate planning reviews',
  'probate-support':           'Probate support',
};

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export default function Image({ params }: { params: { serviceSlug: string } }) {
  const service = getServiceBySlug(params.serviceSlug);
  const headline = service ? (headlineMap[service.slug] ?? service.title) : 'Will writing in London';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #1c1814 0%, #2a221c 60%, #3a2a1f 100%)',
          color: '#ffffff',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ width: 6, background: '#D46919', display: 'flex' }} />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '80px 88px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 16,
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 36,
                display: 'flex',
              }}
            >
              VETTED LONDON SPECIALISTS · FREE MATCHING
            </div>
            <div
              style={{
                fontSize: 84,
                fontStyle: 'italic',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                display: 'flex',
                maxWidth: 960,
              }}
            >
              {headline}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 20,
                color: 'rgba(255,255,255,0.55)',
                display: 'flex',
                gap: 14,
              }}
            >
              <span style={{ display: 'flex' }}>Qualified and insured</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>Fixed-fee quotes</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>24-hour intro</span>
            </div>
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 20,
                color: '#e8943a',
                fontWeight: 500,
                display: 'flex',
              }}
            >
              willwritingserviceslondon.co.uk
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
