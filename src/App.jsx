import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
} from 'lucide-react'

const currentYear = new Date().getFullYear()

const projects = [
  {
    name: 'NeuroWrite (In Progress)',
    description:
      'A health-tech screening prototype analyzing handwriting patterns. Focused on relational data structure, privacy boundaries for sensitive inputs, and low-friction diagnostic flows.',
    tags: ['Python', 'SQL', 'Data Modeling', 'UI/UX'],
    href: 'https://www.linkedin.com/posts/ahmed-benali-72a040334_twisenight-twise-challenge-activity-7326287337271816192-WPsd',
    award: '4th Place / 100 Teams · TWiSE Night Open Challenge',
  },
  {
    name: 'Mobile-app--B2B-React',
    description:
      'Cross-platform B2B mobile application with modular components, role-based user views, and responsive client-side state management.',
    tags: ['React Native / React', 'JavaScript', 'REST APIs'],
    href: 'https://github.com/ahmedbenalipro/Mobile-app--B2B-React',
  },
  {
    name: 'Website-B2B-B2C-frontend-react-',
    description:
      'Dual-audience web platform separating B2B administrative workflows from B2C user portals, with structured form validation and clean API integration.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    href: 'https://github.com/ahmedbenalipro/Website-B2B-B2C-frontend-react-',
  },
]

const experience = [
  {
    title: 'Web Development Intern',
    organization: 'SYNC',
    date: '2026',
    description:
      'Developed responsive user interfaces, integrated full-stack features, and managed end-to-end web deliverables with high autonomy.',
  },
  {
    title: 'Computer Science & Engineering',
    organization: 'ISSAT Sousse',
    date: 'PREPARATORY TRACK',
    description:
      'Focused on software engineering, algorithms, relational databases, and systems architecture.',
  },
  {
    title: 'B2B/B2C Client Operations',
   organization: 'Multinational Call Company',
    date: 'MULTILINGUAL',
    description:
      'Translated complex user requirements into actionable technical specifications through communication in English, French, and Arabic.',
  },
]

const stack = [
  {
    title: 'Frontend & Mobile',
    items: ['React', 'JavaScript (ES6+)', 'HTML / CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Python', 'Java', 'C / C++', 'SQL', 'RESTful APIs'],
  },
  {
    title: 'Infrastructure & Tools',
    items: ['Docker', 'Linux', 'Git / GitHub', 'CCNA fundamentals'],
  },
]

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-4">
      <h2 className="text-xl font-medium tracking-tight text-[#111]">{title}</h2>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#888]">
        {eyebrow}
      </span>
    </div>
  )
}

function App() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('b.a.ahmedpro@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Unable to copy email address:', error)
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111] antialiased">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="flex items-center justify-between border-b border-[#E5E5E5] py-5">
          <a
            href="#top"
            className="text-sm font-medium tracking-tight transition-colors hover:text-[#666]"
          >
            Ahmed Ben Ali
          </a>
          <nav aria-label="Main navigation" className="flex gap-4 sm:gap-7">
            {['Work', 'Experience', 'Stack', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-[#666] transition-colors hover:text-[#111] sm:text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <main id="top">
          <section className="animate-fade-in border-b border-[#E5E5E5] py-20 sm:py-28">
            <p className="mb-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#666]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#777]" aria-hidden="true" />
              Available for opportunities
            </p>
            <h1 className="max-w-2xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-7xl">
              Full-Stack &amp; Mobile Developer
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
              Building privacy-conscious web and mobile applications with
              structured backend logic, real-time state, and intuitive
              interfaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#666]">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} strokeWidth={1.6} aria-hidden="true" />
                Sousse, Tunisia
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-[#C7C7C7] sm:block" />
              <span>Open to remote &amp; international opportunities</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-5">
              <a
                href="https://github.com/ahmedbenalipro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#333] transition-colors hover:text-[#888]"
              >
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-benali-72a040334"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#333] transition-colors hover:text-[#888]"
              >
                LinkedIn
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <a
                href="mailto:b.a.ahmedpro@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#333] transition-colors hover:text-[#888]"
              >
                <Mail size={16} strokeWidth={1.7} aria-hidden="true" />
                Email
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
            <a
              href="#work"
              aria-label="Scroll to selected work"
              className="mt-16 inline-flex text-[#888] transition-colors hover:text-[#111]"
            >
              <ArrowDown size={17} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </section>

          <section id="work" className="scroll-mt-8 border-b border-[#E5E5E5] py-16 sm:py-20">
            <SectionHeading eyebrow="01 / Selected projects" title="Selected work" />
            <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
              {projects.map((project, index) => (
                <article key={project.name} className="group py-6 sm:py-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <p className="mb-2 font-mono text-[10px] tracking-wide text-[#999]">
                        0{index + 1}
                      </p>
                      <h3 className="break-words text-base font-medium tracking-tight sm:text-lg">
                        {project.name}
                      </h3>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className="mt-1 shrink-0 text-[#888] transition-colors group-hover:text-[#111]"
                    >
                      <ArrowUpRight size={18} strokeWidth={1.5} />
                    </a>
                  </div>
                  {project.award && (
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#777]">
                      {project.award}
                    </p>
                  )}
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#666]">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-[#E5E5E5] px-2 py-1 font-mono text-[10px] text-[#666]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-8 border-b border-[#E5E5E5] py-16 sm:py-20"
          >
            <SectionHeading eyebrow="02 / Background" title="Experience & education" />
            <div className="divide-y divide-[#E5E5E5]">
              {experience.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-8"
                >
                  <div>
                    <h3 className="text-sm font-medium">
                      {item.title}
                      <span className="font-normal text-[#777]"> · {item.organization}</span>
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#666]">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#888] sm:pt-1">
                    {item.date}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="scroll-mt-8 border-b border-[#E5E5E5] py-16 sm:py-20">
            <SectionHeading eyebrow="03 / Tools" title="Core stack" />
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {stack.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#888]">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-[#333]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer id="contact" className="scroll-mt-8 py-12 sm:py-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#888]">
                Have a project in mind?
              </p>
              <a
                href="mailto:b.a.ahmedpro@gmail.com"
                className="mt-3 inline-block text-xl font-medium tracking-tight transition-colors hover:text-[#666]"
              >
                Let’s talk.
              </a>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#666]">
                <a
                  href="mailto:b.a.ahmedpro@gmail.com"
                  className="transition-colors hover:text-[#111]"
                >
                  b.a.ahmedpro@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  className="inline-flex items-center gap-1.5 px-1 py-1 text-xs text-[#777] transition-colors hover:text-[#111]"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
            <div className="flex gap-5 text-sm text-[#666]">
              <a
                href="https://github.com/ahmedbenalipro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111]"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-benali-72a040334"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111]"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <p className="mt-12 border-t border-[#E5E5E5] pt-5 font-mono text-[10px] text-[#999]">
            © {currentYear} Ahmed Ben Ali
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
