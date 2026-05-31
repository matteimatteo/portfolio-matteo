import Image from 'next/image';

const projects = [
    {
        id: 'speedloc',
        title: 'SpeedLoc',
        role: 'Architecture & Base de données',
        date: '2025',
        description: "Modélisation d'une base de données relationnelle (SQL) pour une plateforme de location. Optimisation des requêtes pour la gestion des réservations en temps réel.",
        tech: ['SQL', 'PostgreSQL', 'Node.js', 'React'],
        image: '/speedloc.png',
    },
    {
        id: 'marathon',
        title: 'Marathon du Web',
        role: 'Backend & Data Flow',
        date: '2024',
        description: "Hackathon de 24h : Structuration de l'architecture de données sous contrainte de temps. Création de l'API et sécurisation des transferts d'informations.",
        tech: ['PHP', 'SQL', 'Laravel', 'Flux de données'],
        image: '/marathon.png',
    },
    {
        id: 'olympass',
        title: 'Olympass',
        role: 'UI/UX & Data Structuring',
        date: '2024',
        description: "Analyse des besoins et structuration de l'information. Prototypage d'un tableau de bord clair pour visualiser et comprendre rapidement les données.",
        tech: ['Figma', 'UI/UX', 'Intégration HTML/CSS'],
        image: '/olympass.png',
    },
];

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-12">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Mes Analyses & Projets</h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl">Mise en pratique de la structuration, du traitement et de la modélisation de l'information.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                        
                        {/* Conteneur de l'image avec bords arrondis et overlay au survol */}
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                            <Image
                                src={project.image}
                                alt={`Aperçu du projet ${project.title}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                            {/* Léger filtre noir au survol pour faire ressortir le côté tech */}
                            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{project.title}</h2>
                            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                                {project.date}
                            </span>
                        </div>
                        
                        <p className="text-xs text-blue-600 font-bold mb-4 uppercase tracking-wider">{project.role}</p>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="inline-flex items-center rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}