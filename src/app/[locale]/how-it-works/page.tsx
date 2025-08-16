"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  Sun,
  Moon,
  Send,
  Search,
  TrendingUp,
  Database,
  Eye,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import UserConcent from "@/components/how-it-works/UserConcent";
import { useTheme } from "next-themes";
import { phoneLinks } from "@/constant/content";
import Image from "next/image";
import { fadeInUp } from "@/constant/style.constant";
import { useTranslations } from "next-intl"; // Import the hook
import { Link } from "@/i18n/navigation";

export default function HowItWorksPage() {
  const t = useTranslations("HowItWorksPage"); // Initialize the hook
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Build data from translations
  const dataUsageItems = [
    {
      icon: Database,
      title: t("security.items.0.title"),
      description: t("security.items.0.description"),
    },
    {
      icon: Eye,
      title: t("security.items.1.title"),
      description: t("security.items.1.description"),
    },
    {
      icon: Clock,
      title: t("security.items.2.title"),
      description: t("security.items.2.description"),
    },
  ];

  const detailedSteps = [
    {
      icon: Send,
      image: "/step1.png",
      ...t.raw("detailedSteps.steps.0"),
    },
    {
      icon: Search,
      image: "/step2.png",
      ...t.raw("detailedSteps.steps.1"),
    },
    {
      icon: TrendingUp,
      image: "/step3.png",
      ...t.raw("detailedSteps.steps.2"),
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-primary-background text-primary-text">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-secondary-text"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t("header.back")}</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-2xl font-bold text-primary-text">
                {t("header.title")}
              </h1>
            </motion.div>

            {mounted && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: isDark ? "#262626" : "#F5F9FF",
                  }}
                >
                  <motion.div
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Sun className="w-3 h-3 text-yellow-800" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
                        <Moon className="w-3 h-3 text-gray-200" />
                      </div>
                    )}
                  </motion.div>
                  <span className="text-sm font-medium">
                    {isDark ? t("header.lightMode") : t("header.darkMode")}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 text-primary-text"
            variants={fadeInUp}
          >
            {t.rich("hero.title", {
              accent: (chunks) => (
                <span className="text-accent-background">{chunks}</span>
              ),
            })}
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed text-secondary-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              {t("detailedSteps.title")}
            </h3>
            <p className="text-lg text-secondary-text">
              {t("detailedSteps.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 bg-accent-background">
                        <IconComponent className="w-8 h-8 text-inverse-text" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-orange-background/20 text-orange-background">
                          {t("detailedSteps.stepLabel")} {step.step}
                        </Badge>
                        <h4 className="text-2xl font-bold text-primary-text">
                          {step.title}
                        </h4>
                        <p className="text-sm text-accent-background">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-secondary-text">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {(step.process as string[]).map((process, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 bg-accent-background/20 text-accent-background">
                            {idx + 1}
                          </div>
                          <span className="text-sm text-secondary-text">
                            {process}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="p-2 bg-secondary-background border border-border">
                      <CardContent>
                        <Image
                          src={`/images${step.image}`}
                          alt={`Step ${step.step}`}
                          width={1920}
                          height={1080}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              {t("security.title")}
            </h3>
            <p className="text-lg text-secondary-text">
              {t("security.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <UserConcent dataUsageItems={dataUsageItems} />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 mt-20 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6 text-primary-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("cta.title")}
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("cta.subtitle")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href={phoneLinks} target="_blank">
              <Button
                size="lg"
                className="px-8 py-3 bg-accent-background text-inverse-text"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("cta.button_try")}
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent border-border border text-secondary-text"
              >
                {t("cta.button_home")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
