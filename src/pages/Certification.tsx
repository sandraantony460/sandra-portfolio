export default function Certification() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 1</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Genero Developer Certification Programme</h1>
      <p className="text-slate-500 text-sm mb-8">Instructional Design · Curriculum Architecture · Assessment Design · LMS Deployment</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Challenge</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          Three interconnected problems needed solving at once:
        </p>
        <ul className="space-y-3 text-slate-700 mb-3">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">1.</span>
            <span><strong>Low completion rates.</strong> LMS data showed engagement was strong but learners were dipping in and out for what they needed — completion sat at 50–60% with no mechanism to change that behaviour.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">2.</span>
            <span><strong>No way to demonstrate learning ROI.</strong> Without a formal assessment or credential, there was no proof that learning had happened — making it impossible to show business impact at an organisational level.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">3.</span>
            <span><strong>Content quality and relevance gaps.</strong> Existing course material hadn't been systematically validated against what developers actually needed to know. Gaps existed but weren't visible.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">My Approach</h2>

        <h3 className="font-semibold text-slate-700 mb-2 mt-4">Phase 1 — Knowledge Certification</h3>
        <ul className="space-y-3 text-slate-700 mb-6">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Built a 1,000-question knowledge bank drawn directly from existing course material — this process itself surfaced content gaps, which were then addressed by adding new courses (including GAS and Genero Mobile Apps)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Travelled to R&D headquarters for a dedicated week stress-testing the question bank with 5 product teams (~15–20 SMEs and developers) to validate accuracy, remove outdated assumptions, and close remaining gaps</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Selected and implemented a purpose-built assessment platform and a certificate issuance platform with expiry tracking — giving the organisation its first verifiable, time-bound credential</span>
          </li>
        </ul>

        <h3 className="font-semibold text-slate-700 mb-2">Phase 2 — Practical Certification (earned, not planned)</h3>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>The knowledge certification succeeded — and a genuine next step emerged: experienced developers wanted a harder, more credible credential that reflected real coding ability</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Designed four scenario-based practical coding assessments in collaboration with the development team, along with unit test cases to validate candidate submissions automatically</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>This tier attracts developers who actively seek and pay for the credential — a strong signal of the programme's perceived value in the market</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            { stat: '75–80%', label: 'Course completion rate (up from 50–60%)' },
            { stat: '75+', label: 'Professionals certified globally' },
            { stat: 'Year 3', label: 'Programme now in its third year' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Content gaps identified during question bank development led directly to new courses being added to the curriculum</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>The organisation now has a verifiable, data-backed measure of learning ROI for the first time</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Adoption expanded organically from internal developers to customers requesting certification — the programme's rigour held up beyond its original audience</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
