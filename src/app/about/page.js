import AboutHero from "@/components/sections/AboutHero";
import MissionVision from "@/components/sections/MissionVision";
import CoreValues from "@/components/sections/CoreValues";
import EducatorsGrid from "@/components/sections/EducatorsGrid";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Global Vista Educators' mission to connect Indian students with UK educators for mentorship and academic excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      {/* <MissionVision /> */}
      <CoreValues />
      {/* <EducatorsGrid />  */}
      <CTASection />
    </>
  );
}