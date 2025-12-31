"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Gauge,
  Droplets,
  Wind,
  Cog,
  Search,
  Radio,
  Video,
  Eye,
  Radar,
  Target,
  Car,
  X,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react"
import { FooterNav } from "@/components/footer-nav"

export default function WarsztatPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const mainServices = [
    {
      title: "Przeglądy",
      description: "Przeglądy okresowe i diagnostyczne",
      icon: Search,
    },
    {
      title: "Hamulce",
      description: "Naprawa i wymiana układu hamulcowego",
      icon: Target,
    },
    {
      title: "Oleje/Filtry",
      description: "Wymiana olejów i filtrów",
      icon: Droplets,
    },
    {
      title: "Klimatyzacja",
      description: "Serwis i naprawa klimatyzacji",
      icon: Wind,
    },
    {
      title: "Zawieszenie",
      description: "Naprawa i diagnostyka zawieszenia",
      icon: Cog,
    },
    {
      title: "Diagnostyka",
      description: "Diagnostyka komputerowa pojazdu",
      icon: Gauge,
    },
  ]

  const additionalServices = [
    {
      title: "CB Radio",
      description: "Montaż i serwis CB radio",
      icon: Radio,
    },
    {
      title: "Wideo Rejestratory",
      description: "Instalacja kamer samochodowych",
      icon: Video,
    },
    {
      title: "Kamery Cofania",
      description: "Montaż systemów cofania",
      icon: Eye,
    },
    {
      title: "Czujniki Parkowania",
      description: "Instalacja czujników parkowania",
      icon: Radar,
    },
    {
      title: "Czujniki Martwego Pola",
      description: "System ostrzegania martwego pola",
      icon: Target,
    },
    {
      title: "Wymiana Opon",
      description: "Wymiana i wyważanie opon",
      icon: Car,
    },
  ]

  const galleryImages = [
    { title: "Stanowisko diagnostyczne", desc: "Nowoczesny sprzęt diagnostyczny" },
    { title: "Warsztat", desc: "Profesjonalna baza warsztatowa" },
    { title: "Diagnostyka", desc: "Urządzenia diagnostyczne" },
    { title: "Serwis", desc: "Kompleksowy serwis pojazdów" },
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
              href="https://www.facebook.com/profile.php?id=61550903500738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/lxt_warsztat/"
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
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-primary">Profesjonalny Warsztat</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Skontaktuj się
              </button>
              <a
                href="#services"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Nasze usługi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Nasze Usługi</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pełna gama usług serwisowych dla pojazdów osobowych i dostawczych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>

          {/* Additional Services */}
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-primary mb-2">Usługi Dodatkowe</h4>
            <p className="text-muted-foreground">Rozszerzamy funkcjonalność Twojego pojazdu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-6 bg-background rounded-xl border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/15 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Nasza Baza</h3>
            <p className="text-muted-foreground">Profesjonalna infrastruktura i nowoczesny sprzęt</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl h-64 bg-gradient-to-br from-primary/20 to-accent/20 border border-border hover:border-accent transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-bold">{image.title}</p>
                    <p className="text-sm text-white/80">{image.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-placeholder-pattern" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-primary mb-4">Dane Kontaktowe</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address & Hours */}
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
                    Pn-Pt: 07:00 - 17:00
                    <br />
                    Sob: 08:00 - 14:00
                    <br />
                    Nd: Zamknięte
                  </p>
                </div>
              </div>
            </div>

            {/* Map with Google Maps link */}
            <div className="space-y-4">
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

            <h3 className="text-2xl font-bold text-primary mb-6">Skontaktuj się z nami</h3>

            <div className="space-y-4">
              <a
                href="tel:+48510505031"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-semibold text-primary">510 505 031</p>
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

      {/* Footer */}
      <FooterNav currentPage="warsztat" />
    </main>
  )
}
