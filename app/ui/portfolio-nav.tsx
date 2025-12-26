'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HomeIcon, UserIcon, DocumentTextIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Projets', href: '/projects', icon: CommandLineIcon },
    { name: 'CV', href: '/cv', icon: DocumentTextIcon },
    { name: 'A propos', href: '/about', icon: UserIcon },
];

export default function PortfolioNav() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white border-r border-stone-100">
            <Link
                className="mb-6 flex h-32 items-end justify-start rounded-md bg-gradient-to-br from-teal-600 to-emerald-600 p-4 md:h-40 shadow-md transition-transform hover:scale-[1.02]"
                href="/"
            >
                <div className="w-full text-white">
                    <span className="text-3xl font-bold tracking-tighter">Matteo</span>
                    <span className="block text-sm font-light opacity-90">Portfolio</span>
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-4">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'group flex h-[48px] grow items-center justify-center gap-3 rounded-md p-3 text-sm font-medium transition-all duration-300 md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-teal-50 text-teal-700 shadow-sm': pathname === link.href,
                                    'text-stone-500 hover:bg-stone-50 hover:text-teal-600': pathname !== link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-5 md:w-6" />
                            <p className="hidden md:block group-hover:translate-x-1 transition-transform">{link.name}</p>
                        </Link>
                    );
                })}
                <div className="hidden h-auto w-full grow md:block"></div>
            </div>
        </div>
    );
}
