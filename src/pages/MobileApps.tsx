import CaseStudyLayout from '../components/CaseStudyLayout'

export default function MobileApps() {
  return (
    <CaseStudyLayout
      eyebrow="Case Study 4"
      title="Genero Mobile Apps Course Development"
      tags="Instructional Design · SME Collaboration · Hands-On Development"
    >

      <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 mb-2 text-sm text-slate-600">
        Course content and LMS screenshots are from an internal platform and cannot be shared publicly. Visuals shown are reconstructed mockups. Company branding has been removed.
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">The Situation</h2>
        <p className="text-slate-700 leading-relaxed mb-3">
          Four Js has a mobile product — Genero Mobile — with a small but strategically important customer base.
          Most users had migrated to the web version over time, but a handful of long-standing enterprise customers
          still relied on mobile. These were customers the company could not afford to lose.
        </p>
        <p className="text-slate-700 leading-relaxed">
          There was no training for the product. No learning path, no course, no documentation trail a new developer
          could follow. And critically, there was a visible gap in the certification programme — questions existed
          in the knowledge bank that had no corresponding training material to support them.
        </p>
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Analysis</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Most existing documentation was outdated and scattered. There was no single source of truth for how Genero Mobile worked in a real customer environment.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Internal SME support was minimal — the product had a small team and the knowledge was largely tacit, held by a few people.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>The audience was enterprise developers who already knew Genero but had no exposure to the mobile architecture or UX patterns specific to the mobile runtime.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>The certification knowledge bank had questions tied to Genero Mobile with no training content to back them up — a gap that could fail certified developers on topics they had never been taught.</span>
          </li>
        </ul>

        <div className="mt-5">
          <p className="text-xs text-slate-400 mb-2">Course agenda showing all 12 units, learning objectives, and content classification — built in Excel during the analysis phase.</p>
          <iframe src="/mockup-course-agenda.html" className="w-full rounded-xl border border-slate-200" style={{height: '420px'}} title="Course agenda spreadsheet" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Design</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The course was scoped around three pillars: architecture, user experience scenarios, and a live Android simulator demo.
          Each pillar mapped directly to what a developer would need to understand before working with a Genero Mobile application.
        </p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">1.</span>
            <span><strong>Architecture</strong> — how the Genero Mobile runtime works, how it differs from the web version, and what this means for developers building or maintaining mobile applications.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">2.</span>
            <span><strong>User experience scenarios</strong> — the different ways mobile applications behave depending on device, orientation, and user interaction patterns specific to the mobile runtime.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">3.</span>
            <span><strong>Live Android simulator demo</strong> — a hands-on walkthrough using an actual Android simulator, showing the product in action rather than describing it in the abstract.</span>
          </li>
        </ul>

        <div className="mt-5">
          <p className="text-xs text-slate-400 mb-2">Cert question mapping — each cert-critical unit was mapped directly to questions in the knowledge bank, ensuring full alignment between what is taught and what is assessed.</p>
          <iframe src="/mockup-cert-questions.html" className="w-full rounded-xl border border-slate-200" style={{height: '320px'}} title="Cert question mapping" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Development</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          End-to-end development took two months. With limited documentation and minimal SME availability,
          the process required a level of hands-on research that goes well beyond typical course development.
        </p>
        <ul className="space-y-3 text-slate-700 mb-5">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Built small working Genero Mobile applications myself to understand how the product behaved — not just how the documentation said it should behave.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Used Claude to fill documentation gaps — cross-referencing sparse internal docs with the product's actual behaviour to generate accurate, testable explanations.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Documented findings as I went. This organic process turned a research log into course content — each finding became a module, each tested behaviour became a learning objective.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Worked closely with available SMEs for review cycles, prioritising their time by arriving with tested content rather than open questions.</span>
          </li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-5">
          <p className="text-sm font-semibold text-amber-800 mb-2">Finding a bug during development</p>
          <p className="text-sm text-amber-700 leading-relaxed">
            During hands-on testing, I encountered behaviour in the Android simulator that did not match the expected output.
            Rather than working around it or noting it as an anomaly, I documented it precisely — steps to reproduce,
            expected vs. actual behaviour — and raised it with the R&D team. It was confirmed as a product bug and fixed.
            The corrected behaviour was then incorporated into the course content, ensuring learners were taught the accurate,
            post-fix experience.
          </p>
        </div>

        {/* Placeholder for bug screenshots */}
        <div className="mt-2">
          <p className="text-xs text-slate-400 mb-2">Runtime bug identified during testing — toolbar icons failed to render on the Android emulator. Documented and raised with R&D, who confirmed and patched it before the course launched.</p>
          <iframe src="/mockup-bug.html" className="w-full rounded-xl border border-slate-200" style={{height: '320px'}} title="Bug before and after" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Results</h2>
        <div className="grid gap-4 sm:grid-cols-3 mb-5">
          {[
            { stat: '6', label: 'New users joined the e-learning portal through this course' },
            { stat: '2', label: 'Enterprise customers now have an active learning path for the first time' },
            { stat: '1', label: 'Certification gap closed — knowledge bank questions now have matching training content' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
        <ul className="space-y-2 text-slate-700">
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>A product bug was identified and reported during development — R&D fixed it before the course launched</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>The research process produced documentation that did not previously exist, benefiting the wider team beyond the course itself</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Enterprise customers who would otherwise have had no learning path for the product are actively using the course today</span></li>
        </ul>

        <div className="mt-5">
          <p className="text-xs text-slate-400 mb-2">The course as it appeared in the LMS — structured into core units, labs, and cert-critical content.</p>
          <iframe src="/mockup-lms-course.html" className="w-full rounded-xl border border-slate-200" style={{height: '420px'}} title="LMS course page" />
        </div>

      </section>

    </CaseStudyLayout>
  )
}
