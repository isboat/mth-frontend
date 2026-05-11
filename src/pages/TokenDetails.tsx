import { useParams, Link } from 'react-router-dom'
import { useTokenById } from '@hooks/useTokens'

export function TokenDetails() {
  const { id } = useParams<{ id: string }>()
  const { token, isLoading, error } = useTokenById(id || '')

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 animate-pulse">
            <div className="h-96 bg-slate-800 rounded-lg mb-8"></div>
            <div className="space-y-4">
              <div className="h-8 bg-slate-800 rounded w-1/2"></div>
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !token) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error || 'Token not found'}</p>
          <Link to="/discover" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Discover
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/discover" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Discover
        </Link>

        <div className="glass-card p-8 mb-8">
          {/* Header with Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <img
                src={token.image}
                alt={token.name}
                className="w-full rounded-lg"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {token.name}
                  </h1>
                  <p className="text-2xl text-slate-400">{token.symbol}</p>
                </div>
                <button className="text-4xl text-slate-400 hover:text-yellow-400 transition-smooth">
                  ★
                </button>
              </div>

              <p className="text-slate-300 mb-6">{token.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Chain</p>
                  <p className="text-white font-semibold">{token.chain}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Status</p>
                  <p className={`font-semibold ${
                    token.claimStatus === 'unclaimed'
                      ? 'text-orange-400'
                      : token.claimStatus === 'verified'
                      ? 'text-green-400'
                      : 'text-slate-400'
                  }`}>
                    {token.claimStatus}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-4 py-3 rounded-lg bg-gradient-neon text-black font-bold hover:shadow-lg transition-smooth">
                  Submit Claim
                </button>
                <button className="flex-1 px-4 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-900 transition-smooth">
                  View on Chain
                </button>
              </div>
            </div>
          </div>

          {/* Token Analytics */}
          {token.analytics && (
            <div className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-6">Analytics</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Holders</p>
                  <p className="text-2xl font-bold text-white">
                    {(token.analytics.holders / 1000).toFixed(1)}K
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Market Cap</p>
                  <p className="text-2xl font-bold text-white">
                    ${(token.analytics.marketCap / 1000000).toFixed(2)}M
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Volume 24h</p>
                  <p className="text-2xl font-bold text-white">
                    ${(token.analytics.volume24h / 1000).toFixed(1)}K
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Price</p>
                  <p className="text-2xl font-bold text-white">
                    ${token.analytics.price.toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Links */}
          {(token.website || token.twitter || token.discord) && (
            <div className="border-t border-slate-700 pt-8 mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Links</h2>

              <div className="flex gap-4">
                {token.website && (
                  <a
                    href={token.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-smooth text-cyan-400"
                  >
                    <span>🌐</span> Website
                  </a>
                )}
                {token.twitter && (
                  <a
                    href={token.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-smooth text-cyan-400"
                  >
                    <span>𝕏</span> Twitter
                  </a>
                )}
                {token.discord && (
                  <a
                    href={token.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-smooth text-cyan-400"
                  >
                    <span>💬</span> Discord
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
