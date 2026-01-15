import {
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  address,
  phone,
  email,
  footerQuickLinks,
  footerPopularLinks,
} from '../data/content.js';

const socialLinks = [
  { Icon: Twitter, href: '#' },
  { Icon: Facebook, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Instagram, href: '#' },
];

const infoCards = [
  { Icon: MapPin, label: 'Adresse', value: address },
  { Icon: Phone, label: 'Téléphone', value: phone },
  { Icon: Mail, label: 'Email', value: email },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-night-alt/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
        <section className="glass relative overflow-hidden px-6 py-10">
          <div className="absolute inset-0 bg-glow-primary opacity-20 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="badge text-primary">Prêt à accélérer</p>
              <h2 className="text-3xl font-semibold font-display text-white">
                Projetez votre marque vers un digital haut de gamme
              </h2>
              <p className="text-white/70 max-w-xl">
                Nous concevons des expériences immersives alliées à une performance technique irréprochable.
                Prenez un rendez-vous stratégique pour aligner vos objectifs et notre vision créative.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-night/80 p-6 shadow-glow">
              <div className="flex items-center gap-3">
                <Sparkles className="text-accent" size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Meeting privé</p>
                  <p className="text-lg font-semibold text-white">30 min avec un strategist</p>
                </div>
              </div>
              <Link
                to="/quote"
                className="inline-flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-white transition hover:bg-white/10"
              >
                <span>Réserver un créneau</span>
                <ArrowUpRight size={18} />
              </Link>
              <form className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-night/60 px-4 py-3">
                  <input
                    type="email"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                    placeholder="Votre email professionnel"
                  />
                </div>
                <button className="w-full rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow">
                  Recevoir notre manifeste
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-semibold">
                IM
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Agence de design technologique</p>
                <p className="text-2xl font-display text-white">IM Technologie</p>
              </div>
            </Link>
            <p className="text-white/70 max-w-2xl">
              Nous accompagnons les directions ambitieuses à imaginer des plateformes digitales sur-mesure,
              combinant esthétique haut de gamme, storytelling immersif et fiabilité technique.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {infoCards.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-surface/60 p-4 text-sm text-white/75"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                    <Icon size={14} />
                    {label}
                  </div>
                  <p className="mt-2 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white hover:bg-white/20"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Navigation</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="inline-flex items-center gap-2 hover:text-white">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Services</p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {footerPopularLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="inline-flex items-center gap-2 hover:text-white">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} IM Technologie. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-white/60">
            <a href="#" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white">
              Press Kit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
