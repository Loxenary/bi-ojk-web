"use client";

import { MessageCircle, Image, Phone } from "lucide-react";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { Header } from "@/components/layout/Header";
import { FeatureSection } from "@/components/landing/feature/FeatureSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/landing/HowITWorkSection";
import { FAQSection } from "@/components/landing/FAQSection";

export default function AmanAjaWebsite() {

  const featureList = [
    {
      icon: Phone,
      title: "Cek Rekening dan No Telepon",
      description:
        "Dapat melakukan cek nomor telepon dan rekening yang sekiranya mencurigakan",
    },
    {
      icon: Image,
      title: "Dapat Analisis Gambar Ataupun Text",
      description:
        "Dapat melakukan analisis penipuan melalui chat ataupun gamber sehingga dapat langsung forware pesan atau screenshow pesan yang mencurigakan",
    },
    {
      icon: MessageCircle,
      title: "Integrasi Pada Whatsapp",
      description:
        "Terintegrasi langsung pada WhatsApp tanpa perlu install aplikasi tambahan sehingga mudah digunakan semua kalangan",
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
      {/* <CarouselSection carouselItems={carouselItems} /> */}

      <HeroSection />

      <FeatureSection featureList={featureList} />

      <HowItWorksSection />

      {/* <TestimonialSection /> */}
    
      <FAQSection />

      <CTASection />

      <Footer aboutItems={aboutItems} />
    </div>
  );
}
