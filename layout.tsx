import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NASA Solar System Explorer',
  description: 'An interactive exploration of our solar system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <nav className="bg-black/80 backdrop-blur-sm fixed w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cosmic Explorer
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/solar-system" className="hover:text-blue-400 transition-colors">Solar System</Link>
              <Link href="/planets" className="hover:text-blue-400 transition-colors">Planets</Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
