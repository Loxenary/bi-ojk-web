"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import UserConcent from "@/components/how-it-works/UserConcent";
import { useTheme } from "next-themes";
import { dataUsageItems, detailedSteps, phoneLinks } from "@/constant/content";
import Image from "next/image";
import { fadeInUp } from "@/constant/style.constant";



export default function HowItWorksPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300 bg-primary-background text-primary-text"
      // style={{
      //   backgroundColor: theme.bg.primary,
      //   color: theme.text.primary,
      // }}
    >
      {/* Header */}
      <header
        className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border"
        // style={{ borderColor: theme.border }}
      >
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
                  // style={{ color: theme.text.secondary }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div
                className="h-6 w-px bg-border"
                // style={{ backgroundColor: theme.border }}
              />
              <h1
                className="text-2xl font-bold text-primary-text"
                // style={{ color: theme.text.primary }}
              >
                Cara Kerja AmanAja
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
                    {isDark ? "Light" : "Dark"}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-background"
        // style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 text-primary-text"
            // style={{ color: theme.text.primary }}
            variants={fadeInUp}
          >
            Teknologi AI yang
            <span
              className="text-accent-background"
              // style={{ color: theme.bg.accent }}
            >
              {" "}
              Mudah Digunakan
            </span>
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed text-secondary-text"
            // style={{ color: theme.text.secondary }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pelajari bagaimana AmanAja menggunakan kecerdasan buatan terdepan
            untuk melindungi Anda dari penipuan digital dengan proses yang
            sederhana dan cepat.
          </motion.p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background"
        // style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4 text-primary-text"
              // style={{ color: theme.text.primary }}
            >
              Proses Detail Analisis AI
            </h3>
            <p
              className="text-lg text-secondary-text"
              // style={{ color: theme.text.secondary }}
            >
              Setiap langkah dirancang untuk memberikan hasil yang akurat dan
              dapat diandalkan
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
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 bg-accent-background"
                        // style={{ backgroundColor: theme.bg.accent }}
                      >
                        <IconComponent
                          className="w-8 h-8 text-inverse-text"
                          // style={{ color: theme.text.inverse }}
                        />
                      </div>
                      <div>
                        <Badge
                          className="mb-2 bg-orange-background/20 text-orange-background"
                          // style={{
                          //   backgroundColor: theme.bg.orange + "20",
                          //   color: theme.bg.orange,
                          // }}
                        >
                          Langkah {step.step}
                        </Badge>
                        <h4
                          className="text-2xl font-bold text-primary-text"
                          // style={{ color: theme.text.primary }}
                        >
                          {step.title}
                        </h4>
                        <p
                          className="text-sm text-accent-background"
                          // style={{ color: theme.bg.accent }}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-lg leading-relaxed mb-6 text-secondary-text"
                      // style={{ color: theme.text.secondary }}
                    >
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.process.map((process, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 bg-accent-background/20 text-accent-background"
                            // style={{
                            //   backgroundColor: theme.bg.accent + "20",
                            //   color: theme.bg.accent,
                            // }}
                          >
                            {idx + 1}
                          </div>
                          <span
                            className="text-sm text-secondary-text"
                            // style={{ color: theme.text.secondary }}
                          >
                            {process}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card
                      className="p-2 bg-secondary-background border border-border"
                      // style={{
                      //   backgroundColor: theme.bg.secondary,
                      //   borderColor: theme.border,
                      // }}
                    >
                      <CardContent>
                        <Image
                          src={`/images${step.image}`}
                          alt={"Step 1"}
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
      <section
        className="pt-20 px-4 sm:px-6 lg:px-8 bg-primary-background"
        // style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4 text-primary-text"
              // style={{ color: theme.text.primary }}
            >
              Keamanan & Privasi Terjamin
            </h3>
            <p
              className="text-lg text-secondary-text"
              //  style={{ color: theme.text.secondary }}
            >
              Standar keamanan enterprise untuk melindungi data dan privasi Anda
            </p>
          </motion.div>
        </div>
      </section>

      <UserConcent dataUsageItems={dataUsageItems} />

      {/* CTA Section */}
      <section
        className="py-16 px-4 sm:px-6 mt-20 lg:px-8 bg-secondary-background"
        // style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6 text-primary-text"
            // style={{ color: theme.text.primary }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Siap Mencoba Teknologi AI Ini?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            // style={{ color: theme.text.secondary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rasakan sendiri kecepatan dan akurasi sistem AI AmanAja dalam
            melindungi Anda
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
                // style={{
                //   backgroundColor: theme.bg.accent,
                //   color: theme.text.inverse,
                // }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Coba Sekarang
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent border-border border text-secondary-text"
                // style={{
                //   borderColor: theme.border,
                //   color: theme.text.secondary,
                // }}
              >
                Kembali ke Beranda
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
