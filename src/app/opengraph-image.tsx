import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const [fontBold, fontMedium, photoBuffer] = await Promise.all([
    readFile(path.join(process.cwd(), 'src', 'fonts', 'MagnoliaBold.otf')),
    readFile(path.join(process.cwd(), 'src', 'fonts', 'MagnoliaMedium.otf')),
    readFile(path.join(process.cwd(), 'src', 'app', 'assets', 'Ben_nazarian.webp')),
  ])

  const photoSrc = `data:image/webp;base64,${photoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Left half — Benjamin's photo */}
        <div
          style={{
            width: 600,
            height: 630,
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt="Benjamin Nazarian"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          {/* Subtle gradient fade on right edge to blend into navy */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 120,
              height: '100%',
              background: 'linear-gradient(to right, transparent, #1C3557)',
            }}
          />
        </div>

        {/* Right half — Navy brand panel */}
        <div
          style={{
            width: 600,
            height: 630,
            background: '#1C3557',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 28,
            position: 'relative',
          }}
        >
          {/* Gold top bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: '#C9A84C',
            }}
          />

          {/* Diamond logo mark */}
          <div
            style={{
              width: 80,
              height: 80,
              background: 'rgba(255,255,255,0.10)',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                transform: 'rotate(-45deg)',
                color: 'white',
                fontSize: 26,
                fontFamily: 'Magnolia',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              NC
            </span>
          </div>

          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                color: 'white',
                fontSize: 42,
                fontFamily: 'Magnolia',
                fontWeight: 700,
                letterSpacing: 8,
              }}
            >
              NAZARIAN
            </span>
            <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.2)' }} />
            <span
              style={{
                color: 'white',
                fontSize: 42,
                fontFamily: 'Magnolia',
                fontWeight: 400,
                letterSpacing: 8,
              }}
            >
              CAPITAL
            </span>
          </div>

          {/* Tagline */}
          <span
            style={{
              color: '#C9A84C',
              fontSize: 13,
              fontFamily: 'Magnolia',
              fontWeight: 400,
              letterSpacing: 4,
              marginTop: 4,
            }}
          >
            PRIVATE FAMILY OFFICE
          </span>

          {/* Credential line */}
          <span
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 11,
              fontFamily: 'Magnolia',
              fontWeight: 400,
              letterSpacing: 2,
              textAlign: 'center',
              padding: '0 32px',
            }}
          >
            CO-FOUNDER OF THERABODY  |  $1B+ SCALED  |  60+ COUNTRIES
          </span>

          {/* Gold bottom bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              background: '#C9A84C',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Magnolia', data: fontBold,   weight: 700 },
        { name: 'Magnolia', data: fontMedium, weight: 400 },
      ],
    }
  )
}
