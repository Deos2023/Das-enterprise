import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import product images
import hospitalBed from "@/assets/hospital-bed.jpeg";
import suctionSingle from "@/assets/suction-machine-single.jpeg";
import suctionDouble from "@/assets/suction-machine-double.jpeg";
import cardiacMonitor from "@/assets/cardiac-monitor.jpeg";
import bipapLumis from "@/assets/bipap-lumis150.jpeg";
import cpapResmed from "@/assets/cpap-resmed.jpeg";
import oxymed10l from "@/assets/oxymed-10l.jpeg";
import philips5l from "@/assets/philips-5l.jpeg";

const products = [
  {
    image: hospitalBed,
    title: "Hospital Bed – Super Deluxe",
    description: "Adjustable hospital bed for patient comfort",
  },
  {
    image: suctionSingle,
    title: "Suction Machine – Single Jar",
    description: "Portable suction for airway clearance",
  },
  {
    image: suctionDouble,
    title: "Suction Machine – Double Jar",
    description: "Heavy-duty suction machine",
  },
  {
    image: cardiacMonitor,
    title: "5 Parameter Cardiac Monitor",
    description: "Complete vital signs monitoring",
  },
  {
    image: bipapLumis,
    title: "ResMed Lumis 150 BiPAP",
    description: "Advanced BiPAP for respiratory support",
  },
  {
    image: cpapResmed,
    title: "ResMed AirSense CPAP",
    description: "Premium CPAP for sleep therapy",
  },
  {
    image: oxymed10l,
    title: "Oxymed Concentrator – 10 L",
    description: "High-flow oxygen concentrator",
  },
  {
    image: philips5l,
    title: "Philips Concentrator – 5 L",
    description: "Reliable oxygen concentrator",
  },
];

const ProductsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Our Products
          </span>
          <h2 className="section-title">Premium Medical Equipment</h2>
          <p className="section-subtitle">
            High-quality medical equipment available for rent and sale
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="product-card group"
            >
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-trust-navy mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <a
                  href={`https://wa.me/919038234917?text=Hello%20Das%20Enterprises%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
