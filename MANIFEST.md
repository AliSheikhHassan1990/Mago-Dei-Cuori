# Datei-Manifest: Mago Dei Cuori

Kurze Beschreibung aller Dateien im Projekt.

---

## Root-Konfiguration

| Datei | Beschreibung |
|-------|--------------|
| `package.json` | Projektabhängigkeiten und npm-Skripte |
| `pnpm-lock.yaml` | Lock-Datei für reproduzierbare Installationen |
| `tsconfig.json` | TypeScript-Konfiguration für das Projekt |
| `tsconfig.node.json` | TypeScript-Konfiguration für Node.js (Server) |
| `vite.config.ts` | Vite Build-Tool Konfiguration |
| `components.json` | shadcn/ui Komponenten-Konfiguration |
| `.prettierrc` | Code-Formatierungsregeln |
| `.prettierignore` | Dateien, die von Prettier ignoriert werden |
| `.gitignore` | Dateien, die von Git ignoriert werden |

---

## Dokumentation

| Datei | Beschreibung |
|-------|--------------|
| `DESIGN_SUMMARY.md` | Zusammenfassung des Design-Konzepts |
| `ideas.md` | Ideen und Notizen für das Projekt |
| `MANIFEST.md` | Diese Datei – Übersicht aller Projektdateien |

---

## Bilder (Root)

| Datei | Beschreibung |
|-------|--------------|
| `hero-pizza.png` | Hauptbild für die Hero-Sektion |
| `ingredients.png` | Bild vom Chef |
| `pasta-dish.png` | Pasta-Gericht Bild |
| `restaurant-interior.png` | Innenansicht des Restaurants |
| `menu.pdf` | PDF-Version der Speisekarte |

---

## Server (`server/`)

| Datei | Beschreibung |
|-------|--------------|
| `index.ts` | Express-Server – serviert statische Dateien und handhabt Client-Routing |

---

## Shared (`shared/`)

| Datei | Beschreibung |
|-------|--------------|
| `const.ts` | Gemeinsame Konstanten (Session-Cookie-Name, Zeitkonstanten) |

---

## Client (`client/src/`)

### Einstiegspunkte

| Datei | Beschreibung |
|-------|--------------|
| `main.tsx` | React-App Einstiegspunkt – mountet App ins DOM |
| `App.tsx` | Hauptkomponente – Router, Theme-Provider, Error-Boundary |
| `index.css` | Globale CSS-Styles und Tailwind-Konfiguration |
| `const.ts` | Client-Konstanten und OAuth-Login-URL Generator |

---

### Seiten (`pages/`)

| Datei | Beschreibung |
|-------|--------------|
| `Home.tsx` | Startseite mit Hero, Speisekarten-Vorschau, Info |
| `Menu.tsx` | Vollständige Speisekarte mit Kategorien und Allergenen |
| `Contact.tsx` | Kontaktseite mit Karte und Öffnungszeiten |
| `NotFound.tsx` | 404-Fehlerseite |

---

### Komponenten (`components/`)

| Datei | Beschreibung |
|-------|--------------|
| `ErrorBoundary.tsx` | Fängt React-Fehler ab und zeigt Fallback-UI |
| `ManusDialog.tsx` | Dialog-Integration für Manus-System |
| `Map.tsx` | Google Maps Integration für Standortanzeige |

---

### Animationen (`components/animations/`)

| Datei | Beschreibung |
|-------|--------------|
| `index.ts` | Export-Sammlung aller Animations-Komponenten |
| `AllergenBadge.tsx` | Animiertes Badge für Allergen-Anzeige |
| `AnimatedCounter.tsx` | Zähler-Animation für Statistiken |
| `FadeInView.tsx` | Einblende-Animation beim Scrollen |
| `FloatingActionButton.tsx` | Schwebendes Aktions-Button (z.B. Telefon) |
| `MenuCard.tsx` | Animierte Karte für Menü-Einträge |
| `ParallaxImage.tsx` | Parallax-Scrolling-Effekt für Bilder |
| `StaggerChildren.tsx` | Gestaffelte Animation für Kind-Elemente |

---

### UI-Komponenten (`components/ui/`)

shadcn/ui Bibliothek – wiederverwendbare UI-Bausteine:

| Datei | Beschreibung |
|-------|--------------|
| `accordion.tsx` | Ausklappbare Inhaltsbereiche |
| `alert.tsx` | Hinweis-/Warnmeldungen |
| `alert-dialog.tsx` | Bestätigungs-Dialog |
| `aspect-ratio.tsx` | Seitenverhältnis-Container |
| `avatar.tsx` | Benutzer-Avatar-Anzeige |
| `badge.tsx` | Kleine Label/Tags |
| `breadcrumb.tsx` | Breadcrumb-Navigation |
| `button.tsx` | Standard-Button mit Varianten |
| `button-group.tsx` | Gruppierte Buttons |
| `calendar.tsx` | Kalender-Komponente |
| `card.tsx` | Karten-Container |
| `carousel.tsx` | Bilder-Karussell |
| `chart.tsx` | Diagramm-Komponente |
| `checkbox.tsx` | Auswahlbox |
| `collapsible.tsx` | Ein-/Ausklappbarer Bereich |
| `command.tsx` | Kommando-Palette/Suche |
| `context-menu.tsx` | Rechtsklick-Menü |
| `dialog.tsx` | Modal-Dialog |
| `drawer.tsx` | Seitliches Einschub-Panel |
| `dropdown-menu.tsx` | Dropdown-Menü |
| `empty.tsx` | Leerer Zustand-Anzeige |
| `field.tsx` | Formular-Feld-Wrapper |
| `form.tsx` | React-Hook-Form Integration |
| `hover-card.tsx` | Hover-Informationskarte |
| `input.tsx` | Texteingabefeld |
| `input-group.tsx` | Gruppierte Eingabefelder |
| `input-otp.tsx` | OTP/PIN-Eingabe |
| `item.tsx` | Listen-Element |
| `kbd.tsx` | Tastatur-Shortcut-Anzeige |
| `label.tsx` | Formular-Label |
| `menubar.tsx` | Horizontale Menüleiste |
| `navigation-menu.tsx` | Navigations-Dropdown |
| `pagination.tsx` | Seitennavigation |
| `popover.tsx` | Popup-Container |
| `progress.tsx` | Fortschrittsbalken |
| `radio-group.tsx` | Radio-Button-Gruppe |
| `resizable.tsx` | Größenveränderbare Panels |
| `scroll-area.tsx` | Scrollbarer Bereich mit Styling |
| `select.tsx` | Auswahl-Dropdown |
| `separator.tsx` | Trennlinie |
| `sheet.tsx` | Seitliches Overlay-Panel |
| `sidebar.tsx` | Seitenleiste |
| `skeleton.tsx` | Lade-Platzhalter |
| `slider.tsx` | Schieberegler |
| `sonner.tsx` | Toast-Benachrichtigungen |
| `spinner.tsx` | Lade-Spinner |
| `switch.tsx` | Ein/Aus-Schalter |
| `table.tsx` | Tabellen-Komponenten |
| `tabs.tsx` | Tab-Navigation |
| `textarea.tsx` | Mehrzeiliges Textfeld |
| `toggle.tsx` | Toggle-Button |
| `toggle-group.tsx` | Toggle-Button-Gruppe |
| `tooltip.tsx` | Hover-Tooltips |

---

### Context (`contexts/`)

| Datei | Beschreibung |
|-------|--------------|
| `ThemeContext.tsx` | Theme-Provider für Hell-/Dunkelmodus |

---

### Hooks (`hooks/`)

| Datei | Beschreibung |
|-------|--------------|
| `useComposition.ts` | Hook für Kompositions-Logik |
| `useMobile.tsx` | Erkennt mobile Geräte/Bildschirmgrößen |
| `usePersistFn.ts` | Persistente Funktionsreferenz (verhindert Re-Renders) |

---

### Utilities (`lib/`)

| Datei | Beschreibung |
|-------|--------------|
| `utils.ts` | Hilfsfunktionen (z.B. `cn()` für Tailwind-Klassen) |

---

## GitHub Actions (`.github/workflows/`)

| Datei | Beschreibung |
|-------|--------------|
| `deploy.yml` | CI/CD Pipeline für automatisches Deployment |

---

## Patches (`patches/`)

| Datei | Beschreibung |
|-------|--------------|
| `wouter@3.7.1.patch` | Patch für wouter Router-Bibliothek |

---

## Tech-Stack

- **Frontend:** React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Express.js (Node.js)
- **Build:** Vite
- **Animation:** Framer Motion
- **Karten:** Google Maps API
- **Formulare:** React Hook Form
- **Routing:** wouter
- **Package Manager:** pnpm
