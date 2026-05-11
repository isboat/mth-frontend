import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivyProvider } from '@privy-io/react-auth'
import { AuthProvider } from '@/contexts/AuthContext'
import { Header } from '@components/layout/Header'
import { Footer } from '@components/layout/Footer'
import { Home } from '@pages/Home'
import { Discover } from '@pages/Discover'
import { TokenDetails } from '@pages/TokenDetails'
import { Dashboard } from '@pages/Dashboard'
import { Profile } from '@pages/Profile'
import { Login } from '@pages/Login'
import { About } from '@pages/About'
import { NotFound } from '@pages/NotFound'

const privyAppId = import.meta.env.VITE_PRIVY_APP_ID || ''

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/token/:id" element={<TokenDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <PrivyProvider appId={privyAppId}>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </PrivyProvider>
  )
}

export default App
