import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default async function Icon() {
  const fontData = await readFile(
    path.join(process.cwd(), 'src', 'fonts', 'MagnoliaBold.otf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            background: '#1C3557',
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
              fontSize: 13,
              fontFamily: 'Magnolia',
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            NC
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Magnolia', data: fontData, weight: 700 }],
    }
  )
}
