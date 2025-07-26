import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const AnimatedFAQItem = ({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div key={index} variants={fadeInUp} className="group">
      <div className="border rounded-lg overflow-hidden transition-all duration-300 bg-secondary-background border-border">
        <div
          className="flex justify-between items-center p-6 cursor-pointer text-primary-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronRight className="w-5 h-5 text-accent-background" />
          </motion.div>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="text-secondary-text overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98],
                height: { duration: 0.2 },
                opacity: { duration: 0.15 },
              }}
            >
              <div className="px-6 pb-6 pt-0">
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section
      className="py-20 xl:py-30 px-4 sm:px-6 lg:px-8 bg-primary-background"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary-text">
            Pertanyaan <span className="text-accent-background">Umum</span>
          </h2>
          <p className="text-lg text-secondary-text">
            Jawaban untuk pertanyaan yang sering diajukan tentang AmanAja
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              question: "Apakah AmanAja gratis?",
              answer:
                "Ya, AmanAja untuk saat ini dapat diakses oleh siapa saja dan bersifat gratis",
            },
            {
              question: "Bagaimana cara kerja AI AmanAja?",
              answer:
                "Aman Aja menggunakan AI dengan Gemini yang di fine-tune untuk kebutuhan fraud detection",
            },
            {
              question: "Apakah data saya aman?",
              answer:
                "Aman. Kami tidak menyimpan data pribadi anda. Data yang sebelumnya digunakan hanya disimpan sebagai sedikit context untuk deteksi berikutnya",
            },
            {
              question: "Berapa lama waktu analisis?",
              answer: "Analisis dapat dilakukan dalam waktu rata-rata 1 menit",
            },
            {
              question:
                "Apakah Aman Aja dapat mendeteksi semua jenis penipuan?",
              answer:
                "Aman Aja dapat mendeteksi berbagai jenis penipuan digital termasuk phising, scam hadiah, penipuan investasi, dan sebagainya",
            },
          ].map((faq, index) => (
            <AnimatedFAQItem key={index} faq={faq} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
