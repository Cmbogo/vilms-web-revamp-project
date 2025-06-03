
import { Hero } from "@/components/Hero";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { AboutSnapshot } from "@/components/AboutSnapshot";
import { CallToAction } from "@/components/CallToAction";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <AboutSnapshot />
      <FeaturedPrograms />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
