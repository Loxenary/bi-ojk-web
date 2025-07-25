import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background"
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
              answer:
                "Analisis dapat dilakukan dalam waktu rata-rata 1 menit",
            },
            {
              question: "Apakah Aman Aja dapat mendeteksi semua jenis penipuan?",
              answer:
                "Aman Aja dapat mendeteksi berbagai jenis penipuan digital termasuk phising, scam hadiah, penipuan investasi, dan sebagainya",
            },
          ].map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="group">
              <div className="border rounded-lg overflow-hidden transition-all duration-300 bg-secondary-background  border-border">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-primary-text">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <div className="transition-transform duration-300 group-open:rotate-180">
                      <ChevronRight className="w-5 h-5 text-accent-background" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-secondary-text">
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
