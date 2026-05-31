import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import PortfolioNav from '@/app/ui/portfolio-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          {/* Top Navigation Bar */}
          <PortfolioNav />
          
          {/* Main Content (avec un padding-top pour compenser la nav fixe) */}
          <div className="flex-grow pt-28 px-4 md:px-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}