import { useAuth } from '@hooks/useAuth'
import { Link } from 'react-router-dom'

export function Profile() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-slate-300 mb-4">
            Please log in to view your profile
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
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="glass-card p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-neon flex items-center justify-center">
                <span className="text-4xl text-white">{user?.username.charAt(0).toUpperCase()}</span>
              </div>

              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  {user?.username}
                </h1>
                <p className="text-slate-400 mb-2">{user?.email}</p>
                <div className="flex gap-4">
                  <span className="text-slate-400">
                    {user?.followers} followers
                  </span>
                  <span className="text-slate-400">
                    {user?.following} following
                  </span>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-smooth">
              Edit Profile
            </button>
          </div>

          {/* Bio */}
          <div className="border-t border-slate-700 pt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Bio</h2>
            <p className="text-slate-300">
              {user?.bio || 'No bio yet. Add one to tell the community about yourself!'}
            </p>
          </div>

          {/* Verified Badge */}
          {user?.verified && (
            <div className="border-t border-slate-700 pt-8 mt-8">
              <div className="flex items-center gap-2 text-green-400">
                <span>✓</span>
                <span>Verified User</span>
              </div>
            </div>
          )}

          {/* Role */}
          <div className="border-t border-slate-700 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Role</h2>
            <p className="text-slate-300 capitalize">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
