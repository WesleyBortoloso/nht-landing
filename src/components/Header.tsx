import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-[3rem] lg:pt-[3rem] px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="flex justify-center lg:justify-start mt-6 w-full lg:w-auto">
        <Link href="#" className="flex items-center">
            <img src="/images/logos/azul.png" alt="Logo NHT - Engenharia" className="h-auto w-48" />
        </Link>
        </div>
    
        <nav className="hidden lg:flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            Sobre
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Áreas de atuação
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#clients">
            Clientes
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projetos
        </Link>
        <Link className="text-primary text-bold text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Entrar em contato
        </Link>
        </nav>
    </header>
  );
}
