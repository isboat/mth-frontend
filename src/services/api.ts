import { ApiResponse, Token, UserProfile, Claim, PaginatedResponse, AuthExchangeResponse } from '@types/index'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

class ApiClient {
  private jwtToken: string | null = null

  setJwtToken(token: string | null) {
    this.jwtToken = token
  }

  private async fetchWithAuth<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.jwtToken) {
      headers['Authorization'] = `Bearer ${this.jwtToken}`
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'API request failed')
    }

    return response.json()
  }

  // Auth endpoints
  async exchangePrivyToken(privyToken: string): Promise<AuthExchangeResponse> {
    const response = await this.fetchWithAuth<ApiResponse<AuthExchangeResponse>>(
      '/users/auth/exchange',
      {
        method: 'POST',
        body: JSON.stringify({ privyToken }),
      }
    )
    return response.data!
  }

  // Token endpoints
  async getTokens(
    page: number = 1,
    limit: number = 10,
    filters?: Record<string, any>
  ): Promise<PaginatedResponse<Token>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...filters,
    })
    return this.fetchWithAuth<PaginatedResponse<Token>>(
      `/tokens?${params.toString()}`
    )
  }

  async getTrendingTokens(limit: number = 6): Promise<Token[]> {
    const response = await this.fetchWithAuth<ApiResponse<Token[]>>(
      `/tokens/trending?limit=${limit}`
    )
    return response.data || []
  }

  async getTokenById(id: string): Promise<Token> {
    const response = await this.fetchWithAuth<ApiResponse<Token>>(
      `/tokens/${id}`
    )
    return response.data!
  }

  async searchTokens(query: string): Promise<Token[]> {
    const response = await this.fetchWithAuth<ApiResponse<Token[]>>(
      `/tokens/search?q=${encodeURIComponent(query)}`
    )
    return response.data || []
  }

  // User endpoints
  async getCurrentUser(): Promise<UserProfile> {
    const response = await this.fetchWithAuth<ApiResponse<UserProfile>>(
      '/users/me'
    )
    return response.data!
  }

  async getUserProfile(id: string): Promise<UserProfile> {
    const response = await this.fetchWithAuth<ApiResponse<UserProfile>>(
      `/users/${id}`
    )
    return response.data!
  }

  async updateUserProfile(
    updates: Partial<UserProfile>
  ): Promise<UserProfile> {
    const response = await this.fetchWithAuth<ApiResponse<UserProfile>>(
      '/users/me',
      {
        method: 'PATCH',
        body: JSON.stringify(updates),
      }
    )
    return response.data!
  }

  async saveToken(tokenId: string): Promise<void> {
    await this.fetchWithAuth('/users/me/saved-tokens', {
      method: 'POST',
      body: JSON.stringify({ tokenId }),
    })
  }

  async removeSavedToken(tokenId: string): Promise<void> {
    await this.fetchWithAuth(`/users/me/saved-tokens/${tokenId}`, {
      method: 'DELETE',
    })
  }

  async getSavedTokens(): Promise<Token[]> {
    const response = await this.fetchWithAuth<ApiResponse<Token[]>>(
      '/users/me/saved-tokens'
    )
    return response.data || []
  }

  // Claim endpoints
  async submitClaim(tokenId: string, data: Partial<Claim>): Promise<Claim> {
    const response = await this.fetchWithAuth<ApiResponse<Claim>>(
      `/claims`,
      {
        method: 'POST',
        body: JSON.stringify({ tokenId, ...data }),
      }
    )
    return response.data!
  }

  async getUserClaims(): Promise<Claim[]> {
    const response = await this.fetchWithAuth<ApiResponse<Claim[]>>(
      '/users/me/claims'
    )
    return response.data || []
  }

  async getPendingClaims(limit: number = 20): Promise<PaginatedResponse<Claim>> {
    return this.fetchWithAuth<PaginatedResponse<Claim>>(
      `/claims/pending?limit=${limit}`
    )
  }

  async approveClaim(claimId: string, notes?: string): Promise<Claim> {
    const response = await this.fetchWithAuth<ApiResponse<Claim>>(
      `/claims/${claimId}/approve`,
      {
        method: 'POST',
        body: JSON.stringify({ reviewerNotes: notes }),
      }
    )
    return response.data!
  }

  async rejectClaim(claimId: string, reason: string): Promise<Claim> {
    const response = await this.fetchWithAuth<ApiResponse<Claim>>(
      `/claims/${claimId}/reject`,
      {
        method: 'POST',
        body: JSON.stringify({ reviewerNotes: reason }),
      }
    )
    return response.data!
  }
}

export const apiClient = new ApiClient()
