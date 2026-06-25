import CaseStudyLayout from '../components/CaseStudyLayout'

export default function Synthesia() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study 2"
      title="Synthesia-Based Video Production Transformation"
      tags="AI Video Production · Workflow Design · Localisation"
    >

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Problem</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          Four Js has technically complex products with extensive documentation and quarterly release cycles.
          With a small team and a large content surface, keeping training current was a constant problem.
          Every release risked making existing videos outdated, and re-recording from scratch was the only option.
        </p>
        <p className="text-slate-700 leading-relaxed">
          When I joined, the team produced 2-3 major training videos per year using manual voiceover recording
          and separate editing tools. Updates were slow, storage was inconsistent, and there was no scalable path forward.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Did</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The constraint was a small team against a large, fast-moving product suite. Rather than hiring,
          I looked at where AI could take over the repetitive parts of production. The approach evolved
          deliberately rather than jumping straight to a full platform switch.
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Started with Amazon Polly for AI voice generation to test whether AI narration was viable before committing to anything bigger</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Moved to iSpring as a next step, then researched Synthesia as a unified platform. Built and presented a business case to senior management.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Led migration to Synthesia covering scripting, avatar recording, file storage, SME review, and multilingual translation in one platform</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Designed branded video templates with our UX designer, including a separate set for a newly launched product line with its own branding</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          {[
            { stat: '~50%', label: 'Increase in production capacity' },
            { stat: '6', label: 'Languages enabled for localisation' },
            { stat: '2 to 7+', label: 'Videos per year' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed">
          Multilingual localisation into 6 languages opened training to our full global customer base for the first time.
        </p>
      </section>
    </CaseStudyLayout>
  )
}
