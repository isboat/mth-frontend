import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-neon bg-clip-text text-transparent">
              Meme Token Hub
            </h3>
            <p className="text-slate-400 text-sm">
              Discover, connect, and collect meme tokens in one community-first platform.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/discover" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Discover Tokens
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Trending
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Creators
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-smooth text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center">
            © {currentYear} Meme Token Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
