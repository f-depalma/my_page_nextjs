import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
