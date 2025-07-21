"use client";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Send,
  Search,
  TrendingUp,
  MessageCircle,
  Brain,
  Shield,
  Zap,
  Database,
  Network,
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HowItWorksPage() {
  const detailedSteps = [
    {
      icon: Send,
      step: "1",
      title: "Kirim Pesan",
      subtitle: "Input & Data Collection",
      description:
        "Forward pesan mencurigakan ke nomor WhatsApp AmanAja atau screenshot dan kirim gambarnya.",
      technicalDetails: [
        "Support text, image, dan link analysis",
        "OCR untuk screenshot pesan",
        "Multi-format input processing",
        "Real-time data validation",
        "Secure data transmission",
      ],
      process: [
        "User mengirim pesan ke WhatsApp AmanAja",
        "Sistem menerima dan memvalidasi input",
        "Data dienkripsi untuk keamanan",
        "Queue processing untuk handling volume tinggi",
        "Metadata extraction dan preprocessing",
      ],
    },
    {
      icon: Search,
      step: "2",
      title: "AI Analisis",
      subtitle: "Machine Learning Processing",
      description:
        "Sistem AI menganalisis konten, pola, dan membandingkan dengan database penipuan terbaru.",
      technicalDetails: [
        "Multi-layer neural network analysis",
        "NLP untuk pemahaman konteks",
        "Pattern matching dengan 10M+ dataset",
        "Real-time threat intelligence",
        "Ensemble model untuk akurasi maksimal",
      ],
      process: [
        "Text preprocessing dan tokenization",
        "Feature extraction dari konten",
        "AI model inference dengan 50+ parameters",
        "Cross-reference dengan threat database",
        "Confidence score calculation",
      ],
    },
    {
      icon: TrendingUp,
      step: "3",
      title: "Terima Hasil",
      subtitle: "Result & Recommendation",
      description:
        "Dapatkan hasil analisis lengkap dengan tingkat risiko dan rekomendasi tindakan dalam hitungan detik.",
      technicalDetails: [
        "Comprehensive risk assessment",
        "Actionable recommendations",
        "Evidence-based explanation",
        "Follow-up guidance",
        "Report generation",
      ],
      process: [
        "Risk level classification (Low/Medium/High)",
        "Detailed explanation generation",
        "Recommendation engine activation",
        "User notification formatting",
        "Response delivery via WhatsApp",
      ],
    },
  ];

  const aiTechnology = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description:
        "Memahami konteks dan nuansa bahasa Indonesia termasuk slang dan bahasa daerah",
      capabilities: [
        "Sentiment analysis untuk deteksi urgency",
        "Entity recognition untuk identifikasi target",
        "Context understanding untuk false positive reduction",
        "Multi-language support (15+ bahasa)",
      ],
    },
    {
      icon: Network,
      title: "Deep Learning Models",
      description:
        "Neural network dengan arsitektur khusus untuk fraud detection",
      capabilities: [
        "Transformer-based architecture",
        "50+ layer deep neural network",
        "Attention mechanism untuk fokus pada pattern penting",
        "Transfer learning dari model global",
      ],
    },
    {
      icon: Database,
      title: "Threat Intelligence",
      description:
        "Database komprehensif dengan update real-time dari berbagai sumber",
      capabilities: [
        "10M+ known fraud patterns",
        "Real-time threat feed integration",
        "Community-sourced threat data",
        "Global threat intelligence partnership",
      ],
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description:
        "Processing terdistribusi untuk latensi minimal dan skalabilitas tinggi",
      capabilities: [
        "Sub-100ms response time",
        "Auto-scaling berdasarkan load",
        "Geographic distribution",
        "99.99% uptime guarantee",
      ],
    },
  ];

  const securityMeasures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Semua komunikasi dienkripsi dengan standar militer AES-256",
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Processing",
      description:
        "Data diproses tanpa disimpan, langsung dihapus setelah analisis",
    },
    {
      icon: CheckCircle,
      title: "Compliance & Audit",
      description:
        "Memenuhi standar ISO 27001, GDPR, dan regulasi perlindungan data lokal",
    },
    {
      icon: Users,
      title: "Privacy by Design",
      description:
        "Arsitektur sistem dirancang dengan privasi sebagai prioritas utama",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-primary-background text-primary-text">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-secondary-text"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-2xl font-bold text-primary-text">
                Cara Kerja AmanAja
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="px-3 py-1 bg-accent-background text-accent-background border border-accent-background">
                3 Langkah Mudah
              </Badge>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 text-primary-text"
            variants={fadeInUp}
          >
            Teknologi AI yang
            <span className="text-accent-background"> Mudah Digunakan</span>
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed text-secondary-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pelajari bagaimana AmanAja menggunakan kecerdasan buatan terdepan
            untuk melindungi Anda dari penipuan digital dengan proses yang
            sederhana dan cepat.
          </motion.p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Proses Detail Analisis AI
            </h3>
            <p className="text-lg text-secondary-text">
              Setiap langkah dirancang untuk memberikan hasil yang akurat dan
              dapat diandalkan
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4 bg-accent-background">
                        <IconComponent className="w-8 h-8 text-inverse-text" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-orange-background text-orange-background">
                          Langkah {step.step}
                        </Badge>
                        <h4 className="text-2xl font-bold text-primary-text">
                          {step.title}
                        </h4>
                        <p className="text-sm text-accent-background">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-secondary-text">
                      {step.description}
                    </p>

                    <Tabs defaultValue="technical" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-4 bg-secondary-background">
                        <TabsTrigger value="technical">
                          Detail Teknis
                        </TabsTrigger>
                        <TabsTrigger value="process">Proses</TabsTrigger>
                      </TabsList>

                      <TabsContent value="technical" className="space-y-3">
                        {step.technicalDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-background" />
                            <span className="text-sm text-secondary-text">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="process" className="space-y-3">
                        {step.process.map((process, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 bg-accent-background text-accent-background">
                              {idx + 1}
                            </div>
                            <span className="text-sm text-secondary-text">
                              {process}
                            </span>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="p-8 bg-primary-background border border-border">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-primary-background">
                          <IconComponent className="w-12 h-12 text-accent-background" />
                        </div>
                        <h5 className="text-lg font-semibold mb-3 text-primary-text">
                          {step.title} Demo
                        </h5>
                        <div className="space-y-3 text-left">
                          <div className="p-3 rounded-lg text-sm bg-primary-background">
                            <div className="flex items-center mb-2">
                              <Clock className="w-4 h-4 mr-2 text-accent-background" />
                              <span className="font-medium text-primary-text">
                                Processing Time
                              </span>
                            </div>
                            <span className="text-secondary-text">
                              {index === 0
                                ? "< 1 detik"
                                : index === 1
                                ? "2-3 detik"
                                : "< 1 detik"}
                            </span>
                          </div>
                          <div className="p-3 rounded-lg text-sm bg-primary-background">
                            <div className="flex items-center mb-2">
                              <BarChart3 className="w-4 h-4 mr-2 bg-orange-background" />
                              <span className="font-medium text-primary-text">
                                Akurasi
                              </span>
                            </div>
                            <span className="text-secondary-text">
                              {index === 0
                                ? "100%"
                                : index === 1
                                ? "99.9%"
                                : "99.9%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Teknologi AI di Balik AmanAja
            </h3>
            <p className="text-lg text-secondary-text">
              Kombinasi teknologi machine learning terdepan untuk hasil yang
              optimal
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aiTechnology.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <motion.div key={tech.title} variants={fadeInUp}>
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-secondary-background border-border">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-3 bg-secondary-background">
                          <IconComponent className="w-6 h-6 text-accent-background" />
                        </div>
                        <CardTitle className="text-lg text-primary-text">
                          {tech.title}
                        </CardTitle>
                      </div>
                      <p className="text-sm leading-relaxed text-secondary-text">
                        {tech.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-2">
                        {tech.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-orange-background" />
                            <span className="text-xs text-secondary-text">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Keamanan & Privasi Terjamin
            </h3>
            <p className="text-lg text-secondary-text">
              Standar keamanan enterprise untuk melindungi data dan privasi Anda
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {securityMeasures.map((measure) => {
              const IconComponent = measure.icon;
              return (
                <motion.div key={measure.title} variants={fadeInUp}>
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 bg-primary-background border border-border">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-secondary-background">
                        <IconComponent className="w-8 h-8 border border-accent-background" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-primary-text">
                        {measure.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-secondary-text">
                        {measure.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6 text-primary-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Siap Mencoba Teknologi AI Ini?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rasakan sendiri kecepatan dan akurasi sistem AI AmanAja dalam
            melindungi Anda
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="px-8 py-3 bg-accent-background text-inverse-text"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Coba Sekarang
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent border border-border text-secondary-text"
              >
                Kembali ke Beranda
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
