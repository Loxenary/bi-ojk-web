"use client";

import { staggerContainer } from "@/constant/style.constant";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FeatureCard } from "./FeatureCard";
import { ChevronRight, MessageSquareText, Smartphone, Landmark } from "lucide-react"; // Import icons
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// This component no longer needs props
export const FeatureSection = () => {
  const t = useTranslations("FeatureSection");
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });

  // Build the feature list inside the component using translations
    const featureList = [
    {
      icon: MessageSquareText,
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      icon: Smartphone,
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      icon: Landmark,
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
  ];
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
            {t.rich("title", {
              accent: (chunks) => (
                <span className="text-accent-background">{chunks}</span>
              ),
            })}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-text">
            {t("subtitle")}
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
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 w-full flex justify-center items-center"
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
                {t("cta_about")}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
