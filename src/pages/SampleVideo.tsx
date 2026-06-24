export default function SampleVideo() {
  const driveFileId = '1X4Adhm1mWfeOJIHR2MAC0eFmUcdNF8oS'
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm text-indigo-600 font-medium uppercase tracking-wide mb-2">Case Study 4</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Sample Instructional Video</h1>
      <p className="text-slate-500 text-sm mb-2">Script Writing · Screen Recording · Synthesia Avatar Narration</p>
      <p className="text-slate-500 text-sm italic mb-8">Topic: Introduction to Using an AI Coding Assistant in VS Code</p>

      <section className="mb-8">
        <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 shadow mb-2">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="autoplay"
            title="Sample Instructional Video — AI Coding Assistant in VS Code"
          />
        </div>
        <p className="text-xs text-slate-400 text-center">
          Having trouble viewing?{' '}
          <a
            href={`https://drive.google.com/file/d/${driveFileId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 underline"
          >
            Open in Google Drive
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Why I Built This</h2>
        <p className="text-slate-700 leading-relaxed">
          Since most of my actual project work is confidential, I built this short, original video from scratch to
          demonstrate my end-to-end process — using a generic topic so the example carries no proprietary content.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">My Process</h2>
        <div className="space-y-5">
          {[
            {
              phase: 'Analysis',
              detail: 'Identified the need for a clean, shareable example. Chose a topic that mirrors the structure of a real technical Quick Start video without using any employer content.',
            },
            {
              phase: 'Design',
              detail: 'Mapped the video to the same beats I use in real course design: Welcome → Objectives → Step-by-step demonstration → Summary → Closing. Wrote and refined the full script, ensuring stated objectives matched exactly what the demonstration would show.',
            },
            {
              phase: 'Development',
              detail: 'Finalised the script line by line, specifying exact function names, file names, and prompt wording. Recorded a screen capture showing the AI assistant generating a working function in the editor. Assembled scene by scene in Synthesia with a bridging line to smooth the transition from demonstration into summary.',
            },
            {
              phase: 'Implementation',
              detail: 'Ran the generated code on screen and showed the actual output — so the video itself models good verification practice rather than just describing it.',
            },
            {
              phase: 'Evaluation',
              detail: 'On review, caught a mismatch between stated objectives and final content — an earlier draft implied the video would cover extension setup, which the final version no longer did. Corrected the objectives to accurately reflect what the video actually delivers.',
            },
          ].map(({ phase, detail }) => (
            <div key={phase} className="flex gap-4">
              <div className="w-28 shrink-0">
                <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">
                  {phase}
                </span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
