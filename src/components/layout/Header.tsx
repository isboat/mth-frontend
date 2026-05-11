import { Link } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

export function Header() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Meme Token Hub
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/discover" className="text-slate-300 hover:text-white transition-smooth">
              Discover
            </Link>
            <Link to="/creators" className="text-slate-300 hover:text-white transition-smooth">
              Creators
            </Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition-smooth">
              About
            </Link>
          </nav>

          {/* Auth Button */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-slate-300 hover:text-white transition-smooth">
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition-smooth"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-neon"></div>
                  <span className="text-sm">{user?.username}</span>
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-smooth text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg hover:bg-slate-800 transition-smooth text-sm"
                >
                  Login
                </Link>
                <button className="px-4 py-2 rounded-lg bg-gradient-neon text-black font-semibold hover:shadow-lg transition-smooth text-sm">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
