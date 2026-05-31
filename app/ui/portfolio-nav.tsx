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
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    
                    {/* Typo Logo Minimaliste */}
                    <Link href="/" className="flex-shrink-0 font-extrabold text-xl tracking-tight text-slate-900 hover:opacity-70 transition-opacity">
                        MT<span className="text-blue-600">.</span>
                    </Link>
                    
                    {/* Menu Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                                        {
                                            'bg-slate-900 text-white shadow-sm': pathname === link.href,
                                            'text-slate-500 hover:text-slate-900 hover:bg-slate-100': pathname !== link.href,
                                        },
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Menu Mobile (Scroll horizontal caché) */}
                    <div className="md:hidden flex overflow-x-auto space-x-2 py-2 hide-scrollbar">
                         {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        'px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300',
                                        {
                                            'bg-slate-900 text-white shadow-sm': pathname === link.href,
                                            'text-slate-500 hover:text-slate-900 hover:bg-slate-100': pathname !== link.href,
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