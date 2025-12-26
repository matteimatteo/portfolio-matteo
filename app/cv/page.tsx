import { lusitana } from '@/app/ui/fonts';
import { ArrowDownTrayIcon, BriefcaseIcon, AcademicCapIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in">
            <div className="flex w-full items-center justify-between mb-8">
                <h1 className={`${lusitana.className} text-3xl text-teal-800 font-bold`}>Mon CV</h1>
                <a
                    href="/cv-original.png"
                    download="CV-Matteo-Turpin-Hannequand.png"
                    className="flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-teal-500 hover:shadow-lg hover:-translate-y-0.5"
                >
                    <ArrowDownTrayIcon className="w-5" />
                    <span>Télécharger</span>
                </a>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                <div className="lg:col-span-2 space-y-8">

                    <section>
                        <h2 className={`${lusitana.className} flex items-center gap-2 text-2xl mb-6 text-teal-700`}>
                            <BriefcaseIcon className="w-6 h-6" /> Expériences
                        </h2>

                        <div className="space-y-6">
                            <div className="group rounded-xl bg-white p-6 shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-stone-800 group-hover:text-teal-700 transition-colors">Stage Kappa Data France</h3>
                                    <span className="text-xs font-semibold bg-teal-50 text-teal-700 px-2 py-1 rounded-full">2025</span>
                                </div>
                                <p className="text-stone-500 text-sm mb-3">EuraTechnologies</p>
                                <p className="text-stone-700 leading-relaxed">
                                    Développement d'une authentification <strong>2FA en PHP</strong> pour une application web interne.
                                    Mise en œuvre de solutions dans un contexte de cybersécurité et de réseau.
                                </p>
                            </div>

                            <div className="group rounded-xl bg-white p-6 shadow-sm border border-stone-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg text-stone-800 group-hover:text-teal-700 transition-colors">Travail d'été - EHPAD</h3>
                                    <span className="text-xs font-semibold bg-stone-100 text-stone-600 px-2 py-1 rounded-full">2024</span>
                                </div>
                                <p className="text-stone-500 text-sm mb-3">Loos-lez-Lille</p>
                                <p className="text-stone-700 leading-relaxed">
                                    Installation et aide aux repas pour les résidents, travail en équipe avec le personnel de cuisine et le personnel soignant.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className={`${lusitana.className} flex items-center gap-2 text-2xl mb-6 text-teal-700`}>
                            <CpuChipIcon className="w-6 h-6" /> Projets
                        </h2>
                        <div className="rounded-xl bg-white p-6 shadow-sm border border-stone-100 transition-all hover:shadow-md">
                            <ul className="space-y-4">
                                <li className="pb-4 border-b border-stone-100">
                                    <span className="font-bold text-stone-800">SpeedLoc (2025)</span>
                                    <p className="text-sm text-stone-600 mt-1">Plateforme de location de voitures. (React, Node.js, SQL).</p>
                                </li>
                                <li className="pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                                    <span className="font-bold text-stone-800">Webdesign "Olympass" (2024)</span>
                                    <p className="text-sm text-stone-600 mt-1">Réalisation d'un projet de groupe complet.</p>
                                </li>
                                <li>
                                    <span className="font-bold text-stone-800">Marathon du web (2024)</span>
                                    <p className="text-sm text-stone-600 mt-1">Hackathon de 24h. Création d'un projet full-stack (PHP, SQL, Laravel, CSS, GIT) en équipe de 8.</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                </div>

                <div className="space-y-8">

                    <section className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 transition-all hover:shadow-md">
                        <h2 className={`${lusitana.className} text-xl mb-4 text-teal-800 border-b border-stone-100 pb-2`}>Compétences</h2>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Front-end</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['HTML/CSS', 'React', 'Next.js', 'Tailwind'].map(skill => (
                                        <span key={skill} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Back-end</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['PHP', 'Laravel', 'Symfony', 'Spring Boot', 'Java', 'Python'].map(skill => (
                                        <span key={skill} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-100 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Base de données</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['SQL', 'PostgreSQL'].map(skill => (
                                        <span key={skill} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 transition-all hover:shadow-md">
                        <h2 className={`${lusitana.className} flex items-center gap-2 text-xl mb-4 text-teal-800 border-b border-stone-100 pb-2`}>
                            <AcademicCapIcon className="w-5 h-5" /> Education
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-stone-800 text-sm">BUT INFORMATIQUE</h3>
                                <p className="text-stone-600 text-xs">IUT de Lens • 2023 - 2025</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-stone-800 text-sm">Baccalauréat Général</h3>
                                <p className="text-stone-600 text-xs">Mention Bien • 2023</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-stone-800 text-sm">Certification PIX</h3>
                                <p className="text-stone-600 text-xs">2022</p>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </main>
    );
}
