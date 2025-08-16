"use client";

import { motion, useInView } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import { useTranslations } from "next-intl"; // Import the hook
import { Link } from "@/i18n/navigation";

export const HowItWorksSection = () => {
  const t = useTranslations("HowItWorksSection"); // Initialize the hook
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Build the steps list from translations
  const steps = [
    {
      title: t("steps.0.title"),
      description: t("steps.0.description"),
    },
    {
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-20 xl:py-30 px-4 sm:px-6 lg:px-8 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary-text">
              {t.rich("title", {
                accent: (chunks) => (
                  <span className="text-accent-background">{chunks}</span>
                ),
              })}
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-secondary-text">
              {t("subtitle")}
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 bg-accent-background text-inverse-text">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-primary-text">
                      {step.title}
                    </h4>
                    <p className="text-sm text-secondary-text">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformOrigin: "center" }}
              className="w-fit"
            >
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg transition-all duration-200 bg-transparent hover:bg-accent-background/10 border text-accent-background border-accent-background"
                >
                  {t("cta_learnMore")}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl p-6 shadow-xl bg-secondary-background ">
              <div className="max-md:h-[800px] md:aspect-video rounded-xl overflow-hidden relative">
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    onClick={handlePlayClick}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-accent-background"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                >
                  <source
                    src="/video/demo-high.mp4"
                    type="video/mp4"
                    media="(min-width: 768px)"
                  />
                  <source
                    src="/video/demo-mobile.mp4"
                    type="video/mp4"
                    media="(max-width: 767px)"
                  />
                </video>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-text">
                  {t("video_title")}
                </h3>
                <p className="text-sm text-secondary-text">
                  {t("video_description")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
