"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Users,
  Target,
  Heart,
  Lightbulb,
  Globe,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/constant/style.constant";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Budi Santoso",
      role: "CEO & Co-Founder",
      expertise: "AI Research & Cybersecurity",
      experience: "15+ tahun",
      education: "PhD Computer Science - MIT",
      description:
        "Mantan peneliti di Google AI dengan fokus pada machine learning untuk cybersecurity.",
      achievements: ["50+ publikasi ilmiah", "3 paten AI", "TEDx Speaker"],
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      expertise: "Machine Learning Engineering",
      experience: "12+ tahun",
      education: "MS AI - Stanford University",
      description:
        "Ex-Senior ML Engineer di Meta dengan spesialisasi fraud detection systems.",
      achievements: [
        "Lead 20+ ML projects",
        "AI Innovation Award 2023",
        "Women in Tech Leader",
      ],
    },
    {
      name: "Ahmad Rizki",
      role: "Head of Product",
      expertise: "Product Strategy & UX",
      experience: "10+ tahun",
      education: "MBA - INSEAD",
      description:
        "Mantan Product Manager di Gojek dengan track record membangun produk untuk jutaan pengguna.",
      achievements: [
        "5 successful product launches",
        "Product of the Year 2022",
        "UX Excellence Award",
      ],
    },
    {
      name: "Dr. Maya Sari",
      role: "Head of Research",
      expertise: "NLP & Deep Learning",
      experience: "8+ tahun",
      education: "PhD AI - University of Cambridge",
      description:
        "Spesialis Natural Language Processing dengan fokus pada deteksi konten berbahaya.",
      achievements: [
        "30+ research papers",
        "Best Paper Award",
        "AI Research Grant Recipient",
      ],
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Founding & Research",
      description:
        "AmanAja didirikan dengan visi melindungi masyarakat Indonesia dari penipuan digital",
      achievements: [
        "Tim founding 4 orang",
        "Seed funding $500K",
        "MVP development",
      ],
    },
    {
      year: "2023",
      title: "Product Launch",
      description: "Peluncuran beta version dengan 1000+ early adopters",
      achievements: [
        "10K+ pengguna beta",
        "99.5% akurasi AI",
        "Partnership dengan 5 startup",
      ],
    },
    {
      year: "2024",
      title: "Scale & Growth",
      description: "Ekspansi ke seluruh Indonesia dengan 25K+ pengguna aktif",
      achievements: [
        "25K+ pengguna",
        "Series A $2M",
        "99.9% akurasi",
        "ISO 27001 certified",
      ],
    },
    {
      year: "2025",
      title: "Regional Expansion",
      description: "Rencana ekspansi ke Asia Tenggara dan fitur enterprise",
      achievements: [
        "Target 100K pengguna",
        "Enterprise features",
        "Multi-language support",
      ],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Keamanan Pertama",
      description:
        "Kami menempatkan keamanan dan privasi pengguna sebagai prioritas utama dalam setiap keputusan produk.",
    },
    {
      icon: Heart,
      title: "Dampak Sosial",
      description:
        "Berkomitmen menciptakan internet yang lebih aman untuk semua, terutama kelompok rentan seperti lansia.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description:
        "Terus berinovasi dengan teknologi terdepan untuk menghadapi evolusi ancaman cyber.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Membangun solusi bersama komunitas dengan mendengarkan feedback dan kebutuhan pengguna.",
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-primary-background text-primary-text">
      {/* Header */}
      <header className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary-border">
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
              <div className="h-6 w-px border-primary-border" />
              <h1 className="text-2xl font-bold text-primary-text">
                Tentang AmanAja
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="px-3 py-1 bg-accent-background text-accent-background border border-accent-background">
                Est. 2022
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
            Melindungi Indonesia dari
            <span className="bg-accent-background"> Penipuan Digital</span>
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AmanAja lahir dari keprihatinan mendalam terhadap maraknya kasus
            penipuan digital di Indonesia. Kami percaya teknologi AI dapat
            menjadi garda terdepan dalam melindungi masyarakat dari ancaman
            cyber crime.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: "25K+", label: "Pengguna Terlindungi" },
              { value: "500K+", label: "Penipuan Terblokir" },
              { value: "99.9%", label: "Akurasi AI" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-2 bg-accent-background">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-text">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 mr-3 bg-accent-background" />
                <h3 className="text-2xl font-bold text-primary-text">
                  Misi Kami
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-secondary-text">
                Menciptakan ekosistem digital yang aman untuk seluruh masyarakat
                Indonesia melalui teknologi AI yang dapat diakses oleh semua
                kalangan, dari yang paling tech-savvy hingga yang awam
                teknologi.
              </p>
              <div className="space-y-3">
                {[
                  "Memberikan perlindungan real-time dari penipuan digital",
                  "Edukasi masyarakat tentang ancaman cyber",
                  "Membangun komunitas yang saling melindungi",
                  "Kolaborasi dengan penegak hukum dan regulator",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 bg-accent-background" />
                    <span className="text-secondary-text">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 mr-3 bg-orange-background" />
                <h3 className="text-2xl font-bold text-primary-text">
                  Visi Kami
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-secondary-text">
                Menjadi platform AI fraud detection terdepan di Asia Tenggara
                yang dipercaya oleh jutaan pengguna untuk melindungi mereka dari
                berbagai bentuk penipuan digital.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary-background">
                  <h4 className="font-semibold mb-2 text-primary-text">
                    2025 Target
                  </h4>
                  <p className="text-sm text-secondary-text">
                    100K+ pengguna aktif di Indonesia dengan ekspansi ke
                    Malaysia dan Singapura
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary-background">
                  <h4 className="font-semibold mb-2 text-primary-text">
                    2027 Vision
                  </h4>
                  <p className="text-sm text-secondary-text">
                    Platform fraud detection #1 di Asia Tenggara dengan 1M+
                    pengguna terlindungi
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Nilai-Nilai Kami
            </h3>
            <p className="text-lg text-secondary-text">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={value.title} variants={fadeInUp}>
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 bg-primary-background border-primary-border">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-secondary-background">
                        <IconComponent className="w-8 h-8 bg-accent-background" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-primary-text">
                        {value.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-secondary-text">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Tim Expert Kami
            </h3>
            <p className="text-lg text-secondary-text">
              Dipimpin oleh para ahli berpengalaman dari perusahaan teknologi
              terkemuka dunia
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-primary-background border-primary-border">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle className="text-xl mb-1 text-primary-text">
                          {member.name}
                        </CardTitle>
                        <p className="text-sm font-medium bg-accent-background">
                          {member.role}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs bg-orange-background text-orange-background"
                      >
                        {member.experience}
                      </Badge>
                    </div>
                    <p className="text-sm mb-2 text-secondary-text">
                      <strong>Expertise:</strong> {member.expertise}
                    </p>
                    <p className="text-sm mb-3 text-secondary-text">
                      <strong>Education:</strong> {member.education}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p className="text-sm leading-relaxed mb-4 text-secondary-text">
                      {member.description}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold mb-2 text-primary-text">
                        Key Achievements:
                      </h5>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-background" />
                            <span className="text-xs text-secondary-text">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4 text-primary-text">
              Perjalanan AmanAja
            </h3>
            <p className="text-lg text-secondary-text">
              Dari ide hingga menjadi platform fraud detection terpercaya
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm bg-accent-background text-inverse-text">
                    {milestone.year}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 text-primary-text">
                    {milestone.title}
                  </h4>
                  <p className="text-sm leading-relaxed mb-3 text-secondary-text">
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {milestone.achievements.map((achievement, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-orange-background text-orange-background border bg-orange-background"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6 text-primary-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Bergabung dengan Misi Kami
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Mari bersama-sama menciptakan internet yang lebih aman untuk semua
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
              Mulai Lindungi Diri
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
