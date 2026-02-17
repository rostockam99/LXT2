import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false)
  const [showTiles, setShowTiles] = useState(false)
  const [isColorfulTheme, setIsColorfulTheme] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 700)

    const timerTiles = setTimeout(() => {
      setShowTiles(true)
    }, 1300)

    return () => {
      clearTimeout(timer)
      clearTimeout(timerTiles)
    }
  }, [])

  const services = [
    {
      id: "workshop",
      title: "Warsztat Samochodowy",
      description: "Profesjonalny serwis",
      href: "/warsztat",
      gradient: "from-blue-600 to-blue-800",
      icon: "🔧",
    },
    {
      id: "carpainting",
      title: "Car Painting",
      description: "",
      href: "/car-painting",
      gradient: "from-red-600 to-red-800",
      icon: "🎨",
    },
    {
      id: "rental",
      title: "Wypożyczalnia Aut",
      description: "Nowoczesne auta osobowe i dostawcze",
      href: "/wypozyczalnia",
      gradient: "from-amber-600 to-amber-800",
      icon: "🚚",
    },
    {
      id: "autotrader",
      title: "Auto Handel",
      description: "Kupno i sprzedaż",
      href: "/auto-handel",
      gradient: "from-slate-600 to-slate-800",
      icon: "🚗",
    },
  ]

  const colorfulBgImages = [
    "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%231a3a5c' width='400' height='400'/%3E%3Cpath d='M50 100 L350 100 L350 300 Q350 320 330 320 L70 320 Q50 320 50 300 Z' fill='%23d4af37' opacity='0.1'/%3E%3C/svg%3E\")",
    "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23c41e3a' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='100' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E\")",
    "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23d4af37' width='400' height='400'/%3E%3Crect x='50' y='80' width='300' height='240' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E\")",
    "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%235a6e7d' width='400' height='400'/%3E%3Cpolygon points='200,50 380,280 20,280' fill='%23c41e3a' opacity='0.15'/%3E%3C/svg%3E\")",
  ]

  return (
    <main className={`h-screen w-screen overflow-hidden ${isColorfulTheme ? "bg-background" : "bg-white"}`}>

      {/* Logo Animation */}
      <div className={`absolute inset-0 z-20 flex items-center justify-center bg-white transition-all duration-700 ${showAnimation ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <div className="text-center px-4">
          <div className="mb-8 animate-floating">
            <img
              src="/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"
              alt="LXT Logo"
              className="h-40 md:h-56 w-auto mx-auto drop-shadow-lg"
            />
          </div>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Centrum Motoryzacyjne
          </p>
        </div>
      </div>

      {/* Theme switch */}
      <div className={`fixed top-4 right-4 md:top-6 md:right-6 z-40 transition-all duration-500 ${showTiles ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <button
          onClick={() => setIsColorfulTheme(!isColorfulTheme)}
          className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
        >
          <span className="text-xs md:text-sm font-medium text-gray-700">
            {isColorfulTheme ? "Kolorowa" : "Firmowa"}
          </span>
          <div className="relative w-10 md:w-12 h-5 md:h-6 bg-gray-300 rounded-full">
            <div className={`absolute top-1 left-1 w-4 h-4 bg-primary rounded-full transition-transform duration-300 ${isColorfulTheme ? "" : "translate-x-6"}`} />
          </div>
        </button>
      </div>

      {/* Services */}
      <div className={`absolute inset-0 z-10 transition-all duration-500 ${showTiles ? "opacity-100" : "opacity-0 pointer-events-none"}`}>

        {/* Mobile */}
        <div className="md:hidden h-screen w-screen overflow-y-auto">
          <div className="flex flex-col gap-0 pb-24">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="relative group flex flex-col items-center justify-center min-h-[25vh]"
                style={{
                  backgroundImage: colorfulBgImages[index],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center text-white">
                  <div className="text-4xl">{service.icon}</div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block h-screen w-screen">
          <div className="h-full grid grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.href}
                className="relative group flex flex-col items-center justify-center"
                style={{
                  backgroundImage: colorfulBgImages[index],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center text-white">
                  <div className="text-5xl">{service.icon}</div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`fixed bottom-0 w-full flex justify-center gap-4 py-4 ${showTiles ? "opacity-100" : "opacity-0"}`}>
        <a href="https://facebook.com" target="_blank">
          <Facebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <Instagram />
        </a>
        <a href="mailto:biuro@lxt.pl">
          <Mail />
        </a>
      </footer>
    </main>
  )
}
