/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Old-money accent system: deep navy for interactive, gold for the masthead/brand
        // metallic. Replaces the cool indigo that clashed with the warm cream/serif palette.
        accent: '#1e3a5f',
        gold: '#b08d57',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          // Traditional Chinese first (team is Taiwan-context), Simplified as fallback.
          'PingFang TC',
          'Microsoft JhengHei',
          'Noto Sans TC',
          'PingFang SC',
          'Microsoft YaHei',
          'sans-serif',
        ],
        // Editorial serif for headlines + article prose (the "old money" voice). System
        // fonts only — no webfont download. Traditional Chinese Ming/Song first (Taiwan team).
        serif: [
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Songti TC',
          'PMingLiU',
          'Noto Serif TC',
          'Songti SC',
          'serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
