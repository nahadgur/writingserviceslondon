import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Will Writing Services London — free matching with vetted will writers and estate planning specialists';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        {/* Left brand accent */}
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
              FREE MATCHING SERVICE · LONDON
            </div>
            <div
              style={{
                fontSize: 88,
                fontStyle: 'italic',
                lineHeight: 1.04,
                letterSpacing: '-0.01em',
                display: 'flex',
                maxWidth: 940,
              }}
            >
              Find vetted London will writers, free
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
              <span style={{ display: 'flex' }}>Vetted specialists</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>24-hour intro</span>
              <span style={{ display: 'flex' }}>·</span>
              <span style={{ display: 'flex' }}>Free to clients</span>
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
