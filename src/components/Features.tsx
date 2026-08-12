"use client";

import { BrainCircuit, Zap, Lock, Code2, Globe, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Neural Architecture",
    description: "Built on next-generation transformer models, delivering unprecedented reasoning capabilities and contextual understanding.",
    icon: BrainCircuit,
  },
  {
    title: "Real-time Processing",
    description: "Sub-millisecond latency for complex queries, powered by our globally distributed edge network.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC2 compliance, and dedicated VPC options to keep your proprietary data safe.",
    icon: Lock,
  },
  {
    title: "Developer First",
    description: "Intuitive APIs, comprehensive SDKs, and extensive documentation designed by developers, for developers.",
    icon: Code2,
  },
  {
    title: "Global Scale",
    description: "Deploy instantly to 35+ regions worldwide with automatic failover and load balancing built-in.",
    icon: Globe,
  },
  {
    title: "Advanced Analytics",
    description: "Real-time insights into token usage, latency metrics, and cost analysis through our intuitive dashboard.",
    icon: LineChart,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to build the future</h2>
          <p className="text-lg text-muted-foreground">
            Nexus AI provides a comprehensive suite of tools and infrastructure to help you integrate advanced intelligence into your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
