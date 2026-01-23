"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import { ChevronLeft, Phone, Mail, X, Info, PenLine as Engine, Fuel, Calendar, Facebook, Instagram, ChevronRight, Share2 } from "lucide-react"
import { FooterNav } from "@/components/footer-nav"

interface Car {
  id: number
  slug: string
  title: string
  price: string
  saleType: string
  year: number
  mileage: string
  fuel: string
  transmission: string
  engine: string
  power: string
  drive?: string
  bodyType?: string
  color?: string
  doors?: number
  seats?: number
  vin?: string
  regNumber?: string
  country?: string
  accidentFree?: boolean
  ocValid?: string
  techValid?: string
  features: string[]
  description: string
  images: string[]
}

const cars: Car[] = [
  {
    id: 1,
    slug: "fiat-scudo-2008",
    title: "Fiat Scudo 2008",
    price: "12 700 PLN",
    saleType: "Faktura VAT 23%",
    year: 2008,
    mileage: "284 000 km",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "1 997 cm³",
    power: "88 KM (65 kW)",
    drive: "Przedni",
    bodyType: "Furgon",
    color: "Biały",
    doors: 4,
    seats: 3,
    vin: "ZFA27000064192795",
    regNumber: "BI288CH",
    country: "Polska",
    ocValid: "08.2026",
    features: ["Napęd przedni", "Serwisowany na bieżąco", "Aktualny przegląd", "Gotowy do jazdy"],
    description: "Sprzedam samochód Fiat Scudo w dobrym stanie technicznym. Auto gotowe do jazdy, serwisowane na bieżąco. Aktualny przegląd techniczny oraz ubezpieczenie OC. Idealny do pracy.",
    images: ["/cars/a1.webp", "/cars/a2.webp", "/cars/a3.webp"],
  },
  {
    id: 2,
    slug: "alfa-romeo-155",
    title: "Alfa Romeo 155 T.Spark 1993",
    price: "27 500 PLN",
    saleType: "Umowa kupna-sprzedaży",
    year: 1993,
    mileage: "160 000 km",
    fuel: "Benzyna T.Spark",
    transmission: "Manualna",
    engine: "1 773 cm³",
    power: "126 KM (93 kW)",
    drive: "Przedni",
    bodyType: "Sedan",
    color: "Szary",
    doors: 4,
    seats: 5,
    vin: "ZAR16700000061748",
    regNumber: "WPR18427",
    country: "Włochy",
    accidentFree: true,
    ocValid: "01.2026",
    features: ["Klimatyzacja manualna", "Radio CD", "MP3", "USB audio", "Bezwypadkowy", "Dodatkowy komplet kół", "Części zapasowe w zestawie"],
    description: "Odkryj czystą pasję włoskiej motoryzacji. Alfa Romeo 155 T.Spark to wyjątkowy klasyk dla prawdziwego entuzjasty. Samochód kupiony w salonie we Włoszech, od nowości w jednej rodzinie. Jedyny taki egzemplarz w Polsce. Oryginalny niski przebieg 160 000 km potwierdzony stanem pojazdu. Z modyfikacji jedynie nagłośnienie, reszta w pełni oryginalna. W zestawie dodatkowy komplet oryginalnych kół oraz mnóstwo części zapasowych.",
    images: ["/cars/b1.webp", "/cars/b2.webp", "/cars/b3.webp", "/cars/b4.webp", "/cars/b5.webp"],
  },
  {
    id: 3,
    slug: "honda-civic-viii",
    title: "Honda Civic VIII 2.2 i-CTDi UFO",
    price: "12 500 PLN",
    saleType: "Umowa kupna-sprzedaży",
    year: 2006,
    mileage: "289 000 km",
    fuel: "Diesel i-CTDi",
    transmission: "Manualna",
    engine: "2 204 cm³",
    power: "140 KM (103 kW)",
    drive: "Przedni",
    bodyType: "Hatchback",
    color: "Srebrny",
    doors: 5,
    seats: 5,
    vin: "SHHFK37606U006263",
    regNumber: "BI377JS",
    country: "Polska",
    accidentFree: true,
    ocValid: "08.2026",
    techValid: "11.2025",
    features: ["Klimatyzacja manualna", "ABS", "Poduszki powietrzne", "Komputer pokładowy", "Radio fabryczne", "Elektryczne szyby", "Elektryczne lusterka", "CD/MP3/USB", "Tapicerka welurowa", "Nowa dwumasa + sprzęgło", "Nowe tarcze przód", "Nowe klocki przód/tył", "Wymienione zawieszenie", "Serwis olejowy"],
    description: "Honda Civic VIII 2.2 Diesel po pełnym serwisie wykonanym w naszym własnym warsztacie. Nowa dwumasa + kompletne sprzęgło, nowe tarcze przód, nowe klocki przód i tył, wymienione zużyte elementy zawieszenia, wykonany serwis olejowy. Silnik dynamiczny, bez wycieków. Bardzo dobrze utrzymany jak na swój przebieg. Przebieg udokumentowany w CEPiK. Praktyczny, dynamiczny hatchback gotowy do jazdy bez dodatkowych kosztów.",
    images: ["/cars/c1.webp", "/cars/c2.webp", "/cars/c3.webp", "/cars/c4.webp"],
  },
  {
    id: 4,
    slug: "citroen-jumper",
    title: "Citroen Jumper 2016",
    price: "39 700 PLN",
    saleType: "Faktura VAT 23%",
    year: 2016,
    mileage: "Zapytaj o szczegóły",
    fuel: "Diesel",
    transmission: "Manualna",
    engine: "2.0L HDi",
    power: "Zapytaj o szczegóły",
    drive: "Przedni",
    bodyType: "Furgon",
    color: "Biały",
    seats: 3,
    features: ["Po serwisie olejowym", "Wymienione filtry", "Opony zimowe", "Wymienione zawieszenie", "Wymienione wahacze", "Aktualny przegląd", "Aktualne OC"],
    description: "Citroen Jumper z 2016 roku po pełnym serwisie olejowym, wymienione filtry, zimowe opony, zawieszenie i wahacze. Aktualne ubezpieczenie OC oraz przegląd techniczny. Gotowy do pracy.",
    images: ["/cars/d1.webp", "/cars/d2.webp", "/cars/d3.webp"],
  },
  {
    id: 5,
    slug: "mercedes-vito-111",
    title: "Mercedes-Benz Vito 111 CDI Tourer Base",
    price: "72 500 PLN",
    saleType: "Faktura VAT 23%",
    year: 2018,
    mileage: "300 000 km",
    fuel: "Diesel CDI",
    transmission: "Manualna",
    engine: "1 598 cm³",
    power: "114 KM",
    drive: "Przedni",
    bodyType: "Van / Bus",
    color: "Srebrny",
    doors: 4,
    seats: 8,
    features: ["8-osobowy", "Z polskiego salonu", "Od nowości w jednych rękach", "Po serwisie olejowym", "Świeżo nabita klimatyzacja", "2 komplety opon", "Nowe opony zimowe"],
    description: "Mercedes Vito 8-osobowy w super stanie technicznym. Od nowości w naszych rękach, z polskiego salonu. Po serwisie olejowym, świeżo nabita klimatyzacja. 2 komplety opon w zestawie, w tym nowe zimówki. Idealny bus rodzinny lub do przewozu osób.",
    images: ["/cars/e1.webp", "/cars/e2.webp", "/cars/e3.webp", "/cars/e4.webp"],
  },
  {
    id: 6,
    slug: "land-rover-discovery",
    title: "Land Rover Discovery IV 3.0 TDV6",
    price: "90 000 PLN",
    saleType: "Faktura VAT 23%",
    year: 2013,
    mileage: "182 000 km",
    fuel: "Diesel TDV6",
    transmission: "Automatyczna",
    engine: "2 993 cm³",
    power: "211 KM",
    drive: "4x4 (AWD)",
    bodyType: "SUV",
    color: "Brązowy",
    doors: 5,
    seats: 5,
    features: ["Napęd 4x4", "Po serwisie olejowym", "Opony zimowe", "Dynamiczny silnik 3.0", "Zadbany", "Miejsce na 3 foteliki z tyłu"],
    description: "Land Rover Discovery IV na sprzedaż. Po serwisie olejowym, opony zimowe. Z tyłu mieszczą się bez problemu 3 foteliki dziecięce. Ładny, zadbany egzemplarz z bardzo dynamicznym silnikiem 3.0 TDV6. Prawdziwy terenowiec w eleganckim wydaniu.",
    images: ["/cars/f1.webp", "/cars/f2.webp", "/cars/f3.webp"],
  },
  {
    id: 7,
    slug: "bmw-530i-2023",
    title: "BMW Seria 5 530i M Pakiet G30",
    price: "155 000 PLN",
    saleType: "Faktura VAT 23%",
    year: 2023,
    mileage: "23 000 km",
    fuel: "Benzyna",
    transmission: "Automatyczna",
    engine: "1 998 cm³",
    power: "245 KM",
    drive: "Tylny (RWD)",
    bodyType: "Sedan",
    color: "Czarny",
    doors: 4,
    seats: 5,
    vin: "Na miejscu",
    regNumber: "WPR9614T",
    accidentFree: true,
    features: [
      "Pakiet M",
      "Napęd tylny",
      "Tapicerka skórzana",
      "Klimatyzacja 4-strefowa",
      "Asystent parkowania",
      "Czujniki parkowania przód/tył",
      "Asystent zmiany pasa",
      "Tempomat aktywny",
      "Domykanie drzwi",
      "Apple CarPlay",
      "Android Auto",
      "Reflektory LED",
      "Nawigacja satelitarna",
      "Ekran dotykowy",
      "Keyless Go",
      "Start/Stop bez kluczyka",
      "Sportowe fotele",
      "Podgrzewane fotele",
      "Pamięć ustawień fotela",
      "Kierownica sportowa skórzana",
      "Felgi aluminiowe 19 cali",
      "Zawieszenie sportowe",
      "System ostrzegania przed kolizją",
      "Asystent hamowania awaryjnego",
      "Rozpoznawanie znaków drogowych",
      "Wykrywanie zmęczenia kierowcy",
      "ABS", "ESP", "Isofix",
      "Poduszki powietrzne przód/bok/kurtyny",
      "Bezwypadkowy",
      "Dodatkowy komplet felg zimowych",
      "Gumowe dywaniki",
    ],
    description: "BMW 530i napęd tylny z 2023 roku w bardzo dobrym stanie technicznym i wizualnym. Samochód z niskim przebiegiem 23 000 km, użytkowany prywatnie. Generacja G30, Pakiet M, pełne wyposażenie premium. Klimatyzacja czterostrefowa, wszystkie systemy asystentów jazdy, tapicerka skórzana, sportowe fotele z pamięcią. W zestawie dodatkowy komplet aluminiowych felg zimowych oraz gumowe dywaniki. Samochód nie wymaga żadnego wkładu finansowego. Idealny dla osoby szukającej nowoczesnego, dynamicznego i komfortowego auta.",
    images: Array.from({ length: 26 }, (_, i) => `/cars/bmw-530i/${i + 1}.webp`),
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

  // Update document title and meta when car is selected
  useEffect(() => {
    if (selectedCar) {
      document.title = `${selectedCar.title} - ${selectedCar.price} | LXT Auto Handel`
      
      // Update OG meta tags dynamically
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDesc = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      const ogUrl = document.querySelector('meta[property="og:url"]')
      
      if (ogTitle) ogTitle.setAttribute('content', `${selectedCar.title} - ${selectedCar.price}`)
      if (ogDesc) ogDesc.setAttribute('content', selectedCar.description)
      if (ogImage && selectedCar.images[0]) ogImage.setAttribute('content', selectedCar.images[0])
      if (ogUrl) ogUrl.setAttribute('content', `https://lxt.pl/auto-handel#${selectedCar.slug}`)
    } else {
      document.title = "Auto Handel Białystok | LXT Centrum Motoryzacyjne"
    }
  }, [selectedCar])

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
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="text-2xl font-bold text-green-600">{car.price}</p>
                </div>

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
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-green-600">{selectedCar.price}</p>
              <span className="px-3 py-1 bg-accent text-white rounded-full text-sm font-semibold">
                {selectedCar.saleType}
              </span>
            </div>

            {/* Main Specs Grid */}
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
              {selectedCar.drive && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NAPĘD</p>
                  <p className="font-bold text-primary">{selectedCar.drive}</p>
                </div>
              )}
              {selectedCar.bodyType && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NADWOZIE</p>
                  <p className="font-bold text-primary">{selectedCar.bodyType}</p>
                </div>
              )}
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border">
              {selectedCar.color && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">KOLOR</p>
                  <p className="font-bold text-primary">{selectedCar.color}</p>
                </div>
              )}
              {selectedCar.doors && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">DRZWI</p>
                  <p className="font-bold text-primary">{selectedCar.doors}</p>
                </div>
              )}
              {selectedCar.seats && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">MIEJSCA</p>
                  <p className="font-bold text-primary">{selectedCar.seats}</p>
                </div>
              )}
              {selectedCar.country && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">POCHODZENIE</p>
                  <p className="font-bold text-primary">{selectedCar.country}</p>
                </div>
              )}
              {selectedCar.accidentFree && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">BEZWYPADKOWY</p>
                  <p className="font-bold text-green-600">Tak</p>
                </div>
              )}
              {selectedCar.ocValid && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">OC WAŻNE DO</p>
                  <p className="font-bold text-primary">{selectedCar.ocValid}</p>
                </div>
              )}
              {selectedCar.techValid && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">PRZEGLĄD DO</p>
                  <p className="font-bold text-primary">{selectedCar.techValid}</p>
                </div>
              )}
              {selectedCar.regNumber && (
                <div>
                  <p className="text-xs text-muted-foreground mb-1">NR REJESTR.</p>
                  <p className="font-bold text-primary">{selectedCar.regNumber}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6 pb-6 border-b border-border">
              <p className="font-bold text-primary mb-3">Opis:</p>
              <p className="text-muted-foreground leading-relaxed">{selectedCar.description}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="font-bold text-primary mb-3">Wyposażenie i cechy:</p>
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
