'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold-600 transition-colors"
      >
        <span className="text-lg font-serif text-navy-900">{question}</span>
        {isOpen ? <Minus className="text-gold-500 flex-shrink-0" /> : <Plus className="text-gold-500 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ({ items }: { items: FAQItemProps[] }) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, idx) => (
        <FAQItem key={idx} {...item} />
      ))}
    </div>
  );
}