import React from "react";
import HeroSection from "./Hero/HeroSection";
import GrowthSection from "./Growth/Growth-1/GrowthSection";
import StatsSection from "./Growth/Growth-2/StatsSection";
import IntegrateSection from "./Integration/IntegrateSection";
import PricingSection from "./Pricing/PricingSection";
import TestimonialSection from "./Testimonial/Testimonial";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <GrowthSection />
      <StatsSection />
      <IntegrateSection />
      <PricingSection />
      <TestimonialSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
