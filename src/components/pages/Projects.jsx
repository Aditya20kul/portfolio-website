import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-8">
        Projects
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-teal-200/40 dark:border-teal-800/40 p-5 hover:border-teal-400/60 dark:hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {project.image && (
              <div className="aspect-video rounded-md bg-slate-100 dark:bg-slate-700 mb-4 overflow-hidden">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="text-lg font-medium text-slate-800 dark:text-slate-100">
                  {project.title}
                </h2>
                {project.year && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">{project.year}</span>
                )}
              </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
