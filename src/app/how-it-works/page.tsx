"use client"

import { useState } from "react"
import { motion } from "framer-motion"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HowItWorksPage() {
  const [isDark, setIsDark] = useState(false)

  const theme = {
    bg: {
      primary: isDark ? "#171717" : "#FFFFFF",
      secondary: isDark ? "#262626" : "#F5F9FF",
      accent: isDark ? "#6B7FFF" : "#3554E7",
      orange: "#FF6B35",
    },
    text: {
      primary: isDark ? "#FFFFFF" : "#171717",
      secondary: isDark ? "#A3A3A3" : "#525252",
      muted: isDark ? "#737373" : "#737373",
      inverse: isDark ? "#171717" : "#FFFFFF",
    },
    border: isDark ? "#404040" : "#E5E5E5",
  }

  const detailedSteps = [
    {
      icon: Send,
      step: "1",
      title: "Kirim Pesan",
      subtitle: "Input & Data Collection",
      description: "Forward pesan mencurigakan ke nomor WhatsApp AmanAja atau screenshot dan kirim gambarnya.",
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
      description: "Sistem AI menganalisis konten, pola, dan membandingkan dengan database penipuan terbaru.",
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
  ]

  const aiTechnology = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Memahami konteks dan nuansa bahasa Indonesia termasuk slang dan bahasa daerah",
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
      description: "Neural network dengan arsitektur khusus untuk fraud detection",
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
      description: "Database komprehensif dengan update real-time dari berbagai sumber",
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
      description: "Processing terdistribusi untuk latensi minimal dan skalabilitas tinggi",
      capabilities: [
        "Sub-100ms response time",
        "Auto-scaling berdasarkan load",
        "Geographic distribution",
        "99.99% uptime guarantee",
      ],
    },
  ]

  const securityMeasures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Semua komunikasi dienkripsi dengan standar militer AES-256",
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Processing",
      description: "Data diproses tanpa disimpan, langsung dihapus setelah analisis",
    },
    {
      icon: CheckCircle,
      title: "Compliance & Audit",
      description: "Memenuhi standar ISO 27001, GDPR, dan regulasi perlindungan data lokal",
    },
    {
      icon: Users,
      title: "Privacy by Design",
      description: "Arsitektur sistem dirancang dengan privasi sebagai prioritas utama",
    },
  ]

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme.bg.primary,
        color: theme.text.primary,
      }}
    >
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: theme.border }}>
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
                  className="flex items-center space-x-2"
                  style={{ color: theme.text.secondary }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div className="h-6 w-px" style={{ backgroundColor: theme.border }} />
              <h1 className="text-2xl font-bold" style={{ color: theme.text.primary }}>
                Cara Kerja AmanAja
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Badge
                className="px-3 py-1"
                style={{
                  backgroundColor: theme.bg.accent + "20",
                  color: theme.bg.accent,
                  border: `1px solid ${theme.bg.accent}30`,
                }}
              >
                3 Langkah Mudah
              </Badge>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg.secondary }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: theme.text.primary }}
            variants={fadeInUp}
          >
            Teknologi AI yang
            <span style={{ color: theme.bg.accent }}> Mudah Digunakan</span>
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed"
            style={{ color: theme.text.secondary }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pelajari bagaimana AmanAja menggunakan kecerdasan buatan terdepan untuk melindungi Anda dari penipuan
            digital dengan proses yang sederhana dan cepat.
          </motion.p>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg.primary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: theme.text.primary }}>
              Proses Detail Analisis AI
            </h3>
            <p className="text-lg" style={{ color: theme.text.secondary }}>
              Setiap langkah dirancang untuk memberikan hasil yang akurat dan dapat diandalkan
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const IconComponent = step.icon
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
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4"
                        style={{ backgroundColor: theme.bg.accent }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: theme.text.inverse }} />
                      </div>
                      <div>
                        <Badge
                          className="mb-2"
                          style={{
                            backgroundColor: theme.bg.orange + "20",
                            color: theme.bg.orange,
                          }}
                        >
                          Langkah {step.step}
                        </Badge>
                        <h4 className="text-2xl font-bold" style={{ color: theme.text.primary }}>
                          {step.title}
                        </h4>
                        <p className="text-sm" style={{ color: theme.bg.accent }}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-6" style={{ color: theme.text.secondary }}>
                      {step.description}
                    </p>

                    <Tabs defaultValue="technical" className="w-full">
                      <TabsList
                        className="grid w-full grid-cols-2 mb-4"
                        style={{ backgroundColor: theme.bg.secondary }}
                      >
                        <TabsTrigger value="technical">Detail Teknis</TabsTrigger>
                        <TabsTrigger value="process">Proses</TabsTrigger>
                      </TabsList>

                      <TabsContent value="technical" className="space-y-3">
                        {step.technicalDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: theme.bg.accent }} />
                            <span className="text-sm" style={{ color: theme.text.secondary }}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </TabsContent>

                      <TabsContent value="process" className="space-y-3">
                        {step.process.map((process, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                              style={{
                                backgroundColor: theme.bg.accent + "20",
                                color: theme.bg.accent,
                              }}
                            >
                              {idx + 1}
                            </div>
                            <span className="text-sm" style={{ color: theme.text.secondary }}>
                              {process}
                            </span>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card
                      className="p-8"
                      style={{
                        backgroundColor: theme.bg.secondary,
                        borderColor: theme.border,
                      }}
                    >
                      <div className="text-center">
                        <div
                          className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6"
                          style={{ backgroundColor: theme.bg.primary }}
                        >
                          <IconComponent className="w-12 h-12" style={{ color: theme.bg.accent }} />
                        </div>
                        <h5 className="text-lg font-semibold mb-3" style={{ color: theme.text.primary }}>
                          {step.title} Demo
                        </h5>
                        <div className="space-y-3 text-left">
                          <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: theme.bg.primary }}>
                            <div className="flex items-center mb-2">
                              <Clock className="w-4 h-4 mr-2" style={{ color: theme.bg.accent }} />
                              <span className="font-medium" style={{ color: theme.text.primary }}>
                                Processing Time
                              </span>
                            </div>
                            <span style={{ color: theme.text.secondary }}>
                              {index === 0 ? "< 1 detik" : index === 1 ? "2-3 detik" : "< 1 detik"}
                            </span>
                          </div>
                          <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: theme.bg.primary }}>
                            <div className="flex items-center mb-2">
                              <BarChart3 className="w-4 h-4 mr-2" style={{ color: theme.bg.orange }} />
                              <span className="font-medium" style={{ color: theme.text.primary }}>
                                Akurasi
                              </span>
                            </div>
                            <span style={{ color: theme.text.secondary }}>
                              {index === 0 ? "100%" : index === 1 ? "99.9%" : "99.9%"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg.secondary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: theme.text.primary }}>
              Teknologi AI di Balik AmanAja
            </h3>
            <p className="text-lg" style={{ color: theme.text.secondary }}>
              Kombinasi teknologi machine learning terdepan untuk hasil yang optimal
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {aiTechnology.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div key={tech.title} variants={fadeInUp}>
                  <Card
                    className="p-6 h-full hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: theme.bg.primary,
                      borderColor: theme.border,
                    }}
                  >
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mr-3"
                          style={{ backgroundColor: theme.bg.secondary }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: theme.bg.accent }} />
                        </div>
                        <CardTitle className="text-lg" style={{ color: theme.text.primary }}>
                          {tech.title}
                        </CardTitle>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                        {tech.description}
                      </p>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="space-y-2">
                        {tech.capabilities.map((capability, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: theme.bg.orange }}
                            />
                            <span className="text-xs" style={{ color: theme.text.secondary }}>
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg.primary }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: theme.text.primary }}>
              Keamanan & Privasi Terjamin
            </h3>
            <p className="text-lg" style={{ color: theme.text.secondary }}>
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
            {securityMeasures.map((measure, index) => {
              const IconComponent = measure.icon
              return (
                <motion.div key={measure.title} variants={fadeInUp}>
                  <Card
                    className="p-6 text-center h-full hover:shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: theme.bg.primary,
                      borderColor: theme.border,
                    }}
                  >
                    <CardContent className="p-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: theme.bg.secondary }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: theme.bg.accent }} />
                      </div>
                      <h4 className="text-lg font-semibold mb-3" style={{ color: theme.text.primary }}>
                        {measure.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: theme.text.secondary }}>
                        {measure.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.bg.secondary }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6"
            style={{ color: theme.text.primary }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Siap Mencoba Teknologi AI Ini?
          </motion.h3>
          <motion.p
            className="text-lg mb-8"
            style={{ color: theme.text.secondary }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Rasakan sendiri kecepatan dan akurasi sistem AI AmanAja dalam melindungi Anda
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
              className="px-8 py-3"
              style={{
                backgroundColor: theme.bg.accent,
                color: theme.text.inverse,
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Coba Sekarang
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent"
                style={{
                  borderColor: theme.border,
                  color: theme.text.secondary,
                }}
              >
                Kembali ke Beranda
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
