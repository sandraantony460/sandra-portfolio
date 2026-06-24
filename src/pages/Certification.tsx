export default function Certification() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 1</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Genero Developer Certification Programme</h1>
      <p className="text-slate-500 text-sm mb-8">Instructional Design · Curriculum Architecture · Assessment Design · LMS Deployment</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Challenge</h2>
        <p className="text-slate-700 leading-relaxed">
          LMS data showed strong course engagement but completion rates stuck between 50–60%. Learners were
          dipping into content for what they needed and not finishing it, and there was no way to demonstrate
          learning ROI at an organisational level.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">My Approach</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Conducted a training needs analysis with developers and professional services teams to identify the root cause</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Designed a two-tier certification pathway: a knowledge-based exam, followed by hands-on practical coding scenarios</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Built a 1,000-question knowledge bank by pooling existing content from product team channels, then travelled to R&D headquarters for a dedicated week stress-testing the bank with 5 product teams (~15–20 SMEs and developers) to close gaps and remove outdated assumptions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Worked with developers to design four practical coding scenarios and the unit test cases used to validate candidate submissions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1">→</span>
            <span>Selected and implemented two purpose-built platforms: one to host and deliver the knowledge assessment, one to issue verifiable certificates with expiry tracking</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
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
        <p className="text-slate-700 leading-relaxed">
          Adoption expanded organically from internal developers to customers requesting certification —
          a signal that the programme's rigour and credibility held up beyond its original audience.
        </p>
      </section>
    </main>
  )
}
