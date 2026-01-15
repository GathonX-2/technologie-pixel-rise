import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navMain, navBlogLinks, navPageLinks } from '../data/content.js';

const linkBase =
  'text-sm font-semibold text-white/70 transition px-3 py-2 rounded-full hover:text-white hover:bg-white/5';

function Dropdown({ label, items }) {
  return (
    <div className="relative group">
      <button className={`${linkBase} flex items-center gap-1`}>
        {label}
        <span className="text-xs mt-0.5">▾</span>
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto absolute right-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-surface/90 backdrop-blur p-2 shadow-glow">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-2 text-sm ${
                isActive ? 'bg-primary/20 text-white' : 'text-white/70 hover:bg-white/10'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto mt-6 max-w-6xl rounded-full border border-white/10 bg-night-alt/70 px-5 py-3 backdrop-blur-xl shadow-soft">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-semibold">
              IM
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Nouveau paradigme digital
              </p>
              <p className="font-display text-lg text-white">IM Technologie</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navMain.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'text-white bg-white/10' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Dropdown label="Blog" items={navBlogLinks} />
            <Dropdown label="Pages" items={navPageLinks} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/quote" className="btn-pill border border-white/10">
              Recevoir un devis
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Parler à un expert
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-6xl rounded-3xl border border-white/10 bg-night-alt/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {[...navMain, ...navBlogLinks, ...navPageLinks].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-semibold ${
                    isActive ? 'bg-primary/20 text-white' : 'text-white/70 hover:bg-white/5'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-glow"
            >
              Parler à un expert
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
