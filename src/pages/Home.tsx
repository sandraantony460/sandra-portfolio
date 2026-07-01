export default function Home() {
  const whatIDo = [
    { icon: '⬡', label: 'ADDIE & Agile', detail: 'Embedded in R&D sprint cycles to align course releases with product updates' },
    { icon: '⬡', label: 'Curriculum design', detail: 'Needs analysis, content strategy, LMS deployment, outcome measurement · ILT delivery at international forums' },
    { icon: '⬡', label: 'AI-powered workflows', detail: 'Synthesia, Claude, Amazon Polly · GitHub collaboration with AI teams' },
    { icon: '⬡', label: 'Cross-functional collaboration', detail: 'R&D, PS, UX, senior leadership, academic partners · university internship programme (US, 6 interns per cohort)' },
    { icon: '⬡', label: 'Certification governance', detail: '1,000-question knowledge bank, scenario-based assessments, multi-stakeholder QA · managing a direct report' },
    { icon: '⬡', label: 'Data-driven improvement', detail: 'LMS metrics, post-course surveys, direct feedback from PS and training teams — completion rates 50-60% → 75-80%' },
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl px-8 py-10 mb-8 border-l-4 border-l-indigo-500">
        <p className="text-xs font-semibold text-indigo-500 uppercase tracking-widest mb-3">Learning & Development · Dublin, Ireland</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Sandra Antony</h1>
        <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          L&D Manager · Instructional Designer
        </span>
        <p className="text-slate-600 leading-relaxed">
          I design and scale learning programmes across technical and enterprise environments — working end-to-end from needs analysis and content creation through to LMS deployment and evaluation. My focus is on measurable outcomes: completion rates, production efficiency, certification numbers, and using LMS data and learner feedback to make content decisions.
        </p>
      </div>

      {/* Nominated line */}
      <section className="mb-8">
        <p className="text-slate-600 leading-relaxed">
          Currently nominated as Head of Technical Publications and Training, I manage an LMS platform
          with <strong className="text-slate-800">902 active users</strong>, <strong className="text-slate-800">30+ courses</strong>, and <strong className="text-slate-800">3,100+ course assignments</strong>.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { stat: '8+', label: 'Years in instructional design and learning technology' },
            { stat: '902', label: 'Active LMS users managed' },
            { stat: '75+', label: 'Professionals certified globally' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-white border border-slate-200 rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-indigo-600 mb-1">{stat}</p>
              <p className="text-xs text-slate-500 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What I Do — cards */}
      <section className="mb-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">What I do</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {whatIDo.map(({ label, detail }) => (
            <div key={label} className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4 items-start hover:border-indigo-300 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-indigo-500 text-xs font-bold">→</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mb-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Tools & Technology</p>
        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100">
          {[
            { category: 'Video & Production', tools: 'Synthesia, Camtasia, Adobe Premiere Pro, Clipchamp, iSpring, Amazon Polly, Snagit' },
            { category: 'Authoring & LMS', tools: 'Articulate Storyline, Articulate Rise, TalentLMS, Moodle, MadCap Flare, Adobe FrameMaker (DITA-XML)' },
            { category: 'AI & Automation', tools: 'Claude, Synthesia API, Amazon Polly, Genero Intelligence, JIRA automation' },
            { category: 'Collaboration', tools: 'Confluence, SharePoint, MS Office, Google Workspace, GitHub' },
            { category: 'Project Management', tools: 'Jira, ClickUp, Trello' },
          ].map(({ category, tools }) => (
            <div key={category} className="flex gap-4 px-5 py-3">
              <span className="w-40 shrink-0 text-xs font-semibold text-slate-400 uppercase tracking-wide pt-0.5">{category}</span>
              <span className="text-sm text-slate-700">{tools}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Education</p>
        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-100">
          <div className="px-5 py-4">
            <p className="text-sm font-semibold text-slate-800">MSc Business Intelligence & Programme Management</p>
            <p className="text-xs text-slate-500 mt-0.5">University College Cork · 2:1</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm font-semibold text-slate-800">BEng Computer Science</p>
            <p className="text-xs text-slate-500 mt-0.5">Cochin University of Science and Technology · 1:1</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-12">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Portfolio</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { href: '/certification', title: 'Certification Programme', desc: 'Two-tier technical certification. Completion up from 50-60% to 75-80%. 75+ certified globally.' },
            { href: '/synthesia', title: 'Synthesia Transformation', desc: 'AI video pipeline. 50% capacity increase, 6 languages launched with more added on customer request.' },
            { href: '/ai-prototype', title: 'AI-Embedded Learning', desc: 'Prototype surfacing 25 BDL videos inside the AI doc assistant at point of need.' },
            { href: '/sample-video', title: 'Sample Work', desc: 'Self-produced instructional video, Storyline scenario, and ILT delivery samples.' },
          ].map(({ href, title, desc }) => (
            <a
              key={href}
              href={href}
              className="block bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Get in Touch</p>
        <p className="text-slate-700 mb-3">
          <a href="mailto:sandraantony460@gmail.com" className="text-indigo-600 hover:underline">sandraantony460@gmail.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/sandra-a-b255707b/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
        </p>
      </section>

    </main>
  )
}
