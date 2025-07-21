import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { MessageCircle, Play } from "lucide-react";

export const CTASection = () => {
  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-8 text-inverse-text"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Siap Melindungi Diri Anda?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 leading-relaxed opacity-80 text-primary-background"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bergabung dengan ribuan pengguna yang sudah merasakan keamanan
          berlapis dari AmanAja. Mulai lindungi diri Anda hari ini juga!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="px-10 py-4 text-lg transition-all duration-200 hover:shadow-lg bg-primary-background text-accent-background"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Mulai Chat Sekarang
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 px-10 py-4 text-lg bg-transparent transition-all duration-200 !border-primary-background text-inverse-text !hover:border-white"
            >
              <Play className="w-6 h-6 mr-3" />
              Lihat Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
