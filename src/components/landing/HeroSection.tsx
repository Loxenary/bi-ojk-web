import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Brain, MessageCircle, Play, Shield } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/constant/style.constant";
import Image from "next/image";
import Link from "next/link";
import { phoneLinks } from "@/constant/content";

const IMAGES = {
  hero_image: "/images/contoh_penipuan.jpg",
};

export const HeroSection = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={heroRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col h-full justify-center gap-5"
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInLeft}>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-primary-text">Lindungi Diri dari </span>
                <motion.span
                  className="text-accent-background"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(53, 84, 231, 0)",
                      "0 0 20px rgba(53, 84, 231, 0.3)",
                      "0 0 0px rgba(53, 84, 231, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Penipuan Digital
                </motion.span>
                <span className="text-primary-text"> dengan AI</span>
              </motion.h1>
              <motion.p
                className="text-lg leading-relaxed text-secondary-text"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                AmanAja menggunakan kecerdasan buatan untuk mendeteksi dan
                mencegah penipuan digital secara real-time. Mudah digunakan,
                akurat, dan terpercaya.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInLeft}
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={phoneLinks} target="_blank">
                  <Button
                    size={"lg"}
                    className="px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg bg-accent-background hover:bg-accent-background/90 text-inverse-text"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Chat di WhatsApp
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={"/#cara-kerja"} scroll={true}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg transition-all duration-200 bg-transparent border-primary-border text-primary-text"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    Lihat Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={fadeInRight}
          >
            <motion.div
              className="relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-secondary-background max-h-[640px] flex "
              whileHover={{ scale: 1.02 }}
            >
              <Image
                width={600}
                height={800}
                src={IMAGES.hero_image}
                alt="AmanAja Team"
                className="object-contain  rounded-2xl"
              />
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-lg bg-accent-background text-inverse-text"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Shield className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 rounded-2xl p-4 shadow-lg  bg-orange-background text-inverse-text"
                animate={{
                  y: [5, -5, 5],
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Brain className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
