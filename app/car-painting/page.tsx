"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Phone, Mail, MapPin, Clock, Sparkles, X, Facebook, Instagram, ExternalLink } from "lucide-react"

export default function CarPaintingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const services = [
    {
      title: "Lakierowanie Pełne",
      description: "Kompletne malowanie pojazdu",
    },
    {
      title: "Detailing & Korekta",
      description: "Profesjonalna korekta lakieru",
    },
    {
      title: "Folie Ochronne",
      description: "PPF - ochrona lakieru",
    },
    {
      title: "Custom Painting",
      description: "Indywidualne projekty lakiernicze",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-white hover:text-red-500 transition-colors">
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
              className="text-white/70 hover:text-red-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/luxcarpainting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-red-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Logo */}
      <section className="relative pt-20 pb-12 px-4 overflow-hidden min-h-screen flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Hero Logo Image */}
          <div className="mb-12 flex justify-center">
            <img
              src="/images/lxtcarpainting.png"
              alt="LXT Car Painting"
              className="w-full max-w-2xl h-auto drop-shadow-2xl animate-float"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
            {"Cartoon Car Painting"}
          </h2>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group px-12 py-5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-xl font-bold text-xl transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-red-500/50 flex items-center gap-3 mx-auto"
          >
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Skontaktuj się
          </button>
        </div>
      </section>

      {/* Services Grid */}
      

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Skontaktuj się
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Adres</p>
                  <p className="text-gray-400">
                    Octowa 3a
                    <br />
                    15-399 Białystok, Polska
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white mb-1">Godziny otwarcia</p>
                  <p className="text-gray-400">
                    Pn-Pt: 08:00 - 18:00
                    <br />
                    Sob: 09:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border-2 border-red-900/30 h-64 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.3689893789046!2d23.157139!3d53.1302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ff84ba8f9a1fb%3A0x1!2sOctowa%203a%2C%2015-399%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://share.google/UrFQFNGYi6Iu4LuTA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/0 hover:bg-red-900/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                >
                  <div className="bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                    <ExternalLink className="w-4 h-4 text-white" />
                    <span className="text-sm font-semibold text-white">Otwórz w Google Maps</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-red-950/90 to-black border-2 border-red-900/50 rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-red-900/30 rounded-lg transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Kontakt
            </h3>

            <div className="space-y-4">
              <a
                href="tel:+48510123444"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-red-900/30 hover:border-red-500/50 hover:bg-red-900/20 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-400">Telefon</p>
                  <p className="font-semibold text-white">510 123 444</p>
                </div>
              </a>

              <a
                href="mailto:biuro@lxt.pl"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-red-900/30 hover:border-red-500/50 hover:bg-red-900/20 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold text-white">biuro@lxt.pl</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-900/30 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2025 LXT Car Painting. Wszystkie prawa zastrzeżone.</p>
          <a
            href="mailto:biuro@lxt.pl"
            className="text-red-500 hover:text-red-400 transition-colors text-sm mt-2 inline-block"
          >
            biuro@lxt.pl
          </a>
        </div>
      </footer>
    </main>
  )
}
