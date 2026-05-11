interface FilterBarProps {
  filters: Record<string, string>
  onFilterChange: (filters: Record<string, string>) => void
}

const CHAIN_OPTIONS = ['ethereum', 'polygon', 'binance', 'solana', 'arbitrum']
const CLAIM_STATUS_OPTIONS = ['unclaimed', 'claimed', 'verified']
const CATEGORY_OPTIONS = ['meme', 'defi', 'gaming', 'nft', 'other']

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value === 'all' ? '' : value,
    })
  }

  return (
    <div className="glass-card p-4 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Chain
        </label>
        <select
          value={filters.chain || 'all'}
          onChange={(e) => handleFilterChange('chain', e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-smooth"
        >
          <option value="all">All Chains</option>
          {CHAIN_OPTIONS.map((chain) => (
            <option key={chain} value={chain}>
              {chain.charAt(0).toUpperCase() + chain.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Claim Status
        </label>
        <select
          value={filters.claimStatus || 'all'}
          onChange={(e) => handleFilterChange('claimStatus', e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-smooth"
        >
          <option value="all">All Status</option>
          {CLAIM_STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white mb-2">
          Category
        </label>
        <select
          value={filters.category || 'all'}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:border-cyan-500 transition-smooth"
        >
          <option value="all">All Categories</option>
          {CATEGORY_OPTIONS.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => onFilterChange({})}
        className="w-full px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-smooth"
      >
        Clear Filters
      </button>
    </div>
  )
}
