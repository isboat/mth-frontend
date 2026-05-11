import { useState } from 'react'
import { useTokens } from '@hooks/useTokens'
import { TokenGrid } from '@components/tokens/TokenGrid'
import { SearchBar } from '@components/common/SearchBar'
import { FilterBar } from '@components/common/FilterBar'

export function Discover() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<Record<string, string>>({})
  const { tokens, isLoading, pagination } = useTokens({
    page: currentPage,
    limit: 12,
    filters,
  })

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, search: query }))
    setCurrentPage(1)
  }

  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Discover Tokens</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Search and Filter Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <SearchBar onSearch={handleSearch} />
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Token Grid */}
          <div className="lg:col-span-3">
            <TokenGrid tokens={tokens} isLoading={isLoading} />

            {/* Pagination */}
            {pagination && pagination.total > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                >
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({
                    length: Math.min(5, Math.ceil(pagination.total / pagination.limit)),
                  }).map((_, i) => {
                    const page = i + 1
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-smooth ${
                          currentPage === page
                            ? 'bg-gradient-neon text-black font-semibold'
                            : 'bg-slate-800 hover:bg-slate-700'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={!pagination.hasMore}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
