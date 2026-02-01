import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Design-Philosophie: Minimalistisch-Elegant mit Wärmtönen
 * - Authentizität durch Einfachheit
 * - Fotografie als Hauptelement
 * - Großzügiger Weißraum
 * - Subtile Animationen
 */

export default function Home() {
  const menuItems = [
    {
      name: 'Margherita',
      description: 'Klassische Pizza mit Mozzarella, Tomaten und frischem Basilikum',
      price: '€12,50'
    },
    {
      name: 'Quattro Formaggi',
      description: 'Vier Käsesorten: Mozzarella, Gorgonzola, Pecorino und Ricotta',
      price: '€14,50'
    },
    {
      name: 'Prosciutto e Rucola',
      description: 'Prosciutto di Parma, frische Rucola und Parmigiano-Reggiano',
      price: '€13,50'
    },
    {
      name: 'Diavola',
      description: 'Würzige Pizza mit Peperoni, Chili und Mozzarella',
      price: '€13,00'
    },
    {
      name: 'Carbonara',
      description: 'Guanciale, Pecorino Romano, Ei und schwarzer Pfeffer',
      price: '€14,00'
    },
    {
      name: 'Spaghetti Aglio e Olio',
      description: 'Klassische italienische Pasta mit Knoblauch und Olivenöl',
      price: '€9,50'
    }
  ];

  const reviews = [
    {
      name: 'Marco Rossi',
      rating: 5,
      text: 'Fantastische Pizza! Der Teig ist perfekt und die Zutaten sind hochwertig. Sehr zu empfehlen!',
      image: '👨'
    },
    {
      name: 'Giulia Ferrari',
      rating: 5,
      text: 'Das beste italienische Restaurant in der Stadt. Authentische Rezepte und wunderbare Atmosphäre.',
      image: '👩'
    },
    {
      name: 'Antonio Bianchi',
      rating: 5,
      text: 'Hervorragende Qualität und freundlicher Service. Ich komme gerne wieder!',
      image: '👨'
    },
    {
      name: 'Sofia Lombardi',
      rating: 5,
      text: 'Einfach köstlich! Die Pasta ist al dente und die Saucen sind selbstgemacht.',
      image: '👩'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">🍕</span>
            <h1 className="text-xl font-bold text-foreground">Bella Napoli</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menü</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Bewertungen</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-0 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
          {/* Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                Autentische Italienische Pizza
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Traditionelle Rezepte aus Neapel, zubereitet mit den besten Zutaten. Jede Pizza wird in unserem holzbefeuertem Ofen perfekt gebacken.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base">
                Reservierung
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-auto overflow-hidden">
            <img
              src="/images/hero-pizza.png"
              alt="Frische Pizza Margherita"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30"></div>
          </div>
        </div>
      </section>

      {/* Restaurant Interior Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <img
              src="/images/restaurant-interior.png"
              alt="Restaurant Innenraum"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-6 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Willkommen bei Bella Napoli
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Seit 1995 servieren wir authentische italienische Küche in einer warmen und einladenden Atmosphäre. Unser Holzofen wurde direkt aus Neapel importiert und verleiht unseren Pizzas den charakteristischen Geschmack und die perfekte Textur.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Jedes Gericht wird mit Liebe zum Detail zubereitet, unter Verwendung von frischen, hochwertigen Zutaten. Besuchen Sie uns und erleben Sie echte italienische Gastfreundschaft.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Täglich 11:00 - 23:00 Uhr</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Hauptstraße 42, 10115 Berlin</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+49 30 12345678</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Hochwertige Zutaten
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wir verwenden nur die besten Zutaten aus Italien. Unsere Tomaten kommen direkt aus Kampanien, der Mozzarella wird täglich frisch geliefert, und unser Olivenöl ist extra vergine aus der Toskana.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Frische San Marzano Tomaten
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Täglicher Mozzarella di Bufala
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Extra Vergine Olivenöl aus der Toskana
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Frische italienische Kräuter
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <img
                src="/images/ingredients.png"
                alt="Italienische Zutaten"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unser Menü
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wählen Sie aus unserer Auswahl an traditionellen italienischen Pizzas und Pasta-Gerichten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-primary">
                    {item.price}
                  </span>
                  <Button variant="outline" size="sm">
                    Wählen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pasta Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
            <img
              src="/images/pasta-dish.png"
              alt="Frische italienische Pasta"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-6 md:px-0">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Handgemachte Pasta
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Unsere Pasta wird täglich frisch zubereitet. Wir verwenden nur hochwertige italienische Mehlsorten und traditionelle Rezepte, um die authentische Textur und den Geschmack zu bewahren.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Von klassischen Saucen wie Carbonara und Bolognese bis zu modernen Kreationen – jedes Gericht ist ein Meisterwerk der italienischen Küche.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base">
              Pasta-Menü ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kundenbewertungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Das sagen unsere zufriedenen Gäste über Bella Napoli
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{review.image}</span>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Besuchen Sie uns
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Wir freuen uns auf Ihren Besuch. Reservieren Sie einen Tisch oder besuchen Sie uns spontan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg border border-border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground text-sm">
                  Hauptstraße 42<br />
                  10115 Berlin
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Öffnungszeiten</h3>
                <p className="text-muted-foreground text-sm">
                  Mo-Do: 11:00 - 23:00<br />
                  Fr-Sa: 11:00 - 00:00<br />
                  So: 12:00 - 23:00
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Kontakt</h3>
                <p className="text-muted-foreground text-sm">
                  +49 30 12345678<br />
                  info@bellanapoli.de
                </p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base">
              Reservierung anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container text-center">
          <p className="mb-2">© 2024 Bella Napoli. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75">
            Authentische italienische Küche seit 1995
          </p>
        </div>
      </footer>
    </div>
  );
}
