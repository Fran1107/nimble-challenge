import type { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
    <nav className="sticky top-0 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Nimble Gravity Challenge
        </span>
      </div>
    </nav>
    <main className="max-w-5xl mx-auto px-6 py-12">
      {children}
    </main>
  </div>
)
