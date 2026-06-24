export default function AIPrototype() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 3</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">AI-Embedded Learning Prototype</h1>
      <p className="text-slate-500 text-sm mb-8">Prototype Design · AI Integration · Learning Engineering · Content Strategy</p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 text-sm text-amber-800">
        This project is in active development and not yet public. The prototype and partner portal are not shown here —
        but I'm happy to walk through the design thinking, interaction flow, and data strategy in detail.
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Problem</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          Genero BDL is a complex, technical language. New developers and learners coming to it for the first time
          often struggle to build understanding from documentation alone — reading about something and actually
          understanding it are two different things.
        </p>
        <p className="text-slate-700 leading-relaxed mb-3">
          Our AI team built a partner-facing doc assistant — a chat interface where users ask technical questions
          and get answers from the product documentation. It's useful, but it had a blind spot: we had 25 training
          videos covering the Genero BDL language basics that were completely invisible to anyone using it.
          Valuable learning content wasn't surfaced at the exact moment someone needed it.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Users also couldn't stay in the doc assistant to learn — they had to leave to find a video, if they
          even knew one existed. That friction meant most didn't bother.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Design</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          I built an interactive HTML prototype using Claude to show the AI team exactly what I meant —
          a search experience where a user's question returns an AI answer, supporting documentation,
          and a contextually relevant training video, all in one place. No need to leave. No need to search separately.
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Alpha scope:</strong> the AI portal currently covers BDL documentation only, so I scoped the prototype to match — the 25 existing BDL Language Basics videos. No new production cost, and a clean like-for-like integration</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Relevance mapping:</strong> I manually mapped keywords to each video and built a lookup table — shared with the AI team so they could understand the logic and begin integrating it</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Honest surfacing:</strong> if no relevant video exists for a query, nothing is shown — the system never overstates coverage or shows a loosely related video just to fill the space</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Data opportunity:</strong> by tracking which topics users search most, the system generates a real signal for what video content to build next — evidence-based roadmapping instead of guesswork</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Why This Approach</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          The alternative was to build a separate learning hub and ask users to go there. But that adds friction,
          splits the experience, and relies on users choosing to learn rather than just get their answer.
          Embedding the video at the point of need removes that choice — learning happens in context, when the
          user already has the problem in their head.
        </p>
        <p className="text-slate-700 leading-relaxed">
          For complex topics like Genero BDL, this matters even more. Reading documentation tells you what something
          is. A short video can show you how it works — and for new developers in particular, that difference
          is significant.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results (in progress)</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-5">
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
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Prototype accepted by the AI team — currently in integration planning</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Phase 2 proposed: use real search data to identify high-demand topics with no existing video, feeding a prioritised production pipeline</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Testing an AI-assisted production pipeline (Synthesia API + Claude) to dramatically cut time-to-publish on new content</span>
          </li>
        </ul>
      </section>
    </main>
  )
}
