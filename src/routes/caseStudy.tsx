import CaseStudyHero from "../components/sections/CaseStudy/CaseStudyHero";
import CaseStudiesSection from "../components/sections/CaseStudy/CaseStudiesSection";
import ContactSection from "../components/sections/CaseStudy/ContactSection";

const CaseStudyPage: React.FC = () => {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  );
};

export default CaseStudyPage;
