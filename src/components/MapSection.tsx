import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const MapSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Location
          </span>
          <h2 className="section-title">Find Das Enterprises Easily</h2>
          <p className="section-subtitle">
            Visit our store or get equipment delivered to your doorstep
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-navy mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    115 Ajay Nagar, Santoshpur,<br />
                    Kolkata – 700075
                  </p>
                </div>
              </div>
            </div>

            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-navy mb-1">Phone</h3>
                  <a href="tel:+919038234917" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 9038234917
                  </a>
                </div>
              </div>
            </div>

            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-navy mb-1">Email</h3>
                  <a href="mailto:dalandas1988@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    dalandas1988@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="medical-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-trust-navy mb-1">Hours</h3>
                  <p className="text-secondary font-medium text-sm">24×7 Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-medical h-[400px] lg:h-auto"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5424848148784!2d88.39082731495385!3d22.47987558522073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271034e8c8e0d%3A0x5c7c0f7d8c7c7c7c!2s115%20Ajay%20Nagar%2C%20Santoshpur%2C%20Kolkata%2C%20West%20Bengal%20700075!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Das Enterprises Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
