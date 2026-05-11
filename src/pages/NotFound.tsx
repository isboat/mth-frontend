import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-slate-300 mb-8">
          Oops! Looks like this token doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-lg bg-gradient-neon text-black font-bold hover:shadow-lg transition-smooth"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
