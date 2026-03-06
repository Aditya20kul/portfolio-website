import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/about';
import { skillPills } from '../../data/skills';
import myImage from '../../assets/my-image.png';

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 overflow-hidden">
      {/* Background: mint-tinted gradient + grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-teal-50/30 to-slate-100 dark:from-slate-900 dark:via-teal-950/20 dark:to-slate-950" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #0d9488 1px, transparent 1px),
            linear-gradient(to bottom, #0d9488 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center animate-fade-in">
        {/* Profile photo */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-teal-400/30 to-teal-600/20 dark:from-teal-400/30 dark:to-teal-700/40 overflow-hidden mb-8 mx-auto flex items-center justify-center border-2 border-teal-300/40 dark:border-teal-500/40 shadow-lg shadow-teal-500/10 dark:shadow-teal-500/10">
          <img
            src={myImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
          Fullstack Engineer
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-3 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
          I build scalable backend services with Java, Spring Boot and ship UIs with React & TypeScript.
        </p>

        {/* Skill pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-stagger">
          {skillPills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-600/40 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-md hover:shadow-teal-500/10 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-300 text-white font-medium transition-all hover:shadow-lg hover:shadow-teal-500/25"
          >
            View my work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href="https://drive.google.com/file/d/1IJlUwBFIkxSM7LVO97Xtsvh9hMHlXI09/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500/15 dark:bg-teal-400/20 border border-teal-400/50 dark:border-teal-400/40 text-teal-700 dark:text-teal-200 font-medium hover:bg-teal-500/25 dark:hover:bg-teal-400/30 hover:border-teal-500/60 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-teal-400/50 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
