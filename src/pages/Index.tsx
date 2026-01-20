import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import MapSection from "@/components/MapSection";
import QuickContact from "@/components/QuickContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsCounter />
        <AboutPreview />
        <WhyChooseUs />
        <ServicesSection />
        <ProductsSection />
        <MapSection />
        <QuickContact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
