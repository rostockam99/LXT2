import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wypożyczalnia Busów i Samochodów Dostawczych Białystok | LXT",
  description: "Wynajem busów i samochodów dostawczych w Białymstoku. Peugeot Boxer, Citroen Berlingo, Mercedes Vito. Atrakcyjne ceny, elastyczne warunki wynajmu.",
  keywords: [
    "wypożyczalnia busów białystok",
    "wynajem samochodów dostawczych białystok",
    "wynajem busa białystok",
    "wypożyczalnia aut dostawczych białystok",
    "peugeot boxer wynajem",
    "citroen berlingo wynajem",
    "mercedes vito wynajem białystok",
    "wynajem samochodu na przeprowadzkę białystok",
    "LXT wypożyczalnia",
  ],
  openGraph: {
    title: "Wypożyczalnia Busów Białystok | LXT",
    description: "Wynajem busów i samochodów dostawczych w Białymstoku. Atrakcyjne ceny, elastyczne warunki wynajmu.",
    url: "https://lxt.pl/wypozyczalnia",
    siteName: "LXT Centrum Motoryzacyjne",
    images: [
      {
        url: "/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png",
        width: 1200,
        height: 630,
        alt: "LXT Wypożyczalnia Busów Białystok",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wypożyczalnia Busów Białystok | LXT",
    description: "Wynajem busów i samochodów dostawczych w Białymstoku. Atrakcyjne ceny.",
    images: ["/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"],
  },
}

export default function WypozyczalniaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
