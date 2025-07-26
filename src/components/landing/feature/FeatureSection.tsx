import { staggerContainer } from "@/constant/style.constant";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";

import { FeatureCard } from "./FeatureCard";
import { FeatureItemInterface } from "@/constant/type";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureSectionProps {
  featureList: FeatureItemInterface[];
}

export const FeatureSection = ({ featureList }: FeatureSectionProps) => {
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });
  return (
    <section
      ref={featuresRef}
      id="tentang-kami"
      className="py-20 xl:py-30 px-4 sm:px-6 lg:px-8  bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={
            featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary-text">
            Kenapa Harus <span className="text-accent-background">AmanAja</span>
            ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-text">
            Fitur-fitur unggulan yang membuat AmanAja menjadi pilihan terbaik
            untuk perlindungan digital Anda
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={featuresInView ? "animate" : "initial"}
        >
          {featureList.map((feature, index) => (
            <FeatureCard
              title={feature.title}
              key={index}
              index={index}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={
            featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg transition-all duration-200 bg-transparent hover:bg-accent-background/10 border border-accent-background text-accent-background"
              >
                Tentang Kami
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
