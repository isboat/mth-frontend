import { Link } from 'react-router-dom'
import { useTrendingTokens } from '@hooks/useTokens'
import { TokenGrid } from '@components/tokens/TokenGrid'

export function Home() {
  const { tokens: trendingTokens, isLoading } = useTrendingTokens(6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-purple-900/20 via-slate-950 to-slate-950"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-neon bg-clip-text text-transparent">
                  Discover Meme Tokens
                </span>
                <br />
                Like Never Before
              </h1>

              <p className="text-lg text-slate-300 max-w-lg">
                Explore trending meme tokens, connect with creators, and build your
                portfolio in the most community-focused hub.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/discover"
                  className="px-8 py-3 rounded-lg bg-gradient-neon text-black font-bold hover:shadow-lg transition-smooth text-center"
                >
                  Start Exploring
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-900 transition-smooth text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-3xl opacity-20"></div>
                <div className="absolute inset-0 glass-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-slate-300">Token Discovery Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tokens Section */}
      <section className="py-16 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trending Now
            </h2>
            <Link
              to="/discover?sort=trending"
              className="text-cyan-400 hover:text-cyan-300 transition-smooth"
            >
              View all →
            </Link>
          </div>

          <TokenGrid tokens={trendingTokens} isLoading={isLoading} />
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="glass-card p-6 group cursor-pointer">
                <div className="mb-4 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-105 transition-smooth"></div>
                <h3 className="text-xl font-bold text-white mb-2">Collection {i + 1}</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Explore a curated selection of trending meme tokens
                </p>
                <span className="text-cyan-400 text-sm font-semibold">
                  12 tokens →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <p className="text-slate-300">Tokens Listed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <p className="text-slate-300">Community Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <p className="text-slate-300">Creators</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Join the Community
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Start discovering, collecting, and creating meme tokens today
              </p>
              <Link
                to="/login"
                className="inline-block px-8 py-3 rounded-lg bg-gradient-neon text-black font-bold hover:shadow-lg transition-smooth"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
