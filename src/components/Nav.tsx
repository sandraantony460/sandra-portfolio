import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About' },
  { to: '/certification', label: 'Certification Programme' },
  { to: '/synthesia', label: 'Synthesia Transformation' },
  { to: '/ai-prototype', label: 'AI-Embedded Learning' },
  { to: '/mobile-apps', label: 'Course Development' },
  { to: '/sample-video', label: 'Sample Video' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-lg">Sandra Antony</span>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-2 flex-wrap">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm px-3 py-1 rounded transition-colors ${
                  isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden mt-3 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm px-3 py-2 rounded transition-colors ${
                  isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
