import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PageHero from "@/components/PageHero";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "115 Ajay Nagar, Santoshpur, Kolkata – 700075",
    link: "https://maps.app.goo.gl/2zGcz4jniBbWzFWK9",
    linkText: "Get Directions",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "+91 9038234917",
    link: "tel:+919038234917",
    linkText: "Call Now",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "dalandas1988@gmail.com",
    link: "mailto:dalandas1988@gmail.com",
    linkText: "Send Email",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    content: "24×7 Available",
    link: null,
    linkText: null,
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello Das Enterprises, I need medical equipment support.\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919038234917?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="We're available 24×7 for your medical equipment needs"
        />

        {/* Contact Section */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  Get In Touch
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Need medical equipment urgently? Contact us anytime – we're available 24×7 to 
                  provide oxygen cylinders, concentrators, hospital beds, and complete ICU setups.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-trust-navy mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                        {info.link && (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            {info.linkText} →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Training Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 p-6 rounded-2xl bg-secondary/10 border border-secondary/20"
                >
                  <h4 className="font-semibold text-trust-navy mb-2">Professional Training</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team is trained by <strong>Medica Super Speciality Hospital, EM Bypass, Mukundpur</strong>, 
                    ensuring safe and professional handling of all medical equipment.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="medical-card">
                  <h3 className="font-display text-2xl font-bold text-trust-navy mb-6">
                    Send WhatsApp Enquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="contact-form space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us what equipment you need..."
                        rows={4}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground text-sm mb-4">Or call us directly:</p>
                    <a
                      href="tel:+919038234917"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-medical-hover hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      +91 9038234917
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title">Find Us on the Map</h2>
              <p className="section-subtitle">
                Visit our store or get equipment delivered to your doorstep
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-medical h-[450px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5424848148784!2d88.39082731495385!3d22.47987558522073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271034e8c8e0d%3A0x5c7c0f7d8c7c7c7c!2s115%20Ajay%20Nagar%2C%20Santoshpur%2C%20Kolkata%2C%20West%20Bengal%20700075!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Das Enterprises Location"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
