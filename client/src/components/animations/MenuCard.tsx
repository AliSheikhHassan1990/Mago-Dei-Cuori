import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { ReactNode } from 'react';

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
          <motion.div
            className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded"
            whileHover={{ scale: 1.02 }}
          >
            <AlertCircle className="w-3 h-3" />
            Allergene: {allergens}
          </motion.div>
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
