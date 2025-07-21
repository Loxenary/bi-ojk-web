import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CarouselItemInterface } from "@/constant/type";

interface CarouselSectionProps {
  carouselItems: CarouselItemInterface[];
}

export const CarouselSection = ({ carouselItems }: CarouselSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <section className="pt-16 relative overflow-hidden">
      <div className="relative h-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="h-full flex items-center justify-center bg-secondary-background text-primary-text">
              <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <h3 className="text-lg font-bold mb-1">
                  {carouselItems[currentSlide].title}
                </h3>
                <p className="text-sm opacity-80">
                  {carouselItems[currentSlide].subtitle}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="rounded-full p-2 transition-all shadow-md dark:opacity-100 opacity-80 bg-primary-background"
          >
            <ChevronLeft className="w-4 h-4 text-secondary-text" />
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="rounded-full dark:opacity-10 opacity-10 p-2 transition-all shadow-md bg-primary-background"
          >
            <ChevronRight className="w-4 h-4 text-secondary-text" />
          </Button>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentSlide ? "text-primary-text" : "text-muted-text"
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={{ scale: index === currentSlide ? 1.25 : 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
