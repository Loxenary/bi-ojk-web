"use client";

import { motion } from "framer-motion";
import { Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AboutItemInterface } from "@/constant/type";
import { fadeInUp, staggerContainer } from "@/constant/style.constant";

interface FooterProps {
  aboutItems: AboutItemInterface[];
}

export const Footer = ({ aboutItems }: FooterProps) => {
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
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <div className="text-2xl font-bold text-primary-text">AmanAja</div>
                <div className="text-sm text-gray-400">
                  AI Fraud Detection Platform
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Melindungi masyarakat Indonesia dari penipuan digital dengan
              teknologi AI terdepan. Bersama-sama kita ciptakan internet yang
              lebih aman.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="transition-all duration-200 bg-accent-background text-primary-text">
                <MessageCircle className="w-4 h-4 mr-2" />
                Mulai Chat
              </Button>
            </motion.div>
          </motion.div>

          {aboutItems.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="font-semibold mb-6 text-white text-lg">
                {section.title}
              </h4>
              <div className="space-y-3 text-gray-400">
                {section.links.map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
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
            &copy; 2024 AmanAja. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Security"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
