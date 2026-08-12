"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Nexus AI completely transformed our support workflow. We went from a 24-hour SLA to instant resolution for 80% of our tickets. The API is incredibly intuitive to work with.",
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
  },
  {
    quote: "We evaluated every major AI provider, and Nexus consistently came out on top for reasoning capabilities. The enterprise security features made it an easy sell to our compliance team.",
    initials: "MR",
    name: "Michael Rodriguez",
    role: "VP Engineering, FinSecure",
  },
  {
    quote: "The low latency of their Edge API is mind-blowing. Our real-time translation app now feels instantaneous to users globally. Simply the best infrastructure out there.",
    initials: "AL",
    name: "Amanda Lee",
    role: "Lead Developer, LingoSync",
  },
  {
    quote: "Switching to Nexus cut our API costs in half while dramatically improving the quality of our generated reports. The analytics dashboard gave us exactly the insights we needed.",
    initials: "DB",
    name: "David Barnes",
    role: "Director of Product, DataPulse",
  },
  {
    quote: "The ability to deploy models directly to the edge has given our mobile app an unfair advantage. We're seeing sub-50ms latency across Europe and Asia consistently.",
    initials: "KC",
    name: "Kenji Chen",
    role: "Mobile Architect, NomadApp",
  },
  {
    quote: "Nexus Security's prompt injection defense caught several sophisticated attacks on our public-facing bot during our pen-testing phase. Worth every penny.",
    initials: "EL",
    name: "Elena Rostova",
    role: "Head of InfoSec, ShieldBank",
  },
  {
    quote: "Integration took less than an hour. The documentation is pristine, and the TypeScript SDK is a joy to work with. Our team loves building on Nexus.",
    initials: "TM",
    name: "Tyler Morrison",
    role: "Senior Fullstack Engineer, DevFlow",
  },
  {
    quote: "The context window capabilities allowed us to ingest entire codebases at once. We built our internal developer assistant in three days.",
    initials: "SO",
    name: "Samir Ousman",
    role: "VP Engineering, CodeWorks",
  }
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by innovative teams</h2>
          <p className="text-muted-foreground">Join thousands of developers building the next generation of software.</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-[85vw] sm:w-[400px] shrink-0 snap-center p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 cursor-grab active:cursor-grabbing"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <p className="text-lg leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Band */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/50 pt-16"
        >
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">99.99%</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Uptime SLA</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">50ms</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Avg Latency</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">10B+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Tokens Processed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">35+</p>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Global Regions</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
