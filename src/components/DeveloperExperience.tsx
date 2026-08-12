"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, FileJson } from "lucide-react";
import { cn } from "@/lib/utils";

const codeSnippets = {
  typescript: {
    icon: Code2,
    label: "TypeScript",
    code: `import { NexusClient } from '@nexus/ai';

const nexus = new NexusClient(process.env.NEXUS_API_KEY);

const response = await nexus.generate({
  model: 'nexus-v2-reasoning',
  messages: [{ role: 'user', content: 'Explain quantum computing' }],
  stream: true,
});

for await (const chunk of response) {
  process.stdout.write(chunk.text);
}`,
  },
  python: {
    icon: Terminal,
    label: "Python",
    code: `from nexus_ai import NexusClient

nexus = NexusClient(api_key="YOUR_API_KEY")

response = nexus.generate(
    model="nexus-v2-reasoning",
    messages=[{"role": "user", "content": "Explain quantum computing"}],
    stream=True
)

for chunk in response:
    print(chunk.text, end="")`,
  },
  curl: {
    icon: FileJson,
    label: "cURL",
    code: `curl -X POST https://api.nexus.ai/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "nexus-v2-reasoning",
    "messages": [{"role": "user", "content": "Explain quantum computing"}],
    "stream": true
  }'`,
  },
};

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeSnippets>("typescript");

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 border border-border"
          >
            Developer First
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Built for modern engineering teams
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Integrate with three lines of code. Enjoy fully typed SDKs, native streaming support, and comprehensive documentation from day one.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-950 rounded-2xl border border-border/50 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 h-12 bg-zinc-900/50 border-b border-zinc-800/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1">
                {(Object.keys(codeSnippets) as Array<keyof typeof codeSnippets>).map((key) => {
                  const Icon = codeSnippets[key].icon;
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all relative",
                        isActive ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {codeSnippets[key].label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-zinc-800 rounded-md -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-mono leading-relaxed"
                >
                  <code className="text-zinc-300">
                    {codeSnippets[activeTab].code.split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell pr-6 text-zinc-600 select-none text-right">{i + 1}</span>
                        <span 
                          className="table-cell whitespace-pre"
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/('.*?'|".*?")/g, '<span class="text-green-400">$&</span>')
                              .replace(/\b(import|from|const|await|new|for|async|export)\b/g, '<span class="text-blue-400">$&</span>')
                              .replace(/\b(function|return|if|else|try|catch)\b/g, '<span class="text-purple-400">$&</span>')
                              .replace(/([a-zA-Z0-9_]+)(?=\()/g, '<span class="text-yellow-300">$&</span>')
                          }}
                        />
                      </div>
                    ))}
                  </code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
