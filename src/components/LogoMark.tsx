interface LogoMarkProps {
  size?: number
  /** Use 'inverted' for white diamond on transparent — e.g. on navy backgrounds */
  variant?: 'default' | 'inverted'
}

export default function LogoMark({ size = 36, variant = 'default' }: LogoMarkProps) {
  const fill   = variant === 'inverted' ? 'rgba(255,255,255,0.15)' : '#1C3557'
  const color  = 'white'
  const fontSize = Math.round(size * 0.34)

  return (
    <div
      style={{ width: size, height: size }}
      className="relative inline-flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        className="absolute inset-0"
      >
        <polygon points="40,3 77,40 40,77 3,40" fill={fill} />
      </svg>
      <span
        style={{ fontSize, color, lineHeight: 1 }}
        className="relative z-10 font-magnolia font-bold tracking-wide select-none"
      >
        NC
      </span>
    </div>
  )
}
