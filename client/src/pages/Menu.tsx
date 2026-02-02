import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowLeft, Menu as MenuIcon, X, Star, AlertCircle, Search, Filter, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { FadeInView, StaggerChildren, StaggerItem, FloatingActionButton, MenuCard } from '@/components/animations';

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [showAllergenFilter, setShowAllergenFilter] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-category]');
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        const id = element.getAttribute('data-category') || '';

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveCategory(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  const filterItem = useCallback((item: { name: string; description: string; allergens: string }) => {
    // Check search query
    const matchesSearch = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Check allergens - exclude items that contain any of the selected allergens
    const matchesAllergens = selectedAllergens.length === 0 ||
      !selectedAllergens.some(allergen => item.allergens.includes(allergen));

    return matchesSearch && matchesAllergens;
  }, [searchQuery, selectedAllergens]);

  // Filtered bestsellers
  const filteredBestsellers = useMemo(() => {
    return bestsellers.filter(filterItem);
  }, [filterItem]);

  // Filtered menu categories
  const filteredMenuCategories = useMemo(() => {
    return menuCategories
      .map(category => ({
        ...category,
        items: category.items.filter(filterItem)
      }))
      .filter(category => category.items.length > 0);
  }, [filterItem]);

  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedAllergens.length > 0;
  const totalFilteredItems = filteredBestsellers.length + filteredMenuCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  const getCategoryId = (category: string) => {
    return category.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/&/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  };

  return (
    <div className="min-h-screen bg-background pattern-bg">
      {/* Skip to main content link for accessibility */}
      <a
        href="#menu-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Zum Menü springen
      </a>

      {/* Navigation - Glassmorphism */}
      <motion.nav
        className="fixed top-0 w-full glass-nav z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <motion.span
                className="text-2xl font-bold text-primary"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                🍕
              </motion.span>
              <h1 className="text-xl font-bold text-foreground">Mago Dei Cuori</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium link-underline"
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
              className="text-foreground hover:text-primary transition-colors font-medium link-underline"
            >
              Kontakt
            </Link>
            <a href="tel:+43223161633">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-subtle">
                Reservieren
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Back Button & Header */}
      <section className="pt-24 pb-8">
        <div className="container">
          <FadeInView direction="left">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group">
              <motion.span
                className="inline-block"
                whileHover={{ x: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              <span className="link-underline">Zurück zur Startseite</span>
            </Link>
          </FadeInView>

          <div className="text-center">
            <FadeInView>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Unser <span className="text-gradient">Menü</span>
              </motion.h1>
            </FadeInView>

            <FadeInView delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Authentische neapolitanische Pizza und mediterrane Köstlichkeiten
              </p>
            </FadeInView>

            {/* Quick Navigation - Sticky Pills */}
            <FadeInView delay={0.2}>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
                <motion.a
                  href="#bestseller"
                  className={`px-4 py-2 font-semibold rounded-full text-sm md:text-base transition-all ${
                    activeCategory === 'bestseller'
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-primary text-white hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Bestseller
                </motion.a>
                {menuCategories.map((cat, index) => (
                  <motion.a
                    key={cat.category}
                    href={`#${getCategoryId(cat.category)}`}
                    className={`px-4 py-2 font-semibold rounded-full text-sm md:text-base transition-all ${
                      activeCategory === getCategoryId(cat.category)
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {cat.category}
                  </motion.a>
                ))}
              </div>
            </FadeInView>

            {/* Search and Filter */}
            <FadeInView delay={0.3}>
              <div className="max-w-2xl mx-auto space-y-4">
                {/* Search Bar with animation */}
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Suche nach Gerichten..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border focus:border-primary focus:outline-none transition-all text-foreground bg-white shadow-sm hover:shadow-md focus:shadow-md"
                  />
                  <AnimatePresence>
                    {searchQuery && (
                      <motion.button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Allergen Filter Toggle */}
                <div>
                  <motion.button
                    onClick={() => setShowAllergenFilter(!showAllergenFilter)}
                    className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 transition-colors font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      animate={{ rotate: showAllergenFilter ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Filter className="w-4 h-4" />
                    </motion.span>
                    {showAllergenFilter ? 'Filter ausblenden' : 'Nach Allergenen filtern'}
                  </motion.button>

                  {/* Allergen Filter Options */}
                  <AnimatePresence>
                    {showAllergenFilter && (
                      <motion.div
                        className="mt-4 p-4 bg-white rounded-xl border border-border shadow-lg"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-muted-foreground mb-3">
                          Wählen Sie Allergene aus, die Sie <strong>vermeiden</strong> möchten:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(allergenMap).map(([code, name], index) => (
                            <motion.button
                              key={code}
                              onClick={() => toggleAllergen(code)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                selectedAllergens.includes(code)
                                  ? 'bg-red-500 text-white shadow-md'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.03 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {code} - {name}
                            </motion.button>
                          ))}
                        </div>
                        <AnimatePresence>
                          {selectedAllergens.length > 0 && (
                            <motion.button
                              onClick={() => setSelectedAllergens([])}
                              className="mt-3 text-sm text-primary hover:underline"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Filter zurücksetzen
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Filter Results Info */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.section
            className="py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container">
              <motion.div
                className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
              >
                <p className="text-foreground">
                  <strong>{totalFilteredItems}</strong> {totalFilteredItems === 1 ? 'Ergebnis' : 'Ergebnisse'} gefunden
                  {searchQuery && <span> für "<strong>{searchQuery}</strong>"</span>}
                  {selectedAllergens.length > 0 && <span> (ohne {selectedAllergens.join(', ')})</span>}
                </p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {hasActiveFilters && totalFilteredItems === 0 && (
          <motion.section
            className="py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container text-center">
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🔍
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Keine Ergebnisse gefunden</h2>
              <p className="text-muted-foreground mb-6">
                Versuchen Sie, Ihre Suchkriterien anzupassen oder Filter zu entfernen.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedAllergens([]);
                  }}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Filter zurücksetzen
                </Button>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Bestseller Section */}
      {filteredBestsellers.length > 0 && (
        <section
          id="bestseller"
          data-category="bestseller"
          className="py-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 scroll-mt-20"
        >
          <div className="container">
            <FadeInView>
              <div className="text-center mb-6">
                <motion.div
                  className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                  animate={{ boxShadow: ['0 0 0 0 rgba(193, 68, 14, 0.4)', '0 0 0 10px rgba(193, 68, 14, 0)', '0 0 0 0 rgba(193, 68, 14, 0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">Bestseller</span>
                  <Star className="w-5 h-5 fill-current" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Unsere beliebtesten Pizzen
                </h2>
              </div>
            </FadeInView>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {filteredBestsellers.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white p-6 rounded-xl border-2 border-primary/30 relative overflow-hidden group h-full"
                    whileHover={{
                      y: -8,
                      borderColor: '#C1440E',
                      boxShadow: '0 20px 40px -15px rgba(193, 68, 14, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <motion.div
                      className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      TOP {index + 1}
                    </motion.div>

                    <div className="relative z-10">
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
                      <motion.span
                        className="text-xl font-bold text-primary"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.price}
                      </motion.span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>
      )}

      {/* Menu Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          {filteredMenuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              id={getCategoryId(category.category)}
              data-category={getCategoryId(category.category)}
              className="mb-12 scroll-mt-20"
            >
              <FadeInView>
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-primary mb-6 border-b border-primary pb-2 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {category.category}
                </motion.h2>
              </FadeInView>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <MenuCard
                    key={itemIndex}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    allergens={item.allergens}
                  />
                ))}
              </div>
            </div>
          ))}

          <FadeInView>
            <div className="mt-8 p-6 bg-white rounded-lg border border-border shadow-sm">
              <p className="text-sm text-muted-foreground mb-2">* Feinste Tomatensauce, hergestellt aus sonnengereiften San Marzano Tomaten aus Italien – bekannt für ihr unvergleichliches Aroma und ihre natürliche Süße</p>
              <p className="text-sm text-muted-foreground mb-2">** Fior di Latte – feinster Mozzarella aus reiner Kuhmilch</p>
              <p className="text-sm text-muted-foreground">*** Italienischer Truthahnbraten, herzhaft und fein</p>
            </div>
          </FadeInView>

          {/* Allergen Info Box */}
          <FadeInView>
            <motion.div
              className="mt-8 bg-amber-50 border-2 border-amber-300 rounded-xl p-4 md:p-6 shadow-sm"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2 text-lg">Allergeninformation</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-sm">
                    {Object.entries(allergenMap).map(([code, name]) => (
                      <span key={code} className="bg-amber-100 px-2 py-1 rounded text-amber-800">
                        <strong>{code}</strong> = {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <FadeInView>
            <div className="max-w-2xl mx-auto">
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center" staggerDelay={0.1}>
                <StaggerItem>
                  <motion.div
                    className="flex flex-col items-center gap-2 p-4 rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Wiener Straße 30<br />
                      3002 Purkersdorf
                    </p>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    className="flex flex-col items-center gap-2 p-4 rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    <Clock className="w-6 h-6 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Mi-So: 11:00-14:30<br />
                      & 17:00-21:00
                    </p>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div
                    className="flex flex-col items-center gap-2 p-4 rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    <Phone className="w-6 h-6 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      +43 2231 61633
                    </p>
                  </motion.div>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </FadeInView>
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

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
