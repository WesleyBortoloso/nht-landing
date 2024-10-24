"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Rocket } from "lucide-react";

export default function ServicesSection() {
  const areasDeAtuacao = [
      {
        title: "Estruturas Metálicas",
        description: "Estruturas metálicas robustas conforme as especificações do projeto",
        image: "/images/services/estruturametalica.png"
      },
      {
        title: "Projetos Mecânicos",
        description: "Desenvolvimento de projetos mecânicos.",
        image: "/images/services/projetosmecanicos.png"
      },
      {
        title: "Consultoria Especializada",
        description: "Prestação de consultoria especializada com foco em tirar do papel e colocar projetos em prática.",
        image: "/images/services/consultoriaespecializada.png"
      }
  ]

  return (
    <section id="areas-atuacao" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted to-background">
        <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl text-center mb-12"
        >
          Nossas Áreas de Atuação
        </motion.h2>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {areasDeAtuacao.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
