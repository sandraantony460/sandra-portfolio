export default function Certification() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 1</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Genero Developer Certification Programme</h1>
      <p className="text-slate-500 text-sm mb-8">Instructional Design · Assessment Design · LMS Deployment</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Problem</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">1.</span>
            <span>Course completion rates were stuck at 50-60%. Learners dipped in for what they needed and left.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">2.</span>
            <span>No way to demonstrate learning ROI at an organisational level. Without a credential, there was no proof learning had happened.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">3.</span>
            <span>Content quality was unvalidated. Gaps existed but were not visible until we looked for them.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Did</h2>

        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Phase 1 — Knowledge Certification</p>
        <ul className="space-y-3 text-slate-700 mb-6">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Built a 1,000-question bank drawn from existing course material. The process itself surfaced content gaps, which led to new courses being added including GAS and Genero Mobile Apps.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Travelled to R&D headquarters and spent a week validating the question bank with 5 product teams (15-20 SMEs and developers). Removed outdated content, closed remaining gaps.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Selected and implemented an assessment platform and a certificate issuance platform with expiry tracking. First verifiable credential the organisation had ever issued.</span>
          </li>
        </ul>

        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Phase 2 — Practical Certification</p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>After Phase 1 succeeded, experienced developers wanted a harder credential. This was not planned from the start; it emerged from the programme's success.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Designed four scenario-based practical coding assessments with the development team, including unit test cases to validate submissions automatically.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>This tier attracts developers who actively seek and pay for the credential — a clear signal of its perceived value.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            { stat: '75-80%', label: 'Completion rate (up from 50-60%)' },
            { stat: '75+', label: 'Professionals certified globally' },
            { stat: 'Year 3', label: 'Programme still running' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Content gaps found during question bank development led directly to new courses being added</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Organisation now has a verifiable, data-backed measure of learning ROI for the first time</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Adoption expanded from internal developers to customers requesting certification</span></li>
        </ul>
      </section>
    </main>
  )
}
