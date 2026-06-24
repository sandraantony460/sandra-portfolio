export default function AIPrototype() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 3</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">AI-Embedded Learning Prototype</h1>
      <p className="text-slate-500 text-sm mb-8">Prototype Design · AI Integration · Content Strategy</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800">
        This project is in active development and not yet public. Happy to walk through the design and data strategy in detail.
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Problem</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          Genero BDL is a complex technical language. Reading documentation helps, but new developers often need
          to see something in action to understand it. We had 25 training videos covering BDL basics that could
          help with exactly that.
        </p>
        <p className="text-slate-700 leading-relaxed">
          The AI team was building a doc assistant where developers ask technical questions and get answers from
          product documentation. But the training videos were invisible to anyone using it. Users who might have
          benefited from a short video had no way of knowing it existed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Built</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          I built an HTML prototype using Claude to show the AI team what I had in mind: a search experience
          where a user's question returns an AI answer, supporting documentation, and a relevant training video
          in one place. No need to leave the assistant.
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Scoped to the 25 BDL videos because the AI portal currently covers BDL documentation only. Matched the prototype to what was actually available.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Manually mapped keywords to each video and built a lookup table. Shared this with the AI team as the integration logic.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>If no relevant video exists for a query, nothing is shown. The system does not surface loosely related content just to fill the space.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Search data from the portal can show which topics users ask about most. Topics with no video become a prioritised, evidence-based content list rather than guesswork.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results (in progress)</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-5">
          {[
            { stat: '25', label: 'Existing BDL videos reused. Zero new production cost at launch.' },
            { stat: '5h to 2h', label: 'Projected production time with AI-assisted pipeline' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Prototype accepted by the AI team and currently in integration planning</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Phase 2 proposed: use real search data to identify high-demand topics with no existing video</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Testing a Synthesia API + Claude pipeline to cut time-to-publish on new content</span></li>
        </ul>
      </section>
    </main>
  )
}
