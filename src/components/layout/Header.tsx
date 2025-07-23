"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const whileHover = {
  scale: 1.05,
  y: -2,
  color: "#3554E7",
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-40 transition-all duration-300 backdrop-blur-md border-b bg-primary-background opacity-95 border-primary-border w-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 bg-accent-background"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="w-6 h-6 text-inverse-text" />
              </motion.div>
              <a href="#" className="text-2xl font-bold text-primary-text">
                AmanAja
              </a>
            </motion.div>

            <div className="hidden md:block ml-10">
              <motion.div
                className="flex items-baseline space-x-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {["Tentang Kami", "Cara Kerja", "Testimoni", "FAQ"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="px-3 py-2 text-sm font-medium transition-colors duration-200 text-secondary-text"
                      variants={fadeInUp}
                      whileHover={whileHover}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </motion.div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
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

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-primary-border"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {["Tentang Kami", "Cara Kerja", "Testimoni", "FAQ"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-secondary-text hover:bg-secondary-background"
                  >
                    {item}
                  </a>
                )
              )}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
