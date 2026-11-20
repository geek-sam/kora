import ContactSection from "../components/sections/CaseStudy/ContactSection";
import FAQSection from "../components/sections/Home/FAQSection";
import HomeExperience from "../components/sections/Home/HomeExperience";
import InsightsSection from "../components/sections/Home/InsightsSection";
import PricingSection from "../components/sections/Home/PricingSection";
import ProcessSection from "../components/sections/Home/ProcessSection";
import ResultsSection from "../components/sections/Home/ResultsSection";
import ServicesSection from "../components/sections/Home/ServiceSection";
import TeamSection from "../components/sections/Home/TeamSection";
import TestimonialsSection from "../components/sections/Home/TestimonialsSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <HomeExperience />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ResultsSection />
      <PricingSection />
      <FAQSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
