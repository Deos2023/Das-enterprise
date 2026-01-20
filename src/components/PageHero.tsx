import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
