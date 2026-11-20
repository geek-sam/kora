import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./routes/index";
import CaseStudyPage from "./routes/caseStudy";
import InsightsPage from "./routes/Insights";
import AboutPage from "./routes/about";
import ContactPage from "./routes/contact";

export default function App() {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      {/* <PageTransition> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudyPage />} />
        {/* <Route path="/case-studies/:slug" element={<CaseStudyDetailsPage />} /> */}
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* </PageTransition> */}
      <Footer />
    </>
  );
}
