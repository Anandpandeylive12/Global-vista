import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import CountriesSection from "@/components/sections/CountriesSection";
import StatsSection from "@/components/sections/StatsSection";
import EducatorsSection from "@/components/sections/EducatorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <WhyChooseUsSection />
      <CountriesSection />
      <StatsSection />
      <EducatorsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}