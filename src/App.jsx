import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="flex h-screen items-center justify-center p-10">
        <motion.h1 
          className="font-mono text-center text-7xl font-bold tracking-[-0.02em] md:text-9xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          RESONANT<br/>SPACE
        </motion.h1>
      </section>

      <section className="py-32 px-10">
        <motion.div 
          className="mx-auto max-w-4xl border-l border-[#d4af37] pl-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-3xl font-bold tracking-[-0.01em]">THE OBSERVATION</h2>
          <p className="mt-8 text-xl leading-relaxed text-[#9a9a9a]">
            Music theory is musical architecture. We move away from lecture-based education into high-end creative tooling for architects of sound.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
