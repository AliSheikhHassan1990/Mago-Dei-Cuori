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
        { name: 'Hummus', description: '', price: '€5,50', allergens: 'NG' },
        { name: 'Muhammara', description: '', price: '€5,50', allergens: 'NG' },
        { name: 'Mutabal', description: '', price: '€5,50', allergens: 'NG' },
        { name: 'Labneh', description: '', price: '€5,50', allergens: 'G' },
        { name: 'Zeyton', description: '', price: '€4,50', allergens: '' },
      ]
    },
    {
      category: 'Salat',
      items: [
        { name: 'Gemischter Salat', description: '', price: '€6,50', allergens: '' },
        { name: 'Burrata Salat', description: '', price: '€8,90', allergens: 'G' },
        { name: 'Mozzarella Salat', description: '', price: '€8,90', allergens: 'G' },
        { name: 'Fatusch Salat', description: '', price: '€8,90', allergens: 'G' },
      ]
    },
    {
      category: 'Pizza (Klassiker)',
      items: [
        { name: 'Regina Margherita', description: 'San Marzano DOP, Fior di Latte, frischer Basilikum, Parmesan', price: '€9,50', allergens: 'AG' },
        { name: 'Marinara (vegan)', description: 'San Marzano DOP, Olivenöl, Oregano', price: '€8,50', allergens: 'AG' },
        { name: 'Salami', description: 'San Marzano DOP, Fior di Latte, Salami', price: '€11,50', allergens: 'AG' },
        { name: 'Siciliana', description: 'San Marzano DOP, Sardellen, Olivenöl, Oregano, Kapern, Oliven', price: '€13,00', allergens: 'AGD' },
        { name: 'Quattro Formaggi', description: 'Taleggio DOP, Crema di Mozzarella, Gorgonzola, Provola Affumicata, Parmesan Chips, Walnüsse', price: '€13,50', allergens: 'AGEH' },
        { name: 'Capricciosa', description: 'San Marzano DOP, Fior di Latte, Prosciutto, Oliven, Schinken, Champignons, Artischocken', price: '€13,00', allergens: 'AG' },
        { name: 'Caprese', description: 'Mozzarella Creme, Fior di Latte, Cherry Tomaten, Basilikum, Parmesan, Olivenöl', price: '€12,00', allergens: 'AG' },
        { name: 'Ricotta Spinaci', description: 'Ricotta, Pfeffer, Parmesan, Olivenöl, Spinat, Granatapfel Syrup', price: '€12,50', allergens: 'AG' },
        { name: 'Detox', description: 'Parmesan Creme, gemischte gegrillte Gemüse, Oregano', price: '€12,00', allergens: 'AG' },
        { name: 'Tonno e Magia', description: 'San Marzano DOP, Fior di Latte, Tonno, karamellisierte Zwiebel, Olivenbrösel', price: '€12,50', allergens: 'AGD' },
        { name: 'Bresaola Lovers', description: 'San Marzano DOP, Fior di Latte, Rucola, Bresaola, Parmesan', price: '€13,00', allergens: 'AGO' },
        { name: 'Colorata', description: 'San Marzano DOP, Fior di Latte, Gorgonzola, Paprika, Zucchini, Gemüse Creme', price: '€12,00', allergens: 'AG' },
        { name: 'Mago dei Cuori', description: 'San Marzano DOP, Fior di Latte, Burrata, getrocknete Tomaten, Rucola', price: '€13,50', allergens: 'AG' },
      ]
    },
    {
      category: 'Pizza (Weitere Sorten)',
      items: [
        { name: 'Burrata e Pistacchio', description: '', price: '€13,50', allergens: 'AGE' },
        { name: 'Giardiniera (Rucola)', description: '', price: '€12,50', allergens: 'AG' },
        { name: 'Diavolo', description: '', price: '€12,50', allergens: 'AG' },
        { name: 'Prosciutto e Funghi', description: '', price: '€12,50', allergens: 'AG' },
        { name: 'Parmigiana e Fumo', description: '', price: '€12,50', allergens: 'AG' },
        { name: 'Pesto e Fumo', description: '', price: '€13,50', allergens: 'AGE' },
        { name: 'Quattro Stagioni', description: '', price: '€13,50', allergens: 'AGE' },
        { name: 'Gennaro', description: '', price: '€12,90', allergens: 'AGE' },
        { name: 'Pizza Vegano', description: '', price: '€11,90', allergens: 'AG' },
        { name: "Mago d'Oriente", description: '', price: '€10,90', allergens: 'AG' },
        { name: 'Calzone Classico', description: '', price: '€12,00', allergens: 'AG' },
      ]
    },
    {
      category: 'Extras',
      items: [
        { name: 'Mozzarella, Gorgonzola, Ricotta, Pesto, Rucola, Parmesan Chips', description: '', price: '€2,00', allergens: '' },
        { name: 'Oliven, Kapern, Mais, Cherry Tomaten, Paprika, karamellisierte Zwiebel, Artischocken, Champignons, Spinat, Pfefferone, scharfe Peperoncini, Basilikum', description: '', price: '€1,50', allergens: '' },
        { name: 'Gegrillte Melanzani, gegrillte Zucchini', description: '', price: '€2,00', allergens: '' },
        { name: 'Thunfisch, Sardellen, Schinken, Salami', description: '', price: '€3,00', allergens: '' },
        { name: 'Knoblauch, Tabasco', description: '', price: '€1,00', allergens: '' },
      ]
    },
    {
      category: 'Getränke',
      items: [
        { name: 'Orangen gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Apfel gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Himbeer gespritzt', description: '0,3l / 0,5l', price: '€2,40 / €3,50', allergens: '' },
        { name: 'Hollunder gespritzt', description: '0,3l / 0,5l', price: '€2,40 / €3,50', allergens: '' },
        { name: 'Soda', description: '0,25l / 0,5l', price: '€2,20 / €2,60', allergens: '' },
        { name: 'Soda Zitrone', description: '0,33l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Coca Cola / Light / Zero', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Fanta', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Almdudler', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Sprite', description: '0,33l', price: '€2,50', allergens: '' },
        { name: 'Red Bull', description: '0,25l', price: '€3,00', allergens: '' },
        { name: 'Eistee Pfirsich-Zitrone', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Frucade Orange', description: '0,33l', price: '€2,50', allergens: '' },
        { name: 'Alkoholfreies Bier / Radler', description: '0,33l', price: '€3,00', allergens: '' },
        { name: 'Wasser still / prickelnd', description: '0,5l', price: '€3,00', allergens: '' },
      ]
    },
    {
      category: 'Kaffee / Tee',
      items: [
        { name: 'Espresso', description: '', price: '€2,90', allergens: '' },
        { name: 'Espresso doppelt', description: '', price: '€3,90', allergens: '' },
        { name: 'Verlängerter', description: '', price: '€3,80', allergens: '' },
        { name: 'Melange', description: '', price: '€3,50', allergens: '' },
        { name: 'Cappucino', description: '', price: '€3,50', allergens: '' },
        { name: 'Latte Macchiato', description: '', price: '€3,90', allergens: '' },
        { name: 'Schwarztee', description: '', price: '€3,50', allergens: '' },
        { name: 'Grüntee', description: '', price: '€3,50', allergens: '' },
      ]
    },
    {
      category: 'Dolce',
      items: [
        { name: 'Tiramisu des Tages', description: '', price: '€4,90', allergens: 'G' },
        { name: 'Mohr im Hemd', description: '', price: '€4,90', allergens: 'G' },
        { name: 'Pizza Nutella', description: '', price: '€7,90', allergens: 'AG' },
        { name: 'Dolce di Magia', description: '', price: '€5,90', allergens: '' },
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
              Sehr geehrte Gäste
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Herzlich willkommen in unserem Restaurant, wo die Aromen Italiens auf den Teller gebracht und kulinarische Geschichten erzählt werden. In unserem Haus legen wir größten Wert auf die hohe Qualität unserer Zutaten und die Authentizität unserer Rezepte, die das Herzstück unserer Küche bilden.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Unser Menü ist das Ergebnis einer sorgfältigen Auswahl hochwertigster Zutaten, die wir mit größter Sorgfalt und Respekt behandeln. Wir glauben fest daran, dass die Qualität eines Gerichts direkt mit der Herkunft seiner Zutaten verbunden ist. Deshalb beziehen wir unsere Produkte ausschließlich von vertrauenswürdigen Lieferanten, die unsere Leidenschaft für Exzellenz teilen. Ob frisches Gemüse, erlesene Kräuter oder Premium-Fleisch und -Fisch, jedes Element in unseren Kreationen wurde sorgfältig ausgewählt, um seinen einzigartigen Geschmack und seine Frische zu gewährleisten.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Ein besonderes Augenmerk richten wir auf unseren Teig, das Fundament unserer exquisiten Pizza. Unser Teig wird nach den ältesten und bewährtesten Rezepten Italiens hergestellt, ein Erbe, das wir mit Stolz und Sorgfalt bewahren. Diese Rezepte, die seit Generationen weitergegeben werden, spiegeln die Tiefe und Reinheit der italienischen Kochtradition wider. In jedem Bissen unserer Pizza können Sie die Geschichte und die Leidenschaft schmecken, die in diesem zeitlosen Handwerk stecken.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Wir freuen uns besonders, Ihnen unsere Spezialität – die Pizza Neapolitana Contemporana – präsentieren zu dürfen. Diese Pizza ist eine Hommage an die klassische Kunst der Pizzaherstellung aus Neapel, verfeinert mit einem modernen Twist, der Ihren Gaumen auf eine unvergessliche Geschmacksreise mitnimmt. Die Kombination aus frischen, sorgfältig ausgewählten Zutaten und dem perfekt gebackenen, luftigen Teig schafft ein kulinarisches Erlebnis, das sowohl traditionell als auch innovativ ist.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Mit Stolz bringen wir ein Stück Napoli nach Purkersdorf. Unsere Vision ist es, Ihnen nicht nur eine Mahlzeit, sondern ein echtes Stück italienischer Kultur und Lebensfreude zu servieren. Jede Pizza, die wir zubereiten, ist ein Ausdruck unserer Hingabe an Qualität, Authentizität und kulinarische Exzellenz.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Wir laden Sie ein, sich zurückzulehnen, zu entspannen und die Aromen Italiens zu genießen, die wir mit viel Liebe und Fachkenntnis für Sie zubereiten. Möge Ihr Besuch bei uns nicht nur eine Mahlzeit, sondern eine Erinnerung sein, die Sie schätzen und auf die Sie mit Freude zurückblicken.
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

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://wa.me/436607213564"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 1.127.277 2.237.805 3.225l6.39 11.899c.091.171.268.279.462.279s.371-.108.462-.279l6.39-11.899c.528-.988.805-2.098.805-3.225C19.597 3.399 16.198 0 12 0zm0 11.37c-2.078 0-3.773-1.695-3.773-3.773S9.922 3.824 12 3.824s3.773 1.695 3.773 3.773-1.695 3.773-3.773 3.773z"/>
                </svg>
              </a>
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
          <div className="mb-6 p-4 bg-white/10 rounded-lg">
            <p className="text-lg font-semibold mb-2">Herzlichen Dank für Ihren Besuch.</p>
            <p className="text-sm opacity-90">
              Wir würden uns über eine Bewertung online auf Google, Facebook und Tripadvisor freuen.
            </p>
          </div>
          <p className="mb-2">© 2025 Mago Dei Cuori. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75 mb-4">
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 20002
          </p>

          {/* Social Media Footer */}
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://wa.me/4366565533443"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/magodeicuori"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/magodeicuori.pizzeria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/im36pPJAF6HpCsuB8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
              aria-label="Google Maps"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 1.127.277 2.237.805 3.225l6.39 11.899c.091.171.268.279.462.279s.371-.108.462-.279l6.39-11.899c.528-.988.805-2.098.805-3.225C19.597 3.399 16.198 0 12 0zm0 11.37c-2.078 0-3.773-1.695-3.773-3.773S9.922 3.824 12 3.824s3.773 1.695 3.773 3.773-1.695 3.773-3.773 3.773z"/>
              </svg>
            </a>
          </div>

          <p className="text-sm opacity-75">
            Authentische neapolitanische Pizza in Purkersdorf
          </p>
        </div>
      </footer>
    </div>
  );
}
