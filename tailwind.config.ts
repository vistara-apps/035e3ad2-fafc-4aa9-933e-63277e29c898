import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(240 88% 53%)',
        accent: 'hsl(177 74% 55%)',
        bg: 'hsl(220 38% 97%)',
        surface: 'hsl(0 0% 100%)',
        'text-primary': 'hsl(220 39% 15%)',
        'text-secondary': 'hsl(220 10% 45%)',
        border: 'hsl(220 14% 93%)',
      },
      fontSize: {
        'display': ['text-3xl', 'font-bold'],
        'heading-md': ['text-xl', 'font-semibold'],
        'body-lg': ['text-base', 'font-normal leading-7'],
        'body-sm': ['text-sm', 'font-normal leading-5'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(220 39% 15% / 0.1)',
      },
      animation: {
        'fast': '150ms',
        'base': '250ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
}

export default config

