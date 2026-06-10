import Image from 'next/image';
import { ArrowRightIcon, CircleStackIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex flex-col p-4 md:p-0 animate-fade-in font-sans">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        
        {/* Widget Principal : Présentation (Terminal / Main Dashboard) */}
        <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group border border-slate-700/50 shadow-2xl">
          {/* En-tête décoratif façon LED de serveur */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-500 opacity-80" />
          <div className="absolute right-6 top-6 font-mono text-[10px] text-slate-500 select-none opacity-50 hidden sm:block">
            {'>'} SELECT * FROM sys.matteo_profile WHERE status = 'OPEN_FOR_ALTERNANCE';
          </div>
          
          <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Mattéo Turpin-Hannequand
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="bg-slate-800 text-blue-400 px-3 py-1.5 rounded-lg text-sm font-bold border border-blue-500/30 flex items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.2)] uppercase tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  Futur Data Analyst
                </span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="bg-slate-800 text-orange-400 px-3 py-1.5 rounded-lg text-sm font-bold border border-orange-500/30 flex items-center gap-2 shadow-[0_0_10px_rgba(249,115,22,0.2)] uppercase tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                  Master SIAD
                </span>
              </h2>
            </div>
            
            {/* Cadre Photo */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border-2 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] shrink-0 group hover:border-blue-400 transition-colors bg-slate-800 flex items-center justify-center">
               <Image src="/photo_profil.png" alt="Photo de profil" fill className="object-cover" />
            </div>
          </div>
          
          {/* Nouveau texte plus humain et naturel - Conservé tel quel */}
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl font-light">
            J&apos;attache une grande importance à la structuration de l&apos;information. Au fil de mon parcours en informatique, j&apos;ai réalisé que ma vraie motivation n&apos;était pas seulement de développer la partie front-end des projets (applications web, tableaux de bord interactifs, plateformes de gestion), mais surtout de comprendre et manipuler les bases de données qui les font tourner.            
            <br/><br/>
            Aujourd&apos;hui, j&apos;intègre le <strong className="text-white font-semibold">Master SIAD</strong> pour devenir Data Analyst. Je cherche une <strong className="text-white font-semibold">alternance de 24 mois</strong> pour plonger dans le concret et me rendre utile sur vos vrais enjeux.
          </p>
          
          <div className="flex flex-wrap gap-5 relative z-10 mt-6">
            {/* Bouton Principal - Style Commande SQL Premium Bleu */}
            <Link
              href="/cv"
              className="relative group inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-white transition-all duration-500 rounded-2xl bg-slate-900 shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] hover:-translate-y-1"
            >
              {/* Bordure en dégradé continue */}
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-slate-950 rounded-[14px]"></div>
              </div>
              {/* Orbe lumineuse interne au survol */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-blue-500/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <span className="relative flex items-center gap-3 tracking-widest uppercase text-sm">
                <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-transform"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 font-extrabold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Profil</span>
                <ArrowRightIcon className="w-5 h-5 text-blue-400 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>

            {/* Bouton Secondaire - Style Commande SQL Premium Orange */}
            <Link
              href="/projects"
              className="relative group inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-white transition-all duration-500 rounded-2xl bg-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:-translate-y-1"
            >
              {/* Bordure en dégradé continue */}
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-slate-950 rounded-[14px]"></div>
              </div>
              {/* Orbe lumineuse interne au survol */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-orange-500/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <span className="relative flex items-center gap-3 tracking-widest uppercase text-sm">
                <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] group-hover:scale-110 transition-transform"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 font-extrabold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">Analyses & Projets</span>
                <ArrowRightIcon className="w-5 h-5 text-orange-400 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
 
        {/* Widget Secondaire : Stack Technique Façon LED Server */}
        <div className="flex flex-col gap-6">
          
          {/* Carte Architecture */}
          <div className="glass-card rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-slate-700/50">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <div className="absolute right-4 top-4 font-mono text-[9px] text-slate-500 select-none opacity-40">
              SYS.ARCH
            </div>
            
            <div className="w-16 h-16 bg-slate-800/80 text-blue-400 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <CircleStackIcon className="w-8 h-8" />
            </div>
            
            <h3 className="text-white font-extrabold text-lg mb-4 tracking-tight">Architecture</h3>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-[260px]">
              {['SQL', 'PostgreSQL', 'MongoDB', 'Neo4j'].map((t) => (
                <span key={t} className="db-tag db-tag-blue">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Carte Analyse */}
          <div className="glass-card glass-card-orange rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-slate-700/50">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-orange-500/80 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            <div className="absolute right-4 top-4 font-mono text-[9px] text-slate-500 select-none opacity-40">
              SYS.ANALYTICS
            </div>
            
            <div className="w-16 h-16 bg-slate-800/80 text-orange-400 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <ChartBarIcon className="w-8 h-8" />
            </div>
            
            <h3 className="text-white font-extrabold text-lg mb-4 tracking-tight">Analyse</h3>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-[260px]">
              {['Python', 'Excel/Calc', 'Modélisation'].map((t) => (
                <span key={t} className="db-tag db-tag-orange">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
 
      </div>
    </main>
  );
}