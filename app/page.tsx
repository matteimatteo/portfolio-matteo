import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 p-4 md:h-52 shadow-md">
        <h1 className={`${lusitana.className} text-4xl text-white font-bold`}>
          Portfolio
        </h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-stone-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-stone-800 md:text-3xl md:leading-normal`}>
            <strong>Bonjour, je m'appelle Matteo.</strong>
          </p>
          <p className="text-stone-700">
            Je suis étudiant en informatique en 3ème année (BUT Informatique).
            Actuellement à la recherche d'un <strong>stage de 14 semaines</strong> à partir du <strong>16 mars 2026</strong>.
          </p>
          <p className="text-stone-700">
            Passionné par le développement web (Laravel, Symfony, React/Next.js).
          </p>
          <div className="flex gap-4">
            <Link
              href="/cv"
              className="flex items-center gap-5 self-start rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-500 md:text-base"
            >
              <span>Mon CV</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-5 self-start rounded-lg bg-stone-200 px-6 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300 md:text-base"
            >
              <span>A propos</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className="overflow-hidden rounded-lg shadow-xl max-w-md">
            <Image
              src="/cv-original.png"
              width={500}
              height={700}
              className="hidden md:block w-full h-auto object-cover"
              alt="CV de Matteo Turpin-Hannequand"
            />
            <Image
              src="/cv-original.png"
              width={300}
              height={400}
              className="block md:hidden w-full h-auto object-cover"
              alt="CV de Matteo Turpin-Hannequand"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
