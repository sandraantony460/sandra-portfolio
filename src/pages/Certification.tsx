import { useEffect, useRef } from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

export default function Certification() {
  const mermaidRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('mermaid').then((m) => {
      m.default.initialize({ startOnLoad: false, theme: 'neutral' })
      if (mermaidRef.current) {
        m.default.run({ nodes: [mermaidRef.current] })
      }
    })
  }, [])

  return (
    <CaseStudyLayout
      eyebrow="Case Study 1"
      title="Genero Developer Certification Programme"
      tags="Instructional Design · Assessment Design · LMS Deployment"
    >
      <section>
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

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Programme Structure</h2>
        <div
          ref={mermaidRef}
          className="mermaid text-sm"
        >{`flowchart TD
    A[Needs Analysis with R&D & PS SMEs] --> B[Course Audit & Gap Identification]
    B --> C[New Courses Added\nGAS · Genero Mobile Apps]
    B --> D[1000-Question Knowledge Bank\nSME Validation at HQ]
    C --> D
    D --> E[Phase 1: Knowledge Exam\nMultiple Choice · Online · Proctored]
    E --> F{Pass?}
    F -->|Yes| G[Certificate Issued\nWith Expiry Tracking]
    F -->|No| H[Retake Available]
    G --> I[Phase 2: Practical Assessment\n4 Scenario-Based Coding Tests]
    I --> J[Unit Tests Validate Submission]
    J --> K[Developer Certification\nIssued]`}</div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Did</h2>
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Phase 1 — Knowledge Certification</p>
        <ul className="space-y-3 text-slate-700 mb-6">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Built a 1,000-question bank drawn from existing course material. The process surfaced content gaps, leading to new courses including GAS and Genero Mobile Apps.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Travelled to R&D headquarters and spent a week validating the question bank with 5 product teams (15-20 SMEs). Removed outdated content and closed remaining gaps.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Selected and implemented an assessment platform and a certificate issuance platform with expiry tracking. First verifiable credential the organisation had issued.</span>
          </li>
        </ul>

        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">Phase 2 — Practical Certification</p>
        <ul className="space-y-3 text-slate-700">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>After Phase 1 succeeded, experienced developers wanted a harder credential. This was not planned from the start — it emerged from the programme's success.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Designed four scenario-based practical coding assessments with unit test cases to validate submissions automatically.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>This tier attracts developers who actively seek and pay for the credential — a clear signal of its perceived value.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">The Programme</h2>
        <p className="text-slate-400 text-xs mb-3">From the public Genero Enterprise website — built by the marketing team to present the certification externally.</p>
        <div className="space-y-4">
          <img src="/cert-overview.png" alt="Genero certification two-phase overview" className="rounded-xl border border-slate-200 w-full" />
          <img src="/cert-prerequisites.png" alt="Genero certification prerequisites" className="rounded-xl border border-slate-200 w-full" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Results</h2>
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
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Content gaps found during question bank development led to new courses being added</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Organisation now has a verifiable, data-backed measure of learning ROI for the first time</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Adoption expanded from internal developers to customers requesting certification</span></li>
          <li className="flex gap-3"><span className="text-indigo-400 mt-1 shrink-0">→</span><span>Certified developers actively recommend the programme to colleagues and junior developers — measurable peer-driven behaviour change within customer organisations</span></li>
        </ul>
      </section>
    </CaseStudyLayout>
  )
}
