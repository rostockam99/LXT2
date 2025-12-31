import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LXT Centrum Motoryzacyjne Białystok | Warsztat, Wynajem, Car Painting",
  description:
    "Profesjonalne centrum motoryzacyjne w Białymstoku: warsztat samochodowy, wynajem busów i aut dostawczych, car painting, auto handel. LXT - kompleksowe usługi automotive.",
  keywords: [
    "warsztat samochodowy Białystok",
    "wynajem busów Białystok",
    "wypożyczalnia aut dostawczych",
    "car painting Białystok",
    "auto handel Białystok",
    "naprawa samochodów Białystok",
    "przeglądy techniczne",
    "diagnostyka komputerowa",
    "wynajem dostawczaka",
    "lakierowanie samochodów",
  ].join(", "),
  authors: [{ name: "LXT Centrum Motoryzacyjne" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://lxt.pl",
    siteName: "LXT Centrum Motoryzacyjne",
    title: "LXT Centrum Motoryzacyjne Białystok",
    description: "Kompleksowe usługi motoryzacyjne - warsztat, wynajem, car painting, auto handel",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
