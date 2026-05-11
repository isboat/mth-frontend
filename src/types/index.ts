// Token types
export interface Token {
  id: string
  name: string
  symbol: string
  description: string
  image: string
  chain: string
  contractAddress: string
  creatorId: string
  claimStatus: 'unclaimed' | 'claimed' | 'verified'
  trending: boolean
  featured: boolean
  launchDate: string
  category: string
  website?: string
  twitter?: string
  discord?: string
  analytics?: {
    holders: number
    marketCap: number
    volume24h: number
    price: number
  }
}

// User profile types
export interface UserProfile {
  id: string
  username: string
  email: string
  bio: string
  avatar: string
  walletAddress?: string
  role: 'user' | 'creator' | 'moderator'
  reputation: number
  followers: number
  following: number
  verified: boolean
  createdAt: string
  savedTokens: string[]
}

// Creator profile
export interface CreatorProfile extends UserProfile {
  role: 'creator'
  publishedTokens: Token[]
  audience: number
  engagementRate: number
}

// Claim types
export interface Claim {
  id: string
  tokenId: string
  userId: string
  status: 'pending' | 'approved' | 'rejected'
  proofAttachments: string[]
  socialProofUrl?: string
  submittedAt: string
  reviewedAt?: string
  reviewerNotes?: string
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// API Response
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Auth types
export interface AuthToken {
  accessToken: string
  refreshToken?: string
  expiresIn: number
  tokenType: string
}

export interface AuthExchangeRequest {
  privyToken: string
}

export interface AuthExchangeResponse {
  jwt: string
  user: UserProfile
  expiresIn: number
}

// Checkout types
export interface CheckoutItem {
  tokenId: string
  quantity: number
  price: number
}

export interface CheckoutSession {
  id: string
  items: CheckoutItem[]
  total: number
  status: 'pending' | 'completed' | 'failed'
  createdAt: string
}
