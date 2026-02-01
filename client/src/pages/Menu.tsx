import { MapPin, Clock, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function Menu() {
  const menuCategories = [
    {
      category: 'Pizza',
      items: [
        { name: 'Regina Margherita', description: 'San Marzano DOP, Fior di Latte, frischer Basilikum, Parmesan, Olivenöl', price: '€10,50', allergens: 'AG' },
        { name: 'Marinara (Vegan)', description: 'San Marzano DOP, Oregano, Knoblauch Öl', price: '€9,50', allergens: 'A' },
        { name: 'Salami', description: 'San Marzano DOP, Fior di Latte, Salami, Oregano', price: '€13,00', allergens: 'AG' },
        { name: 'Siciliana', description: 'San Marzano DOP, Sardellen, Olivenöl, Oregano, Kapern, Oliven', price: '€13,90', allergens: 'AD' },
        { name: 'Quattro Formaggi', description: 'Taleggio DOP, Fior di Latte, Gorgonzola, Provola Affumicata, Parmesan Chips, Walnüsse', price: '€14,50', allergens: 'AGH' },
        { name: 'Capricciosa', description: 'San Marzano DOP, Fior di Latte, Arrosto di tacchino, Oliven, Champignons, Artischocken', price: '€13,90', allergens: 'AG' },
        { name: 'Caprese', description: 'Ricotta Creme, Fior di Latte, Cherry Tomaten, Basilikum, Parmesan, Olivenöl', price: '€13,00', allergens: 'AG' },
        { name: 'Ricotta Spinaci', description: 'Ricotta Creme, Pfeffer, Olivenöl, Spinat, Granatapfelsyrup', price: '€13,50', allergens: 'AG' },
        { name: 'Detox', description: 'San Marzano DOP, gem. gegr. Gemüse, mit Oregano, Olivenöl', price: '€13,00', allergens: 'A' },
        { name: 'Tonno E Magia', description: 'San Marzano DOP, Fior di Latte, Tonno, karamellisierte Zwiebel, Olivenbrösel', price: '€13,50', allergens: 'AGD' },
        { name: 'Bresaola Lovers', description: 'San Marzano DOP, Fior di Latte, Rucola, Geräuchertes Jungrind, Parmesan', price: '€13,90', allergens: 'AG' },
        { name: 'Colorata', description: 'San Marzano DOP, Fior di Latte, Gorgonzola, Paprika, Zucchini', price: '€13,00', allergens: 'AG' },
        { name: 'Mago dei Cuori', description: 'San Marzano DOP, Fior di Latte, Burrata, getrocknete Tomaten, Rucola', price: '€14,50', allergens: 'AGO' },
        { name: 'Burrata e Pistacchio', description: 'Pistacchio paste DOP, Fior di Latte, Burrata, Basilikum', price: '€14,50', allergens: 'AGEHMPFC' },
        { name: 'Giardiniera (Rucola)', description: 'San Marzano DOP, Fior di Latte, Rucola, Cherry Tomaten, Parmesan', price: '€13,00', allergens: 'AG' },
        { name: 'Diavolo', description: 'San Marzano DOP, Fior Di Latte, Salami, Arrosto di tacchino, scharfe Pfefferoni', price: '€13,50', allergens: 'AG' },
        { name: 'Prosciutto e Funghi', description: 'San Marzano DOP, Fior di Latte, Arrosto di tacchino, Champignons, Basilikum, Parmesan', price: '€13,50', allergens: 'AG' },
        { name: 'Parmigiana e Fumo', description: 'San Marzano DOP, Fior Di Latte, Melanzane, Provola affumicata, Basilikum creme', price: '€13,50', allergens: 'AGEHLDF' },
        { name: 'Pesto e Fumo', description: 'Pesto alla Genovese, Fior di Latte, Provola Affumicata, Cherry Tomaten, Pinien', price: '€13,90', allergens: 'AGEHLDF' },
        { name: 'Quattro Stagioni', description: 'San Marzano DOP, Fior di Latte, Champignons, Arrosto di tacchino, Salami, Artischocken', price: '€13,90', allergens: 'AG' },
        { name: 'Gennaro', description: 'San Marzano DOP, Fior di Latte, Salami, Melanzani, Parmesan, Olivenöl', price: '€13,90', allergens: 'AG' },
        { name: 'Pizza Vegano', description: 'San Marzano DOP, Champignons, Paprika, Spinat', price: '€12,90', allergens: 'A' },
        { name: "Mago d'Oriente", description: 'Kräutermix mit Sesam, Fior di Latte, Olivenöl', price: '€11,90', allergens: 'AGN' },
        { name: 'Calzone Classico', description: 'San Marzano DOP, Fior di Latte, Arrosto di tacchino, Basilikum, Parmesan', price: '€13,00', allergens: 'AG' },
      ]
    },
    {
      category: 'Antipasti',
      items: [
        { name: 'Pizza Brot', description: 'mit Napoli Sauce', price: '€7,50', allergens: 'A' },
        { name: 'Pizza Brot mit Käse', description: 'mit Provola DOP Affumicata', price: '€7,50', allergens: 'AG' },
        { name: 'Maze Mix', description: '4 zur Auswahl: Hummus, Muhammara, Baba Ghanoug, Labneh, Zeyton mit Brot', price: '€16,50', allergens: 'AGN' },
        { name: 'Hummus', description: '', price: '€5,90', allergens: 'N' },
        { name: 'Muhammara', description: '', price: '€5,90', allergens: 'NA' },
        { name: 'Baba Ghanoug', description: '', price: '€5,90', allergens: 'N' },
        { name: 'Labneh', description: '', price: '€5,90', allergens: 'G' },
        { name: 'Zeyton', description: '', price: '€5,90', allergens: '' },
      ]
    },
    {
      category: 'Salat',
      items: [
        { name: 'Gemischter Salat', description: '', price: '€7,90', allergens: 'O' },
        { name: 'Burrata Salat', description: '', price: '€9,90', allergens: 'GO' },
        { name: 'Mozzarella Salat', description: '', price: '€9,90', allergens: 'GO' },
        { name: 'Fattousch Salat', description: '', price: '€9,90', allergens: 'AO' },
      ]
    },
    {
      category: 'Extras',
      items: [
        { name: 'Mozzarella, Gorgonzola, Ricotta', description: '', price: '€2,00', allergens: '' },
        { name: 'Pesto, Rucola, Parmesan Chips', description: '', price: '€2,00', allergens: '' },
        { name: 'Kapern, Mais, Cherry Tomaten, Oliven', description: '', price: '€1,50', allergens: '' },
        { name: 'Paprika, Karamellisierter Zwiebel', description: '', price: '€1,50', allergens: '' },
        { name: 'Artischocken, Champignons, Spinat', description: '', price: '€1,50', allergens: '' },
        { name: 'Scharfe Peperoncini, Basilikum', description: '', price: '€1,50', allergens: '' },
        { name: 'Gegrl. Melanzani, gegrl. Zucchini, gegrl. Paprika', description: '', price: '€2,00', allergens: '' },
        { name: 'Thunfisch, Sardellen, Arrosto di Tacchino, Salami', description: '', price: '€3,50', allergens: '' },
        { name: 'Knoblauchöl, Chiliöl, Olivenöl', description: '', price: '€1,50', allergens: '' },
        { name: 'Burrata', description: '', price: '€3,50', allergens: '' },
      ]
    },
    {
      category: 'Getränke',
      items: [
        { name: 'Orangen gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Apfel gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Himbeer gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Hollunder gespritzt', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Johannisbeere gespritzt', description: '0,3l / 0,5l', price: '€2,90 / €3,50', allergens: '' },
        { name: 'Soda', description: '0,3l / 0,5l', price: '€2,00 / €2,90', allergens: '' },
        { name: 'Soda Zitrone', description: '0,3l / 0,5l', price: '€2,50 / €3,50', allergens: '' },
        { name: 'Coca Cola, Zero', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Fanta', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Almdudler', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Sprite', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Red Bull', description: '0,25l', price: '€3,50', allergens: '' },
        { name: 'Eistee Pfirsich-Zitrone', description: '0,3l', price: '€2,50', allergens: '' },
        { name: 'Alkoholfreies Bier / Radler', description: '0,33l', price: '€3,50', allergens: '' },
        { name: 'Wasser still / prickelnd', description: '0,5l', price: '€2,50', allergens: '' },
      ]
    },
    {
      category: 'Kaffee & Tee',
      items: [
        { name: 'Espresso', description: '', price: '€2,90', allergens: '' },
        { name: 'Espresso Doppio', description: '', price: '€3,90', allergens: '' },
        { name: 'Verlängerter', description: '', price: '€3,90', allergens: '' },
        { name: 'Melange', description: '', price: '€3,90', allergens: '' },
        { name: 'Cappuccino', description: '', price: '€3,90', allergens: '' },
        { name: 'Latte Macchiato', description: '', price: '€4,20', allergens: '' },
        { name: 'Schwarztee', description: '', price: '€3,50', allergens: '' },
        { name: 'Grüntee', description: '', price: '€3,50', allergens: '' },
      ]
    },
    {
      category: 'Dolce',
      items: [
        { name: 'Tiramisù al Pistacchio', description: '', price: '€6,90', allergens: 'AFGH' },
        { name: 'Pizza Nutella', description: '', price: '€8,90', allergens: 'AFGH' },
        { name: 'Dolce di Magia', description: '', price: '€6,90', allergens: 'G' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">🍕</span>
              <h1 className="text-xl font-bold text-foreground">Mago Dei Cuori</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="#pizza" className="text-foreground hover:text-primary transition-colors">Pizza</a>
            <a href="#antipasti" className="text-foreground hover:text-primary transition-colors">Antipasti</a>
            <a href="#getraenke" className="text-foreground hover:text-primary transition-colors">Getränke</a>
          </div>
        </div>
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
              Unser Menü
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentische neapolitanische Pizza und mediterrane Köstlichkeiten
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 border-b border-primary pb-2">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-4 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.name}
                        {item.allergens && (
                          <span className="text-xs text-muted-foreground ml-2 font-normal">
                            ({item.allergens})
                          </span>
                        )}
                      </h3>
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
            <p>A = Gluten, B = Krebstiere, C = Eier von Geflügel, D = Fisch, E = Erdnüsse, F = Sojabohnen, G = Milch von Säugetieren, H = Schalenfrüchte, L = Sellerie, M = Senf, N = Sesamsamen, O = Schwefeloxid und Sulfite, P = Lupinen, R = Weichtiere</p>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">* Feinste Tomatensauce, hergestellt aus sonnengereiften San Marzano Tomaten aus Italien – bekannt für ihr unvergleichliches Aroma und ihre natürliche Süße</p>
            <p className="text-sm text-muted-foreground mb-2">** Fior di Latte – feinster Mozzarella aus reiner Kuhmilch</p>
            <p className="text-sm text-muted-foreground">*** Italienischer Truthahnbraten, herzhaft und fein</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Wiener Straße 30<br />
                  3002 Purkersdorf
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Mi-So: 11:00-14:30<br />
                  & 17:00-21:00
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-sm text-muted-foreground">
                  +43 2231 20002
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-6">
        <div className="container text-center">
          <p className="mb-2">© 2025 Mago Dei Cuori. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75">
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 20002
          </p>
        </div>
      </footer>
    </div>
  );
}
