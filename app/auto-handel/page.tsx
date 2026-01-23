"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Phone, Mail, X, Info, PenLine as Engine, Fuel, Calendar, Facebook, Instagram, ChevronRight, Share2 } from "lucide-react"
import { FooterNav } from "@/components/footer-nav"

interface Car {
  id: number
  slug: string
  title: string
  price: string
  year: number
  mileage: string
  fuel: string
  transmission: string
  engine: string
  power: string
  features: string[]
  description: string
  images: string[] // Added images array for gallery
}

const cars: Car[] = [
  {
    id: 1,
    slug: "fiat-scudo-2008",
    title: "Fiat Scudo 2008",
    price: "12 700 PLN",
    year: 2008,
    mileage: "284 000 km",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "1.997 cm³",
    power: "88 KM",
    features: ["Białe", "4 drzwi", "3 miejsca", "Napęd przedni"],
    description: "Fiat Scudo w dobrym stanie technicznym, idealny do pracy.",
    images: ["/cars/a1.webp", "/cars/a2.webp", "/cars/a3.webp"],
  },
  {
    id: 2,
    slug: "alfa-romeo-155",
    title: "Alfa Romeo 155 1.8 stan kolecjonerski",
    price: "27 500 PLN",
    year: 1993,
    mileage: "160 000 km",
    fuel: "Benzyna",
    transmission: "Manualna",
    engine: "1.773 cm³",
    power: "126 KM",
    features: ["CD", "MP3", "USB", "Klimatyzacja manualna", "Bezwypadkowy"],
    description:
      "Wyjątkowa Alfa Romeo 155 T.Spark - prawdziwa perełka dla koneserów. Jedyna taka w Polsce, odkupiona od drugiego właściciela - Włocha. W moich rękach od dwóch lat. Oryginalny niski przebieg. Doskonały stan kolekcjonerski.",
    images: ["/cars/b1.webp", "/cars/b2.webp", "/cars/b3.webp", "/cars/b4.webp", "/cars/b5.webp"],
  },
  {
    id: 3,
    slug: "honda-civic-viii",
    title: "Honda Civic VIII 2.2 UFO doinwestowany",
    price: "12 500 PLN",
    year: 2006,
    mileage: "290 000 km",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "2.204 cm³",
    power: "140 KM",
    features: ["Radio fabryczne", "ABS", "Poduszki powietrzne", "Komputer", "Klimatyzacja", "Elektryczne lusterka"],
    description:
      "Honda Civic VIII po pełnym serwisie. Nowa dwumasa kompletna ze sprzęgłem, tarcze i klocki hamulcowe, wszystkie elementy zawieszenia wymienione. Bardzo dynamiczny silnik, bez wycieków. Godna uwagi w tym budżecie.",
    images: ["/cars/c1.webp", "/cars/c2.webp", "/cars/c3.webp", "/cars/c4.webp"],
  },
  {
    id: 4,
    slug: "citroen-jumper",
    title: "Citroën Jumper",
    price: "39 700 PLN",
    year: 2016,
    mileage: "Zapytaj",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "2.0L",
    power: "Zapytaj",
    features: ["3 miejsca", "Biały", "Po serwisie olejowym", "Zimowe opony", "Używany"],
    description:
      "Citroën Jumper z 2016 roku po pełnym serwisie olejowym, filtry, zimowe opony, zawieszenie, wahacze. Wystawiamy fakturę VAT 23%. Aktualne ubezpieczenie OC oraz przegląd.",
    images: ["/cars/d1.webp", "/cars/d2.webp", "/cars/d3.webp"],
  },
  {
    id: 5,
    slug: "mercedes-vito-111",
    title: "Mercedes-Benz Vito 111 CDI Tourer Base 447.701",
    price: "72 500 PLN",
    year: 2018,
    mileage: "300 000 km",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "1.598 cm³",
    power: "114 KM",
    features: ["8-osobowy", "Srebrny", "4 drzwi", "2 komplety opon", "Używany"],
    description:
      "Mercedes Vito 8-osobowy w super stanie technicznym. Od nowości w naszych rękach, z polskiego salonu. Po serwisie olejowym, świeżo nabita klimatyzacja. 2 komplety opon, nowe zimówki.",
    images: ["/cars/e1.webp", "/cars/e2.webp", "/cars/e3.webp", "/cars/e4.webp"],
  },
  {
    id: 6,
    slug: "land-rover-discovery",
    title: "Land Rover Discovery",
    price: "90 000 PLN",
    year: 2013,
    mileage: "182 000 km",
    fuel: "Diesel",
    transmission: "Automatyczna",
    engine: "2.993 cm³",
    power: "211 KM",
    features: ["SUV", "Brązowy", "5 drzwi", "5 miejsc", "Używany"],
    description:
      "Land Rover Discovery IV na sprzedaż. Po serwisie olejowym, opony zimowe, możliwa faktura VAT. Z tyłu mieszczą się bez problemu 3 foteliki. Ładny, zadbany, bardzo dynamiczny motor 3.0.",
    images: ["/cars/f1.webp", "/cars/f2.webp", "/cars/f3.webp"],
  },
]

export default function AutoHandelPage() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  // Handle URL hash on mount and hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const car = cars.find(c => c.slug === hash)
        if (car) {
          setSelectedCar(car)
          setCurrentImageIndex(0)
        }
      }
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Update URL when car is selected
  const openCar = (car: Car) => {
    setSelectedCar(car)
    setCurrentImageIndex(0)
    window.history.pushState(null, '', `#${car.slug}`)
  }

  const closeCar = () => {
    setSelectedCar(null)
    window.history.pushState(null, '', window.location.pathname)
  }

  const copyCarLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${selectedCar?.slug}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Powrót</span>
          </Link>
          <img
            src="/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"
            alt="LXT Logo"
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61550903500738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/lxt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-primary">Auto Handel</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Sprawdzone samochody używane w atrakcyjnych cenach
            </p>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <button
                key={car.id}
                onClick={() => openCar(car)}
                className="group text-left p-4 rounded-xl border border-border hover:border-accent bg-card hover:bg-secondary transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 mb-4 overflow-hidden relative">
                  {car.images && car.images.length > 0 ? (
                    <img
                      src={car.images[0] || "/placeholder.svg"}
                      alt={car.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Engine className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-all group-hover:scale-110" />
                    </div>
                  )}
                </div>

                {/* Car Info */}
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {car.title}
                </h3>
                <p className="text-2xl font-bold text-green-600 mb-3">{car.price}</p>

                {/* Quick Stats */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {car.year} | {car.mileage}
                  </p>
                  <p className="flex items-center gap-2">
                    <Fuel className="w-4 h-4" />
                    {car.fuel} | {car.transmission}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">Więcej informacji</span>
                  <Info className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={closeCar}
        >
          <div
            className="bg-background rounded-xl border border-border w-full max-w-3xl p-8 relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={copyCarLink}
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors bg-background border border-border shadow-lg"
                title="Kopiuj link do auta"
              >
                <Share2 className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={closeCar}
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors bg-background border border-border shadow-lg"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
            </div>
            {copied && (
              <div className="absolute top-16 right-4 px-3 py-1 bg-green-500 text-white text-sm rounded-lg z-10">
                Skopiowano link!
              </div>
            )}

            <div className="relative w-full h-96 rounded-xl bg-white border border-border mb-6 overflow-hidden group flex items-center justify-center">
              {selectedCar.images && selectedCar.images.length > 0 ? (
                <>
                  <img
                    src={selectedCar.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedCar.title} - zdjęcie ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />

                  {/* Gallery Navigation */}
                  {selectedCar.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex((prev) => (prev === 0 ? selectedCar.images.length - 1 : prev - 1))
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex((prev) => (prev === selectedCar.images.length - 1 ? 0 : prev + 1))
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image counter */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/70 rounded-full text-white text-sm">
                        {currentImageIndex + 1} / {selectedCar.images.length}
                      </div>
                    </>
                  )}

                  {/* Thumbnail strip */}
                  {selectedCar.images.length > 1 && (
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent flex gap-2 overflow-x-auto">
                      {selectedCar.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setCurrentImageIndex(idx)
                          }}
                          className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${
                            idx === currentImageIndex
                              ? "border-primary scale-110"
                              : "border-white/30 hover:border-white/60"
                          }`}
                        >
                          <img
                            src={img || "/placeholder.svg"}
                            alt={`Miniatura ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Engine className="w-32 h-32 text-primary/30" />
                </div>
              )}
            </div>

            {/* Car Title and Price */}
            <h2 className="text-3xl font-bold text-primary mb-2">{selectedCar.title}</h2>
            <p className="text-3xl font-bold text-green-600 mb-6">{selectedCar.price}</p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border">
              <div>
                <p className="text-xs text-muted-foreground mb-1">ROK PRODUKCJI</p>
                <p className="font-bold text-primary">{selectedCar.year}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PRZEBIEG</p>
                <p className="font-bold text-primary">{selectedCar.mileage}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PALIWO</p>
                <p className="font-bold text-primary">{selectedCar.fuel}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">SKRZYNIA</p>
                <p className="font-bold text-primary">{selectedCar.transmission}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">SILNIK</p>
                <p className="font-bold text-primary">{selectedCar.engine}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">MOC</p>
                <p className="font-bold text-primary">{selectedCar.power}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="font-bold text-primary mb-3">Wyposażenie:</p>
              <div className="flex flex-wrap gap-2">
                {selectedCar.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-3 pt-6 border-t border-border">
              <p className="font-bold text-primary mb-3">Zainteresowany?</p>
              <a
                href="tel:+48510123444"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Zadzwoń</p>
                  <p className="font-semibold text-primary">510 123 444</p>
                </div>
              </a>
              <a
                href="mailto:biuro@lxt.pl"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Wiadomość</p>
                  <p className="font-semibold text-primary">biuro@lxt.pl</p>
                </div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579714484506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Facebook</p>
                  <p className="font-semibold text-primary">LXT Auto Handel</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <FooterNav currentPage="auto-handel" />
    </main>
  )
}
