import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePrivy } from '@privy-io/react-auth'
import { apiClient } from '@services/api'

export function Login() {
  const navigate = useNavigate()
  const { login: privyLogin, user: privyUser, authenticated } = usePrivy()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Handle Privy login with token exchange
  const handlePrivyLogin = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Open Privy login modal
      await privyLogin()
      
      // After successful Privy login, exchange token with backend
      if (privyUser && privyUser.id) {
        const response = await apiClient.exchangePrivyToken(privyUser.id)
        localStorage.setItem('mth_jwt_token', response.jwt)
        apiClient.setJwtToken(response.jwt)
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  // Handle email/password login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      setError(null)
      
      // TODO: Implement email/password authentication endpoint
      // For now, show a placeholder message
      setError('Email/password login coming soon. Use Privy for now.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md glass-card p-8">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-slate-400 text-center mb-8">
          Sign in to your Meme Token Hub account
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Privy Auth */}
          <button
            onClick={handlePrivyLogin}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-lg bg-gradient-neon text-black font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
          >
            {isLoading ? 'Signing in...' : 'Sign in with Privy'}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-950 text-slate-400">or</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 disabled:opacity-50 transition-smooth"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 disabled:opacity-50 transition-smooth"
            />

            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
