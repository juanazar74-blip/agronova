import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DataSources } from "@/components/DataSources";
import { Pricing } from "@/components/Pricing";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <DataSources />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
