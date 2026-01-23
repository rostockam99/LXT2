import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Handel Białystok | Samochody Używane | LXT",
  description: "Sprzedaż samochodów używanych w Białymstoku. Sprawdzone auta osobowe i dostawcze w atrakcyjnych cenach. BMW, Mercedes, Land Rover, Fiat i inne.",
  keywords: [
    "auto handel białystok",
    "samochody używane białystok",
    "sprzedaż aut białystok",
    "komis samochodowy białystok",
    "auta używane białystok",
    "bmw używane białystok",
    "mercedes używany białystok",
    "samochody dostawcze używane białystok",
    "LXT auto handel",
  ],
  openGraph: {
    title: "Auto Handel Białystok | LXT",
    description: "Sprzedaż samochodów używanych w Białymstoku. Sprawdzone auta w atrakcyjnych cenach.",
    url: "https://lxt.pl/auto-handel",
    siteName: "LXT Centrum Motoryzacyjne",
    images: [
      {
        url: "/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png",
        width: 1200,
        height: 630,
        alt: "LXT Auto Handel Białystok",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Handel Białystok | LXT",
    description: "Sprzedaż samochodów używanych w Białymstoku. Sprawdzone auta w atrakcyjnych cenach.",
    images: ["/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"],
  },
}

export default function AutoHandelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
