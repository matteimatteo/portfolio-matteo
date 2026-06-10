'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Analyses & Projets', href: '/projects' },
    { name: 'Profil & CV', href: '/cv' },
    { name: 'À propos', href: '/about' },
];

export default function PortfolioNav() {
    const pathname = usePathname();
    
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-[0_12px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Typo Logo Minimaliste avec Pulse de flux de données */}
                    <Link href="/" className="flex-shrink-0 font-extrabold text-xl tracking-tight text-slate-100 hover:text-white transition-colors flex items-center gap-0.5 group">
                        <span>MT</span>
                        <span className="text-blue-500 relative inline-flex">
                            .
                            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping group-hover:bg-orange-400 transition-colors duration-300"></span>
                            <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-orange-500 transition-colors duration-300"></span>
                        </span>
                    </Link>
                    
                    {/* Menu Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 tracking-wide flex items-center gap-2 uppercase text-[0.75rem]',
                                        {
                                            'bg-slate-800 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]': pathname === link.href,
                                            'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent': pathname !== link.href,
                                        },
                                    )}
                                >
                                    {pathname === link.href && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                    )}
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Menu Mobile (Scroll horizontal caché) */}
                    <div className="md:hidden flex overflow-x-auto space-x-2 py-2 hide-scrollbar max-w-[70%]">
                         {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        'px-3 py-1.5 rounded-lg text-[0.65rem] font-bold whitespace-nowrap transition-all duration-300 uppercase tracking-wider border',
                                        {
                                            'bg-slate-800 text-blue-400 border-blue-500/30': pathname === link.href,
                                            'text-slate-400 border-transparent hover:text-slate-200': pathname !== link.href,
                                        },
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}