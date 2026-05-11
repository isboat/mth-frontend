import { Token } from '@types/index'
import { TokenCard } from './TokenCard'

interface TokenGridProps {
  tokens: Token[]
  isLoading?: boolean
  onSaveToken?: (tokenId: string) => void
  savedTokenIds?: string[]
}

export function TokenGrid({
  tokens,
  isLoading = false,
  onSaveToken,
  savedTokenIds = [],
}: TokenGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="glass-card p-4 animate-pulse"
          >
            <div className="w-full h-40 bg-slate-800 rounded-lg mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-3 bg-slate-800 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (tokens.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 text-lg">No tokens found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tokens.map((token) => (
        <TokenCard
          key={token.id}
          token={token}
          onSave={onSaveToken}
          isSaved={savedTokenIds.includes(token.id)}
        />
      ))}
    </div>
  )
}
