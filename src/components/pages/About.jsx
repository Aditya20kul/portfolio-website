import { about } from '../../data/about';

export default function About() {
  const { intro, current, previous, education, achievements } = about;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
        About me
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
        {intro}
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-3">
            Current role
          </h2>
          <div className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-l-4 border-l-teal-400 dark:border-l-teal-500 p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-bold text-teal-600 dark:text-teal-400">{current.company}</p>
                <p className="text-slate-700 dark:text-slate-200">{current.title}</p>
              </div>
              <div className="flex flex-col items-end gap-0.5 text-sm text-slate-500 dark:text-slate-400 shrink-0 text-right">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {current.location}
                </span>
                <span>{current.year}</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{current.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {current.techstack.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/50">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-3">
            Previously
          </h2>
          <ul className="space-y-3">
            {previous.map((job, i) => (
              <li
                key={i}
                className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-teal-200/30 dark:border-teal-800/30 p-5 hover:border-teal-400/40 dark:hover:border-teal-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-100">{job.company}</p>
                    <p className="text-slate-600 dark:text-slate-300">{job.title}</p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 text-sm text-slate-500 dark:text-slate-400 shrink-0 text-right">
                    {job.location && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    )}
                    <span>{job.period}</span>
                  </div>
                </div>
                {job.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{job.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.techstack.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/50">{t}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-3">
            Education
          </h2>
          <ul className="space-y-3">
            {education.map((edu, i) => (
              <li
                key={i}
                className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-teal-200/30 dark:border-teal-800/30 p-5 hover:border-teal-400/40 dark:hover:border-teal-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-slate-800 dark:text-slate-100">{edu.institution}</p>
                    <p className="text-slate-400 dark:text-slate-300">{edu.degree}, {edu.branch}</p>
                    {edu.percentage && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Percentage : {edu.percentage}</p>}
                  </div>
                  <div className="flex flex-col items-end gap-0.5 text-sm text-slate-500 dark:text-slate-400 shrink-0 text-right">
                    {edu.location && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {edu.location}
                      </span>
                    )}
                    <span>{edu.year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {achievements && achievements.length > 0 && (
          <div>
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100 mb-3">
              Achievements
            </h2>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-teal-200/30 dark:border-teal-800/30 p-5"
                >
                  <p className="font-medium text-slate-800 dark:text-slate-100">{a.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{a.description}</p>
                  {a.year && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{a.year}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
