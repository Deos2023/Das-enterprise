import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cylinder, Clock, Heart, Award } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  {
    icon: <Cylinder className="w-8 h-8" />,
    value: 500,
    suffix: "+",
    label: "Oxygen Cylinders Delivered",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 24,
    suffix: "×7",
    label: "Emergency Support Available",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: 1000,
    suffix: "+",
    label: "Happy Patients & Families",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 2,
    suffix: "+",
    label: "Years Trusted Medical Service",
  },
];

const CounterNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white" aria-label="Company Statistics">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Trusted by Thousands</h2>
          <p className="section-subtitle">
            Delivering reliable medical equipment support across Kolkata
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="counter-card"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <h3 className="sr-only">{stat.label}</h3>
              <CounterNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
