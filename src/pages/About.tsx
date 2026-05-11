export function About() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">About Meme Token Hub</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              Meme Token Hub is a community-first platform designed to unite token
              discovery, social interaction, profile management, and claim workflows.
              We believe in the power of meme culture and blockchain technology to
              create new forms of community and connection.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  Token Discovery
                </h3>
                <p className="text-slate-300">
                  Explore trending meme tokens, discover new launches, and find
                  emerging communities all in one place.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  Creator Connection
                </h3>
                <p className="text-slate-300">
                  Connect directly with token creators and the community, share
                  your vision, and build your audience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                  Community Trust
                </h3>
                <p className="text-slate-300">
                  Participate in claim workflows and social validation to build
                  trust within the meme token community.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Community-first design that puts users at the center</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Transparency and trust in all interactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Celebrating meme culture and creativity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Empowering creators and collectors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
