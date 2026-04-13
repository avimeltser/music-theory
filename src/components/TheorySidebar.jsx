import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TheorySidebar({ activeMode }) {
  const [isOpen, setIsOpen] = useState(!!activeMode);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed right-0 top-0 h-full w-80 border-l border-[#161616] bg-[#0a0a0a]/95 p-8 backdrop-blur-xl"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#d4af37]">Theory context</h3>
          <p className="mt-6 text-sm text-[#9a9a9a] leading-relaxed">
            {activeMode ? `Analyzing ${activeMode}...` : "Select a key or mode to begin the observation."}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
