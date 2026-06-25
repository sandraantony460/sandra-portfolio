export default function SampleVideo() {
  const driveFileId = '1X4Adhm1mWfeOJIHR2MAC0eFmUcdNF8oS'
  const tibcoFileId = '1kVA6Qv5UcFWdj9Cg0uuAS6iq46pljEFp'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Portfolio</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Sample Work</h1>
      <p className="text-slate-500 text-sm mb-12">Instructional Video · Interactive Scenario · Live Presentation · Screen Recording</p>


      {/* Sample 1 */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">Instructional Video</h2>
        <p className="text-slate-500 text-sm italic mb-4">Using an AI Coding Assistant in VS Code</p>
        <p className="text-slate-700 text-sm leading-relaxed mb-5">
          Built from scratch to demonstrate my end-to-end process: scripting, screen recording, and Synthesia avatar narration.
          Generic topic so no confidential content is involved.
        </p>

        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow mb-2">
          <iframe
            src={`https://drive.google.com/file/d/${driveFileId}/preview`}
            className="w-full h-full"
            allow="autoplay"
            title="Instructional Video — AI Coding Assistant in VS Code"
          />
        </div>
        <p className="text-xs text-slate-400 text-center mb-6">
          Having trouble viewing?{' '}
          <a href={`https://drive.google.com/file/d/${driveFileId}/view`} target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">
            Open in Google Drive
          </a>
        </p>

        <h3 className="font-semibold text-slate-700 mb-3">My Process</h3>
        <div className="space-y-4">
          {[
            { phase: 'Analysis', detail: 'Chose a generic topic that mirrors the structure of a real technical Quick Start video without using any employer content.' },
            { phase: 'Design', detail: 'Mapped the video to the beats I use in real projects: objectives, step-by-step demo, summary. Wrote the full script ensuring stated objectives matched exactly what the demo showed.' },
            { phase: 'Development', detail: 'Recorded a screen capture showing the AI assistant generating a working function in the editor. Assembled in Synthesia scene by scene.' },
            { phase: 'Evaluation', detail: 'On review, caught a mismatch between the stated objectives and the final content. Corrected before publishing.' },
          ].map(({ phase, detail }) => (
            <div key={phase} className="flex gap-4">
              <div className="w-24 shrink-0">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">{phase}</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample 2 — Storyline */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">Interactive Scenario — Articulate Storyline 360</h2>
        <p className="text-slate-500 text-sm italic mb-4">Onboarding a New Team Member · Branching Scenario</p>
        <p className="text-slate-700 text-sm leading-relaxed mb-5">
          A short branching scenario built in Storyline 360. The learner plays the role of a manager on a new joiner's first day and makes decisions that lead to different outcomes. Demonstrates scenario design, branching logic, and feedback states.
        </p>
        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow">
          <iframe
            src="/onboarding/story.html"
            className="w-full h-full"
            title="Onboarding Branching Scenario — Storyline 360"
            allowFullScreen
          />
        </div>
        <p className="text-xs text-slate-400 text-center mt-2">
          <a href="/onboarding/story.html" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">
            Open in full screen →
          </a>
        </p>
      </section>

      {/* Sample 2 */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">ILT Delivery — TIBCO Streaming & Spotfire</h2>
        <p className="text-slate-500 text-sm italic mb-4">Instructor-Led Technical Session · International Forum · 2021</p>
        <p className="text-slate-700 text-sm leading-relaxed mb-5">
          Live instructor-led session delivered to a technical audience at an international forum. Covers integrating TIBCO Streaming and Spotfire to fetch,
          publish, and visualise real-time Twitter data — configuring the Twitter input adapter,
          creating a live data table, and building bar, line, and scatter plot visualisations in Spotfire.
        </p>
        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow">
          <iframe
            src="https://www.youtube.com/embed/OOsjm4-JiSU"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="TIBCO Streaming and Spotfire Presentation"
          />
        </div>
      </section>

      {/* Sample 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-1">ILT Delivery — TIBCO Cloud Integration Connect</h2>
        <p className="text-slate-500 text-sm italic mb-4">Instructor-Led Product Walkthrough · International Forum · 2021</p>
        <p className="text-slate-700 text-sm leading-relaxed mb-5">
          Instructor-led product walkthrough of TIBCO Cloud Integration Connect, delivered to a technical audience at an international forum. Designed and delivered as a structured live session with supporting materials.
        </p>

        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow mb-2">
          <iframe
            src={`https://drive.google.com/file/d/${tibcoFileId}/preview`}
            className="w-full h-full"
            allow="autoplay"
            title="TIBCO Cloud Integration Connect Presentation"
          />
        </div>
        <p className="text-xs text-slate-400 text-center">
          Having trouble viewing?{' '}
          <a href={`https://drive.google.com/file/d/${tibcoFileId}/view`} target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">
            Open in Google Drive
          </a>
        </p>
      </section>
    </main>
  )
}
