"use client"

export default function RaportPage() {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
        }
        @page { margin: 20mm; }
      `}</style>

      {/* Print Button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-[#1a3a5c] text-white rounded-lg font-semibold hover:bg-[#1a3a5c]/90 transition-colors shadow-lg"
        >
          Drukuj / Zapisz PDF
        </button>
      </div>

      {/* Document Container */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        
        {/* Header */}
        <header className="border-b-4 border-[#1a3a5c] pb-8 mb-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-[#1a3a5c] mb-2">RAPORT</h1>
              <h2 className="text-xl text-gray-600">z wykonanych prac</h2>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Nr dokumentu</div>
              <div className="text-lg font-semibold text-[#1a3a5c]">LXT/2026/01/001</div>
            </div>
          </div>
        </header>

        {/* Project Info Box */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500 mb-1">Klient</div>
              <div className="text-lg font-semibold text-[#1a3a5c]">LXT Centrum Motoryzacyjne</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Data raportu</div>
              <div className="text-lg font-semibold text-[#1a3a5c]">20 stycznia 2026</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Projekt</div>
              <div className="text-lg font-semibold text-[#1a3a5c]">Strona internetowa</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Status</div>
              <div className="inline-flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-lg font-semibold text-green-600">Zakończono</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[#1a3a5c] mb-4 pb-2 border-b border-gray-200">Spis treści</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-6 h-6 bg-[#1a3a5c] text-white text-sm rounded flex items-center justify-center">1</span>
              <span>Wypożyczalnia Busów</span>
              <span className="flex-1 border-b border-dotted border-gray-300 mx-2"></span>
              <span className="text-gray-500">str. 1</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-6 h-6 bg-[#1a3a5c] text-white text-sm rounded flex items-center justify-center">2</span>
              <span>Warsztat Samochodowy</span>
              <span className="flex-1 border-b border-dotted border-gray-300 mx-2"></span>
              <span className="text-gray-500">str. 1</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-6 h-6 bg-[#1a3a5c] text-white text-sm rounded flex items-center justify-center">3</span>
              <span>Auto Handel</span>
              <span className="flex-1 border-b border-dotted border-gray-300 mx-2"></span>
              <span className="text-gray-500">str. 2</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-6 h-6 bg-[#1a3a5c] text-white text-sm rounded flex items-center justify-center">4</span>
              <span>Car Painting</span>
              <span className="flex-1 border-b border-dotted border-gray-300 mx-2"></span>
              <span className="text-gray-500">str. 2</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="w-6 h-6 bg-[#1a3a5c] text-white text-sm rounded flex items-center justify-center">5</span>
              <span>Zmiany globalne</span>
              <span className="flex-1 border-b border-dotted border-gray-300 mx-2"></span>
              <span className="text-gray-500">str. 2</span>
            </div>
          </div>
        </section>

        {/* Section 1: Wypożyczalnia */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-[#1a3a5c] text-white text-lg font-bold rounded-lg flex items-center justify-center">1</span>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">Wypożyczalnia Busów</h3>
          </div>
          
          <div className="space-y-6 pl-13 ml-[52px]">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Zmiany wizualne</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Zmieniono tło wokół zdjęć samochodów na białe (wcześniej szare)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Zdjęcia dopasowane do rozmiaru boxa (object-contain)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Zaktualizowane zdjęcia pojazdów</h4>
              <p className="text-gray-600 text-sm mb-3">Podmieniono zdjęcia na nowe, zawierające wymiary przestrzeni ładunkowej:</p>
              <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-[#1a3a5c] text-white">
                    <tr>
                      <th className="text-left py-3 px-4">Pojazd</th>
                      <th className="text-left py-3 px-4">Wymiary przestrzeni ładunkowej</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="py-3 px-4 font-medium">Citroen Berlingo</td><td className="py-3 px-4">1800 x 1200 mm</td></tr>
                    <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Peugeot Boxer L1H1</td><td className="py-3 px-4">2670 x 1662 mm</td></tr>
                    <tr><td className="py-3 px-4 font-medium">Peugeot Boxer L2H2</td><td className="py-3 px-4">3120 x 1932 mm</td></tr>
                    <tr className="bg-gray-50"><td className="py-3 px-4 font-medium">Peugeot Boxer L3H2</td><td className="py-3 px-4">3700 x 1932 mm</td></tr>
                    <tr><td className="py-3 px-4 font-medium">Peugeot Boxer L4H2</td><td className="py-3 px-4">4050 x 1932 mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1a3a5c] mb-2">Dane kontaktowe</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Telefon:</span> 500 518 519</p>
                <p><span className="font-medium">Facebook:</span> facebook.com/profile.php?id=100063646367398</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Warsztat */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-[#1a3a5c] text-white text-lg font-bold rounded-lg flex items-center justify-center">2</span>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">Warsztat Samochodowy</h3>
          </div>
          
          <div className="space-y-6 pl-13 ml-[52px]">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Nowa struktura strony</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Dodano wstęp opisujący ofertę warsztatu w sekcji Hero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Dodano sekcję CTA "Masz problem z autem? Wpadnij do nas!" z przyciskiem "Umów wizytę"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Sekcja CTA przeniesiona pod listę usług</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Zaktualizowana lista usług</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Przeglądy", desc: "Przeglądy przed zakupem pojazdu" },
                  { name: "Hamulce", desc: "Naprawa/wymiana układów hamulcowych" },
                  { name: "Oleje/Filtry", desc: "Wymiana oleju i filtrów" },
                  { name: "Naprawy główne", desc: "Pasek rozrządu, sprzęgło, napędy" },
                  { name: "Zawieszenie", desc: "Układ napędowy, kierowniczy, amortyzatory" },
                  { name: "Diagnostyka", desc: "Diagnostyka komputerowa pojazdu" },
                ].map((service, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="font-semibold text-[#1a3a5c] text-sm">{service.name}</div>
                    <div className="text-xs text-gray-600">{service.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1a3a5c] mb-2">Dane kontaktowe</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Telefon:</span> 510 505 031</p>
                <p><span className="font-medium">Facebook:</span> facebook.com/profile.php?id=61550903500738</p>
                <p><span className="font-medium">Instagram:</span> instagram.com/lxt_warsztat/</p>
              </div>
            </div>
          </div>
        </section>

        {/* Page Break for Print */}
        <div className="page-break"></div>

        {/* Section 3: Auto Handel */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-[#1a3a5c] text-white text-lg font-bold rounded-lg flex items-center justify-center">3</span>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">Auto Handel</h3>
          </div>
          
          <div className="space-y-6 pl-13 ml-[52px]">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Nowe funkcjonalności</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700"><span className="font-medium">Galeria zdjęć</span> - okienko wyświetla teraz pełne zdjęcia na białym tle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700"><span className="font-medium">Unikalne linki do aut</span> - każde auto ma swój URL z hashem (np. /auto-handel#alfa-romeo-155)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700"><span className="font-medium">Przycisk kopiowania linku</span> - możliwość skopiowania i udostępnienia linku do konkretnego auta</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1a3a5c] mb-2">Dane kontaktowe</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Telefon:</span> 510 123 444</p>
                <p><span className="font-medium">Facebook:</span> facebook.com/profile.php?id=61579714484506</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Car Painting */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-[#1a3a5c] text-white text-lg font-bold rounded-lg flex items-center justify-center">4</span>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">Car Painting</h3>
          </div>
          
          <div className="space-y-6 pl-13 ml-[52px]">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Nowa podstrona</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Utworzono nową, kreatywną podstronę w ciemnej kolorystyce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Minimalistyczny design z głównym logiem LXT Car Painting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-gray-700">Formularz kontaktowy dostosowany do stylu strony</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#1a3a5c] p-4 rounded-r-lg">
              <h4 className="font-semibold text-[#1a3a5c] mb-2">Dane kontaktowe</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Telefon:</span> 510 123 444</p>
                <p><span className="font-medium">Instagram:</span> instagram.com/luxcarpainting/</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Global Changes */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-10 bg-[#1a3a5c] text-white text-lg font-bold rounded-lg flex items-center justify-center">5</span>
            <h3 className="text-2xl font-bold text-[#1a3a5c]">Zmiany globalne</h3>
          </div>
          
          <div className="space-y-6 pl-13 ml-[52px]">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Stopka (footer)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Zastąpiono "Usługi przewozowe" na "LXT Car Painting"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Dodano informację o wykonawcy strony z linkiem dofollow</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">SEO i techniczne</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Dodano favicon (favicon.ico)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Dodano sitemap.xml</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Dodano robots.txt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">●</span>
                    <span className="text-gray-700">Zaktualizowano metadane SEO</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Google Maps</h4>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700">Na każdej podstronie mapa zawiera link bezpośredni do profilu Google:</p>
                <code className="text-xs text-[#1a3a5c] bg-white px-2 py-1 rounded mt-2 inline-block border">
                  https://share.google/UrFQFNGYi6Iu4LuTA
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section className="bg-gradient-to-r from-[#1a3a5c] to-[#2a4a6c] text-white rounded-xl p-8 mb-10">
          <h3 className="text-xl font-bold mb-4">Podsumowanie</h3>
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-white/70">Podstron</div>
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm text-white/70">Pojazdów w wypożyczalni</div>
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm text-white/70">Usług warsztatu</div>
            </div>
            <div>
              <div className="text-3xl font-bold">6</div>
              <div className="text-sm text-white/70">Aut w handlu</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-gray-200 pt-8 mt-12">
          <div className="flex justify-between items-end">
            <div className="text-sm text-gray-500">
              <p>Dokument wygenerowany: 20 stycznia 2026</p>
              <p>LXT Centrum Motoryzacyjne - Raport z prac</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400 mb-1">Wykonawca</div>
              <a 
                href="https://seoholic.pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-bold text-[#1a3a5c] hover:underline"
              >
                seoholic.pl
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}
