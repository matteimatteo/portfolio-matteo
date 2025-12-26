import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { CommandLineIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const projects = [
    {
        id: 'speedloc',
        title: 'SpeedLoc',
        role: 'Full Stack Developer',
        date: '2025',
        description: "Développement d'une plateforme de location de voitures. Gestion de base de données, réservation en temps réel et interface utilisateur réactive.",
        tech: ['React', 'Node.js', 'SQL', 'Tailwind'],
        icon: CommandLineIcon,
        image: '/speedloc.png',
    },
    {
        id: 'olympass',
        title: 'Olympass',
        role: 'Webdesign',
        date: '2024',
        description: "Réalisation d'un projet complet de webdesign en groupe de 3. Création de maquettes, charte graphique et prototypage.",
        tech: ['Figma', 'UI/UX', 'Design'],
        icon: PaintBrushIcon,
        image: '/olympass.png',
    },
    {
        id: 'marathon',
        title: 'Marathon du Web',
        role: 'Full Stack Developer',
        date: '2024',
        description: "Hackathon de 24h : Création d'un projet web complet en équipe de 8. Gestion de base de données, backend et frontend.",
        tech: ['Laravel', 'PHP', 'SQL', 'Git', 'CSS'],
        icon: CommandLineIcon,
        image: '/marathon.png',
    },
];

export default function Page() {
    return (
        <main className="w-full animate-fade-in">
            <h1 className={`${lusitana.className} text-3xl text-teal-800 font-bold mb-8`}>Mes Projets</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <div key={project.id} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div className="relative h-48 w-full bg-stone-100 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                                    <Icon className="h-12 w-12 opacity-20" />
                                    <span className="sr-only">Image pour {project.title}</span>
                                </div>
                                <Image
                                    src={project.image}
                                    alt={`Aperçu du projet ${project.title}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-stone-800 group-hover:text-teal-700 transition-colors">{project.title}</h2>
                                        <p className="text-sm text-teal-600 font-medium">{project.role}</p>
                                    </div>
                                    <span className="inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-600">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-700/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
