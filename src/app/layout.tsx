import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import '@/styles/globals.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
            <title>OLB | Home</title> 
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