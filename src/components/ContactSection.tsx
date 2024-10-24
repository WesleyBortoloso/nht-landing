import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Entre em contato e solicite um orçamento!</h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">NHT nas redes:</h3>
              <p className="text-muted-foreground">
                Tem algum projeto em mente? Entre em contato para transformamos em uma realidade.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Instagram className="h-5 w-5" />
                  <span>@nht_engenharia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-5 w-5" />
                  <span>nht-engenharia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>(49) 9 9965-6987</span>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nome</label>
                    <Input id="name" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                    <Input id="email" placeholder="Seu email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mensagem</label>
                    <Textarea id="message" placeholder="Sua mensagem" />
                  </div>
                  <Button className="w-full" type="submit">
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  