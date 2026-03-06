import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/contact', label: 'Contact' },
  { to: '/now', label: 'Now' },
];

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 flex flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 border-t-2 border-t-teal-400/30 dark:border-t-teal-500/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                  location.pathname === to
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${
                  location.pathname === to
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 border-t-teal-400/20 dark:border-t-teal-500/20 py-3 mt-auto bg-slate-50/50 dark:bg-slate-900/50">
        <div className="max-w-2xl mx-auto px-2 sm:px-2 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Aditya Kulkarni.
        </div>
      </footer>
    </div>
  );
}
