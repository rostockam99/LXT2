# Specyfikacja Techniczna - LXT Centrum Motoryzacyjne

## 1. Informacje ogólne

**Nazwa projektu:** LXT Centrum Motoryzacyjne - Strona internetowa  
**Technologia:** Next.js 16 (App Router), React 19.2, TypeScript, Tailwind CSS v4  
**Środowisko:** Vercel (deployment platform)  
**Data utworzenia:** Grudzień 2025  
**Wersja:** 1.0

---

## 2. Architektura projektu

### 2.1 Struktura katalogów

```
lxt-website/
├── app/
│   ├── layout.tsx                 # Root layout z metadanymi globalnymi
│   ├── page.tsx                   # Strona główna (home)
│   ├── globals.css                # Style globalne (Tailwind CSS v4)
│   ├── warsztat/
│   │   ├── page.tsx               # Podstrona Warsztat Samochodowy
│   │   └── metadata.ts            # SEO metadata dla warsztatu
│   ├── car-painting/
│   │   ├── page.tsx               # Podstrona Car Painting (ciemna wersja)
│   │   └── metadata.ts            # SEO metadata dla car painting
│   ├── wypozyczalnia/
│   │   ├── page.tsx               # Podstrona Wypożyczalnia Busów
│   │   └── metadata.ts            # SEO metadata dla wypożyczalni
│   └── auto-handel/
│       ├── page.tsx               # Podstrona Auto Handel z galerią
│       └── metadata.ts            # SEO metadata dla auto handlu
├── components/
│   ├── footer-nav.tsx             # Komponenty nawigacji stopki
│   └── faq-accordion.tsx          # (opcjonalny) komponent FAQ
├── public/
│   ├── favicon.ico                # Favicon ICO (preferowany)
│   ├── favicon.png                # Favicon PNG (backup)
│   ├── sitemap.xml                # Mapa strony dla SEO
│   ├── robots.txt                 # Konfiguracja dla robotów wyszukiwarek
│   ├── images/
│   │   ├── lxtcarpainting.png     # Logo Car Painting
│   │   └── chatgpt-20image...png  # Logo LXT
│   └── cars/
│       ├── a1.webp - a3.webp      # Fiat Scudo 
│       ├── b1.webp - b5.webp      # Alfa Romeo 
│       ├── c1.webp - c4.webp      # Honda Civic 
│       ├── d1.webp - d3.webp      # Citroën Jumper 
│       ├── e1.webp - e4.webp      # Mercedes Vito 
│       └── f1.webp - f3.webp      # Land Rover 
├── SPECYFIKACJA_STRONY_LXT.md     # Ten dokument
├── WYCENA_PROJEKTU_LXT.md         # Dokument z wyceną
└── package.json                   # Dependencje projektu

```

### 2.2 Główne technologie

| Technologia | Wersja | Zastosowanie |
|------------|--------|--------------|
| **Next.js** | 16.x | Framework React z SSR/SSG |
| **React** | 19.2 | Biblioteka UI |
| **TypeScript** | 5.x | Bezpieczne typowanie |
| **Tailwind CSS** | v4 | Styling (nowa wersja inline @theme) |
| **Lucide React** | Latest | Ikony SVG |
| **Vercel** | - | Hosting i deployment |

---

## 3. Funkcjonalności strony

### 3.1 Strona główna (Home Page)

#### Funkcje:
- **Splash screen z animacją**: Logo LXT + napis "Centrum Motoryzacyjne" (700ms), następnie pojawiają się 4 kafelki (1300ms)
- **Dwie wersje kolorystyczne**: Switch do przełączania między wersją kolorową (gradienty) a firmową (navy blue + białe kafelki)
- **4 kafelki nawigacyjne**:
  - Warsztat Samochodowy (ikona klucza)
  - Car Painting (ikona pędzla)
  - Wypożyczalnia Busów (ikona delivery van)
  - Auto Handel (ikona auta)
- **Responsywność**: Desktop (grid 2x2), Mobile (vertical scroll)
- **Footer z social media**: Facebook, Instagram, email (biuro@lxt.pl)

#### Techniczne:
- useState dla animacji i przełącznika kolorów
- Tailwind classes z responsive breakpoints (md:, lg:)
- Z-index management dla hover effects na kafelkach

#### SEO:
- Title: "LXT Centrum Motoryzacyjne | Warsztat, Wypożyczalnia, Auto Handel, Car Painting"
- Keywords: warsztat samochodowy białystok, mechanik białystok, wypożyczalnia aut białystok, lxt, lxt centrum motoryzacyjne
- Description: LXT Centrum Motoryzacyjne w Białymstoku – warsztat samochodowy, doświadczony mechanik, wypożyczalnia aut, auto handel i lakiernia. Sprawdź ofertę!


---

### 3.2 Warsztat Samochodowy

#### Funkcje:
- **Hero section**: Tytuł + CTA przyciski (Skontaktuj się, Nasze usługi)
- **12 usług** podzielonych na 2 kategorie:
  - Główne (6): Przeglądy, Hamulce, Oleje/Filtry, Klimatyzacja, Zawieszenie, Diagnostyka
  - Dodatkowe (6): CB Radio, Wideo rejestratory, Kamery cofania, Czujniki parkowania, Czujniki martwego pola, Wymiana opon
- **Galeria**: 4 placeholder obrazy warsztatu
- **Mapa Google Maps**: Embedded + link do profilu (Octowa 3a, Białystok)
- **Modal kontaktowy**: Telefon (510 505 031), Email (biuro@lxt.pl)
- **Social media**: Facebook, Instagram w nawigacji

#### SEO:
- Title: "Warsztat Samochodowy Białystok - LXT | Przeglądy, Diagnostyka, Naprawy"
- Keywords: warsztat samochodowy białystok, mechanik białystok, przeglądy, diagnostyka, naprawa samochodu
- Description: Profesjonalny warsztat w Białymstoku z kompleksowym serwisem

---

### 3.3 Car Painting

#### Funkcje:
- **Ciemny design**: Czarne tło, czerwono-pomarańczowe akcenty
- **Logo artystyczne**: Duże logo LXT CAR PAINTING z białym autem
- **Minimalistyczna treść**: Krótki opis + dane kontaktowe
- **Modal kontaktowy**: Telefon (510 123 444), Instagram (luxcarpainting)
- **Ciemna stopka**: Dopasowana do kolorystyki strony

#### Techniczne:
- Gradient backgrounds (red to orange)
- Dark mode styling
- Artystyczny charakter (grunge text, dynamic colors)

---

### 3.4 Wypożyczalnia Busów

#### Funkcje:
- **Hero section**: Tytuł + CTA (Zarezerwuj busa, Zobacz ofertę)
- **6 pojazdów z cennikiem**:
  - Citroen Berlingo
  - Peugeot Boxer L1H1, L2H2, L3H2, L4H2
  - Mercedes Vito Tourer
- **Dane techniczne każdego pojazdu**: Moc, Spalanie, Ładowność, Cennik (1-7 dni, 8-14 dni, 15+ dni, miesiąc), Kaucja
- **Sekcja "O nas"**: Historia firmy (LUX TRANS od 2015)
- **Mapa Google Maps**: Embedded + link
- **Modal kontaktowy**: Telefon (500 518 519), Email (biuro@lxt.pl)
- **Social media**: Facebook wypożyczalni

#### SEO:
- Title: "Wypożyczalnia Aut Białystok - LXT | Wynajem Aut Dostawczych i Osobowych"
- Keywords: wypożyczalnia aut białystok, wynajem aut dostawczych, wypożyczalnia aut osobowych, wypożyczalnia busów białystok, wypożyczalnia białystok
- Description: Profesjonalny wynajem aut osobowych busów i pojazdów dostawczych

---

### 3.5 Auto Handel

#### Funkcje:
- **Hero section**: Tytuł + opis oferty
- **6 samochodów z pełnymi danymi**:
  1. Fiat Scudo 2008 (10 325 zł NETTO) -
  2. Alfa Romeo 155 (27 500 zł) - 
  3. Honda Civic VIII (12 500 zł) - 
  4. Citroën Jumper (39 700 PLN) - 
  5. Mercedes Vito (72 500 PLN) - 
  6. Land Rover Discovery (77 900 PLN) - 
- **System galerii**: Nawigacja między zdjęciami (strzałki, thumbnails, licznik)
- **Modal szczegółów**: Pełne dane techniczne, opis, wyposażenie, kontakt
- **Kliknięcie poza modal**: Zamyka okienko
- **Modal kontaktowy**: Telefon (510 123 444), Email, Facebook Auto Handel

#### Techniczne:
- useState dla selectedCar i currentImageIndex
- Image gallery z ChevronLeft/Right
- Thumbnail strip z active state
- onClick outside to close modal

#### SEO:
- Title: "Auto Handel Białystok - LXT | Samochody Używane na Sprzedaż"
- Keywords: auto handel białystok, samochody używane, sprzedaż aut, kupię auto białystok
- Description: Sprawdzone samochody używane w atrakcyjnych cenach do kupienia w Białymstoku

---

## 4. SEO i Analytics

### 4.1 Metadane (Metadata)

Każda podstrona ma dedykowany plik `metadata.ts` z:
- **title**: Tytuł widoczny w zakładce przeglądarki i wynikach Google
- **description**: Meta opis (160-180 znaków)
- **keywords**: Słowa kluczowe (10-15 fraz)
- **openGraph**: Dane dla social media (Facebook, LinkedIn)
- **robots**: Indeksowanie (index, follow)
- **alternates**: Canonical URL

### 4.2 Sitemap.xml

Plik `/public/sitemap.xml` zawiera:
- Wszystkie 5 stron (home, warsztat, car-painting, wypozyczalnia, auto-handel)
- Priorytety (0.8-1.0)
- Częstotliwości aktualizacji (weekly/monthly)
- Daty ostatnich modyfikacji

### 4.3 Robots.txt

Plik `/public/robots.txt` umożliwia:
- Pełne indeksowanie przez wszystkie roboty
- Wskazanie lokalizacji sitemap.xml
- Brak blokad (allow all)

### 4.4 Google Analytics (do implementacji)


### 4.5 Google Search Console (do implementacji)


---

## 5. Design System

### 5.1 Kolory (Tailwind CSS v4)

**Paleta firmowa:**
```css
--color-primary: 28.6 68.9% 20.5%;        /* Navy Blue #1a3a5c */
--color-accent: 354.4 70.9% 49.6%;        /* Red #c41e3a */
--color-gold: 43.2 74.4% 52.4%;           /* Gold #d4af37 */
--color-background: 0 0% 100%;            /* White */
--color-foreground: 240 10% 3.9%;         /* Dark text */
```

**Wersja ciemna (Car Painting):**
```css
--color-background: 0 0% 0%;              /* Black */
--color-foreground: 0 0% 100%;            /* White text */
--color-accent: 14 100% 57%;              /* Orange-Red */
```

### 5.2 Typografia

**Czcionki:**
- **Sans**: Geist (Google Fonts)
- **Mono**: Geist Mono

**Rozmiary:**
- Headings: 3xl-6xl (48px-72px)
- Body: base-lg (16px-18px)
- Small: sm-xs (12px-14px)

### 5.3 Spacing

- Container: `max-w-7xl mx-auto`
- Sections: `py-20 px-4`
- Cards: `p-6 rounded-xl`
- Gap: `gap-4, gap-6, gap-8`

---

## 6. Responsywność

### 6.1 Breakpoints

| Device | Width | Breakpoint |
|--------|-------|------------|
| Mobile | <768px | Default |
| Tablet | 768px+ | `md:` |
| Desktop | 1024px+ | `lg:` |
| Large | 1280px+ | `xl:` |

### 6.2 Layout adaptations

**Home Page:**
- Desktop: Grid 2x2 (pełny ekran)
- Mobile: Vertical scroll (każdy kafelek 20-25vh)

**Podstrony:**
- Desktop: 2-3 kolumny (services, vehicles, cars)
- Tablet: 2 kolumny
- Mobile: 1 kolumna

**Navigation:**
- Desktop: Logo center, back left, social right (h-16)
- Mobile: Compact version (h-14, smaller icons)

---

## 7. Performance

### 7.1 Optymalizacje

- **Next.js Image**: Automatyczna optymalizacja obrazów
- **Lazy Loading**: Obrazy ładowane on-demand
- **Code Splitting**: Automatyczne dzielenie kodu per route
- **Static Generation**: Strony generowane podczas buildu
- **Edge Runtime**: Szybkie CDN delivery przez Vercel

---

### 8. Domena

**Konfiguracja domeny:**
1. Dodanie domeny na hostingu
2. Konfiguracja DNS records (A, CNAME)
3. SSL certificate 
4. Redirect www → non-www 

---

## 9. Serwisowanie i Aktualizacje

### 9.1 Regularne zadania

**Co miesiąc:**
- Sprawdzenie Google Analytics (ruch, konwersje)
- Przegląd Google Search Console (indeksowanie)
- Aktualizacja treści (nowe auta w Auto Handel)
- Aktualizacja bibliotek (npm update)
- Optymalizacja treści (usunięcie nieużywanych)
- SEO audit (keywords, rankings)


**Co rok:**
- Redesign (jeśli potrzebny)
- Migracja do nowej wersji Next.js

### 9.2 Monitoring

**Zalecane narzędzia:**
- **Google Analytics 4**: Zaawansowane metryki
- **Google Search Console**: SEO monitoring
