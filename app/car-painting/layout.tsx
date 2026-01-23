import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LXT Car Painting | Malowanie Aut w Stylu Cartoon",
  description: "LXT Car Painting - profesjonalne malowanie samochodów w stylu cartoon. Unikalne projekty, kreatywne wzory, indywidualne podejście do każdego auta.",
  keywords: [
    "car painting",
    "malowanie aut",
    "malowanie samochodów cartoon",
    "custom car painting",
    "tuning malowanie",
    "aerograf samochód",
    "LXT car painting",
  ],
  openGraph: {
    title: "LXT Car Painting | Malowanie Aut",
    description: "Profesjonalne malowanie samochodów w stylu cartoon. Unikalne projekty i kreatywne wzory.",
    url: "https://lxt.pl/car-painting",
    siteName: "LXT Centrum Motoryzacyjne",
    images: [
      {
        url: "/images/lxtcarpainting.png",
        width: 1200,
        height: 630,
        alt: "LXT Car Painting - Malowanie Aut",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LXT Car Painting | Malowanie Aut",
    description: "Profesjonalne malowanie samochodów w stylu cartoon.",
    images: ["/images/lxtcarpainting.png"],
  },
}

export default function CarPaintingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
