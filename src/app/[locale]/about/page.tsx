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
import { fadeInUp, staggerContainer } from "@/constant/style.constant";
import { WhatsAppFloatingButton } from "@/components/ui/whatsapp-floating-button";
import { phoneLinks } from "@/constant/content";
import { useTranslations } from "next-intl"; // Import the hook
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("AboutPage"); // Initialize the hook

  // Build data from translations

  const profileImages = [
    "/images/profile/qie.png",
    "/images/profile/akmal.png",
    "/images/profile/palen.png",
    "/images/profile/dave.png",
  ];

  const teamMembers = [0, 1, 2, 3].map((index) => ({
    name: t(`team.members.${index}.name`),
    role: t(`team.members.${index}.role`),
    expertise: t(`team.members.${index}.expertise`),
    education: t(`team.members.${index}.education`),
    description: t(`team.members.${index}.description`),
    achievements: t.raw(`team.members.${index}.achievements`) as string[],
    image: profileImages[index],
  }));

  const values = [
    { icon: Shield, key: "security" },
    { icon: Heart, key: "socialImpact" },
    { icon: Lightbulb, key: "innovation" },
    { icon: Users, key: "community" },
  ];

  const stats = [
    { value: "25K+", key: "users" },
    { value: "500K+", key: "scams" },
    { value: "99.9%", key: "accuracy" },
    { value: "24/7", key: "monitoring" },
  ];

  const missionPoints = t.raw("mission.points") as string[];

  return (
    <div className="min-h-screen transition-colors bg-primary-background text-primary-text duration-300">
      <WhatsAppFloatingButton />
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
                  <span>{t("header.back")}</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-2xl font-bold text-primary-text">
                {t("header.title")}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="px-3 py-1 bg-accent-background bg-opacity-20 text-accent-background border border-accent-background">
                {t("header.badge")}
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
            {t.rich("hero.title", {
              accent: (chunks) => (
                <span className="text-accent-background">{chunks}</span>
              ),
            })}
          </motion.h2>
          <motion.p
            className="text-xl leading-relaxed mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-3xl font-bold mb-2 text-accent-background">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-text">
                  {t(`hero.stats.${stat.key}`)}
                </div>
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
                <Target className="w-8 h-8 mr-3 text-accent-background" />
                <h3 className="text-2xl font-bold text-primary-text">
                  {t("mission.title")}
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-6 text-secondary-text">
                {t("mission.description")}
              </p>
              <div className="space-y-3">
                {missionPoints.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-accent-background" />
                    <span className="text-secondary-text">{item}</span>
                  </div>
                ))}
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
              {t("values.title")}
            </h3>
            <p className="text-lg text-secondary-text">
              {t("values.subtitle")}
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
                <motion.div key={value.key} variants={fadeInUp}>
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300 bg-primary-background border-border">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-secondary-background">
                        <IconComponent className="w-8 h-8 text-accent-background" />
                      </div>
                      <h4 className="text-lg font-semibold mb-3 text-primary-text">
                        {t(`values.items.${value.key}.title`)}
                      </h4>
                      <p className="text-sm leading-relaxed text-secondary-text">
                        {t(`values.items.${value.key}.description`)}
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
              {t("team.title")}
            </h3>
            <p className="text-lg text-secondary-text">{t("team.subtitle")}</p>
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
                <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-secondary-background border-border overflow-hidden">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Image Column */}
                    <motion.div
                      className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover object-top"
                      />
                    </motion.div>

                    {/* Details Column */}
                    <div className="flex-grow">
                      <CardHeader className="p-0 mb-4">
                        <div className="mb-3">
                          <CardTitle className="text-xl mb-1 text-primary-text">
                            {member.name}
                          </CardTitle>
                          <p className="text-sm font-medium text-accent-background">
                            {member.role}
                          </p>
                        </div>
                        <p className="text-sm mb-2 text-secondary-text">
                          <strong>{t("team.expertise")}:</strong>{" "}
                          {member.expertise}
                        </p>
                        <p className="text-sm text-secondary-text">
                          <strong>{t("team.education")}:</strong>{" "}
                          {member.education}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        <p className="text-sm leading-relaxed mb-4 text-secondary-text">
                          {member.description}
                        </p>
                        <div>
                          <h5 className="text-sm font-semibold mb-2 text-primary-text">
                            {t("team.achievements")}:
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
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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
            {t("cta.title")}
          </motion.h3>
          <motion.p
            className="text-lg mb-8 text-secondary-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("cta.subtitle")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link target="_blank" href={phoneLinks}>
              <Button className="px-8 py-3 bg-accent-background text-inverse-text">
                {t("cta.button_protect")}
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent border-border text-secondary-text"
              >
                {t("cta.button_home")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
