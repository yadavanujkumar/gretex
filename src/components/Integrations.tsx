"use client";

import { Hexagon, Database, Cloud, Zap, Shield, Code, Cpu, Layers, Box, Globe } from "lucide-react";

const icons = [
  { icon: Code, name: "GitHub" },
  { icon: Globe, name: "Slack" },
  { icon: Layers, name: "Figma" },
  { icon: Box, name: "Trello" },
  { icon: Cpu, name: "GitLab" },
  { icon: Database, name: "Supabase" },
  { icon: Cloud, name: "AWS" },
  { icon: Hexagon, name: "Vercel" },
  { icon: Zap, name: "Zapier" },
  { icon: Shield, name: "Cloudflare" },
];

export function Integrations() {
  return (
    <section className="py-12 border-y border-border/50 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Integrates seamlessly with your stack
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {[...icons, ...icons].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100"
              >
                <Icon className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
