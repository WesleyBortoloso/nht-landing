"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState("/images/hero/hero1.png");
  const [prevImage, setPrevImage] = useState<number | null>(null);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        let newImageNumber;
        do {
          newImageNumber = Math.floor(Math.random() * 3) + 1;
        } while (newImageNumber === prevImage);

        setHeroImage(`/images/hero/hero${newImageNumber}.png`);
        setPrevImage(newImageNumber);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [prevImage]);

  return (
    <section className="w-full py-32 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 items-center justify-center lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-primary text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none">
                Projetamos soluções, <span className="font-bold">estruturamos sucesso.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Obtenha uma consultoria especializada para sua necessidade.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90" href="#contact">
                Entrar em contato
              </Link>
              <Link className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground" href="#projects">
                Nossos projetos
              </Link>
            </div>
          </div>
          <img alt="Logo NHT - Engenharia" className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`} height="410" src={heroImage} width="650" />
        </div>
      </div>
    </section>
  );
}
