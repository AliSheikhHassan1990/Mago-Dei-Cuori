import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { ReactNode, useState, useRef, useEffect } from 'react';

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

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  allergens?: string;
  badge?: ReactNode;
  featured?: boolean;
}

export function MenuCard({
  name,
  description,
  price,
  allergens,
  badge,
  featured = false,
}: MenuCardProps) {
  const [showAllergenPopup, setShowAllergenPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowAllergenPopup(false);
      }
    };

    if (showAllergenPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAllergenPopup]);

  // Parse allergen codes into full names
  const getAllergenNames = (codes: string) => {
    return codes.split('').map(code => ({
      code,
      name: allergenMap[code] || code
    })).filter(item => allergenMap[item.code]);
  };

  return (
    <motion.div
      className={`relative bg-white p-4 rounded-lg border overflow-hidden group ${
        featured
          ? 'border-2 border-primary/30 hover:border-primary'
          : 'border-border hover:border-primary/50'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4 }}
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-0 right-0">
          {badge}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <motion.h3
            className={`text-lg font-bold text-foreground ${badge ? 'pr-12' : ''}`}
            whileHover={{ color: '#C1440E' }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
          <motion.span
            className="text-lg font-bold text-primary whitespace-nowrap ml-2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {price}
          </motion.span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
          {description}
        </p>

        {allergens && (
          <div className="relative" ref={popupRef}>
            <motion.button
              className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowAllergenPopup(!showAllergenPopup);
              }}
              aria-label="Allergeninformationen anzeigen"
            >
              <AlertCircle className="w-3 h-3" />
              Allergene: {allergens}
            </motion.button>

            <AnimatePresence>
              {showAllergenPopup && (
                <motion.div
                  className="absolute bottom-full left-0 mb-2 bg-white border border-amber-300 rounded-lg shadow-lg p-3 z-50 min-w-[200px]"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-amber-800 text-sm">Allergene</span>
                    <button
                      onClick={() => setShowAllergenPopup(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {getAllergenNames(allergens).map(({ code, name }) => (
                      <div key={code} className="flex items-center gap-2 text-sm">
                        <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded text-xs">
                          {code}
                        </span>
                        <span className="text-gray-700">{name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
