export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 px-6 text-center text-sm text-slate-400">
      <p className="mb-1">
        <a href="mailto:sandraantony460@gmail.com" className="hover:text-indigo-500 transition-colors">sandraantony460@gmail.com</a>
        {' · '}
        <a href="https://www.linkedin.com/in/sandra-a-b255707b/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">LinkedIn</a>
      </p>
      <p>© {new Date().getFullYear()} Sandra Antony</p>
    </footer>
  )
}
