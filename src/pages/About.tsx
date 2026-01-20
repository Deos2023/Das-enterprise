import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, GraduationCap, Award, Heart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";
import oxygenCylinders from "@/assets/oxygen-cylinders.jpeg";
import shopFront from "@/assets/shop-front.jpeg";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Compassionate Care",
    description: "We understand the stress of medical emergencies and provide caring, empathetic service.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliability",
    description: "Count on us 24×7, rain or shine, for all your medical equipment needs.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Professional Training",
    description: "Our team is trained by Medica Super Speciality Hospital for safe equipment handling.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Quality Equipment",
    description: "We provide only hospital-grade, well-maintained medical equipment.",
  },
];

const milestones = [
  "Founded in 2023 with a mission to provide affordable medical equipment",
  "Trained by Medica Super Speciality Hospital, EM Bypass",
  "Delivered 500+ oxygen cylinders across Kolkata",
  "Served 1000+ happy patients and families",
  "Established as a trusted local oxygen supplier",
];

const About = () => {
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          title="About Das Enterprises"
          subtitle="Your trusted partner for medical equipment in Kolkata since 2023"
        />

        {/* Story Section */}
        <section ref={storyRef} className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                  Dedicated to Saving Lives, One Equipment at a Time
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Das Enterprises was founded in 2023 with a clear mission: to make critical 
                    medical equipment accessible and affordable for families in Kolkata. We 
                    recognized that during medical emergencies, families often struggle to find 
                    reliable equipment quickly and at reasonable prices.
                  </p>
                  <p>
                    Our founder, trained at Medica Super Speciality Hospital on EM Bypass, 
                    brought professional expertise and a commitment to patient care that defines 
                    our service today. We understand that behind every rental is a family in 
                    need, and we treat each call with urgency and compassion.
                  </p>
                  <p>
                    From oxygen cylinders to complete ICU setups, we specialize in oxygen therapy 
                    solutions and ICU-grade equipment for home care. Our 24×7 availability means 
                    you can count on us anytime, even during the harshest weather conditions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={storyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="rounded-2xl overflow-hidden shadow-medical-hover">
                  <img
                    src={shopFront}
                    alt="Das Enterprises Storefront"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-medical-hover">
                  <img
                    src={oxygenCylinders}
                    alt="Oxygen Cylinder Inventory"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle">Key milestones in our commitment to healthcare</p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 mb-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-foreground pt-0.5">{milestone}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Our Values
              </span>
              <h2 className="section-title">What We Stand For</h2>
              <p className="section-subtitle">
                The principles that guide our service to every patient and family
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="medical-card text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-trust-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Need Medical Equipment Support?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                We're available 24×7 to help you with oxygen cylinders, concentrators, and ICU equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919038234917"
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Call +91 9038234917
                </a>
                <a
                  href="https://wa.me/919038234917?text=Hello%20Das%20Enterprises%2C%20I%20need%20medical%20equipment%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
