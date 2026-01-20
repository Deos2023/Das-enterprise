import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, GraduationCap, Truck, IndianRupee, MapPin, Home } from "lucide-react";
import parallaxBg from "@/assets/parallax-bg.jpg";

const features = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24×7 Emergency Support",
    description: "Round-the-clock availability for critical medical needs",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Hospital Trained Staff",
    description: "Trained by Medica Super Speciality Hospital",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Quick delivery in any weather condition",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Affordable Pricing",
    description: "Transparent and competitive rates",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local Oxygen Supplier",
    description: "Trusted supplier in Kolkata area",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Complete ICU Setup",
    description: "Full ICU equipment setup at home",
  },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-section"
        style={{ backgroundImage: `url(${parallaxBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-trust-navy/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-white/10 rounded-full backdrop-blur-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted Care When You Need It Most
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience reliable, compassionate medical equipment support from a team that truly cares
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/20"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-primary text-white transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
