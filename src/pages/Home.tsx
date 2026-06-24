export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">Sandra Antony</h1>
      <p className="text-lg text-indigo-600 font-medium mb-6">
        Instructional Designer · Learning Experience Designer
      </p>
      <p className="text-slate-700 leading-relaxed mb-4">
        Based in Dublin, I design learning experiences that are grounded in
        evidence, scalable by technology, and built around the people who use
        them. My work spans certification programmes, AI-enhanced eLearning
        prototypes, and video-based learning — all focused on measurable
        performance outcomes.
      </p>
      <p className="text-slate-700 leading-relaxed mb-8">
        This portfolio showcases four recent projects that reflect the breadth of
        my practice: structured curriculum design, production transformation,
        AI-embedded interactivity, and self-produced instructional video.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { href: '/certification', title: 'Certification Programme', desc: 'Multi-tier curriculum design from scratch' },
          { href: '/synthesia', title: 'Synthesia Transformation', desc: 'Video production at scale using AI avatars' },
          { href: '/ai-prototype', title: 'AI-Embedded Learning', desc: 'Interactive prototype with embedded AI coaching' },
          { href: '/sample-video', title: 'Sample Instructional Video', desc: 'Self-produced script, recording, and Synthesia narration' },
        ].map(({ href, title, desc }) => (
          <a
            key={href}
            href={href}
            className="block border border-slate-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition-all"
          >
            <h2 className="font-semibold text-slate-900 mb-1">{title}</h2>
            <p className="text-sm text-slate-500">{desc}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
