import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Warsztat Samochodowy Białystok | LXT Centrum Motoryzacyjne",
  description: "Profesjonalny warsztat samochodowy w Białymstoku. Naprawy, przeglądy, diagnostyka komputerowa, wymiana oleju, hamulce, zawieszenie. Szybki serwis i uczciwe ceny.",
  keywords: [
    "warsztat samochodowy białystok",
    "mechanik białystok",
    "naprawa samochodów białystok",
    "serwis samochodowy białystok",
    "przegląd samochodu białystok",
    "wymiana oleju białystok",
    "naprawa hamulców białystok",
    "diagnostyka komputerowa białystok",
    "zawieszenie naprawa białystok",
    "LXT warsztat",
  ],
  openGraph: {
    title: "Warsztat Samochodowy Białystok | LXT",
    description: "Profesjonalny warsztat samochodowy w Białymstoku. Naprawy, przeglądy, diagnostyka komputerowa. Szybki serwis i uczciwe ceny.",
    url: "https://lxt.pl/warsztat",
    siteName: "LXT Centrum Motoryzacyjne",
    images: [
      {
        url: "/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png",
        width: 1200,
        height: 630,
        alt: "LXT Warsztat Samochodowy Białystok",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warsztat Samochodowy Białystok | LXT",
    description: "Profesjonalny warsztat samochodowy w Białymstoku. Naprawy, przeglądy, diagnostyka komputerowa.",
    images: ["/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"],
  },
}

export default function WarsztatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
