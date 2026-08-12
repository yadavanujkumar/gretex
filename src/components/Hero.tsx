"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mockupY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradient & Animated Grid */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 bg-background overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          }}
        />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none" 
        />
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity: fadeOut }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 border border-border"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Introducing Nexus AI v2.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Intelligence that scales with your ambition.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          Automate workflows, generate insights, and build faster with the most advanced reasoning engine designed for modern teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <MagneticButton>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 text-base font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg w-full sm:w-auto"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="#products"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg transition-colors border border-border w-full sm:w-auto"
            >
              Explore Products
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Mockup/Visual */}
      <motion.div 
        style={{ y: mockupY }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-5xl mt-20"
        >
          <div className="relative aspect-video rounded-xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col">
            {/* Window header */}
            <div className="h-10 bg-secondary/50 border-b border-border flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            {/* Window body - fake code/ui */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-48 border-r border-border bg-secondary/30 p-4 hidden sm:flex flex-col gap-3">
                <div className="h-2 w-full bg-muted-foreground/30 rounded-full mb-4"></div>
                <div className="h-6 w-full bg-primary/10 rounded border border-primary/20 flex items-center px-2">
                  <div className="h-2 w-16 bg-primary/40 rounded-full"></div>
                </div>
                <div className="h-6 w-full hover:bg-secondary/50 rounded flex items-center px-2 transition-colors">
                  <div className="h-2 w-20 bg-muted-foreground/30 rounded-full"></div>
                </div>
                <div className="h-6 w-full hover:bg-secondary/50 rounded flex items-center px-2 transition-colors">
                  <div className="h-2 w-14 bg-muted-foreground/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 relative">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="h-5 w-48 bg-muted-foreground/40 rounded-md"></div>
                    <div className="h-3 w-32 bg-muted rounded-md"></div>
                  </div>
                  <div className="h-8 w-24 bg-primary rounded-md shadow-sm shadow-primary/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-12 bg-primary-foreground/80 rounded-full"></div>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="h-24 bg-secondary/50 rounded-lg border border-border/50 p-4 flex flex-col justify-between">
                    <div className="h-2 w-12 bg-muted-foreground/30 rounded-full"></div>
                    <div className="h-6 w-20 bg-muted-foreground/50 rounded-md"></div>
                  </div>
                  <div className="h-24 bg-secondary/50 rounded-lg border border-border/50 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="h-2 w-16 bg-muted-foreground/30 rounded-full"></div>
                    <div className="h-6 w-24 bg-muted-foreground/50 rounded-md"></div>
                    {/* decorative line graph */}
                    <svg className="absolute bottom-0 left-0 w-full h-12 text-primary opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,100 L0,50 L20,60 L40,30 L60,40 L80,10 L100,20 L100,100 Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="h-24 bg-secondary/50 rounded-lg border border-border/50 p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="h-2 w-14 bg-muted-foreground/30 rounded-full"></div>
                    <div className="h-6 w-16 bg-muted-foreground/50 rounded-md"></div>
                     {/* decorative bar graph */}
                    <div className="absolute bottom-2 right-2 flex gap-1 items-end h-10 opacity-30">
                       <div className="w-2 h-4 bg-primary rounded-t-sm"></div>
                       <div className="w-2 h-6 bg-primary rounded-t-sm"></div>
                       <div className="w-2 h-8 bg-primary rounded-t-sm"></div>
                       <div className="w-2 h-3 bg-primary rounded-t-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Code Editor Window */}
                <div className="flex-1 bg-zinc-950 rounded-xl border border-border/50 p-4 flex flex-col gap-3 font-mono text-xs overflow-hidden relative shadow-inner">
                  <div className="flex gap-4 border-b border-zinc-800 pb-2 mb-2 text-zinc-400">
                    <span className="text-zinc-200 font-medium border-b border-zinc-200 pb-2 -mb-[9px]">request.ts</span>
                    <span>response.json</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">1</span>
                    <span><span className="text-blue-400">const</span> response = <span className="text-purple-400">await</span> nexus.<span className="text-yellow-300">generate</span>({'{'}</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">2</span>
                    <span className="pl-4">model: <span className="text-green-400">"nexus-v2-reasoning"</span>,</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">3</span>
                    <span className="pl-4">messages: [</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">4</span>
                    <span className="pl-8">{'{'} role: <span className="text-green-400">"user"</span>, content: <span className="text-green-400">"Optimize this component..."</span> {'}'}</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">5</span>
                    <span className="pl-4">],</span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">6</span>
                    <span className="pl-4">stream: <span className="text-blue-400">true</span></span>
                  </div>
                  <div className="text-zinc-300 flex">
                    <span className="w-6 text-zinc-600 inline-block select-none">7</span>
                    <span>{'}'});</span>
                  </div>
                  
                  {/* Gradient overlay to fade bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
