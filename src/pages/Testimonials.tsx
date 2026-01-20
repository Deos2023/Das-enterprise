import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";

const testimonials = [
  {
    name: "Netai Pada Mandal",
    rating: 5,
    text: "Very good service, nearest to my location. Das Enterprises provided oxygen cylinders quickly during an emergency. Highly recommend their service.",
    date: "December 2025",
  },
  {
    name: "Tanaji Pandey",
    rating: 5,
    text: "Excellent experience and quick service. The team was very professional and helped us set up the ICU equipment at home. They were available 24×7 for any queries.",
    date: "November 2025",
  },
  {
    name: "Tapan Das",
    rating: 5,
    text: "Low rate. Best services. Any weather he delivers oxygen cylinders. I am very satisfied with their service. They understand the urgency of medical needs.",
    date: "October 2025",
  },
  {
    name: "Subhash Ghosh",
    rating: 5,
    text: "Outstanding service during a critical time for our family. The BiPAP machine was delivered within hours and proper training was provided. Thank you Das Enterprises!",
    date: "September 2025",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Very helpful staff. They guided us through the entire process of setting up home ICU for my father. The equipment quality is excellent and rates are reasonable.",
    date: "August 2025",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Trusted oxygen supplier in Kolkata. Quick response, quality service, and affordable pricing. They are always available when you need them most.",
    date: "July 2025",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          title="Customer Testimonials"
          subtitle="Hear from families we've helped during their medical needs"
        />

        {/* Testimonials Grid */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Reviews
              </span>
              <h2 className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle">
                Real stories from families who trusted us during critical times
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="testimonial-card relative"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-trust-navy">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="block text-5xl font-bold text-white mb-2">1000+</span>
                <span className="text-white/80">Happy Patients</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="block text-5xl font-bold text-white mb-2">5.0</span>
                <span className="text-white/80">Average Rating</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block text-5xl font-bold text-white mb-2">24×7</span>
                <span className="text-white/80">Support Available</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                Experience Our Service
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of satisfied customers who trust Das Enterprises for their medical equipment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919038234917"
                  className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919038234917?text=Hello%20Das%20Enterprises%2C%20I%20need%20medical%20equipment%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
                >
                  WhatsApp Enquiry
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

export default Testimonials;
