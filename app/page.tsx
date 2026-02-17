"use client"

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

  return (
    <main className={`h-screen w-screen overflow-hidden ${isColorfulTheme ? "bg-background" : "bg-white"}`}>
      {/* Logo & Brand Animation Phase */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-white transition-all duration-700 ${showAnimation ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="text-center px-4">
          <div className="mb-8 animate-floating">
            <img
              src="/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"
              alt="LXT Logo"
              className="h-40 md:h-56 w-auto mx-auto drop-shadow-lg"
            />
          </div>
          <p className="text-xl md:text-2xl text-primary font-semibold">Centrum Motoryzacyjne</p>
        </div>
      </div>

      <div
        className={`fixed top-4 right-4 md:top-6 md:right-6 z-40 transition-all duration-500 ${showTiles ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={() => setIsColorfulTheme(!isColorfulTheme)}
          className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          aria-label="Przełącz kolorystykę"
        >
          <span className="text-xs md:text-sm font-medium text-gray-700">
            {isColorfulTheme ? "Kolorowa" : "Firmowa"}
          </span>
          <div className="relative w-10 md:w-12 h-5 md:h-6 bg-gray-300 rounded-full transition-colors duration-300">
            <div
              className={`absolute top-0.5 md:top-1 left-0.5 md:left-1 w-4 h-4 bg-primary rounded-full transition-transform duration-300 ${isColorfulTheme ? "translate-x-0" : "translate-x-5 md:translate-x-6"}`}
            />
          </div>
        </button>
      </div>

      {/* Services Grid - Responsive Layout */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-500 ${showTiles ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Mobile Layout - Scrollable with more padding-bottom for footer */}
        <div className={`md:hidden h-screen w-screen overflow-y-auto ${isColorfulTheme ? "" : "p-4"}`}>
          <div className={`flex flex-col ${isColorfulTheme ? "gap-0 pb-24" : "gap-4 pb-28"}`}>
            {services.map((service, index) => {
              const colorfulBgImages = [
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%231a3a5c' width='400' height='400'/%3E%3Cpath d='M50 100 L350 100 L350 300 Q350 320 330 320 L70 320 Q50 320 50 300 Z' fill='%23d4af37' opacity='0.1'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23c41e3a' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='100' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23d4af37' width='400' height='400'/%3E%3Crect x='50' y='80' width='300' height='240' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%235a6e7d' width='400' height='400'/%3E%3Cpolygon points='200,50 380,280 20,280' fill='%23c41e3a' opacity='0.15'/%3E%3C/svg%3E\")",
              ]

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`relative group overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-95 animate-fade-in-up ${
                    isColorfulTheme
                      ? "min-h-[25vh]"
                      : "bg-white border-3 border-primary rounded-md shadow-lg hover:shadow-xl min-h-[20vh]"
                  }`}
                  style={
                    isColorfulTheme
                      ? {
                          backgroundImage: colorfulBgImages[index],
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          animationDelay: `${index * 100}ms`,
                        }
                      : {
                          animationDelay: `${index * 100}ms`,
                        }
                  }
                >
                  {isColorfulTheme && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60 transition-all duration-300" />
                  )}

                  <div
                    className={`relative z-10 text-center px-4 py-6 ${isColorfulTheme ? "text-white" : "text-primary"}`}
                  >
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <h2 className="text-xl font-bold mb-1">{service.title}</h2>
                    <p className={`text-sm ${isColorfulTheme ? "text-white/90" : "text-primary/80"}`}>
                      {service.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Desktop Layout - Full Screen Grid */}
        <div className={`hidden md:block h-screen w-screen ${isColorfulTheme ? "" : "p-8"}`}>
          <div className={`h-full grid grid-cols-2 ${isColorfulTheme ? "gap-0" : "gap-6"}`}>
            {services.map((service, index) => {
              const colorfulBgImages = [
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%231a3a5c' width='400' height='400'/%3E%3Cpath d='M50 100 L350 100 L350 300 Q350 320 330 320 L70 320 Q50 320 50 300 Z' fill='%23d4af37' opacity='0.1'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23c41e3a' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='100' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23d4af37' width='400' height='400'/%3E%3Crect x='50' y='80' width='300' height='240' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E\")",
                "url(\"data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%235a6e7d' width='400' height='400'/%3E%3Cpolygon points='200,50 380,280 20,280' fill='%23c41e3a' opacity='0.15'/%3E%3C/svg%3E\")",
              ]

              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className={`relative z-10 hover:z-20 group overflow-hidden flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                    isColorfulTheme
                      ? ""
                      : "bg-white border-4 border-primary rounded-md shadow-xl hover:shadow-2xl max-h-[45vh]"
                  }`}
                  style={
                    isColorfulTheme
                      ? {
                          backgroundImage: colorfulBgImages[index],
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          animationDelay: `${index * 100}ms`,
                        }
                      : {
                          animationDelay: `${index * 100}ms`,
                        }
                  }
                >
                  {isColorfulTheme && (
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/60 transition-all duration-300" />
                  )}

                  <div
                    className={`relative z-10 text-center transform group-hover:scale-110 transition-transform duration-300 ${
                      isColorfulTheme ? "text-white" : "text-primary"
                    }`}
                  >
                    <div className="text-5xl mb-3">{service.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-1">{service.title}</h2>
                    <p className={`text-base ${isColorfulTheme ? "text-white/90" : "text-primary/80"}`}>
                      {service.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <footer
        className={`fixed bottom-0 left-0 right-0 z-30 py-4 md:py-6 px-4 transition-all duration-500 ${showTiles ? "opacity-100" : "opacity-0"} ${
          isColorfulTheme ? "bg-gradient-to-t from-black/20 to-transparent" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 md:gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61550903500738"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isColorfulTheme
                ? "bg-white/10 hover:bg-primary text-white"
                : "bg-primary hover:bg-primary/80 text-white shadow-lg"
            }`}
          >
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://instagram.com/lxt"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isColorfulTheme
                ? "bg-white/10 hover:bg-primary text-white"
                : "bg-primary hover:bg-primary/80 text-white shadow-lg"
            }`}
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="mailto:biuro@lxt.pl"
            className={`p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isColorfulTheme
                ? "bg-white/10 hover:bg-primary text-white"
                : "bg-primary hover:bg-primary/80 text-white shadow-lg"
            }`}
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </footer>
    </main>
  )
}
