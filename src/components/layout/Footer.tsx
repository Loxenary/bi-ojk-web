"use client";

import { motion } from "framer-motion";
import { Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { phoneLinks } from "@/constant/content";
import { useTranslations } from "next-intl"; 
import { Link } from "@/i18n/navigation";

export const Footer = () => {
  const t = useTranslations("Footer"); 

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 text-primary-text bg-inverse-text">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="md:col-span-2" variants={fadeInUp}>
            <div className="flex items-center mb-6">
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-accent-background"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold text-primary-text">
                  AmanAja
                </div>
                <div className="text-sm text-gray-400">
                  {t("tagline")}
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              {t("description")}
            </p>
            <motion.div
              className="w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ transformOrigin: "center" }}
            >
              <Link href={phoneLinks} target="_blank">
                <Button className="transition-all duration-200 bg-accent-background hover:bg-accent-background/90 text-inverse-text dark:hover:text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t("cta_chat")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="my-12 bg-gray-800" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400">
            {t("copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
