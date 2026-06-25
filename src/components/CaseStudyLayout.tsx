import { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: string
  tags: string
  children: ReactNode
}

export default function CaseStudyLayout({ eyebrow, title, tags, children }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-10 mb-6">
        <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">{eyebrow}</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{title}</h1>
        <p className="text-slate-400 text-sm">{tags}</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-10 space-y-10">
        {children}
      </div>
    </main>
  )
}
