"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">Start for free, then pay only for what you use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border flex flex-col hover:border-primary/30 transition-colors"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm">Perfect for prototyping and small projects.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">100k tokens per month</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Community support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Shared infrastructure</span>
              </li>
            </ul>
            <Link
              href="#contact"
              className="w-full h-10 inline-flex items-center justify-center rounded-md border border-border bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition-colors"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border-2 border-primary relative flex flex-col scale-105 shadow-xl transition-shadow hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-muted-foreground text-sm">For scaling applications and startups.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$49</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">10M tokens per month</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Priority email support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Dedicated edge region</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Advanced analytics</span>
              </li>
            </ul>
            <Link
              href="#contact"
              className="w-full h-10 inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors"
            >
              Start Free Trial
            </Link>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-2xl bg-card border border-border flex flex-col hover:border-primary/30 transition-colors"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground text-sm">Custom solutions for large organizations.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Unlimited tokens</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Dedicated VPC</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">Custom fine-tuning</span>
              </li>
            </ul>
            <Link
              href="#contact"
              className="w-full h-10 inline-flex items-center justify-center rounded-md border border-border bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition-colors"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
