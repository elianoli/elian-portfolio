import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // <a href="https://www.freepik.com/free-vector/cartoon-alien-planet-landscape-with-neon-crystals_45172792.htm#page=2&query=fantasy%20landscape&position=18&from_view=search&track=ais&uuid=72482835-3c45-4eee-a2fa-c07098c2ab47">Image by upklyak</a> on Freepik
        'bk-image': 'url(/background-image.jpg)',
      },
    },
  },
  plugins: [],
}
export default config
