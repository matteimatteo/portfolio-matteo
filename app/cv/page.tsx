import { ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon, ServerStackIcon, LanguageIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-12">
            <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-12 gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">Mon Parcours</h1>
                    <p className="text-slate-500 text-lg">Profil orienté Data Analyst & Ingénierie de la donnée</p>
                </div>
                <a
                    href="/cv-original.jpg"
                    download="CV-Matteo-Turpin-Hannequand.jpg"
                    className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
                >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                    <span>Télécharger le CV</span>
                </a>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Colonne Gauche : Expériences (Prend 2 colonnes sur grand écran) */}
                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-slate-900 tracking-tight">
                            <BriefcaseIcon className="w-7 h-7 text-blue-600" /> Expériences Professionnelles
                        </h2>
                        
                        <div className="space-y-8">
                            {/* Expérience Certigna */}
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_white]"></div>
                                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                                    <h3 className="font-bold text-xl text-slate-900">Stage - Certigna</h3>
                                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">Mars 2026 - Juin 2026</span>
                                </div>
                                <p className="text-blue-600 text-sm font-medium mb-3">Villeneuve d'Ascq</p>
                                <p className="text-slate-600 leading-relaxed">
                                    Développement et évolution de modules en PHP et Angular. Mon travail se concentre particulièrement sur l'architecture logicielle, la réalisation de tests unitaires et la <strong>migration de bases de données</strong>, une étape essentielle pour structurer et fiabiliser l'information.
                                </p>
                            </div>

                            {/* Expérience Kappa Data */}
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-2 shadow-[0_0_0_4px_white]"></div>
                                <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                                    <h3 className="font-bold text-xl text-slate-900">Stage - Kappa Data France</h3>
                                    <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">2025</span>
                                </div>
                                <p className="text-slate-500 text-sm font-medium mb-3">EuraTechnologies</p>
                                <p className="text-slate-600 leading-relaxed">
                                    Développement d'une authentification 2FA en PHP pour une application web interne. Mise en œuvre de solutions techniques exigeantes dans un contexte strict de cybersécurité et de réseau.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Colonne Droite : Compétences & Formation */}
                <div className="space-y-6">
                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="flex items-center gap-3 text-xl font-bold mb-6 text-slate-900 tracking-tight">
                            <LanguageIcon className="w-6 h-6 text-blue-600" /> Langues
                        </h2>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-700">Anglais</span>
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold">Niveau B2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-slate-700">Français</span>
                                <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-lg text-sm font-medium">Langue maternelle</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 text-slate-900 tracking-tight">
                            <ServerStackIcon className="w-7 h-7 text-blue-600" /> Compétences
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Data & BDD</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['SQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Python'].map(skill => (
                                        <span key={skill} className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-lg text-sm font-semibold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Back-end</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Java', 'Spring', 'PHP', 'Symfony'].map(skill => (
                                        <span key={skill} className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-semibold">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Front-end</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['HTML/CSS', 'Tailwind', 'React', 'Angular'].map(skill => (
                                        <span key={skill} className="bg-slate-50 text-slate-600 border border-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Systèmes & DevOps</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Linux/Mac/Windows', 'GIT', 'Docker', 'Podman'].map(skill => (
                                        <span key={skill} className="bg-slate-100 text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 text-slate-900 tracking-tight">
                            <AcademicCapIcon className="w-7 h-7 text-blue-600" /> Éducation
                        </h2>
                        
                        <div className="space-y-5">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-900">Master 1 SIAD</h3>
                                <p className="text-blue-600 text-sm font-medium">À partir de Sept. 2026</p>
                                <p className="text-slate-500 text-xs mt-1">Université de Lille</p>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-slate-800">BUT Informatique</h3>
                                <p className="text-slate-500 text-sm">IUT de Lens • 2023 - 2026</p>
                            </div>
                            
                            <div>
                                <h3 className="font-bold text-slate-800">Baccalauréat Général</h3>
                                <p className="text-slate-500 text-sm">Mention Bien • 2022 - 2023</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-slate-800">Certification PIX</h3>
                                <p className="text-slate-500 text-sm">2022</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}