"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  X,
  Facebook,
  Instagram,
  ExternalLink,
  Fuel,
  Gauge,
  Package,
} from "lucide-react"
import { FooterNav } from "@/components/footer-nav"

export default function WypozyczalniaPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const vehicles = [
    {
      name: "Citroen Berlingo",
      image: "/images/citroen-20belingo.jpg",
      dimensions: "1800 x 1200 mm",
      power: "90 KM",
      fuel: "7,1 l/100km",
      capacity: "900 kg",
      pricing: [
        { period: "1-7 dni", price: "150 PLN" },
        { period: "8-14 dni", price: "140 PLN" },
        { period: "ponad 15 dni", price: "120 PLN" },
        { period: "miesiąc", price: "3000 PLN" },
      ],
      deposit: "500 PLN",
    },
    {
      name: "Peugeot Boxer L1H1",
      image: "/images/peugeot-20boxer-20l1h1.jpg",
      dimensions: "2670 x 1662 mm",
      power: "110 KM",
      fuel: "7,9 l/100km",
      capacity: "1155 kg",
      pricing: [
        { period: "1-7 dni", price: "240 PLN" },
        { period: "8-14 dni", price: "220 PLN" },
        { period: "ponad 15 dni", price: "200 PLN" },
        { period: "miesiąc", price: "4000 PLN" },
      ],
      deposit: "500 PLN",
    },
    {
      name: "Peugeot Boxer L2H2",
      image: "/images/peugeot-20boxer-20l2h2.jpg",
      dimensions: "3120 x 1932 mm",
      power: "120 KM",
      fuel: "9,1 l/100km",
      capacity: "1375 kg",
      pricing: [
        { period: "1-7 dni", price: "260 PLN" },
        { period: "8-14 dni", price: "250 PLN" },
        { period: "ponad 15 dni", price: "230 PLN" },
        { period: "miesiąc", price: "4500 PLN" },
      ],
      deposit: "500 PLN",
    },
    {
      name: "Peugeot Boxer L3H2",
      image: "/images/peugeot-20boxer-20l3h2.jpg",
      dimensions: "3700 x 1932 mm",
      power: "190 KM",
      fuel: "9,3 l/100km",
      capacity: "1300 kg",
      pricing: [
        { period: "1-7 dni", price: "270 PLN" },
        { period: "8-14 dni", price: "260 PLN" },
        { period: "ponad 15 dni", price: "240 PLN" },
        { period: "miesiąc", price: "4750 PLN" },
      ],
      deposit: "500 PLN",
    },
    {
      name: "Peugeot Boxer L4H2",
      image: "/images/peugeot-20boxer-20l4h2.jpg",
      dimensions: "4050 x 1932 mm",
      power: "220 KM",
      fuel: "9,3 l/100km",
      capacity: "1300 kg",
      pricing: [
        { period: "1-7 dni", price: "280 PLN" },
        { period: "8-14 dni", price: "270 PLN" },
        { period: "ponad 15 dni", price: "250 PLN" },
        { period: "miesiąc", price: "5000 PLN" },
      ],
      deposit: "500 PLN",
    },
    {
      name: "Mercedes Vito Tourer",
      image: "https://moredigi.stronazen.pl/lxt/wp-content/uploads/2025/05/mercedes.jpg",
      dimensions: "8-osobowy",
      power: "114 KM",
      fuel: "-",
      capacity: "-",
      pricing: [
        { period: "1-3 dni", price: "350 PLN" },
        { period: "3-7 dni", price: "300 PLN" },
        { period: "ponad 7 dni", price: "250 PLN" },
        { period: "miesiąc", price: "5000 PLN" },
      ],
      deposit: "500 PLN",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
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
              href="https://www.facebook.com/profile.php?id=100063646367398"
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
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-primary">Wypożyczalnia Busów</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Zarezerwuj busa
              </button>
              <a
                href="#fleet"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Zobacz ofertę
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Cennik</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ostateczna cena ustalana jest indywidualnie w zależności od ilości kilometrów. Podane kwoty są cenami
              brutto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-accent transition-all duration-300 group"
              >
                {/* Vehicle Image */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-48 bg-white border border-border flex items-center justify-center">
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="max-w-full max-h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                </div>

                <h4 className="text-2xl font-bold text-primary mb-4">{vehicle.name}</h4>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-card rounded-lg border border-border/50">
                  <div className="text-center">
                    <Gauge className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground mb-1">Moc</p>
                    <p className="text-sm font-semibold text-primary">{vehicle.power}</p>
                  </div>
                  <div className="text-center">
                    <Fuel className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground mb-1">Spalanie</p>
                    <p className="text-sm font-semibold text-primary">{vehicle.fuel}</p>
                  </div>
                  <div className="text-center">
                    <Package className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground mb-1">Ładowność</p>
                    <p className="text-sm font-semibold text-primary">{vehicle.capacity}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  {vehicle.pricing.map((price, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-sm text-muted-foreground">{price.period}</span>
                      <span className="text-sm font-bold text-primary">{price.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 pt-3">
                    <span className="text-sm font-semibold text-primary">Kaucja</span>
                    <span className="text-sm font-bold text-accent">{vehicle.deposit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">O nas</h3>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Firma LUX TRANS powstała w 2015 roku. Naszą specjalizacją oprócz wynajmu aut dostawczych jest transport
              drogowy towarów, a w szczególności dystrybucja przesyłek kurierskich oraz gabarytowych.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Doświadczenie jakie zdobyliśmy w tej wymagającej branży pozwala nam lepiej zrozumieć potrzeby klientów i
              wyjść naprzeciw ich oczekiwaniom. Jako jedyni umożliwiamy wynajem auta wraz z kierowcą.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Dane Kontaktowe</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">Adres</p>
                  <p className="text-muted-foreground">
                    Octowa 3a
                    <br />
                    15-399 Białystok, Polska
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-primary mb-1">Godziny otwarcia</p>
                  <p className="text-muted-foreground">
                    Pn-Pt: 08:00 - 16:00
                    <br />
                    (możliwość umówienia na inną godzinę)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-64 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.3689893789046!2d23.157139!3d53.1302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff84ba8f9a1fb%3A0x1!2sOctowa%203a%2C%2015-399%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://share.google/UrFQFNGYi6Iu4LuTA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
              >
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Otwórz w Google Maps</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-background rounded-xl border border-border max-w-md w-full p-8 relative">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-primary mb-6">Wynajmij busa</h3>

            <div className="space-y-4">
              <a
                href="tel:+48500518519"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold text-primary">500 518 519</p>
                </div>
              </a>

              <a
                href="mailto:biuro@lxt.pl"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-primary">biuro@lxt.pl</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <FooterNav currentPage="wypozyczalnia" />
    </main>
  )
}
