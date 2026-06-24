export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">Sandra Antony</h1>
      <p className="text-lg text-indigo-600 font-medium mb-8">
        Instructional Design & Learning Technology Manager · Dublin, Ireland
      </p>

      <section className="mb-10">
        <p className="text-slate-700 leading-relaxed mb-4">
          I design and scale learning programmes that are measurable, technology-driven, and built for real performance outcomes.
          With 9+ years across technical and enterprise environments, I specialise in end-to-end curriculum design,
          certification governance, AI-powered course production, and using data to continuously improve learning at scale.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Currently nominated as Head of Technical Publications and Training, I manage an LMS platform
          serving <strong>902 active users</strong>, <strong>40+ courses</strong>, and <strong>3,100+ course assignments</strong> —
          using platform data and completion metrics to drive programme decisions and report impact to senior leadership.
        </p>
      </section>

      <section className="mb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { stat: '9+', label: 'Years in instructional design & learning technology' },
            { stat: '902', label: 'Active LMS users managed' },
            { stat: '75+', label: 'Professionals certified globally' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Bring</h2>
        <ul className="space-y-2 text-slate-700">
          {[
            'End-to-end curriculum design — from needs analysis and content strategy to LMS deployment and outcome measurement',
            'Certification programme governance — 1,000-question knowledge bank, scenario-based assessments, multi-stakeholder QA',
            'AI-powered production workflows — Synthesia, Claude, Amazon Polly; ~50% increase in video output',
            'Data-driven improvement — completion rates lifted from 50–60% to 75–80% through evidence-based redesign',
            'Cross-functional collaboration — R&D, PS, UX, senior leadership, academic partners across the US and EU',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-indigo-400 mt-1 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Education</h2>
        <div className="space-y-2 text-slate-700">
          <p><strong>MSc Business Intelligence & Programme Management</strong> — University College Cork <span className="text-slate-400">(2:1)</span></p>
          <p><strong>BEng Computer Science</strong> — Cochin University of Science and Technology <span className="text-slate-400">(1:1)</span></p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Portfolio</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { href: '/certification', title: 'Certification Programme', desc: 'Two-tier technical certification — 75→80% completion, 75+ certified globally' },
            { href: '/synthesia', title: 'Synthesia Transformation', desc: 'AI video pipeline — 50% capacity increase, 6 languages, 7+ videos/year' },
            { href: '/ai-prototype', title: 'AI-Embedded Learning', desc: 'Interactive prototype surfacing 25 existing videos at point of need' },
            { href: '/sample-video', title: 'Sample Instructional Video', desc: 'Self-produced end-to-end: script, screen recording, Synthesia narration' },
          ].map(({ href, title, desc }) => (
            <a
              key={href}
              href={href}
              className="block border border-slate-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Get in Touch</h2>
        <p className="text-slate-700">
          <a href="mailto:sandraantony460@gmail.com" className="text-indigo-600 hover:underline">sandraantony460@gmail.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/sandra-a-b255707b/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
        </p>
      </section>
    </main>
  )
}
