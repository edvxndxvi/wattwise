import type { Config } from "tailwindcss";

export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}" ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary)',
        p2: 'var(--p2)',
        text: 'var(--text)',
        cinza: 'var(--cinza)',
        border: 'var(--border)',
        background: 'var(--background)',
        bg2: 'var(--bg2)',
        glass: 'var(--glass)',
      }
    },
  },
  plugins: [],
} satisfies Config;
