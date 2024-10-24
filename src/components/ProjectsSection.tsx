import { Card, CardContent } from "@/components/ui/card";

const projects = [
  { id: 1, image: 'cobertura1.png', description: 'Cobertura de galpão desenvolvido para ser retrátil.', title: 'Cobertura de Galpão' },
  { id: 2, image: 'cobertura2.png', description: 'Galpão', title: 'Galpão' },
  { id: 3, image: 'galpao2.png', description: 'Elevador de itens', title: 'Elevador' },
  { id: 4, image: 'elevador.png', description: 'Elevador de itens', title: 'Elevador' },
  { id: 5, image: 'mezanino.png', description: 'Galpão com mezanino', title: 'Galpão com mezanino' },
  { id: 6, image: 'mezaninoaberto.png', description: 'Galpão com mezanino detalhado', title: 'Galpão com mezanino detalhado' }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Projetos Recentes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <img
                alt={`Project ${project.id}`}
                className="aspect-video w-full overflow-hidden rounded-t-xl object-cover object-center"
                height="225"
                src={`/images/projects/${project.image}`}
                width="400"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
