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
  const menuCategories = [
    {
      category: 'Antipasti',
      items: [
        { name: 'Pizza Brot', description: 'mit Napoli Sauce', price: '€5,90', allergens: 'A' },
        { name: 'Pizza Brot mit Käse', description: 'mit Provola DOP Affumicata', price: '€6,90', allergens: 'AG' },
        { name: 'Maze Mix', description: 'zur Auswahl: Hummus, Muhammara, Mutabal, Labneh, Zeyton', price: '€14,50', allergens: 'ANG' },
        { name: 'Hummus', description: 'Kichererbsen-Dip', price: '€5,50', allergens: 'NG' },
        { name: 'Muhammara', description: 'Paprika-Walnuss-Dip', price: '€5,50', allergens: 'NG' },
        { name: 'Mutabal', description: 'Auberginen-Dip', price: '€5,50', allergens: 'NG' },
        { name: 'Labneh', description: 'Joghurt-Dip', price: '€5,50', allergens: 'G' },
        { name: 'Zeyton', description: 'Oliven', price: '€4,50', allergens: '' },
      ]
    },
    {
      category: 'Salat',
      items: [
        { name: 'Gemischter Salat', description: 'Frischer gemischter Salat', price: '€6,50', allergens: '' },
        { name: 'Burrata Salat', description: 'Mit cremiger Burrata', price: '€8,90', allergens: 'G' },
        { name: 'Mozzarella Salat', description: 'Mit frischem Mozzarella', price: '€8,90', allergens: 'G' },
        { name: 'Fatusch Salat', description: 'Orientalischer Salat', price: '€8,90', allergens: 'G' },
      ]
    },
    {
      category: 'Pizza',
      items: [
        { name: 'Regina Margherita', description: 'San Marzano DOP, Fior di Latte, frischer Basilikum, Parmesan', price: '€9,50', allergens: 'AG' },
        { name: 'Marinara (vegan)', description: 'San Marzano DOP, Olivenöl, Oregano', price: '€8,50', allergens: 'AG' },
        { name: 'Salami', description: 'San Marzano DOP, Fior di Latte, Salami', price: '€11,50', allergens: 'AG' },
        { name: 'Siciliana', description: 'San Marzano DOP, Sardellen, Olivenöl, Oregano, Kapern, Oliven', price: '€13,00', allergens: 'AGD' },
        { name: 'Quattro Formaggi', description: 'Taleggio DOP, Crema di Mozzarella, Gorgonzola, Provola Affumicata, Parmesan Chips, Walnüsse', price: '€13,50', allergens: 'AGEH' },
        { name: 'Capricciosa', description: 'San Marzano DOP, Fior di Latte, Prosciutto, Oliven, Schinken, Champignons, Artischocken', price: '€13,00', allergens: 'AG' },
        { name: 'Caprese', description: 'Mozzarella Creme, Fior di Latte, Cherry Tomaten, Basilikum, Parmesan, Olivenöl', price: '€12,00', allergens: 'AG' },
        { name: 'Ricotta Spinaci', description: 'Ricotta, Pfeffer, Parmesan, Olivenöl, Spinat, Granatapfel Sirup', price: '€12,50', allergens: 'AG' },
        { name: 'Detox', description: 'Parmesan Creme, gemischte gegrillte Gemüse, Oregano', price: '€12,00', allergens: 'AG' },
        { name: 'Tonno e Magia', description: 'San Marzano DOP, Fior di Latte, Tonno, karamellisierte Zwiebel, Olivenbrösel', price: '€12,50', allergens: 'AGD' },
        { name: 'Bresaola Lovers', description: 'San Marzano DOP, Fior di Latte, Rucola, Bresaola, Parmesan', price: '€13,00', allergens: 'AG' },
        { name: 'Colorata', description: 'San Marzano DOP, Fior di Latte, Gorgonzola, Paprika, Zucchini, Gemüse Creme', price: '€12,00', allergens: 'AG' },
        { name: 'Mago dei Cuori', description: 'San Marzano DOP, Fior di Latte, Burrata, getrocknete Tomaten, Rucola', price: '€13,50', allergens: 'AG' },
        { name: 'Burrata e Pistacchio', description: 'Pistacchio Paste DOP, Fior di Latte, Burrata', price: '€13,50', allergens: 'AGE' },
        { name: 'Giardiniera', description: 'San Marzano DOP, Fior di Latte, Rucola, Cherry Tomaten', price: '€12,50', allergens: 'AG' },
        { name: 'Diavolo', description: 'San Marzano DOP, Fior di Latte, Salami, Schinken', price: '€12,50', allergens: 'AG' },
        { name: 'Prosciutto e Funghi', description: 'San Marzano DOP, Fior di Latte, Prosciutto, Champignons, Basilikum, Parmesan', price: '€12,50', allergens: 'AG' },
        { name: 'Parmigiana e Fumo', description: 'San Marzano DOP, Parmigiana di Melanzane, Provola Affumicata, Basilikum Creme', price: '€12,50', allergens: 'AG' },
        { name: 'Pesto e Fumo', description: 'Pesto alla Genovese, Provola Affumicata, Cherry Tomaten, Pinien', price: '€13,50', allergens: 'AGE' },
        { name: 'Quattro Stagioni', description: 'San Marzano DOP, Fior di Latte, Champignons, Artischocken, Schinken, Salami', price: '€13,50', allergens: 'AGE' },
        { name: 'Gennaro', description: 'San Marzano DOP, Fior di Latte, Salami, Melanzani, Parmesan, Olivenöl', price: '€12,90', allergens: 'AGE' },
        { name: 'Pizza Vegano', description: 'San Marzano DOP, Champignons, Paprika, Spinat', price: '€11,90', allergens: 'AG' },
        { name: "Mago d'Oriente", description: 'Kräutermix mit Sesam, Fior di Latte, Olivenöl', price: '€10,90', allergens: 'AG' },
        { name: 'Calzone Classico', description: 'San Marzano DOP, Fior di Latte, Schinken, Basilikum, Ricotta, Parmesan', price: '€12,00', allergens: 'AG' },
      ]
    },
    {
      category: 'Dolce',
      items: [
        { name: 'Tiramisu des Tages', description: 'Hausgemachtes Tiramisu', price: '€4,90', allergens: 'G' },
        { name: 'Mohr im Hemd', description: 'Klassisches österreichisches Dessert', price: '€4,90', allergens: 'G' },
        { name: 'Pizza Nutella', description: 'Süße Pizza mit Nutella', price: '€7,90', allergens: 'AG' },
        { name: 'Dolce di Magia', description: 'Hausspezialität', price: '€5,90', allergens: '' },
      ]
    },
    {
      category: 'Kaffee & Tee',
      items: [
        { name: 'Espresso', description: 'Italienischer Espresso', price: '€2,90', allergens: '' },
        { name: 'Espresso Doppel', description: 'Doppelter Espresso', price: '€3,90', allergens: '' },
        { name: 'Verlängerter', description: 'Verlängerter Kaffee', price: '€3,80', allergens: '' },
        { name: 'Melange', description: 'Wiener Melange', price: '€3,50', allergens: '' },
        { name: 'Cappuccino', description: 'Klassischer Cappuccino', price: '€3,50', allergens: '' },
        { name: 'Latte Macchiato', description: 'Latte Macchiato', price: '€3,90', allergens: '' },
        { name: 'Schwarztee', description: 'Schwarzer Tee', price: '€3,50', allergens: '' },
        { name: 'Grüntee', description: 'Grüner Tee', price: '€3,50', allergens: '' },
      ]
    },
    {
      category: 'Getränke',
      items: [
        { name: 'Orangen Gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Apfel Gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Himbeer Gespritzt', description: '0,3l / 0,5l', price: '€2,40 / €3,50', allergens: '' },
        { name: 'Holunder Gespritzt', description: '0,3l / 0,5l', price: '€2,40 / €3,50', allergens: '' },
        { name: 'Soda', description: '0,25l / 0,5l', price: '€2,20 / €2,60', allergens: '' },
        { name: 'Soda Zitrone', description: '0,33l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Coca Cola / Light / Zero', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Fanta', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Almdudler', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Sprite', description: '0,33l', price: '€2,50', allergens: '' },
        { name: 'Red Bull', description: '0,25l', price: '€3,00', allergens: '' },
        { name: 'Eistee Pfirsich/Zitrone', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Frucade Orange', description: '0,33l', price: '€2,50', allergens: '' },
        { name: 'Alkoholfreies Bier/Radler', description: '0,33l', price: '€3,00', allergens: '' },
        { name: 'Wasser still/prickelnd', description: '0,5l', price: '€3,00', allergens: '' },
      ]
    },
  ];

  const reviews = [
    {
      name: 'Alexander',
      rating: 5,
      text: 'Sehr gute Pizza, der Teig wird 72 Stunden gereift, alle Zutaten sind Top und das schmeckt man auch. Die beiden Besitzer sind überaus freundlich und Preise fair. So gut war die Pizza!',
      image: '👨'
    },
    {
      name: 'Christoph Winter',
      rating: 5,
      text: 'Unfassbar köstliche Pizzen, den 72 Stunden gereiften Sauerteig schmeckt man deutlich raus. Die Zutaten sind erlesen und der Preis ist mehr als gerechtfertigt. Kommen definitiv wieder - Absolute Empfehlung.',
      image: '👨'
    },
    {
      name: 'Margit',
      rating: 5,
      text: 'Wir haben eine ganz wunderbare Pizza bekommen. Neapolitanischer Pizzateig mit einer Langzeitgare von 72 Stunden und authentische Beläge. Man merkt dem Besitzer an, dass er die Pizzeria mit großem Herzblut führt. Wir kommen sicher wieder!',
      image: '👩'
    },
    {
      name: 'Basslastiger',
      rating: 5,
      text: 'Wow!! Also ich war in ganz Italien, und überall hab ich Pizza gegessen, aber so noch nie!! Ein super freundlicher Besitzer, ein wunderbarer Koch... Geht hin und überzeugt Euch selbst!!! Das ist der Hammer!!!',
      image: '👨'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">🍕</span>
            <h1 className="text-xl font-bold text-foreground">Mago Dei Cuori</h1>
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
                Authentische Neapolitanische Pizza
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Mit Stolz bringen wir ein Stück Napoli nach Purkersdorf. Traditionelle Rezepte aus Neapel, zubereitet mit den besten Zutaten aus Italien.
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
              Willkommen bei Mago Dei Cuori
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In unserem Haus legen wir größten Wert auf die hohe Qualität unserer Zutaten und die Authentizität unserer Rezepte. Unser Teig wird nach den ältesten und bewährtesten Rezepten Italiens hergestellt.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir freuen uns besonders, Ihnen unsere Spezialität – die Pizza Neapolitana Contemporana – präsentieren zu dürfen. Besuchen Sie uns und erleben Sie echte italienische Gastfreundschaft.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mi-So: 11:00-14:30 & 17:00-21:00</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Wiener Straße 30, 3002 Purkersdorf</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+43 2231 20002</span>
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
              Authentische neapolitanische Pizza und mediterrane Köstlichkeiten
            </p>
          </div>

          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 border-b border-primary pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-4 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">
                        {item.name}
                        {item.allergens && (
                          <span className="text-xs text-muted-foreground ml-2 font-normal">
                            ({item.allergens})
                          </span>
                        )}
                      </h4>
                      <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 p-4 bg-secondary/50 rounded-lg text-sm text-muted-foreground">
            <p className="font-semibold mb-2">Allergene:</p>
            <p>A = Gluten, B = Krebstiere, C = Ei, D = Fisch, E = Erdnuss, F = Soja, G = Milch, H = Schalenfrüchte, L = Sellerie, M = Senf, N = Sesam, O = Sulfite, P = Lupinen, R = Weichtiere</p>
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
              Das sagen unsere zufriedenen Gäste über Mago Dei Cuori
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
                  Wiener Straße 30<br />
                  3002 Purkersdorf
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Öffnungszeiten</h3>
                <p className="text-muted-foreground text-sm">
                  Mo-Di: Geschlossen<br />
                  Mi-So: 11:00-14:30<br />
                  & 17:00-21:00
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-border">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Kontakt</h3>
                <p className="text-muted-foreground text-sm">
                  +43 2231 20002<br />
                  Magodeicuori@gmail.com
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
          <p className="mb-2">© 2025 Mago Dei Cuori. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75 mb-2">
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 20002
          </p>
          <p className="text-sm opacity-75">
            Authentische neapolitanische Pizza in Purkersdorf
          </p>
        </div>
      </footer>
    </div>
  );
}
