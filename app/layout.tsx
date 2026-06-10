import '@/app/ui/global.css';
import { inter, spaceGrotesk, jetBrainsMono } from '@/app/ui/fonts';
import PortfolioNav from '@/app/ui/portfolio-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans bg-slate-950 text-slate-300 antialiased relative min-h-screen overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-100`}>
        {/* Décors techniques d'arrière-plan Data Center */}
        <div className="fixed inset-0 data-grid-pattern pointer-events-none -z-20 bg-slate-950" />
        <div className="glow-orb glow-orb-blue -top-[200px] -left-[200px]" />
        <div className="glow-orb glow-orb-orange -bottom-[200px] -right-[200px]" />
        
        <div className="flex min-h-screen flex-col relative z-10">
          {/* Top Navigation Bar */}
          <PortfolioNav />
          
          {/* Main Content (avec un padding-top pour compenser la nav fixe) */}
          <div className="flex-grow pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}