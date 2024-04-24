import { Footer } from "@/components/main-footer"
import { Header } from "@/components/main-header"

import '@/styles/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
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