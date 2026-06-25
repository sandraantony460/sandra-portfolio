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
        <p className="text-slate-700 leading-relaxed mb-5">
          When I joined, the team produced 2–3 major training videos per year using manual voiceover recording
          and separate editing tools. Updates were slow, storage was inconsistent, and there was no scalable path forward.
        </p>
        <p className="text-xs text-slate-400 mb-2">The old workflow — iSpring course with recorded voiceover, stored in SharePoint alongside .pptx, .docx scripts, .mp3 retakes, Camtasia .tscproj and .trec files, and iSpring-generated ZIP and UUID folders.</p>
        <img src="/syn-before.png" alt="Old iSpring course with voiceover format" className="rounded-xl border border-slate-200 w-full" />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Did</h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The constraint was a small team against a large, fast-moving product suite. Rather than hiring,
          I looked at where AI could take over the repetitive parts of production. The approach evolved
          deliberately rather than jumping straight to a full platform switch.
        </p>
        <ul className="space-y-3 text-slate-700 mb-6">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Started with Amazon Polly for AI voice generation to test whether AI narration was viable before committing to anything bigger</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Moved to iSpring as a next step, then researched Synthesia as a unified platform. Signed up for a personal account to test it hands-on before building the business case.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Built and presented a business case to senior management. Once approved, led the full migration covering scripting, avatar recording, SME review, file storage, and multilingual translation — all in one platform.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span>Designed branded video templates with our UX designer, including a separate set for a newly launched product line with its own branding</span>
          </li>
        </ul>

        <div className="space-y-3 mb-2">
          <div>
            <p className="text-xs text-slate-400 mb-2">Testing Synthesia on a personal account before proposing it to the company.</p>
            <img src="/syn-account.png" alt="Personal Synthesia account dashboard" className="rounded-xl border border-slate-200 w-full" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-2">Building a video inside the Synthesia editor — scenes, script, and layout all in one place.</p>
            <img src="/syn-editor.png" alt="Synthesia video editor in use" className="rounded-xl border border-slate-200 w-full" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">How It Changed the Workflow</h2>
        <ul className="space-y-3 text-slate-700 mb-6">
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Embed codes replace file uploads.</strong> Videos are embedded in the LMS via iframe. When a product update requires a change, I update the script in Synthesia and republish — the LMS reflects the new version automatically. No re-uploading, no broken links.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>SME review inside the platform.</strong> Colleagues and subject matter experts leave timestamped comments directly on the video. No emailing files, no "can you send the latest version?" — collaboration happens at the edit level, inside the workspace.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-indigo-400 mt-1 shrink-0">→</span>
            <span><strong>Translation built in.</strong> One click translates the video into another language. This is how we enabled 6 languages without 6× the production effort.</span>
          </li>
        </ul>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-slate-400 mb-2">Share panel showing embed code for LMS integration. The same video URL stays live — republishing updates it in place.</p>
            <img src="/syn-embed.png" alt="Synthesia share panel with embed code option" className="rounded-xl border border-slate-200 w-full" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-2">SME review and collaboration built in — timestamped comments on the video itself, plus Download, Translate, and Analytics all from one place.</p>
            <img src="/syn-collab.png" alt="Synthesia video with comment and collaboration options" className="rounded-xl border border-slate-200 w-full" />
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-2">The finished product — a branded Four Js Synthesia video with company logo, AI avatar, and professional layout. One of 7+ videos produced per year after the platform switch.</p>
            <img src="/syn-output.png" alt="Four Js branded Synthesia video output" className="rounded-xl border border-slate-200 w-full" />
          </div>
        </div>
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
