import { ArrowDownTrayIcon, ServerStackIcon, LanguageIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-16">
            
            {/* En-tête de parcours */}
            <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-16 gap-6 max-w-5xl mx-auto px-4">
                <div>
                    <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        Mon Parcours
                    </h1>
                    <p className="text-slate-400 text-lg flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                        Graphe d&apos;exécution système & compétences
                    </p>
                </div>
                <a
                    href="/cv-original.jpg"
                    download="CV-Matteo-Turpin-Hannequand.jpg"
                    className="flex items-center gap-3 bg-blue-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold font-mono hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-102 active:scale-98 uppercase tracking-widest glow-border"
                >
                    <ArrowDownTrayIcon className="w-5 h-5 text-white" />
                    <span>DUMP_CV()</span>
                </a>
            </div>

            {/* PIPELINE CENTRAL - GRAPH */}
            <div className="relative w-full max-w-5xl mx-auto px-4">
                {/* Ligne Centrale */}
                <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-orange-500/50 md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                {/* ----------------- EXPERIENCES ----------------- */}
                <div className="mb-20">
                    <div className="relative flex justify-center mb-12">
                        <span className="bg-slate-900 border border-blue-500/50 text-blue-400 px-6 py-2 rounded-full font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                            PROCESS_LOG: EXPERIENCES
                        </span>
                    </div>

                    {/* Certigna */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group/item w-full">
                        <div className="hidden md:flex md:w-[45%] justify-end pr-8">
                            <span className="text-xs font-mono font-bold text-blue-400 bg-slate-800 border border-blue-500/30 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.15)] uppercase">Mars 2026 - Juin 2026</span>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-[3px] border-slate-950 -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover/item:scale-150 group-hover/item:bg-blue-400 transition-all duration-300" />
                        
                        <div className="w-full pl-14 md:pl-8 md:w-[45%]">
                            <div className="glass-card rounded-2xl p-6 border border-slate-700/50 shadow-xl group-hover/item:border-blue-500/50 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-blue-500/50 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <span className="md:hidden text-xs font-mono font-bold text-blue-400 mb-2 inline-block uppercase">Mars 2026 - Juin 2026</span>
                                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover/item:text-blue-400 transition-colors">Stage - Certigna</h3>
                                <p className="text-slate-400 text-sm font-semibold mb-3 flex items-center gap-1.5">
                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span> Villeneuve d&apos;Ascq
                                </p>
                                <p className="text-slate-300 font-light leading-relaxed text-sm">
                                    Développement et évolution de modules en PHP et Angular. Mon travail se concentre particulièrement sur l&apos;architecture logicielle, la réalisation de tests unitaires et la <strong className="text-white font-medium">migration de bases de données</strong>, une étape essentielle pour structurer et fiabiliser l&apos;information.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Kappa Data */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group/item w-full">
                        <div className="w-full pl-14 md:pl-0 md:pr-8 md:w-[45%] md:text-right order-2 md:order-1">
                            <div className="glass-card rounded-2xl p-6 border border-slate-700/50 shadow-xl group-hover/item:border-slate-400/50 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-[2px] bg-slate-400/50 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <span className="md:hidden text-xs font-mono font-bold text-slate-400 mb-2 inline-block uppercase">2025</span>
                                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover/item:text-slate-300 transition-colors">Stage - Kappa Data France</h3>
                                <p className="text-slate-400 text-sm font-semibold mb-3 flex items-center md:justify-end gap-1.5">
                                    <span className="md:hidden h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                                    EuraTechnologies
                                    <span className="hidden md:inline-block h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                                </p>
                                <p className="text-slate-300 font-light leading-relaxed text-sm">
                                    Développement d&apos;une authentification 2FA en PHP pour une application web interne. Mise en œuvre de solutions techniques exigeantes dans un contexte strict de cybersécurité et de réseau.
                                </p>
                            </div>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-slate-500 border-[3px] border-slate-950 -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(100,116,139,0.5)] group-hover/item:scale-150 group-hover/item:bg-slate-400 transition-all duration-300 order-1 md:order-2" />
                        
                        <div className="hidden md:flex md:w-[45%] justify-start pl-8 order-3">
                            <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 border border-slate-600/50 px-3 py-1.5 rounded-lg uppercase">Mai 2025 - Juin 2025</span>
                        </div>
                    </div>
                </div>


                {/* ----------------- EDUCATION ----------------- */}
                <div className="mb-20">
                    <div className="relative flex justify-center mb-12">
                        <span className="bg-slate-900 border border-orange-500/50 text-orange-400 px-6 py-2 rounded-full font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.3)] z-10 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                            ACADEMIC_TREE
                        </span>
                    </div>

                    {/* Master SIAD */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group/item w-full">
                        <div className="hidden md:flex md:w-[45%] justify-end pr-8">
                            <span className="text-xs font-mono font-bold text-orange-400 bg-orange-900/30 border border-orange-500/30 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(249,115,22,0.15)] uppercase">À partir de Sept. 2026</span>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 border-[3px] border-slate-950 -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(249,115,22,0.8)] group-hover/item:scale-150 group-hover/item:bg-orange-400 transition-all duration-300" />
                        
                        <div className="w-full pl-14 md:pl-8 md:w-[45%]">
                            <div className="glass-card rounded-2xl p-6 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover/item:border-orange-500/80 transition-colors bg-orange-900/10">
                                <span className="md:hidden text-xs font-mono font-bold text-orange-400 mb-2 inline-block uppercase">À partir de Sept. 2026</span>
                                <h3 className="font-heading font-extrabold text-xl text-white mb-1 group-hover/item:text-orange-400 transition-colors">Master 1 SIAD</h3>
                                <p className="text-slate-400 text-sm font-medium">Université de Lille</p>
                            </div>
                        </div>
                    </div>

                    {/* BUT Info */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group/item w-full">
                        <div className="w-full pl-14 md:pl-0 md:pr-8 md:w-[45%] md:text-right order-2 md:order-1">
                            <div className="glass-card rounded-2xl p-6 border border-slate-700/50 shadow-xl group-hover/item:border-slate-500/50 transition-colors">
                                <span className="md:hidden text-xs font-mono font-bold text-slate-400 mb-2 inline-block uppercase">2023 - 2026</span>
                                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover/item:text-slate-300">BUT Informatique</h3>
                                <p className="text-slate-400 text-sm font-medium">IUT de Lens</p>
                            </div>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-slate-600 border-[2px] border-slate-950 -translate-x-[5px] md:-translate-x-[6px] z-10 group-hover/item:scale-150 transition-all duration-300 order-1 md:order-2" />
                        
                        <div className="hidden md:flex md:w-[45%] justify-start pl-8 order-3">
                            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-800/50 border border-slate-700/80 px-3 py-1 rounded-lg uppercase">2023 - 2026</span>
                        </div>
                    </div>

                    {/* BAC */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 group/item w-full">
                        <div className="hidden md:flex md:w-[45%] justify-end pr-8">
                            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-800/50 border border-slate-700/80 px-3 py-1 rounded-lg uppercase">2022 - 2023</span>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-slate-600 border-[2px] border-slate-950 -translate-x-[5px] md:-translate-x-[6px] z-10 group-hover/item:scale-150 transition-all duration-300" />
                        
                        <div className="w-full pl-14 md:pl-8 md:w-[45%]">
                            <div className="glass-card rounded-2xl p-6 border border-slate-700/50 shadow-xl group-hover/item:border-slate-500/50 transition-colors">
                                <span className="md:hidden text-xs font-mono font-bold text-slate-400 mb-2 inline-block uppercase">2022 - 2023</span>
                                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover/item:text-slate-300">Baccalauréat Général</h3>
                                <p className="text-slate-400 text-sm font-medium">Mention Bien</p>
                            </div>
                        </div>
                    </div>

                    {/* PIX */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between mb-20 group/item w-full">
                        <div className="w-full pl-14 md:pl-0 md:pr-8 md:w-[45%] md:text-right order-2 md:order-1">
                            <div className="glass-card rounded-2xl p-5 border border-slate-700/50 shadow-xl group-hover/item:border-slate-500/50 transition-colors">
                                <span className="md:hidden text-xs font-mono font-bold text-slate-400 mb-2 inline-block uppercase">2022</span>
                                <h3 className="font-heading font-bold text-base text-white group-hover/item:text-slate-300">Certification PIX</h3>
                            </div>
                        </div>
                        
                        <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-slate-600 border-[2px] border-slate-950 -translate-x-[5px] md:-translate-x-[6px] z-10 group-hover/item:scale-150 transition-all duration-300 order-1 md:order-2" />
                        
                        <div className="hidden md:flex md:w-[45%] justify-start pl-8 order-3">
                            <span className="text-xs font-mono font-bold text-slate-500 bg-slate-800/50 border border-slate-700/80 px-3 py-1 rounded-lg uppercase">2022</span>
                        </div>
                    </div>
                </div>

                {/* ----------------- COMPETENCES & LANGUES (DOCK FIN) ----------------- */}
                <div className="mt-12 mb-8">
                    <div className="relative flex justify-center mb-12">
                        <span className="bg-slate-900 border border-indigo-500/50 text-indigo-400 px-6 py-2 rounded-full font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.3)] z-10 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                            DB_SCHEMA & MODULES
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* Carte Compétences */}
                        <section className="glass-card rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <h2 className="font-heading flex items-center gap-3 text-2xl font-bold mb-8 text-white tracking-tight">
                                <ServerStackIcon className="w-7 h-7 text-indigo-400" /> Compétences
                            </h2>
                            
                            <div className="space-y-6">
                                {/* Data & BDD */}
                                <div className="p-4 bg-indigo-900/10 border border-indigo-500/20 rounded-2xl">
                                    <h4 className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                                        Data & BDD
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['SQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Python'].map(skill => (
                                            <span key={skill} className="db-tag db-tag-blue border-indigo-500/40 text-indigo-300">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Back-end */}
                                <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
                                    <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400"></span> Back-end
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'Spring', 'PHP', 'Symfony'].map(skill => (
                                            <span key={skill} className="db-tag db-tag-neutral">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Front-end */}
                                <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
                                    <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400"></span> Front-end
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['HTML/CSS', 'Tailwind', 'React', 'Angular'].map(skill => (
                                            <span key={skill} className="db-tag db-tag-neutral">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Systèmes & DevOps */}
                                <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl">
                                    <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-500"></span> Systèmes & DevOps
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Linux/Mac/Windows', 'GIT', 'Docker', 'Podman'].map(skill => (
                                            <span key={skill} className="db-tag db-tag-neutral text-[10px] py-1">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Carte Langues */}
                        <section className="glass-card rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden h-fit group hover:border-slate-500/50 transition-all">
                            <div className="absolute top-0 inset-x-0 h-[2px] bg-slate-500/50 opacity-50 group-hover:opacity-100 transition-opacity" />
                            
                            <h2 className="font-heading flex items-center gap-3 text-xl font-bold mb-6 text-white tracking-tight">
                                <LanguageIcon className="w-6 h-6 text-slate-400" /> Langues
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex justify-between items-center hover:bg-slate-800 transition-all">
                                    <span className="font-bold text-slate-200">Anglais</span>
                                    <span className="font-mono bg-indigo-900/40 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Niveau B2</span>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex justify-between items-center hover:bg-slate-800 transition-all">
                                    <span className="font-bold text-slate-200">Français</span>
                                    <span className="font-mono bg-slate-800 text-slate-400 border border-slate-600 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider">Maternelle</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </main>
    );
}