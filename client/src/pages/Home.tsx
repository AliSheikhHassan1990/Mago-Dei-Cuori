import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Clock, Phone, Menu, X, Pizza, Salad, Cake, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FadeInView, StaggerChildren, StaggerItem, AnimatedCounter, ParallaxImage, FloatingActionButton } from '@/components/animations';

/**
 * Design-Philosophie: Minimalistisch-Elegant mit Wärmtönen
 * - Authentizität durch Einfachheit
 * - Fotografie als Hauptelement
 * - Großzügiger Weißraum
 * - Subtile Animationen
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const menuStats = [
    { icon: Pizza, label: 'Pizzen', value: 24 },
    { icon: Salad, label: 'Salate', value: 4 },
    { icon: Cake, label: 'Desserts', value: 3 },
    { icon: Wine, label: 'Getränke', value: 15 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Navigation - Glassmorphism */}
      <motion.nav
        className="fixed top-0 w-full glass-nav z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              🍕
            </motion.span>
            <h1 className="text-xl font-bold text-foreground">Mago Dei Cuori</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/menu"
              className="text-foreground hover:text-primary transition-colors font-medium link-underline"
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground pulse-subtle">
                  Reservieren
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  href="/menu"
                  className="text-foreground hover:text-primary transition-colors py-2 text-lg"
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

      {/* Hero Section with Parallax */}
      <section id="main-content" className="pt-16 pb-0 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[600px]">
          {/* Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="max-w-lg">
              <FadeInView direction="left">
                <motion.h2
                  className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Authentische{' '}
                  <span className="text-gradient">Neapolitanische</span>{' '}
                  Pizza
                </motion.h2>
              </FadeInView>
              <FadeInView direction="left" delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Mit Stolz bringen wir ein Stück Napoli nach Purkersdorf. Traditionelle Rezepte aus Neapel, zubereitet mit den besten Zutaten aus Italien.
                </p>
              </FadeInView>
              <FadeInView direction="left" delay={0.3}>
                <a href="tel:+43223161633">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base shadow-lg hover:shadow-xl transition-shadow">
                      Reservierung
                    </Button>
                  </motion.div>
                </a>
              </FadeInView>
            </div>
          </div>

          {/* Hero Image with Parallax - fully integrated */}
          <div className="relative h-[400px] md:h-auto overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
              }}
            >
              <ParallaxImage
                src="/images/hero-pizza.png"
                alt="Frische neapolitanische Pizza Margherita mit frischem Basilikum"
                className="w-full h-full"
                speed={0.2}
              />
            </div>
            {/* Soft color overlay for warmth */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Restaurant Interior Section */}
      <section className="py-16 md:py-24 pattern-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image with reveal effect - fully integrated with background */}
          <FadeInView direction="left">
            <motion.div
              className="relative h-[300px] md:h-[400px] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                maskImage: 'radial-gradient(ellipse 90% 90% at 30% 50%, black 40%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 30% 50%, black 40%, transparent 70%)',
              }}
            >
              <motion.img
                src="/images/restaurant-interior.png"
                alt="Gemütlicher Innenraum des Mago Dei Cuori Restaurants"
                loading="lazy"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.08, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </FadeInView>

          {/* Content */}
          <div className="px-6 md:px-0">
            <FadeInView direction="right">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sehr geehrte <span className="text-gradient">Gäste</span>
              </h2>
            </FadeInView>
            <FadeInView direction="right" delay={0.1}>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Herzlich willkommen in unserem Restaurant, wo die Aromen Italiens auf den Teller gebracht und kulinarische Geschichten erzählt werden. In unserem Haus legen wir größten Wert auf die hohe Qualität unserer Zutaten und die Authentizität unserer Rezepte, die das Herzstück unserer Küche bilden.
              </p>
            </FadeInView>
            <FadeInView direction="right" delay={0.15}>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Unser Menü ist das Ergebnis einer sorgfältigen Auswahl hochwertigster Zutaten, die wir mit größter Sorgfalt und Respekt behandeln. Wir glauben fest daran, dass die Qualität eines Gerichts direkt mit der Herkunft seiner Zutaten verbunden ist.
              </p>
            </FadeInView>
            <FadeInView direction="right" delay={0.2}>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Ein besonderes Augenmerk richten wir auf unseren Teig, das Fundament unserer exquisiten Pizza. Unser Teig wird nach den ältesten und bewährtesten Rezepten Italiens hergestellt, ein Erbe, das wir mit Stolz und Sorgfalt bewahren.
              </p>
            </FadeInView>
            <FadeInView direction="right" delay={0.25}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wir laden Sie ein, sich zurückzulehnen, zu entspannen und die Aromen Italiens zu genießen, die wir mit viel Liebe und Fachkenntnis für Sie zubereiten.
              </p>
            </FadeInView>

            <StaggerChildren className="space-y-4" staggerDelay={0.1}>
              <StaggerItem>
                <motion.div
                  className="flex items-center gap-3 text-foreground"
                  whileHover={{ x: 4 }}
                >
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Mi-So: 11:00-14:30 & 17:00-21:00</span>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="flex items-center gap-3 text-foreground"
                  whileHover={{ x: 4 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Wiener Straße 30, 3002 Purkersdorf</span>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  className="flex items-center gap-3 text-foreground"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+43 2231 61633</span>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <FadeInView>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Hochwertige <span className="text-gradient">Zutaten</span>
                </h2>
              </FadeInView>
              <FadeInView delay={0.1}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Wir verwenden nur die besten Zutaten aus Italien. Unsere Tomaten kommen direkt aus Kampanien, der Mozzarella wird täglich frisch geliefert, und unser Olivenöl ist extra vergine aus der Toskana.
                </p>
              </FadeInView>
              <StaggerChildren className="space-y-3" staggerDelay={0.1}>
                {[
                  'Frische San Marzano Tomaten',
                  'Täglicher Mozzarella di Bufala',
                  'Extra Vergine Olivenöl aus der Toskana',
                  'Frische italienische Kräuter',
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.li
                      className="flex items-center gap-3 text-foreground list-none"
                      whileHover={{ x: 4 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            {/* Image - fully integrated with background */}
            <FadeInView direction="right">
              <motion.div
                className="relative h-[300px] md:h-[400px] overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  maskImage: 'radial-gradient(ellipse 90% 90% at 70% 50%, black 40%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 70% 50%, black 40%, transparent 70%)',
                }}
              >
                <motion.img
                  src="/images/ingredients.png"
                  alt="Hochwertige italienische Zutaten wie San Marzano Tomaten und frischer Mozzarella"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  animate={{
                    scale: [1.08, 1, 1.08],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.12 }}
                />
              </motion.div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Menu Preview Section with Animated Counters */}
      <section id="menu" className="py-16 md:py-24 gradient-animate">
        <div className="container">
          <div className="text-center">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Unser <span className="text-gradient">Menü</span>
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Authentische neapolitanische Pizza und mediterrane Köstlichkeiten
              </p>
            </FadeInView>

            <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10" staggerDelay={0.1}>
              {menuStats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="bg-white p-6 rounded-lg border border-border text-center card-glow"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <motion.div
                      className="mb-2 flex justify-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <stat.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <span className="text-foreground font-medium">
                      <AnimatedCounter value={stat.value} /> {stat.label}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeInView delay={0.3}>
              <Link href="/menu">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base shadow-lg hover:shadow-xl">
                    Menü ansehen
                  </Button>
                </motion.div>
              </Link>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 pattern-bg">
        <div className="container">
          <div className="text-center mb-16">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Kunden<span className="text-gradient">bewertungen</span>
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Das sagen unsere zufriedenen Gäste über Mago Dei Cuori
              </p>
            </FadeInView>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
            {reviews.map((review, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white p-6 rounded-lg border border-border h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 40px -15px rgba(193, 68, 14, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.span
                      className="text-3xl"
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 + index }}
                    >
                      {review.image}
                    </motion.span>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-4 h-4 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Besuchen Sie <span className="text-gradient">uns</span>
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Wir freuen uns auf Ihren Besuch. Reservieren Sie einen Tisch oder besuchen Sie uns spontan.
              </p>
            </FadeInView>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" staggerDelay={0.15}>
              <StaggerItem>
                <motion.div
                  className="bg-white p-8 rounded-lg border border-border card-glow"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground text-sm">
                    Wiener Straße 30<br />
                    3002 Purkersdorf
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-white p-8 rounded-lg border border-border card-glow"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">Öffnungszeiten</h3>
                  <p className="text-muted-foreground text-sm">
                    Mo-Di: Geschlossen<br />
                    Mi-So: 11:00-14:30<br />
                    & 17:00-21:00
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="bg-white p-8 rounded-lg border border-border card-glow text-center"
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-foreground mb-2">Kontakt</h3>
                  <p className="text-muted-foreground text-sm">+43 2231 61633</p>
                  <p className="text-muted-foreground text-sm break-all">Magodeicuori@gmail.com</p>
                </motion.div>
              </StaggerItem>
            </StaggerChildren>

            {/* Social Media Links */}
            <FadeInView delay={0.3}>
              <div className="flex justify-center gap-6 mb-12">
                {[
                  { href: 'https://wa.me/436607213564', bg: 'bg-[#25D366] hover:bg-[#128C7E]', label: 'WhatsApp', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
                  { href: 'https://www.facebook.com/people/Mago-dei-Cuori/100087436517419/', bg: 'bg-[#1877F2] hover:bg-[#166FE5]', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { href: 'https://www.instagram.com/magodeicuori.pizzeria/', bg: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { href: 'https://maps.app.goo.gl/im36pPJAF6HpCsuB8', bg: 'bg-[#4285F4] hover:bg-[#3367D6]', label: 'Google Maps', path: 'M12 0C7.802 0 4.403 3.399 4.403 7.597c0 1.127.277 2.237.805 3.225l6.39 11.899c.091.171.268.279.462.279s.371-.108.462-.279l6.39-11.899c.528-.988.805-2.098.805-3.225C19.597 3.399 16.198 0 12 0zm0 11.37c-2.078 0-3.773-1.695-3.773-3.773S9.922 3.824 12 3.824s3.773 1.695 3.773 3.773-1.695 3.773-3.773 3.773z' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} text-white p-4 rounded-full transition-all`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </FadeInView>

            <FadeInView delay={0.4}>
              <a href="tel:+43223161633">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base shadow-lg hover:shadow-xl pulse-subtle">
                    Reservierung anfragen
                  </Button>
                </motion.div>
              </a>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container text-center">
          <FadeInView>
            <motion.div
              className="mb-6 p-4 bg-white/10 rounded-lg"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg font-semibold mb-2">Herzlichen Dank für Ihren Besuch.</p>
              <p className="text-sm opacity-90">
                Wir würden uns über eine Bewertung online auf Google, Facebook und Tripadvisor freuen.
              </p>
            </motion.div>
          </FadeInView>
          <p className="mb-2">© 2025 Mago Dei Cuori. Alle Rechte vorbehalten.</p>
          <p className="text-sm opacity-75 mb-4">
            Wiener Straße 30, 3002 Purkersdorf | +43 2231 61633
          </p>

          {/* Social Media Footer */}
          <div className="flex justify-center gap-4 mb-4">
            {[
              { href: 'https://wa.me/436607213564', label: 'WhatsApp', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
              { href: 'https://www.facebook.com/magodeicuori', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { href: 'https://www.instagram.com/magodeicuori.pizzeria', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { href: 'https://maps.app.goo.gl/im36pPJAF6HpCsuB8', label: 'Google Maps', path: 'M12 0C7.802 0 4.403 3.399 4.403 7.597c0 1.127.277 2.237.805 3.225l6.39 11.899c.091.171.268.279.462.279s.371-.108.462-.279l6.39-11.899c.528-.988.805-2.098.805-3.225C19.597 3.399 16.198 0 12 0zm0 11.37c-2.078 0-3.773-1.695-3.773-3.773S9.922 3.824 12 3.824s3.773 1.695 3.773 3.773-1.695 3.773-3.773 3.773z' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          <p className="text-sm opacity-75">
            Authentische neapolitanische Pizza in Purkersdorf
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
