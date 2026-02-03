import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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

interface AllergenBadgeProps {
  allergens: string;
  showLabel?: boolean;
}

export function AllergenBadge({ allergens, showLabel = true }: AllergenBadgeProps) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  // Parse allergen codes into full names
  const getAllergenNames = (codes: string) => {
    return codes.split('').map(code => ({
      code,
      name: allergenMap[code] || code
    })).filter(item => allergenMap[item.code]);
  };

  return (
    <div className="relative" ref={popupRef}>
      <motion.button
        className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={(e) => {
          e.stopPropagation();
          setShowPopup(!showPopup);
        }}
        aria-label="Allergeninformationen anzeigen"
      >
        <AlertCircle className="w-3 h-3" />
        {showLabel ? `Allergene: ${allergens}` : allergens}
      </motion.button>

      <AnimatePresence>
        {showPopup && (
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
                onClick={() => setShowPopup(false)}
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
  );
}
