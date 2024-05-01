import { Montserrat, Old_Standard_TT } from "next/font/google"

import { Footer } from "@/components/layout/main-footer"
import { Header } from "@/components/layout/main-header"

import favicon from "./favicon.ico"

import "@/styles/globals.css"

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
          <link rel="icon" href={favicon.src} sizes="any" />
        </head>
        <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    )
  }