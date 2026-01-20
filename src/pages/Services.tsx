import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Cylinder, Wind, Bed, HeartPulse, Activity, Droplet, Monitor, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";

// Import product images
import hospitalBed from "@/assets/hospital-bed.jpeg";
import suctionSingle from "@/assets/suction-machine-single.jpeg";
import suctionDouble from "@/assets/suction-machine-double.jpeg";
import cardiacMonitor from "@/assets/cardiac-monitor.jpeg";
import bipapLumis from "@/assets/bipap-lumis150.jpeg";
import cpapResmed from "@/assets/cpap-resmed.jpeg";
import oxymed10l from "@/assets/oxymed-10l.jpeg";
import philips5l from "@/assets/philips-5l.jpeg";
import oxygenCylinders from "@/assets/oxygen-cylinders.jpeg";
import aTypeCylinder  from "@/assets/A-type-cylinder.jpeg";


const services = [
  {
    icon: <Cylinder className="w-8 h-8" />,
    title: "Oxygen Cylinder Supply",
    description: "We provide A, B, and D type oxygen cylinders for rent and sale. Quick delivery across Kolkata, 24×7 availability for emergencies. All cylinders are properly maintained and refilled with medical-grade oxygen.",
    image: oxygenCylinders,
    features: ["A / B / D Type Available", "Medical-Grade Oxygen", "Quick Refill Service", "Delivery in Any Weather"],
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "Oxygen Concentrator Rental",
    description: "High-quality Philips and Oxymed oxygen concentrators available for rent. Perfect for patients requiring continuous oxygen therapy at home. 5L and 10L capacity options available.",
    image: philips5l,
    features: ["Philips 5L Concentrator", "Oxymed 10L Concentrator", "Low Maintenance", "Power Backup Compatible"],
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "ICU Patient Complete Setup",
    description: "Complete ICU-grade equipment setup for home care. We provide all necessary equipment including hospital bed, monitors, oxygen supply, suction machine, and more with professional installation guidance.",
    image: cardiacMonitor,
    features: ["Complete Equipment Package", "Professional Setup Guidance", "24×7 Support", "Flexible Rental Terms"],
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "BiPAP Machine Rent",
    description: "ResMed Lumis 150 BiPAP machines for respiratory support. Ideal for patients with sleep apnea, COPD, or those requiring non-invasive ventilation support at home.",
    image: bipapLumis,
    features: ["ResMed Lumis 150", "Auto-Adjusting Pressure", "Comfortable Masks", "Data Logging Feature"],
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "CPAP Machine Rent",
    description: "ResMed AirSense CPAP machines for sleep apnea treatment. Quiet operation, comfortable masks, and advanced features for effective therapy.",
    image: cpapResmed,
    features: ["ResMed AirSense 10", "Whisper Quiet", "Humidifier Included", "Mobile App Tracking"],
  },
  {
    icon: <Bed className="w-8 h-8" />,
    title: "Hospital Bed Rent",
    description: "Super deluxe hospital beds with adjustable head and foot sections. Comfortable mattress included, easy-to-use controls, and sturdy construction for patient safety.",
    image: hospitalBed,
    features: ["Adjustable Positions", "Side Rails", "Wheel Locks", "Comfortable Mattress"],
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Suction Machine Rent",
    description: "Single and double jar suction machines for airway clearance. Essential for patients requiring regular suctioning. Easy to operate and maintain.",
    image: suctionDouble,
    features: ["Single & Double Jar", "Portable Design", "Easy Cleaning", "Adjustable Suction"],
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Cardiac Monitor Rent",
    description: "5 parameter cardiac monitors for vital signs monitoring at home. Tracks heart rate, blood pressure, oxygen saturation, temperature, and respiratory rate.",
    image: cardiacMonitor,
    features: ["5 Parameters", "Large Display", "Alarm System", "Portable Option"],
  },
  {
    icon: <Cylinder className="w-8 h-8" />,
    title: "A Type Oxygen Cylinder Rent",
    description: "A type oxygen cylinders for medical use. Suitable for patients requiring portable oxygen therapy. Regularly maintained and refilled with high-quality oxygen.",
    image: aTypeCylinder,
    features: ["A Type Available", "Medical-Grade Oxygen", "Regular Refill Service", "Portable Design"],
  }
];

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          title="Our Services"
          subtitle="Comprehensive medical equipment solutions for home healthcare"
        />

        {/* Services Grid */}
        <section ref={servicesRef} className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                What We Offer
              </span>
              <h2 className="section-title">Complete Medical Equipment Solutions</h2>
              <p className="section-subtitle">
                From oxygen therapy to complete ICU setup, we provide everything for home-based critical care
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="rounded-2xl overflow-hidden shadow-medical-hover bg-white">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-contain p-6"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/10 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-trust-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919038234917?text=Hello%20Das%20Enterprises%2C%20I%20need%20information%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enquire Now
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Can't Find What You Need?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Contact us directly and we'll help you find the right medical equipment for your needs.
              </p>
              <a
                href="tel:+919038234917"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Call +91 9038234917
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
