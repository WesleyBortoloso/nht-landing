"use client"

import { motion } from "framer-motion"

export default function ClientsSection() {
      const clients = [
        { name: "Grupo Boticário", logo: "/images/clients/boticario.png" },
        { name: "Sulfibra", logo: "/images/clients/brf.png" },
        { name: "Bruno", logo: "/images/clients/bruno.png" },
        { name: "BRF", logo: "/images/clients/sulfibra.png" }
      ]

    return (
        <section className="w-full py-12 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl text-center mb-8"
                >
                    Clientes com quem já trabalhamos!
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center text-muted-foreground mb-12"
                >
                    Alguns de nossos clientes que já tivemos o prazer de trabalhar juntos!
                </motion.p>
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
                >
                    {clients.map((client, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="w-full max-w-[150px]"
                    >
                        <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        className="w-full h-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
  }
  