import { useState, useEffect } from 'react'
import { Token, PaginatedResponse } from '@types/index'
import { apiClient } from '@services/api'

interface UseTokensOptions {
  page?: number
  limit?: number
  filters?: Record<string, any>
}

export function useTokens(options: UseTokensOptions = {}) {
  const { page = 1, limit = 10, filters = {} } = options
  const [tokens, setTokens] = useState<Token[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState<Omit<PaginatedResponse<Token>, 'data'> | null>(null)

  useEffect(() => {
    const fetchTokens = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await apiClient.getTokens(page, limit, filters)
        setTokens(result.data)
        setPagination({
          total: result.total,
          page: result.page,
          limit: result.limit,
          hasMore: result.hasMore,
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tokens')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTokens()
  }, [page, limit, JSON.stringify(filters)])

  return { tokens, isLoading, error, pagination }
}

export function useTrendingTokens(limit: number = 6) {
  const [tokens, setTokens] = useState<Token[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrendingTokens = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await apiClient.getTrendingTokens(limit)
        setTokens(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch trending tokens')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrendingTokens()
  }, [limit])

  return { tokens, isLoading, error }
}

export function useTokenById(id: string) {
  const [token, setToken] = useState<Token | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchToken = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await apiClient.getTokenById(id)
        setToken(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch token')
      } finally {
        setIsLoading(false)
      }
    }

    fetchToken()
  }, [id])

  return { token, isLoading, error }
}
