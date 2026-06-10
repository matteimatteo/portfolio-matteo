import Image from 'next/image';

const projects = [
    {
        id: 'football-analysis',
        title: 'Analyse xG : Messi vs Ronaldo',
        role: 'Data Analysis & Visualisation',
        date: '2024',
        description: "Analyse statistique des meilleurs buteurs des 5 grandes ligues européennes (2016-2020). Comparaison des performances réelles face aux Expected Goals (xG), avec un focus analytique sur le duel Messi vs Ronaldo.",
        tech: ['Analyse de données', 'Modèle xG', 'Visualisation'],
        image: '/MessiRonaldo.png',
        queryInfo: 'DATASET: 660_ROWS | MODEL: xG'
    },
    {
        id: 'speedloc',
        title: 'SpeedLoc',
        role: 'Architecture & Base de données',
        date: '2025',
        description: "Modélisation d'une base de données relationnelle (SQL) pour une plateforme de location. Optimisation des requêtes pour la gestion des réservations en temps réel.",
        tech: ['SQL', 'PostgreSQL', 'Node.js', 'React'],
        image: '/speedloc.png',
        queryInfo: 'INDEX_SCAN: ON | COST: 0.04..12.5ms'
    },
    {
        id: 'marathon',
        title: 'Marathon du Web',
        role: 'Backend & Data Flow',
        date: '2024',
        description: "Hackathon de 24h : Structuration de l'architecture de données sous contrainte de temps. Création de l'API et sécurisation des transferts d'informations.",
        tech: ['PHP', 'SQL', 'Laravel', 'Flux de données'],
        image: '/marathon.png',
        queryInfo: 'API_STREAM: SECURE | FLOW: 1.2GB/s'
    },
    {
        id: 'olympass',
        title: 'Olympass',
        role: 'UI/UX & Data Structuring',
        date: '2024',
        description: "Analyse des besoins et structuration de l'information. Prototypage d'un tableau de bord clair pour visualiser et comprendre rapidement les données.",
        tech: ['Figma', 'UI/UX', 'Intégration HTML/CSS'],
        image: '/olympass.png',
        queryInfo: 'SCHEMA_TREE: VISUAL | DASHBOARD: TRUE'
    },
];

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-12">
            
            {/* En-tête Projets */}
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Mes Analyses & Projets
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl flex items-center justify-center md:justify-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    Mise en pratique de la structuration, du traitement et de la modélisation de l&apos;information.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="glass-card rounded-3xl p-6 border border-slate-700/50 shadow-2xl flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 group relative overflow-hidden">
                        
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        
                        {/* Conteneur de l'image avec bords arrondis et overlay au survol */}
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-700/80">
                            <Image
                                src={project.image}
                                alt={`Aperçu du projet ${project.title}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                            />
                            {/* Overlay sombre pour effet terminal */}
                            <div className="absolute inset-0 bg-slate-950/40 transition-opacity duration-300 mix-blend-multiply" />
                            
                            {/* Réticule / Masque analytique de données sur l'image */}
                            <div className="absolute bottom-2 left-2 right-2 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 font-mono text-[9px] text-blue-400 select-none flex justify-between items-center opacity-85 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                <span>{project.queryInfo}</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h2>
                            <span className="inline-block rounded-xl font-mono border border-slate-700/80 bg-slate-800/80 px-3 py-1 text-xs font-bold text-slate-400 shadow-sm">
                                {project.date}
                            </span>
                        </div>
                        
                        <p className="text-xs text-blue-400 font-bold mb-4 uppercase tracking-widest flex items-center gap-2 font-mono">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                            {project.role}
                        </p>
                        
                        <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-light">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="db-tag db-tag-neutral">
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