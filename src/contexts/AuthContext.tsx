import React, { createContext, useState, useEffect, useCallback } from 'react'
import { UserProfile } from '@types/index'
import { AuthContextType } from '@types/auth'
import { apiClient } from '@services/api'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [jwtToken, setJwtToken] = useState<string | null>(() => {
    return localStorage.getItem('mth_jwt_token')
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      if (jwtToken) {
        apiClient.setJwtToken(jwtToken)
        try {
          const currentUser = await apiClient.getCurrentUser()
          setUser(currentUser)
        } catch (err) {
          localStorage.removeItem('mth_jwt_token')
          setJwtToken(null)
          setError(err instanceof Error ? err.message : 'Failed to initialize auth')
        }
      }
      setIsLoading(false)
    }

    initializeAuth()
  }, [jwtToken])

  const login = useCallback(async () => {
    // This would typically be called after Privy authentication
    // For now, this is a placeholder that would exchange Privy token
    console.log('Login initiated - to be implemented with Privy')
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('mth_jwt_token')
    setJwtToken(null)
    setUser(null)
    apiClient.setJwtToken(null)
  }, [])

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    error,
    jwtToken,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
