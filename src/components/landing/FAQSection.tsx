import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { motion } from "framer-motion";
import { ChevronRight, Link } from "lucide-react";
import { Button } from "../ui/button";

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
                "Ya, AmanAja gratis untuk penggunaan dasar. Kami juga menyediakan paket premium dengan fitur tambahan seperti perlindungan proaktif dan monitoring berkelanjutan untuk kebutuhan bisnis dan enterprise.",
            },
            {
              question: "Bagaimana cara kerja AI AmanAja?",
              answer:
                "AI kami menganalisis pola teks, link, dan konten pesan untuk mendeteksi indikasi penipuan dengan akurasi 99.9%. Sistem kami menggunakan neural network dengan 50+ layer dan database penipuan yang terus diperbarui untuk memastikan deteksi yang akurat.",
            },
            {
              question: "Apakah data saya aman?",
              answer:
                "Sangat aman. Kami menggunakan enkripsi end-to-end dan tidak menyimpan data pribadi Anda. Semua pesan diproses secara lokal dan dihapus segera setelah analisis selesai, mengikuti prinsip zero-knowledge architecture.",
            },
            {
              question: "Berapa lama waktu analisis?",
              answer:
                "Analisis dilakukan dalam hitungan detik, biasanya kurang dari 3 detik untuk mendapat hasil lengkap. Untuk kasus yang lebih kompleks, maksimal 5 detik dengan akurasi yang lebih tinggi.",
            },
            {
              question: "Apakah AmanAja bisa mendeteksi semua jenis penipuan?",
              answer:
                "AmanAja dirancang untuk mendeteksi berbagai jenis penipuan digital, termasuk phishing, scam hadiah, penipuan investasi, dan banyak lagi. Sistem kami terus belajar dari pola baru dan diperbarui secara berkala untuk meningkatkan kemampuan deteksi.",
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
