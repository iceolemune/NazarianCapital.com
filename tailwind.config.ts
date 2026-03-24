import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#1C3557',
        gold:      '#C9A84C',
        cream:     '#F8F6F2',
        charcoal:  '#1A1A1A',
        smoke:     '#6B6B6B',
        ash:       '#9B9B9B',
        rule:      '#E5E2DC',
        'navy-tint': '#EBF0F6',
        'gold-tint': '#FBF6EC',
      },
      fontFamily: {
        sans:     ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        magnolia: ['var(--font-magnolia)', 'Georgia', 'serif'],
      },
      maxWidth: {
        canvas:  '1440px',
        content: '1100px',
      },
      letterSpacing: {
        eyebrow:  '0.22em',
        wordmark: '0.18em',
        sub:      '0.30em',
      },
    },
  },
  plugins: [],
}

export default config
