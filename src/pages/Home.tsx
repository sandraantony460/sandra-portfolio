export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-10 mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Sandra Antony</h1>
        <p className="text-lg text-indigo-600 font-medium mb-4">
          Learning & Development Manager · Instructional Designer · Dublin, Ireland
        </p>
        <p className="text-slate-600 leading-relaxed">
          I design and scale learning programmes across technical and enterprise environments.
          My focus is on measurable outcomes: completion rates, certification numbers, production efficiency,
          and using LMS data to make content decisions.
        </p>
      </div>

      <section className="mb-10">
        <p className="text-slate-700 leading-relaxed">
          Currently nominated as Head of Technical Publications and Training, I manage an LMS platform
          with <strong>902 active users</strong>, <strong>30+ courses</strong>, and <strong>3,100+ course assignments</strong>.
        </p>
      </section>

      <section className="mb-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { stat: '9+', label: 'Years in instructional design and learning technology' },
            { stat: '902', label: 'Active LMS users managed' },
            { stat: '75+', label: 'Professionals certified globally' },
          ].map(({ stat, label }) => (
            <div key={stat} className="bg-indigo-50 rounded-xl p-5 text-center">
              <p className="text-2xl font-bold text-indigo-700 mb-1">{stat}</p>
              <p className="text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">What I Do</h2>
        <ul className="space-y-2 text-slate-700">
          {[
            'Instructional design methodology: ADDIE and Agile — embedded in R&D sprint cycles to align course releases with product updates',
            'End-to-end curriculum design: needs analysis, content strategy, LMS deployment, outcome measurement · ILT delivery at international technical forums',
            'AI-powered production workflows using Synthesia, Claude, and Amazon Polly · GitHub collaboration with AI teams',
            'Cross-functional collaboration with R&D, PS, UX, senior leadership, and academic partners · university internship programme (US, 6 interns per cohort)',
            'Certification programme governance: 1,000-question knowledge bank, scenario-based assessments, multi-stakeholder QA · managing a direct report',
            'Data-driven improvement using LMS metrics, post-course surveys, and direct feedback from customer-facing PS and training teams — completion rates lifted from 50-60% to 75-80%',
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-indigo-400 mt-1 shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Tools & Technology</h2>
        <div className="space-y-3">
          {[
            { category: 'Video & Production', tools: 'Synthesia, Camtasia, Adobe Premiere Pro, Clipchamp, iSpring, Amazon Polly, Snagit' },
            { category: 'Authoring & LMS', tools: 'Articulate Storyline, Articulate Rise, TalentLMS, Moodle, MadCap Flare, Adobe FrameMaker (DITA-XML)' },
            { category: 'AI & Automation', tools: 'Claude, Synthesia API, Amazon Polly, Genero Intelligence, JIRA automation' },
            { category: 'Collaboration', tools: 'Confluence, SharePoint, MS Office, Google Workspace, GitHub' },
            { category: 'Project Management', tools: 'Jira, ClickUp, Trello' },
            { category: 'Development', tools: 'Python, SQL, HTML, React, Vite, Tailwind CSS' },
          ].map(({ category, tools }) => (
            <div key={category} className="flex gap-4">
              <span className="w-48 shrink-0 text-sm font-medium text-slate-500">{category}</span>
              <span className="text-sm text-slate-700">{tools}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Education</h2>
        <div className="space-y-2 text-slate-700">
          <p><strong>MSc Business Intelligence & Programme Management</strong> — University College Cork (2:1)</p>
          <p><strong>BEng Computer Science</strong> — Cochin University of Science and Technology (1:1)</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Portfolio</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { href: '/certification', title: 'Certification Programme', desc: 'Two-tier technical certification. Completion up from 50-60% to 75-80%. 75+ certified globally.' },
            { href: '/synthesia', title: 'Synthesia Transformation', desc: 'AI video pipeline. 50% capacity increase, 6 languages launched with more added on customer request, 7+ videos per year.' },
            { href: '/ai-prototype', title: 'AI-Embedded Learning', desc: 'Prototype surfacing 25 BDL videos inside the AI doc assistant at point of need.' },
            { href: '/sample-video', title: 'Sample Instructional Video', desc: 'Self-produced: script, screen recording, Synthesia narration.' },
          ].map(({ href, title, desc }) => (
            <a
              key={href}
              href={href}
              className="block border border-slate-200 rounded-xl p-5 hover:border-indigo-400 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-3">Get in Touch</h2>
        <p className="text-slate-700 mb-3">
          <a href="mailto:sandraantony460@gmail.com" className="text-indigo-600 hover:underline">sandraantony460@gmail.com</a>
          {' · '}
          <a href="https://www.linkedin.com/in/sandra-a-b255707b/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
        </p>
        <p className="text-xs text-slate-400">This portfolio is built in React, Vite, and Tailwind CSS and deployed via Cloudflare Pages.</p>
      </section>
    </main>
  )
}
