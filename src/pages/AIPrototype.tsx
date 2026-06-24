export default function AIPrototype() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 3</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">AI-Embedded Learning Prototype</h1>
      <p className="text-slate-500 text-sm mb-8">Prototype Design · AI Integration · Learning Engineering · Content Strategy</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800">
        This project is still in active development and not yet public. Screenshots of the prototype and partner portal
        are not shared here — but I'm very happy to walk through the design thinking, interaction flow, and data
        strategy in more detail during a conversation.
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Challenge</h2>
        <p className="text-slate-700 leading-relaxed">
          Our AI team built a new partner-facing portal featuring an AI assistant that answers technical product questions.
          I identified that customers asking questions there had no way to discover our 25 existing training videos on those
          same topics — valuable content was effectively invisible at the exact moment someone needed it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">My Approach</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Designed and built a working interactive prototype myself, demonstrating a search experience where an AI answer, supporting documentation, and a contextually relevant training video appear together</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Designed the logic so a video link only appears when genuinely relevant content exists — avoiding ever overstating coverage</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Presented the prototype to my manager (approved) and to the AI team (accepted) — now working together to implement it</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Proposed a second phase: using real search data to identify the most-requested topics with no existing video, turning that into a prioritised, evidence-based content roadmap</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results (in progress)</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          {[
            { stat: '25', label: 'Existing videos reused — zero additional production cost at launch' },
            { stat: '5h → 2h', label: 'Projected new video production time with AI-assisted pipeline' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed">
          Currently testing an AI-assisted production pipeline (Synthesia API + Claude) that could cut new video
          production time significantly — enabling fast turnaround on whatever topics the data surfaces as highest need.
        </p>
      </section>
    </main>
  )
}
