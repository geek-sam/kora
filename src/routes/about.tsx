import AboutHero from "../components/sections/About/AboutHero";
import FounderSection from "../components/sections/About/FounderSection";
import ValuesSection from "../components/sections/About/ValuesSection";
import ContactSection from "../components/sections/CaseStudy/ContactSection";
import InsightsSection from "../components/sections/Home/InsightsSection";
import TeamSection from "../components/sections/Home/TeamSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <FounderSection />
      <ValuesSection />
      <TeamSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};

export default AboutPage;
