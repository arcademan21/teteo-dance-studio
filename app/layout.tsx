import type { Metadata, Viewport } from 'next'
import { Inter, Anton } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: 'Teteo Studio | Escuela de Baile en Madrid',
  description: 'Aprende Dancehall, Twerk, Booty Whining, Dembow y Reggaeton en el centro de Madrid. Clases con Halima y Nerea. Reserva tu plaza ahora.',
  keywords: ['escuela de baile', 'dancehall madrid', 'twerk madrid', 'reggaeton madrid', 'clases de baile', 'teteo studio'],
  openGraph: {
    title: 'Teteo Studio | Escuela de Baile en Madrid',
    description: 'Aprende Dancehall, Twerk, Booty Whining, Dembow y Reggaeton en el centro de Madrid.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1D1D1B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_anton.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
