import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const fontBold = await readFile(
    path.join(process.cwd(), 'src', 'fonts', 'MagnoliaBold.otf')
  )
  const fontMedium = await readFile(
    path.join(process.cwd(), 'src', 'fonts', 'MagnoliaMedium.otf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#1C3557',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
        }}
      >
        {/* Thin gold top bar */}
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
            width: 110,
            height: 110,
            background: 'rgba(255,255,255,0.12)',
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
              fontSize: 36,
              fontFamily: 'Magnolia',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            NC
          </span>
        </div>

        {/* Wordmark with vertical divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <span
            style={{
              color: 'white',
              fontSize: 58,
              fontFamily: 'Magnolia',
              fontWeight: 700,
              letterSpacing: 10,
            }}
          >
            NAZARIAN
          </span>
          <div
            style={{
              width: 1,
              height: 50,
              background: 'rgba(255,255,255,0.3)',
            }}
          />
          <span
            style={{
              color: 'white',
              fontSize: 58,
              fontFamily: 'Magnolia',
              fontWeight: 500,
              letterSpacing: 10,
            }}
          >
            CAPITAL
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            color: '#C9A84C',
            fontSize: 17,
            fontFamily: 'Magnolia',
            fontWeight: 400,
            letterSpacing: 5,
          }}
        >
          PRIVATE FAMILY OFFICE
        </span>

        {/* Thin gold bottom bar */}
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
    ),
    {
      ...size,
      fonts: [
        { name: 'Magnolia', data: fontBold, weight: 700 },
        { name: 'Magnolia', data: fontMedium, weight: 500 },
      ],
    }
  )
}
