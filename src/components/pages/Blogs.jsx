import { blogs } from '../../data/blogs';

export default function Blogs() {

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
        Blogs
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Notes and guides I&apos;ve written on Medium.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {blogs.map((blog, i) => (
          <article
            key={i}
            className="rounded-xl bg-white dark:bg-slate-800/80 border border-teal-200/50 dark:border-teal-800/50 overflow-hidden hover:border-teal-400/60 dark:hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 animate-fade-in-up opacity-0 flex flex-col"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {blog.previewImageUrl && (
              <a
                href={blog.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden"
              >
                <img
                  src={blog.previewImageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </a>
            )}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                {blog.blogTitle}
              </h2>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={blog.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-colors"
                >
                  Read on Medium
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
