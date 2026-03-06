import { nowData } from '../../data/now';

export default function Now() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in">
      <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
        Currently
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-10">
        What I’m up to right now. Updated when it changes.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {nowData.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 border-teal-200/40 dark:border-teal-800/40 p-4 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mb-1">
              {item.label}
            </p>
            <p className="text-slate-700 dark:text-slate-200">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
