"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import WhatsappButton from "@/components/WhatsappButton";
import ClientsSection from "@/components/ClientsSection";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col min-h-screen"
    >
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer/>
      <WhatsappButton />
    </motion.div>
  );
}