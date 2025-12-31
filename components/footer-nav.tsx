import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

interface FooterNavProps {
  currentPage: string
}

export function FooterNav({ currentPage }: FooterNavProps) {
  const navItems = [
    { label: "LXT Warsztat Samochodowy w Białymstoku", href: "/warsztat" },
    { label: "LXT Usługi Przewozowe w Białymstoku", href: "/transport" },
    { label: "LXT Wypożyczalnia Busów w Białymstoku", href: "/wypozyczalnia" },
    { label: "LXT Auto Handel w Białymstoku", href: "/auto-handel" },
  ]

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div>
            <img
              src="/images/chatgpt-20image-204-20gru-202025-2c-2016-33-11.png"
              alt="LXT Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground text-sm">
              LXT Centrum Motoryzacyjne - kompleksowe usługi dla Twojego pojazdu.
            </p>
          </div>

          {/* Services Navigation */}
          <div>
            <h3 className="font-bold text-primary mb-4">Usługi</h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      currentPage === item.href
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-primary mb-4">Kontakt</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Mail className="w-4 h-4" />
              <a href="mailto:biuro@lxt.pl" className="hover:text-primary transition-colors">
                biuro@lxt.pl
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 LXT Centrum Motoryzacyjne. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
