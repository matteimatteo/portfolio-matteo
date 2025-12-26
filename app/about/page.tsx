import { lusitana } from '@/app/ui/fonts';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="w-full animate-fade-in">
            <div className="flex w-full items-center justify-between mb-8">
                <h1 className={`${lusitana.className} text-3xl text-teal-800 font-bold`}>A propos de moi</h1>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Parcours Section */}
                <div className="rounded-xl bg-white p-6 shadow-sm border border-stone-100 transition-all hover:shadow-md hover:-translate-y-1">
                    <h2 className={`${lusitana.className} text-xl mb-4 text-teal-700`}>Mon Parcours</h2>
                    <p className="mb-4 text-stone-700 leading-relaxed">
                        Je suis <strong>Matteo Turpin-Hannequand</strong>, étudiant de 20 ans en 3ème année de BUT Informatique à l'IUT de Lens.
                    </p>
                    <p className="mb-4 text-stone-700 leading-relaxed">
                        Curieux, rigoureux et motivé, je souhaite me spécialiser dans le <strong>développement web</strong> afin de contribuer à la création d'applications et de sites internet innovants.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                        Dans la continuité de mon parcours, je suis à la recherche d'un stage de fin d'études à partir du <strong>16 mars 2026</strong> pour une durée de <strong>14 semaines</strong>.
                    </p>
                </div>

                {/* Interests & Contact Section (Stacked) */}
                <div className="space-y-6">
                    {/* Interests */}
                    <div className="rounded-xl bg-white p-6 shadow-sm border border-stone-100 transition-all hover:shadow-md hover:-translate-y-1">
                        <h2 className={`${lusitana.className} text-xl mb-4 text-teal-700`}>Mes Intérêts</h2>
                        <ul className="list-disc pl-5 space-y-2 text-stone-700">
                            <li>Informatique (Développement, Veille technologique)</li>
                            <li>Mode</li>
                            <li>Jeux vidéo</li>
                            <li>Musique</li>
                            <li>Voyage</li>
                            <li>Volley-Ball</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="rounded-xl bg-teal-50 p-6 border border-teal-100">
                        <h2 className={`${lusitana.className} text-xl mb-4 text-teal-800`}>Me Contacter</h2>
                        <div className="space-y-4">

                            <a href="mailto:matteo59.1008@gmail.com" className="flex items-center gap-3 text-teal-700 hover:text-teal-500 transition-colors">
                                <div className="bg-white p-2 rounded-full shadow-sm text-teal-600">
                                    <EnvelopeIcon className="w-5 h-5" />
                                </div>
                                <span className="font-medium">matteo59.1008@gmail.com</span>
                            </a>

                            <a href="tel:+33682464173" className="flex items-center gap-3 text-teal-700 hover:text-teal-500 transition-colors">
                                <div className="bg-white p-2 rounded-full shadow-sm text-teal-600">
                                    <PhoneIcon className="w-5 h-5" />
                                </div>
                                <span className="font-medium">06 82 46 41 73</span>
                            </a>

                            <div className="flex items-center gap-3 text-teal-700">
                                <div className="bg-white p-2 rounded-full shadow-sm text-teal-600">
                                    <MapPinIcon className="w-5 h-5" />
                                </div>
                                <span className="font-medium">Lille, France</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
