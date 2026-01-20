import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Cylinder, Wind, Bed, HeartPulse, Activity, Droplet } from "lucide-react";

const services = [
  {
    icon: <Cylinder className="w-8 h-8" />,
    title: "Oxygen Cylinder Supply",
    description: "A / B / D Type oxygen cylinders available for rent and sale with quick delivery.",
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Oxygen Concentrator Rental",
    description: "High-quality Philips and Oxymed concentrators for continuous oxygen therapy.",
  },
  {
    icon: <Bed className="w-8 h-8" />,
    title: "ICU Patient Complete Setup",
    description: "Complete ICU-grade equipment setup for home care with professional guidance.",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "BiPAP Machine Rent",
    description: "ResMed Lumis 150 BiPAP machines for respiratory support and sleep therapy.",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "CPAP Machine Rent",
    description: "ResMed AirSense CPAP machines for sleep apnea treatment.",
  },
  {
    icon: <Bed className="w-8 h-8" />,
    title: "Hospital Bed Rent",
    description: "Super deluxe hospital beds with adjustable features for patient comfort.",
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Suction Machine Rent",
    description: "Single and double jar suction machines for airway clearance.",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Cardiac Monitor Rent",
    description: "5 parameter cardiac monitors for vital signs monitoring at home.",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Services
          </span>
          <h2 className="section-title">Complete Medical Equipment Solutions</h2>
          <p className="section-subtitle">
            From oxygen therapy to complete ICU setup, we provide everything you need for home-based critical care
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="medical-card group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
