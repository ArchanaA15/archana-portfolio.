export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    fontFamily: { display: ['"Bricolage Grotesque"', 'sans-serif'], body: ['"DM Sans"', 'sans-serif'] },
    colors: { ink: '#ece9ff', violet: { DEFAULT: '#7c3aed' }, cyan: { DEFAULT: '#06b6d4' }, pink: { DEFAULT: '#ec4899' } },
  } },
}
