export default function Synthesia() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 2</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Synthesia-Based Video Production Transformation</h1>
      <p className="text-slate-500 text-sm mb-8">AI Video Production · Workflow Design · Change Management · Localisation</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Challenge</h2>
        <p className="text-slate-700 leading-relaxed">
          When I joined, our video training process relied on manual voiceover recording, separate editing tools,
          and inconsistent file storage. The team could only produce 2–3 major training videos per year, and any
          update meant re-recording from scratch.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">My Approach</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Introduced AI voice generation (Amazon Polly, then iSpring) as an initial improvement to the existing workflow</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Researched and ran trials on Synthesia as a unified platform, then built and presented a business case to senior management</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Led full migration to Synthesia for scripting, AI avatar recording, file storage, SME review, and multilingual translation — all in one platform</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Designed and built standardised, branded video templates in the Synthesia library, reviewed and approved with our UX designer — including a separate template set for a newly launched product line with its own distinct branding</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          {[
            { stat: '~50%', label: 'Increase in production capacity' },
            { stat: '6', label: 'Languages enabled for localisation' },
            { stat: '2→7+', label: 'Videos per year (major + release-based)' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed">
          Output grew from 2–3 major trainings per year to 3–4 plus 4 release-based videos annually.
          Multilingual localisation into 6 languages opened content to our full global customer base for the first time.
        </p>
      </section>
    </main>
  )
}
