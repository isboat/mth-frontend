import { UserProfile } from './index'

export interface AuthContextType {
  user: UserProfile | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => void
  logout: () => void
  error: string | null
  jwtToken: string | null
}
