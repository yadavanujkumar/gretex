import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DeveloperExperience } from "@/components/DeveloperExperience";
import { Products } from "@/components/Products";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Integrations />
      <DeveloperExperience />
      <Products />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
