import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const TestimonialSection = () => {
  return (
    <section
      id="testimoni"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-primary-text">
            Apa Kata <span className="text-accent-background">Pengguna</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-secondary-text">
            Ribuan pengguna telah merasakan manfaat perlindungan AmanAja
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Ibu Sari",
              role: "Ibu Rumah Tangga",
              content:
                "AmanAja menyelamatkan saya dari penipuan berkedok hadiah jutaan rupiah. Terima kasih!",
              rating: 5,
            },
            {
              name: "Budi Santoso",
              role: "Pengusaha",
              content:
                "Sebagai pebisnis, saya sering dapat pesan mencurigakan. AmanAja sangat membantu!",
              rating: 5,
            },
            {
              name: "Dr. Maya",
              role: "Dokter",
              content:
                "Akurasi AI-nya luar biasa. Bahkan penipuan yang canggih bisa terdeteksi dengan baik.",
              rating: 5,
            },
          ].map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeInUp}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full bg-primary-background border border-primary-border">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="leading-relaxed mb-6 text-secondary-text">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 font-semibold text-inverse-text bg-accent-background">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-primary-text">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-text">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/testimonials">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg transition-all duration-200 bg-transparent border border-accent-background text-accent-background"
              >
                Baca Testimoni Lengkap
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
