"use client";

import { MessageCircle, Zap, Brain } from "lucide-react";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { Header } from "@/components/layout/Header";
import { CarouselSection } from "@/components/landing/CarouselSection";
import { FeatureSection } from "@/components/landing/feature/FeatureSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/landing/HowITWorkSection";
import { FAQSection } from "@/components/landing/FAQSection";

export default function AmanAjaWebsite() {
  const carouselItems = [
    {
      title: "🚨 Waspada Penipuan Online!",
      subtitle: "1 dari 3 orang Indonesia pernah jadi korban penipuan digital",
    },
    {
      title: "🤖 AI Terdepan Melindungi Anda",
      subtitle: "Deteksi penipuan dengan akurasi 99.9% dalam hitungan detik",
    },
    {
      title: "💬 Langsung di WhatsApp",
      subtitle: "Tidak perlu install aplikasi, cukup chat di WhatsApp!",
    },
  ];

  const featureList = [
    {
      icon: Brain,
      title: "AI Super Cerdas",
      description:
        "Machine learning yang terus belajar dari pola penipuan terbaru dengan akurasi tinggi dan false positive rendah.",
    },
    {
      icon: Zap,
      title: "Deteksi Instan",
      description:
        "Analisis pesan dalam hitungan detik dengan response time kurang dari 100ms untuk perlindungan real-time.",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Native",
      description:
        "Terintegrasi langsung di WhatsApp tanpa perlu install aplikasi tambahan. Mudah digunakan untuk semua kalangan.",
    },
  ];

  const aboutItems = [
    {
      title: "Platform",
      links: [
        "AI Detection",
        "WhatsApp Bot",
        "Real-time Analysis",
        "Security Reports",
      ],
    },
    {
      title: "Support",
      links: ["Help Center", "Documentation", "Community", "Contact Us"],
    },
  ];

  return (
    <div className="bg-primary-background text-primary-text min-h-screen transition-colors duration-300 max-w-screen overflow-x-hidden">
      <WhatsAppFloatingButton />
      <Header />
      <CarouselSection carouselItems={carouselItems} />

      <HeroSection />

      <FeatureSection featureList={featureList} />

      <HowItWorksSection />

      <FAQSection />

      <CTASection />

      <Footer aboutItems={aboutItems} />
    </div>
  );
}
