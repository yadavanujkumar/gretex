"use client";

import { motion } from "framer-motion";
import { MessageSquare, LineChart, Shield, Terminal } from "lucide-react";
import Link from "next/link";

export function Products() {
  return (
    <section id="products" className="py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">A complete suite for AI developers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, scale, and secure your AI applications in one unified platform.
            </p>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-5xl mx-auto">
          
          {/* Nexus Chat - Large Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Nexus Chat</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Embed intelligent, context-aware chat interfaces directly into your product. With built-in memory and RAG capabilities out of the box.
            </p>
            
            {/* Visual representation of chat */}
            <div className="mt-auto relative w-full h-48 bg-secondary/30 rounded-t-xl border-t border-x border-border/50 p-4 flex flex-col gap-3 pt-6 overflow-hidden">
              <div className="self-end bg-primary/20 text-foreground text-sm py-2 px-4 rounded-2xl rounded-tr-sm max-w-[80%]">
                Can you summarize our Q3 metrics?
              </div>
              <div className="self-start bg-secondary text-foreground text-sm py-2 px-4 rounded-2xl rounded-tl-sm max-w-[80%] flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Analyzing Q3 data models...
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Nexus Analytics - Medium Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <LineChart className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Deep observability into token usage, latency, and user behavior.
            </p>
            
            {/* Visual representation of chart */}
            <div className="mt-auto h-24 w-full relative opacity-50 group-hover:opacity-100 transition-opacity">
              <svg className="absolute bottom-0 left-0 w-full h-full text-blue-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 L0,80 L20,60 L40,70 L60,30 L80,40 L100,10 L100,100 Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M0,80 L20,60 L40,70 L60,30 L80,40 L100,10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </motion.div>

          {/* Nexus Security - Medium Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Enterprise-grade PII redaction and prompt injection defense.
            </p>
            
            {/* Visual representation of security */}
            <div className="mt-auto w-full border border-green-500/20 bg-green-500/5 rounded-lg p-3 text-xs font-mono text-green-500/70">
              <div className="flex justify-between mb-1"><span>Shield Active</span><span>100%</span></div>
              <div className="h-1 w-full bg-green-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full" />
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-8 grid grid-cols-1 max-w-5xl mx-auto">
          {/* Nexus Edge API - Wide Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-950 rounded-3xl p-8 border border-border/50 shadow-inner flex flex-col md:flex-row gap-8 items-center relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <div className="flex-1 text-zinc-100 z-10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Edge API</h3>
              <p className="text-sm text-zinc-400 mb-6 max-w-md">
                Deploy models directly to the edge for sub-50ms latency globally. Compatible with all major frameworks.
              </p>
              <Link href="#contact" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium">
                View Documentation &rarr;
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 bg-black/50 rounded-xl border border-zinc-800 p-4 font-mono text-xs text-zinc-400 z-10 shadow-xl">
              <div><span className="text-purple-400">POST</span> /v1/edge/deploy</div>
              <div className="mt-2 text-zinc-500">{'// Response'}</div>
              <div>{'{'}</div>
              <div className="pl-4">"status": <span className="text-green-400">"deployed"</span>,</div>
              <div className="pl-4">"regions": [<span className="text-green-400">"iad"</span>, <span className="text-green-400">"sfo"</span>, <span className="text-green-400">"fra"</span>],</div>
              <div className="pl-4">"latency_ms": <span className="text-yellow-400">42</span></div>
              <div>{'}'}</div>
            </div>
            
            {/* Subtle background glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
