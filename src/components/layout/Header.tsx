"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

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
  color: "#3554E7", // Your accent color
};

// --- Language Switcher Component ---
const LanguageSwitcher = () => {
  const t = useTranslations("Header.LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const locales = [
    { code: "en", name: t("english"), emoji: "🇬🇧" },
    { code: "id", name: t("indonesian"), emoji: "🇮🇩" },
    { code: "ms", name: t("malay"), emoji: "🇲🇾" },
    { code: "vi", name: t("vietnamese"), emoji: "🇻🇳" },
    { code: "th", name: t("thai"), emoji: "🇹🇭" },
    { code: "tl", name: t("tagalog"), emoji: "🇵🇭" },
  ];
  const currentLocale = locales.find((l) => l.code === locale);

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="relative" ref={wrapperRef}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors bg-secondary-background"
        >
          <span className="text-xl">{currentLocale?.emoji}</span>
          <span className="text-sm font-medium uppercase text-primary-text">
            {locale}
          </span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-secondary-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {locales.map(({ code, name, emoji }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className="flex flex-row text-left px-4 py-2 text-sm text-primary-text hover:bg-primary-border w-full"
                >
                  <span className="mr-2 text-lg">{emoji}</span>
                  <span className="text-sm wrap-normal w-fit">{name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Header Component ---
export const Header = () => {
  const t = useTranslations("Header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "howItWorks", href: "#how-it-works" },
    { key: "faq", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-40 transition-all duration-300 backdrop-blur-md border-b bg-primary-background/80 border-primary-border w-screen "
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
                {navLinks.map((link) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium transition-colors duration-200 text-secondary-text"
                    variants={fadeInUp}
                    whileHover={whileHover}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {mounted && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors bg-secondary-background"
                >
                  <motion.div
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-700" />
                    )}
                  </motion.div>
                  <span className="text-sm font-medium text-primary-text">
                    {isDark ? t("themeToggle.light") : t("themeToggle.dark")}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
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
            className="md:hidden overflow-hidden border-t border-primary-border bg-primary-background/95"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-secondary-text hover:bg-secondary-background"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
