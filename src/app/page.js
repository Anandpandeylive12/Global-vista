import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";

import CountriesSection from "@/components/sections/CountriesSection";
import StatsSection from "@/components/sections/StatsSection";
import EducatorsSection from "@/components/sections/EducatorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

import BenefitsSection from "@/components/sections/BenefitsSection";
import PartnershipCard from "@/components/cards/PartnershipCard";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      {/* <StatsSection /> */}
      <BenefitsSection/>
      {/* <CountriesSection /> */}
    
     
      {/* <EducatorsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <FAQSection /> */}
      <CTASection />
    </>
  );
}