import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

const QuickContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Das Enterprises, I need medical equipment support. My name is ${name} and my phone number is ${phone}.`;
    const whatsappUrl = `https://wa.me/919038234917?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section ref={ref} className="section-padding bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-white/20 rounded-full">
              Quick Enquiry
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Need Medical Equipment Urgently?
            </h2>
            <p className="text-white/80 mb-8">
              Fill in your details and we'll connect with you on WhatsApp instantly
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
