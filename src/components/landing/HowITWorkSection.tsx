import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
// Import useState and useRef from React
import { useState, useRef } from "react";

export const HowItWorksSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="cara-kerja"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary-text">
              Cara Kerja <span className="text-accent-background">AmanAja</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-secondary-text">
              AmanAja bekerja dengan 3 langkah sederhana: Kirim pesan
              mencurigakan ke WhatsApp kami, AI kami akan menganalisis konten
              dan pola penipuan, lalu Anda menerima hasil analisis dengan
              rekomendasi tindakan dalam hitungan detik.
            </p>

            <div className="space-y-4 mb-8">
              {/* Step numbers... (code unchanged) */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 bg-accent-background text-inverse-text">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary-text">
                    Kirim Pesan
                  </h4>
                  <p className="text-sm text-secondary-text">
                    Forward pesan mencurigakan ke WhatsApp AmanAja atau kirim
                    screenshot
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 bg-accent-background text-inverse-text">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary-text">
                    AI Analisis
                  </h4>
                  <p className="text-sm text-secondary-text">
                    Sistem AI menganalisis konten dan membandingkan dengan
                    database penipuan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5 bg-accent-background text-inverse-text">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-primary-text">
                    Terima Hasil
                  </h4>
                  <p className="text-sm text-secondary-text">
                    Dapatkan hasil analisis dengan tingkat risiko dan
                    rekomendasi tindakan
                  </p>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg transition-all duration-200 bg-transparent border text-accent-background border-accent-background"
                >
                  Pelajari Lebih Lanjut
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl p-6 shadow-xl bg-secondary-background ">
              <div className="max-md:h-[800px] md:aspect-video rounded-xl overflow-hidden relative">
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    onClick={handlePlayClick}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center bg-accent-background"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                >
                  <source
                    src="/video/demo-high.mp4"
                    type="video/mp4"
                    media="(min-width: 768px)"
                  />

                  <source
                    src="/video/demo-mobile.mp4"
                    type="video/mp4"
                    media="(max-width: 767px)"
                  />
                </video>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-primary-text">
                  Lihat Demo AmanAja
                </h3>
                <p className="text-sm text-secondary-text">
                  Tonton bagaimana AmanAja mendeteksi dan mencegah berbagai
                  jenis penipuan digital secara real-time
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
