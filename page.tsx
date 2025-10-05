import Link from 'next/link';

export default function Home() { 
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Explore Our Solar System
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
            An interactive journey through our cosmic neighborhood. Discover planets, moons, and other celestial wonders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/solar-system"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors"
            >
              Start Exploring
            </Link>
            <Link
              href="/planets"
              className="px-8 py-4 border-2 border- blue-500 hover:bg-blue-900/30 rounded-lg text-lg font-semibold transition-colors"
            >
              View All Planets
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
