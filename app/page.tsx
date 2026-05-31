import { ArrowRightIcon, CircleStackIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 p-4 md:p-8 animate-fade-in font-sans">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        
        {/* Widget Principal : Présentation */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-center transition-all hover:shadow-md">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Mattéo Turpin-Hannequand
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-500 mb-6 flex items-center gap-3">
            Futur Data Analyst <span className="text-slate-300">|</span> Master SIAD
          </h2>
          
          {/* Nouveau texte plus humain et naturel */}
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
            J'aime quand les choses sont claires et bien organisées. Au fil de mon parcours en informatique, j'ai réalisé que ma vraie motivation n'était pas seulement de développer des interfaces, mais surtout de comprendre et manipuler les bases de données qui les font tourner.
            <br/><br/>
            Aujourd'hui, j'intègre le <strong>Master SIAD</strong> pour devenir Data Analyst. Je cherche une <strong>alternance de 24 mois</strong> pour plonger dans le concret et me rendre utile sur vos vrais enjeux.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cv"
              className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all hover:scale-105"
            >
              Voir mon profil <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-3 bg-slate-100 text-slate-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all"
            >
              Mes analyses
            </Link>
          </div>
        </div>

        {/* Widget Secondaire : Stack Technique Façon Apple Health */}
        <div className="flex flex-col gap-6">
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center items-center text-center transition-all hover:shadow-md">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <CircleStackIcon className="w-8 h-8" />
            </div>
            <h3 className="text-slate-900 font-bold text-lg mb-1">Architecture</h3>
            <p className="text-slate-500 text-sm">SQL, PostgreSQL, MongoDB, Neo4j</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center items-center text-center transition-all hover:shadow-md">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
              <ChartBarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-slate-900 font-bold text-lg mb-1">Analyse</h3>
            <p className="text-slate-500 text-sm">Python, Excel/Calc, Modélisation</p>
          </div>

        </div>

      </div>
    </main>
  );
}