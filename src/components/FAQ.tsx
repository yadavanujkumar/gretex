"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does the usage-based pricing actually work?",
    answer: "You are only billed for the exact number of tokens processed (input + output). We don't charge for idle time, concurrent connections, or baseline infrastructure. There are no minimum monthly commitments on the Pay-as-you-go plan.",
  },
  {
    question: "Do you train your models on my proprietary data?",
    answer: "Absolutely not. Enterprise and API customer data is strictly siloed and never used to train or improve our foundation models. We are SOC2 Type II certified and fully GDPR compliant.",
  },
  {
    question: "What is the typical latency I can expect?",
    answer: "Our global edge network ensures that API requests are routed to the nearest geographic cluster. Average time-to-first-token (TTFT) is consistently under 50ms across North America and Europe.",
  },
  {
    question: "Can I self-host Nexus AI on my own infrastructure?",
    answer: "Yes! Our Enterprise tier includes options for VPC deployment and on-premise air-gapped hosting. Contact our sales team to discuss your specific infrastructure requirements.",
  },
  {
    question: "Is there a limit to how many requests I can make concurrently?",
    answer: "The Starter tier allows up to 50 concurrent requests. The Pro tier increases this to 500. Enterprise customers have dedicated capacity with no strict concurrency limits.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-secondary/50 hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
