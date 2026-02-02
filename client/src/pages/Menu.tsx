import { useState, useEffect, useMemo } from 'react';
import { MapPin, Clock, Phone, ArrowLeft, Menu as MenuIcon, X, Star, AlertCircle, Search, Filter } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [showAllergenFilter, setShowAllergenFilter] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allergenMap: Record<string, string> = {
    'A': 'Gluten',
    'B': 'Krebstiere',
    'C': 'Eier',
    'D': 'Fisch',
    'E': 'Erdnüsse',
    'F': 'Soja',
    'G': 'Milch',
    'H': 'Schalenfrüchte',
    'L': 'Sellerie',
    'M': 'Senf',
    'N': 'Sesam',
    'O': 'Sulfite',
    'P': 'Lupinen',
    'R': 'Weichtiere',
  };

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens(prev =>
      prev.includes(allergen)
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const bestsellers = [
    { name: 'Mago dei Cuori', description: 'San Marzano DOP, Fior di Latte, Burrata, getrocknete Tomaten, Rucola', price: '€14,50', allergens: 'AGO' },
    { name: 'Tonno E Magia', description: 'San Marzano DOP, Fior di Latte, Tonno, karamellisierte Zwiebel, Olivenbrösel', price: '€13,50', allergens: 'AGD' },
    { name: 'Quattro Stagioni', description: 'San Marzano DOP, Fior di Latte, Champignons, Arrosto di tacchino, Salami, Artischocken', price: '€13,90', allergens: 'AG' },
  ];

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

  // Filter function for menu items
  const filterItem = (item: { name: string; description: string; allergens: string }) => {
    // Check search query
    const matchesSearch = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Check allergens - exclude items that contain any of the selected allergens
    const matchesAllergens = selectedAllergens.length === 0 ||
      !selectedAllergens.some(allergen => item.allergens.includes(allergen));

    return matchesSearch && matchesAllergens;
  };

  // Filtered bestsellers
  const filteredBestsellers = useMemo(() => {
    return bestsellers.filter(filterItem);
  }, [searchQuery, selectedAllergens]);

  // Filtered menu categories
  const filteredMenuCategories = useMemo(() => {
    return menuCategories
      .map(category => ({
        ...category,
        items: category.items.filter(filterItem)
      }))
      .filter(category => category.items.length > 0);
  }, [searchQuery, selectedAllergens]);

  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedAllergens.length > 0;
  const totalFilteredItems = filteredBestsellers.length + filteredMenuCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#menu-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Zum Menü springen
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
              className="text-primary font-medium"
            >
              Menü
            </Link>
            <Link
              href="/kontakt"
              className="text-foreground hover:text-primary transition-colors font-medium"
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
                className="text-primary py-2 text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menü
              </Link>
              <Link
                href="/kontakt"
                className="text-foreground hover:text-primary transition-colors py-2 text-lg"
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
              Unser Menü
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Authentische neapolitanische Pizza und mediterrane Köstlichkeiten
            </p>

            {/* Quick Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
              <a href="#bestseller" className="px-4 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm md:text-base">
                Bestseller
              </a>
              <a href="#pizza" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Pizza
              </a>
              <a href="#antipasti" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Antipasti
              </a>
              <a href="#salat" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Salat
              </a>
              <a href="#extras" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Extras
              </a>
              <a href="#getraenke" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Getränke
              </a>
              <a href="#kaffee-tee" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Kaffee & Tee
              </a>
              <a href="#dolce" className="px-4 py-2 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors text-sm md:text-base">
                Dolce
              </a>
            </div>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Suche nach Gerichten..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Allergen Filter Toggle */}
              <div>
                <button
                  onClick={() => setShowAllergenFilter(!showAllergenFilter)}
                  className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Filter className="w-4 h-4" />
                  {showAllergenFilter ? 'Filter ausblenden' : 'Nach Allergenen filtern'}
                </button>

                {/* Allergen Filter Options */}
                {showAllergenFilter && (
                  <div className="mt-4 p-4 bg-white rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      Wählen Sie Allergene aus, die Sie <strong>vermeiden</strong> möchten:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(allergenMap).map(([code, name]) => (
                        <button
                          key={code}
                          onClick={() => toggleAllergen(code)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            selectedAllergens.includes(code)
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {code} - {name}
                        </button>
                      ))}
                    </div>
                    {selectedAllergens.length > 0 && (
                      <button
                        onClick={() => setSelectedAllergens([])}
                        className="mt-3 text-sm text-primary hover:underline"
                      >
                        Filter zurücksetzen
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergen Info Box */}
      <section id="menu-content" className="py-4">
        <div className="container">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 md:p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 mb-2 text-lg">Allergeninformation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-sm">
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>A</strong> = Gluten</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>B</strong> = Krebstiere</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>C</strong> = Eier</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>D</strong> = Fisch</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>E</strong> = Erdnüsse</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>F</strong> = Soja</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>G</strong> = Milch</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>H</strong> = Schalenfrüchte</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>L</strong> = Sellerie</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>M</strong> = Senf</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>N</strong> = Sesam</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>O</strong> = Sulfite</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>P</strong> = Lupinen</span>
                  <span className="bg-amber-100 px-2 py-1 rounded text-amber-800"><strong>R</strong> = Weichtiere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Results Info */}
      {hasActiveFilters && (
        <section className="py-4">
          <div className="container">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
              <p className="text-foreground">
                <strong>{totalFilteredItems}</strong> {totalFilteredItems === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
                {searchQuery && <span> für "<strong>{searchQuery}</strong>"</span>}
                {selectedAllergens.length > 0 && <span> (ohne {selectedAllergens.join(', ')})</span>}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* No Results Message */}
      {hasActiveFilters && totalFilteredItems === 0 && (
        <section className="py-16">
          <div className="container text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Keine Ergebnisse gefunden</h2>
            <p className="text-muted-foreground mb-6">
              Versuchen Sie, Ihre Suchkriterien anzupassen oder Filter zu entfernen.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedAllergens([]);
              }}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Filter zurücksetzen
            </Button>
          </div>
        </section>
      )}

      {/* Bestseller Section */}
      {filteredBestsellers.length > 0 && (
        <section id="bestseller" className="py-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 scroll-mt-20">
          <div className="container">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold">Bestseller</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Unsere beliebtesten Pizzen
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredBestsellers.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    TOP {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 pr-12">
                    {item.name}
                  </h3>
                  {item.allergens && (
                    <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded mb-2">
                      <AlertCircle className="w-3 h-3" />
                      {item.allergens}
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="text-xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          {filteredMenuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.category.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')} className="mb-12 scroll-mt-20">
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
                      </h3>
                      <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>
                    {item.allergens && (
                      <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">
                        <AlertCircle className="w-3 h-3" />
                        Allergene: {item.allergens}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

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
                  +43 2231 61633
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
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 61633
          </p>
        </div>
      </footer>
    </div>
  );
}
