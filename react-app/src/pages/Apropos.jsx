import { CheckCircle2, Sparkles, ArrowUpRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  featureBullets,
  stats,
  solutionsTechnologiques,
  headerImages,
} from '../data/content.js';

const timeline = [
  {
    year: '2014',
    title: 'Studio naissant',
    text: 'Premiers MVP pour des startups SaaS, focus sur l’expérimentation rapide.',
  },
  {
    year: '2018',
    title: 'Scale-up mode',
    text: 'Création d’une practice design system + intégration cloud pour marques internationales.',
  },
  {
    year: '2024',
    title: 'Collectif boutique',
    text: 'Équipe senior resserrée, mandatée pour des refontes complètes orientées business.',
  },
];

export default function Apropos() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5">
          <p className="badge text-primary">Studio & Manifesto</p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            10 ans à façonner des expériences digitales iconiques.
          </h1>
          <p className="text-lg text-white/70">
            Nous combinons vision stratégique, design sensible et excellence technique pour construire des plateformes
            mémorables et performantes.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {featureBullets.slice(0, 4).map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                <CheckCircle2 className="mr-2 inline-flex text-primary" size={16} />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary text-base">
              Co-créer un plan
              <ArrowUpRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Rencontrer l’équipe
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-[120px]" />
          <img
            src={headerImages.aboutHero}
            alt="À propos"
            className="relative z-10 h-full rounded-[32px] border border-white/10 object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <item.icon className="mx-auto text-primary" size={24} />
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            <p className="text-sm text-white/70">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-10 md:grid-cols-2">
        <div className="space-y-4">
          <p className="badge text-primary">Notre ADN</p>
          <h2 className="font-display text-3xl">Un studio hybride design + technologie</h2>
          <p className="text-white/70">
            Chaque projet est piloté par un duo design director / tech lead pour garantir la cohérence entre désirabilité,
            faisabilité et viabilité business.
          </p>
          <div className="flex gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
              <Clock className="text-primary" size={20} />
              <p className="mt-2 font-semibold text-white">Sprints de 2 semaines</p>
              <p className="text-white/60">Cadence claire & livrables tangibles</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
              <Users className="text-primary" size={20} />
              <p className="mt-2 font-semibold text-white">Équipe senior</p>
              <p className="text-white/60">Pas de juniors en roue libre</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Timeline</p>
          <div className="mt-5 space-y-4">
            {timeline.map((step) => (
              <div key={step.year} className="flex gap-4">
                <div className="text-xl font-semibold text-white/40">{step.year}</div>
                <div>
                  <p className="text-lg font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-white/70">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-3">
          <p className="badge">Solutions clés</p>
          <h2 className="font-display text-3xl">Technologies sur-mesure pour votre croissance</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {solutionsTechnologiques.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <item.icon className="mx-auto text-primary" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
