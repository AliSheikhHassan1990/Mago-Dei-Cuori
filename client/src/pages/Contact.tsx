import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, ArrowLeft, Menu as MenuIcon, X, Mail } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#contact-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Zum Inhalt springen
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">🍕</span>
              <h1 className="text-xl font-bold text-foreground">Mago Dei Cuori</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Menü
            </Link>
            <Link
              href="/kontakt"
              className="text-primary font-medium"
            >
              Kontakt
            </Link>
            <a href="tel:+43223161633">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Reservieren
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-foreground hover:text-primary transition-colors py-2 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menü
              </Link>
              <Link
                href="/kontakt"
                className="text-primary py-2 text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <a href="tel:+43223161633" className="py-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Reservieren
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Back Button & Header */}
      <section className="pt-24 pb-8">
        <div className="container">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kontakt
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir freuen uns auf Ihren Besuch oder Ihre Nachricht
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section id="contact-content" className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3">Adresse</h3>
              <p className="text-muted-foreground">
                Wiener Straße 30<br />
                3002 Purkersdorf
              </p>
              <a
                href="https://maps.app.goo.gl/im36pPJAF6HpCsuB8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80 font-medium"
              >
                Route anzeigen
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3">Öffnungszeiten</h3>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Mo-Di:</span> Geschlossen<br />
                <span className="font-medium text-foreground">Mi-So:</span> 11:00-14:30<br />
                & 17:00-21:00
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all text-center">
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3">Telefon</h3>
              <a href="tel:+43223161633" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                +43 2231 61633
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:Magodeicuori@gmail.com" className="hover:text-primary transition-colors text-sm">
                  Magodeicuori@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reservierung
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reservieren Sie einen Tisch telefonisch oder per WhatsApp. Wir freuen uns auf Sie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+43223161633">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Anrufen
                </Button>
              </a>
              <a href="https://wa.me/436607213564" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-base w-full sm:w-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            So finden Sie uns
          </h2>
          <div className="rounded-xl overflow-hidden border-2 border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.5!2d16.1772!3d48.2069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da82c4c0e4e4d%3A0x1234567890abcdef!2sWiener%20Stra%C3%9Fe%2030%2C%203002%20Purkersdorf!5e0!3m2!1sde!2sat!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mago Dei Cuori Standort"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Folgen Sie uns
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bleiben Sie auf dem Laufenden und entdecken Sie unsere neuesten Kreationen
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://wa.me/436607213564"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/people/Mago-dei-Cuori/100087436517419/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] hover:bg-[#166FE5] text-white p-4 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/magodeicuori.pizzeria/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white p-4 rounded-full transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/im36pPJAF6HpCsuB8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4285F4] hover:bg-[#3367D6] text-white p-4 rounded-full transition-colors"
                aria-label="Google Maps"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 1.127.277 2.237.805 3.225l6.39 11.899c.091.171.268.279.462.279s.371-.108.462-.279l6.39-11.899c.528-.988.805-2.098.805-3.225C19.597 3.399 16.198 0 12 0zm0 11.37c-2.078 0-3.773-1.695-3.773-3.773S9.922 3.824 12 3.824s3.773 1.695 3.773 3.773-1.695 3.773-3.773 3.773z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-6">
        <div className="container text-center">
          <p className="mb-2">© 2025 Mago Dei Cuori. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75">
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 61633
          </p>
        </div>
      </footer>
    </div>
  );
}
