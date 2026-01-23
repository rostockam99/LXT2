import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

const cars: Record<string, { title: string; price: string; image: string }> = {
  "fiat-scudo-2008": {
    title: "Fiat Scudo 2008",
    price: "10 325 zł NETTO",
    image: "/cars/a1.webp",
  },
  "alfa-romeo-155": {
    title: "Alfa Romeo 155 1.8",
    price: "27 500 zł",
    image: "/cars/b1.webp",
  },
  "honda-civic-viii": {
    title: "Honda Civic VIII 2.2 UFO",
    price: "12 500 zł",
    image: "/cars/c1.webp",
  },
  "citroen-jumper": {
    title: "Citroën Jumper",
    price: "39 700 zł",
    image: "/cars/d1.webp",
  },
  "mercedes-vito-111": {
    title: "Mercedes-Benz Vito 111 CDI",
    price: "72 500 zł",
    image: "/cars/e1.webp",
  },
  "land-rover-discovery": {
    title: "Land Rover Discovery",
    price: "77 900 zł",
    image: "/cars/f1.webp",
  },
  "bmw-530i-2023": {
    title: "BMW Seria 5 530i M Pakiet",
    price: "155 000 zł",
    image: "/cars/bmw-530i/1.webp",
  },
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const car = cars[slug]

  if (!car) {
    return new Response("Car not found", { status: 404 })
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a3a5c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#ffffff",
              marginBottom: 20,
              opacity: 0.8,
            }}
          >
            LXT Auto Handel
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#ffffff",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {car.title}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#d4af37",
              fontWeight: "bold",
            }}
          >
            {car.price}
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#ffffff",
              marginTop: 30,
              opacity: 0.6,
            }}
          >
            lxt.pl/auto-handel#{slug}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
