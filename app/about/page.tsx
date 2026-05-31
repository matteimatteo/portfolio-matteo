import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in font-sans pb-12">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">À propos de moi</h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl">Mon parcours, mon objectif et comment me contacter.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                
                {/* Colonne Gauche : Parcours et Objectif (Prend 2 colonnes) */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 lg:col-span-2 transition-all hover:shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">Mon Parcours</h2>
                    
                    <p className="mb-4 text-slate-600 text-lg leading-relaxed">
                        Je suis <strong>Mattéo</strong>, et mon parcours est assez direct. J'ai fait mes armes techniques en BUT Informatique à Lens, où j'ai appris à coder et à structurer des applications. 
                    </p>
                    
                    <p className="mb-8 text-slate-600 text-lg leading-relaxed">
                        Mais au fil des projets, je me suis rendu compte que mon vrai truc, ce n'était pas forcément l'interface, c'était le "moteur" : la donnée. Comprendre comment la stocker proprement, l'analyser et surtout, la rendre utile pour prendre de bonnes décisions. C'est ce qui m'a poussé à m'orienter vers la data pour la suite de mes études.
                    </p>

                    {/* Encadré de l'objectif avec les détails du rythme */}
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
                        <h3 className="text-blue-900 font-bold text-xl mb-4">🎯 Objectif Alternance 2026</h3>
                        <p className="text-blue-800 leading-relaxed mb-6">
                            Admis au <strong>Master SIAD</strong> (Systèmes d'Information et Aide à la Décision) à l'Université de Lille, je recherche une <strong>alternance de 24 mois</strong> pour apprendre le métier d'analyste sur le terrain et me rendre utile au sein d'une équipe.
                        </p>
                        
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wider">Le rythme de l'alternance :</h4>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span><strong>De septembre 2026 à janvier 2027 :</strong> Formation intensive à l'université (cours toute la semaine).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span>
                                    <span><strong>À partir de janvier 2027 :</strong> Rythme classique de 2 jours en entreprise et 3 jours à l'université.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Colonne Droite : Contact & Intérêts */}
                <div className="space-y-6 lg:col-span-1">
                    
                    {/* Widget Contact (Mode Sombre pour le contraste) */}
                    <div className="bg-slate-900 rounded-3xl p-8 shadow-sm text-white transition-all hover:shadow-lg hover:-translate-y-1">
                        <h2 className="text-2xl font-bold mb-8 tracking-tight">Me Contacter</h2>
                        
                        <div className="space-y-6">
                            <a href="mailto:matteo59.1008@gmail.com" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
                                <div className="bg-slate-800 p-3 rounded-2xl group-hover:bg-blue-900 transition-colors">
                                    <EnvelopeIcon className="w-6 h-6" />
                                </div>
                                <span className="font-medium text-sm break-all">matteo59.1008@gmail.com</span>
                            </a>
                            
                            <a href="tel:+33682464173" className="flex items-center gap-4 hover:text-blue-400 transition-colors group">
                                <div className="bg-slate-800 p-3 rounded-2xl group-hover:bg-blue-900 transition-colors">
                                    <PhoneIcon className="w-6 h-6" />
                                </div>
                                <span className="font-medium">06 82 46 41 73</span>
                            </a>
                            
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="bg-slate-800 p-3 rounded-2xl">
                                    <MapPinIcon className="w-6 h-6" />
                                </div>
                                <span className="font-medium">Lille, France</span>
                            </div>
                        </div>
                    </div>

                    {/* Widget Intérêts */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
                        <h2 className="text-xl font-bold mb-6 text-slate-900 tracking-tight">Centres d'intérêt</h2>
                        <div className="flex flex-wrap gap-2">
                            {['Veille Tech & Data', 'Mode', 'Jeux vidéo', 'Musique', 'Voyage', 'Volley-Ball'].map(interest => (
                                <span key={interest} className="bg-slate-50 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium">
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