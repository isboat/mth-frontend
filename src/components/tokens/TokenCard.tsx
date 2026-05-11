import { Link } from 'react-router-dom'
import { Token } from '@types/index'

interface TokenCardProps {
  token: Token
  onSave?: (tokenId: string) => void
  isSaved?: boolean
}

export function TokenCard({ token, onSave, isSaved = false }: TokenCardProps) {
  return (
    <Link
      to={`/token/${token.id}`}
      className="glass-card p-4 hover:shadow-lg transition-smooth group cursor-pointer"
    >
      <div className="relative mb-4">
        <img
          src={token.image}
          alt={token.name}
          className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-smooth"
        />
        {token.featured && (
          <span className="absolute top-2 right-2 bg-gradient-neon text-black px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </span>
        )}
        {token.trending && (
          <span className="absolute top-2 left-2 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold">
            Trending
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-bold text-white group-hover:text-cyan-400 transition-smooth">
              {token.name}
            </h3>
            <button
              onClick={(e) => {
                e.preventDefault()
                onSave?.(token.id)
              }}
              className={`text-lg transition-smooth ${
                isSaved ? 'text-yellow-400' : 'text-slate-500 hover:text-white'
              }`}
            >
              ★
            </button>
          </div>
          <p className="text-slate-400 text-sm">{token.symbol}</p>
        </div>

        <p className="text-slate-300 text-sm line-clamp-2">{token.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="bg-slate-800/50 text-slate-300 px-2 py-1 rounded text-xs">
            {token.chain}
          </span>
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            token.claimStatus === 'unclaimed'
              ? 'bg-orange-500/20 text-orange-400'
              : token.claimStatus === 'verified'
              ? 'bg-green-500/20 text-green-400'
              : 'bg-slate-800/50 text-slate-400'
          }`}>
            {token.claimStatus}
          </span>
        </div>

        {token.analytics && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700">
            <div>
              <p className="text-slate-400 text-xs">Holders</p>
              <p className="text-white font-semibold text-sm">
                {(token.analytics.holders / 1000).toFixed(1)}K
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-xs">Price</p>
              <p className="text-white font-semibold text-sm">
                ${token.analytics.price.toFixed(4)}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
