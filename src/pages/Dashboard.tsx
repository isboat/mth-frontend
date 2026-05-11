import { useAuth } from '@hooks/useAuth'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-slate-300 mb-4">
            Please log in to access your dashboard
          </p>
          <Link
            to="/login"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-neon text-black font-bold hover:shadow-lg transition-smooth"
          >
            Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome, {user?.username}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Stats */}
          <div className="glass-card p-6">
            <p className="text-slate-400 text-sm mb-2">Saved Tokens</p>
            <p className="text-3xl font-bold text-white">
              {user?.savedTokens.length || 0}
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-slate-400 text-sm mb-2">Followers</p>
            <p className="text-3xl font-bold text-white">
              {user?.followers || 0}
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-slate-400 text-sm mb-2">Following</p>
            <p className="text-3xl font-bold text-white">
              {user?.following || 0}
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="text-slate-400 text-sm mb-2">Reputation</p>
            <p className="text-3xl font-bold text-white">
              {user?.reputation || 0}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Saved Tokens */}
          <div className="lg:col-span-2 glass-card p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Saved Tokens</h2>
            {user?.savedTokens.length === 0 ? (
              <p className="text-slate-400">
                No saved tokens yet.{' '}
                <Link to="/discover" className="text-cyan-400 hover:text-cyan-300">
                  Start exploring
                </Link>
              </p>
            ) : (
              <div className="space-y-4">
                {/* Placeholder for saved tokens list */}
                <p className="text-slate-400">Your saved tokens will appear here</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/discover"
                className="block w-full px-4 py-2 rounded-lg bg-gradient-neon text-black font-semibold text-center hover:shadow-lg transition-smooth"
              >
                Explore Tokens
              </Link>
              <button className="w-full px-4 py-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-smooth">
                Submit Claim
              </button>
              <Link
                to="/profile"
                className="block w-full px-4 py-2 rounded-lg border border-slate-700 text-white text-center hover:bg-slate-800 transition-smooth"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
