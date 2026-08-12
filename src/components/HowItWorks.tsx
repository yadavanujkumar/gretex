"use client";

import { motion } from "framer-motion";
import { KeyRound, Terminal, Rocket } from "lucide-react";

const steps = [
  {
    icon: KeyRound,
    title: "1. Get your API Key",
    description: "Sign up in seconds and grab your API key from the dashboard. No credit card required to start building.",
  },
  {
    icon: Terminal,
    title: "2. Install the SDK",
    description: "Drop our lightweight, fully typed SDK into your project. Available for Node.js, Python, and Go.",
  },
  {
    icon: Rocket,
    title: "3. Deploy & Scale",
    description: "Ship to production instantly. We handle the global edge distribution and auto-scaling automatically.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            From zero to production in minutes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We've eliminated all the infrastructure headaches so you can focus entirely on building your core product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-border -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-6 relative group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                  {/* Decorative glowing dot */}
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
