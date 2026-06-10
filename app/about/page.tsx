import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-12">
            
            {/* En-tête À propos */}
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    À propos de moi
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl flex items-center justify-center md:justify-start gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    Mon parcours, mon objectif et comment me contacter.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                
                {/* Colonne Gauche : Parcours et Objectif */}
                <div className="glass-card rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-2xl lg:col-span-2 relative overflow-hidden flex flex-col justify-between group">
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white tracking-tight flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            Mon Parcours
                        </h2>
                        
                        <p className="mb-4 text-slate-300 text-lg leading-relaxed font-light">
                            Je suis <strong className="text-white font-semibold">Mattéo</strong>. Mon parcours en BUT Informatique à Lens m&apos;a permis de construire un socle technique solide et d&apos;apprendre à structurer des applications.                        
                        </p>
                        
                        <p className="mb-8 text-slate-300 text-lg leading-relaxed font-light">
                            Cependant, au fil des projets, j&apos;ai réalisé que ce qui me passionne réellement se trouve en coulisses : la donnée. Au-delà de concevoir des interfaces, j&apos;aime comprendre comment l&apos;information est stockée, l&apos;analyser, et la transformer en un véritable outil d&apos;aide à la décision. C&apos;est ce constat qui m&apos;a naturellement poussé à me spécialiser dans la Data pour la suite de mes études.                        
                        </p>
                    </div>

                    {/* Encadré de l'objectif avec les détails du rythme */}
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group/target shadow-[inset_0_0_30px_rgba(59,130,246,0.05)]">
                        <div className="absolute right-4 top-4 font-mono text-[9px] text-blue-400 select-none opacity-50 uppercase tracking-widest font-bold">
                          TARGET: 2026_ALTERNANCE
                        </div>
                        <h3 className="text-blue-400 font-bold text-xl mb-4 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                            <span>🎯 Objectif Alternance 2026</span>
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-6 text-base font-light">
                            Admis au <strong className="text-white font-semibold">Master SIAD</strong> (Systèmes d&apos;Information et Aide à la Décision) à l&apos;Université de Lille, je recherche une <strong className="text-white font-semibold">alternance de 24 mois</strong> pour apprendre le métier d&apos;analyste sur le terrain et me rendre utile au sein d&apos;une équipe.
                        </p>
                        
                        <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 shadow-sm border border-slate-700/80">
                            <h4 className="font-mono font-bold text-slate-300 mb-4 text-xs uppercase tracking-widest flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                                Le rythme de l&apos;alternance :
                            </h4>
                            <ul className="space-y-3 text-slate-400 text-sm">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-base leading-none mt-0.5">•</span>
                                    <span><strong className="text-slate-200">De septembre 2026 à janvier 2027 :</strong> Formation intensive à l&apos;université (cours toute la semaine).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-500 font-bold text-base leading-none mt-0.5">•</span>
                                    <span><strong className="text-slate-200">À partir de janvier 2027 :</strong> Rythme classique de 2 jours en entreprise et 3 jours à l&apos;université.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Colonne Droite : Contact & Intérêts */}
                <div className="space-y-6 lg:col-span-1">
                    
                    {/* Widget Contact */}
                    <div className="glass-card border border-slate-700/50 rounded-3xl p-8 shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        <div className="absolute right-4 top-4 font-mono text-[9px] text-slate-500 select-none opacity-40">
                          CONTACT_PROTOCOL
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-8 tracking-tight flex items-center gap-2 text-white">
                            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            Me Contacter
                        </h2>
                        
                        <div className="space-y-6">
                            <a href="mailto:matteo59.1008@gmail.com" className="flex items-center gap-4 hover:text-blue-400 transition-all group/link">
                                <div className="bg-slate-800/80 p-3 rounded-2xl group-hover/link:bg-blue-900/40 group-hover/link:scale-105 border border-slate-700/80 group-hover/link:border-blue-500/50 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover/link:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <EnvelopeIcon className="w-6 h-6 text-slate-300 group-hover/link:text-blue-400" />
                                </div>
                                <span className="font-semibold text-sm break-all font-mono tracking-tight text-slate-300 group-hover/link:text-blue-400">matteo59.1008@gmail.com</span>
                            </a>
                            
                            <a href="tel:+33682464173" className="flex items-center gap-4 hover:text-blue-400 transition-all group/link">
                                <div className="bg-slate-800/80 p-3 rounded-2xl group-hover/link:bg-blue-900/40 group-hover/link:scale-105 border border-slate-700/80 group-hover/link:border-blue-500/50 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover/link:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    <PhoneIcon className="w-6 h-6 text-slate-300 group-hover/link:text-blue-400" />
                                </div>
                                <span className="font-semibold font-mono text-slate-300 group-hover/link:text-blue-400">06 82 46 41 73</span>
                            </a>
                            
                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                                    <MapPinIcon className="w-6 h-6 text-slate-400" />
                                </div>
                                <span className="font-semibold">Lille, France</span>
                            </div>
                        </div>
                    </div>

                    {/* Widget Intérêts */}
                    <div className="glass-card rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-[3px] bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                        
                        <h2 className="text-xl font-bold mb-6 text-white tracking-tight flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                            Centres d&apos;intérêt
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {['Veille Tech & Data', 'Mode', 'Jeux vidéo', 'Musique', 'Voyage', 'Volley-Ball'].map(interest => (
                                <span key={interest} className="db-tag db-tag-neutral hover:scale-102 hover:border-slate-500 shadow-sm cursor-default">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}