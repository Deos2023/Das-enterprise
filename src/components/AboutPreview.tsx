import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import shopFront from "@/assets/shop-front.jpeg";

const highlights = [
  "Established in 2023",
  "Trained by Medica Super Speciality Hospital",
  "24×7 Emergency Support",
  "Affordable & Transparent Pricing",
];

const AboutPreview = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medical-hover">
              <img
                src={shopFront}
                alt="Das Enterprises Storefront"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-white rounded-2xl p-4 shadow-medical-hover">
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary">24×7</span>
                <span className="text-sm text-muted-foreground">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-6">
              Your Trusted Medical Equipment Partner in Kolkata
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Das Enterprises, established in 2023, is a trusted medical equipment rental and sales 
              provider in Kolkata. We specialize in oxygen therapy solutions and ICU-grade equipment 
              for home care. Our services are backed by professional training from Medica Super 
              Speciality Hospital, ensuring reliable, safe, and compassionate patient support.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
