"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Shield,
  Users,
  Target,
  Heart,
  Lightbulb,
  
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { phoneLinks } from "@/constant/content";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rizqi Andhika",
      role: "Hustler",
      expertise: "Business Expert",

      education: "Institue Technology Bandung",
      description: "Seorang business analyst dan hustler yang mumpuni ",
      achievements: ["Pemilik perusahaan merchandise game", "IP 4"],
    },
    {
      name: "Muhammad Akmal Ramadhan",
      role: "Hacker",
      expertise: "AI and ML Expert",
      education: "Institue Technology Bandung",
      description:
        "Seorang Praktisi Machine Learning dan AI yang memenangkan beberapa kejuaraan.",
      achievements: [
        "Winner Data Science Competition",
        "Best Project on Japan Trip",
      ],
    },
    {
      name: "Valentino Chryslie Triadi",
      role: "Hacker",
      expertise: "Devops and Data Expert",
      education: "Institue Technology Bandung",
      description:
        "Seorang Software Engineer yang ahli pada bidang dev ops dan sistem.",
      achievements: ["Ketua panitia IT pada event di ITB", "IP 4"],
    },
    {
      name: "Muhammad Davis Adhipramana",
      role: "Hipster",
      expertise: "Frontend Developer",
      education: "Institue Technology Bandung",
      description:
        "Seorang Game Developer dan Software Engineer yang berfokus pada visual.",
      achievements: [
        "Peme Business Hackaton",
        "Runner up of GameDev Competition",
      ],
    },
  ];


  const values = [
    {
      icon: Shield,
      title: "Keamanan Pertama",
      description:
        "Kami menempatkan keamanan dan concent pengguna sebagai prioritas Utama",
    },
    {
      icon: Heart,
      title: "Dampak Sosial",
      description:
        "Kami berkomitmen menciptakan internet sebagai tempat yang aman bagi semua terutama kelompok rentan seperti lansia",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description:
        "Tetap berinovasi dengan teknologi untuk menghadapi evolusi ancaman cyber",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Membangun solusi bersama komunitas dengan mendengarkan feedback dan kebutuhan pengguna.",
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors bg-primary-background text-primary-text duration-300"
      // style={{
      //   backgroundColor: theme.bg.primary,
      //   color: theme.text.primary,
      // }}
    >
      <WhatsAppFloatingButton />
      {/* Header */}
      <header
        className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border"
        // style={{ borderColor: theme.border }}
      >
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
                  // style={{ color: theme.text.secondary }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
              <div
                className="h-6 w-px bg-border"
                // style={{ backgroundColor: theme.border }}
              />
              <h1
                className="text-2xl font-bold text-primary-text"
                //  style={{ color: theme.text.primary }}
              >
                Tentang AmanAja
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="px-3 py-1 bg-accent-background bg-opacity-20 text-accent-background border border-accent-background"
                // style={{
                //   backgroundColor: theme.bg.accent + "20",
                //   color: theme.bg.accent,
                //   border: `1px solid ${theme.bg.accent}30`,
                // }}
              >
                Est. 2022
              </Badge>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary-background"
        //  style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-6 text-primary-text"
            // style={{ color: theme.text.primary }}
            variants={fadeInUp}
          >
            Melindungi Indonesia dari
            <span
              className="text-accent-background"
              // style={{ color: theme.bg.accent }}
            >
              {" "}
              Penipuan Digital
            </span>
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed mb-8 text-secondary-text"
            // style={{ color: theme.text.secondary }}
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
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-bold mb-2 text-secondary-background"
                  // style={{ color: theme.bg.accent }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-muted-text"
                  // style={{ color: theme.text.muted }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-background"
        // style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <Target
                  className="w-8 h-8 mr-3 text-accent-background"
                  // style={{ color: theme.bg.accent }}
                />
                <h3
                  className="text-2xl font-bold text-primary-text"
                  //  style={{ color: theme.text.primary }}
                >
                  Tujuan Kami
                </h3>
              </div>
              <p
                className="text-lg leading-relaxed mb-6 text-secondary-text"
                // style={{ color: theme.text.secondary }}
              >
                Menciptakan sebuah teknologi AI yang dapat digunakan oleh
                masyarakat luas sehingga dengan adanya AI ini kami harap
                masyarakat baik yang awam maupun melek teknologi dapat terhindar
                dari segala kasus penipuan yang terjadi di dunia digital.
              </p>
              <div className="space-y-3">
                {[
                  "Menurunkan tingkat keberhasilan penipuan melalui platform setidaknya 30%",
                  "Memproses laporan dengan skala besar minimal 15,000 laporan tiap bulannya",
                  "Mengidentifikasi entitas illegal baru melalui nomor telpon dan nomor rekeningnya",
                  "Menyediakan akses untuk verifikasi rekening atau nomor telepon dengan mudah",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 text-accent-background"
                      // style={{ color: theme.bg.accent }}
                    />
                    <span
                      className="text-secondary-text"
                      //  style={{ color: theme.text.secondary }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-background"
        // style={{ backgroundColor: theme.bg.secondary }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4 text-primary-text"
              // style={{ color: theme.text.primary }}
            >
              Nilai-Nilai Kami
            </h3>
            <p
              className="text-lg text-secondary-text"
              // style={{ color: theme.text.secondary }}
            >
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
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={value.title} variants={fadeInUp}>
                  <Card
                    className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 bg-primary-background border border-border"
                    // style={{
                    //   backgroundColor: theme.bg.primary,
                    //   borderColor: theme.border,
                    // }}
                  >
                    <CardContent className="p-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-secondary-background"
                        // style={{ backgroundColor: theme.bg.secondary }}
                      >
                        <IconComponent
                          className="w-8 h-8 text-accent-background"
                          //  style={{ color: theme.bg.accent }}
                        />
                      </div>
                      <h4
                        className="text-lg font-semibold mb-3 text-primary-text"
                        //  style={{ color: theme.text.primary }}
                      >
                        {value.title}
                      </h4>
                      <p
                        className="text-sm leading-relaxed text-secondary-text"
                        // style={{ color: theme.text.secondary }}
                      >
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
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-priamry-background"
        // style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-3xl font-bold mb-4 text-primary-text"
              // style={{ color: theme.text.primary }}
            >
              Tim Expert Kami
            </h3>
            <p
              className="text-lg text-secondary-text"
              // style={{ color: theme.text.secondary }}
            >
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
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <Card
                  className="p-6 hover:shadow-lg transition-all duration-300 bg-primary-background border-border"
                  // style={{
                  //   backgroundColor: theme.bg.primary,
                  //   borderColor: theme.border,
                  // }}
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <CardTitle
                          className="text-xl mb-1 text-primary-text"
                          // style={{ color: theme.text.primary }}
                        >
                          {member.name}
                        </CardTitle>
                        <p
                          className="text-sm font-medium text-accent-background"
                          // style={{ color: theme.bg.accent }}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-sm mb-2 text-secondary-text"
                      // style={{ color: theme.text.secondary }}
                    >
                      <strong>Expertise:</strong> {member.expertise}
                    </p>
                    <p
                      className="text-sm mb-3 text-secondary-text"
                      //  style={{ color: theme.text.secondary }}
                    >
                      <strong>Education:</strong> {member.education}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <p
                      className="text-sm leading-relaxed mb-4 text-secondary-text"
                      // style={{ color: theme.text.secondary }}
                    >
                      {member.description}
                    </p>

                    <div>
                      <h5
                        className="text-sm font-semibold mb-2 text-primary-text"
                        // style={{ color: theme.text.primary }}
                      >
                        Key Achievements:
                      </h5>
                      <div className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full bg-accent-background"
                              // style={{ backgroundColor: theme.bg.accent }}
                            />
                            <span
                              className="text-xs text-secondary-text"
                              //  style={{ color: theme.text.secondary }}
                            >
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

      {/* CTA Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-background"
        // style={{ backgroundColor: theme.bg.primary }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl font-bold mb-6 text-primary-text"
            // style={{ color: theme.text.primary }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Bergabung dengan Misi Kami
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            // style={{ color: theme.text.secondary }}
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
            <Link
              target="_blank"
              href={phoneLinks} // style={{
              //   backgroundColor: theme.bg.accent,
              //   color: theme.text.inverse,
              // }}
            >
              <Button className="px-8 py-3 bg-accent-background text-inverse-text">
              Mulai Lindungi Diri
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent border-border text-secondary-text"
                // style={{
                //   borderColor: theme.border,
                //   color: theme.text.secondary,
                // }}
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
