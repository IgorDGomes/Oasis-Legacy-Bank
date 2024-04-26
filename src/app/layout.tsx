import { Footer } from "@/components/main-footer"
import { Header } from "@/components/main-header"

import { Montserrat, Old_Standard_TT } from "next/font/google"

import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
})

const oldStandardTT = Old_Standard_TT({
  weight: ['400', '700'], 
  subsets: ["latin"],
  variable: '--font-old-standard-tt',
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={`${montserrat.className}  ${oldStandardTT.variable}`}>
        <head>
          <link rel="icon" href="./favicon.ico" sizes="any" />
        </head>
        <body>
            <Header />
            {children}
            <Footer />
        </body>
      </html>
    )
  }