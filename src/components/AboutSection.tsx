"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function AboutSection() {
    const timelineEvents = [
        { year: 2023, title: "Fundação", description: "Fundação da NHT - Engenharia" },
        { year: 2024, title: "Alavancagem", description: "Momento em que a NHT começou a projetar serviços para grandes clientes." },
      ]

    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl text-center mb-12"
          >
            A NHT Engenharia
          </motion.h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg text-foreground leading-relaxed">
                Fundada em 2023, a NHT Engenharia já possui uma trajetória de excelência e inovação, idealizada por Vitor Nohatto, formado em Engenharia Mecânica pelo Instituto Federal Catarinense,
                a NHT oferece soluções sob medida para clientes em diversos setores, garantindo qualidade, eficiência e segurança em cada projeto. Nossa equipe de engenheiros e especialistas é dedicada a transformar desafios em oportunidades, entregando resultados que superam expectativas e impulsionam o sucesso de nossos clientes. 
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Conheça mais sobre como podemos colaborar para o crescimento e a sustentabilidade de seu negócio.
              </p>
              <div className="pt-4">
                <a
                    href="https://wa.me/5549999656987"
                    target="_blank"
                    className="block"
                    aria-label="Converse conosco pelo WhatsApp"
                >
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Entrar em contato <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </a>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform -rotate-3"
              ></motion.div>
              <Card className="relative z-10 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Trajetória</h3>
                  <div className="space-y-6">
                    {timelineEvents.map((event, index) => (
                      <motion.div 
                        key={index}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="flex items-center space-x-4"
                      >
                        <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                          {event.year}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {[
              { title: "Projetos Concluídos", value: "10+" },
              { title: "Clientes", value: "5+" },
              { title: "Comprometimento", value: "∞" },
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }
  