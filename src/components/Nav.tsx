import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'About' },
  { to: '/certification', label: 'Certification Programme' },
  { to: '/synthesia', label: 'Synthesia Transformation' },
  { to: '/ai-prototype', label: 'AI-Embedded Learning' },
  { to: '/sample-video', label: 'Sample Video' },
]

export default function Nav() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex flex-wrap gap-4 items-center">
      <span className="font-semibold text-lg mr-4">Sandra Antony</span>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `text-sm px-3 py-1 rounded transition-colors ${
              isActive
                ? 'bg-slate-700 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
