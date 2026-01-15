import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Shield,
  LineChart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  services,
  stats,
  featureBullets,
  homeBlogPosts,
  testimonials,
  teamMembersHome,
  headerImages,
  vendorLogos,
} from '../data/content.js';

const atelierPhases = [
  {
    label: '01',
    title: 'Exploration & Vision',
    text: 'Sessions d’immersion pour cartographier votre ambition, vos audiences et vos leviers.',
  },
  {
    label: '02',
    title: 'Design System sur-mesure',
    text: 'Création d’un langage visuel robuste : typographies, composants, micro-interactions.',
  },
  {
    label: '03',
    title: 'Déploiement orchestré',
    text: 'Développement full React + QA, puis lancement orchestré avec vos équipes.',
  },
];

const excellencePillars = [
  {
    title: 'Studio stratégique',
    text: 'Équipe senior (design director, tech lead, brand strategist) dédiée à votre mandat.',
  },
  {
    title: 'Production accélérée',
    text: 'Sprints créatifs orchestrés pour livrer des prototypes tangibles chaque semaine.',
  },
  {
    title: 'Pilotage data',
    text: 'Décisions guidées par les signaux comportementaux et business temps réel.',
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-12 rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            IM Studio · Haute Technologie
          </div>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            Concevons des expériences digitales
            <span className="text-primary"> vibrantes </span>
            qui transforment vos ventes.
          </h1>
          <p className="text-lg text-white/70">
            Nous marions UI d’exception, motion design sensible et architecture React fiable pour les
            marques qui veulent dominer leur catégorie.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/quote" className="btn-primary text-base">
              Lancer un projet
              <ArrowUpRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Explorer nos expertises
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/5 bg-surface/70 p-4 text-sm text-white/70"
              >
                <item.icon className="text-primary" size={22} />
                <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-[120px]" />
          <div className="relative flex flex-col gap-6 rounded-[32px] border border-white/10 bg-surface/80 p-6">
            <img
              src={headerImages.homeHero1}
              alt="Studio"
              className="h-64 w-full rounded-3xl object-cover"
            />
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Studio en action</p>
              <p className="text-white/80">
                Workshops immersifs, maquettes animées et tests utilisateurs pour garantir des parcours
                fluides.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Time to launch</p>
                <p className="text-2xl font-semibold text-white">6 semaines</p>
                <p className="text-sm text-white/60">pour délivrer un MVP premium</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Satisfaction</p>
                <p className="text-2xl font-semibold text-white">98%</p>
                <p className="text-sm text-white/60">post-livraison</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="rounded-3xl border border-white/5 bg-surface/60 px-6 py-6">
        <p className="text-center text-xs uppercase tracking-[0.4em] text-white/40 mb-6">
          Ils avancent avec nous
        </p>
        <div className="grid grid-cols-2 gap-6 text-white/60 sm:grid-cols-3 md:grid-cols-6">
          {vendorLogos.slice(0, 6).map((logo) => (
            <div key={logo} className="flex items-center justify-center opacity-70">
              <img src={logo} alt="Logo partenaire" className="max-h-8 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="badge">Expertises signature</p>
            <h2 className="font-display text-3xl">Mentorship créatif + exécution technique</h2>
            <p className="text-white/70">
              Nos designers et ingénieurs travaillent en binôme pour orchestrer des expériences cohérentes sur
              chaque touchpoint.
            </p>
          </div>
          <Link to="/services" className="btn-pill border border-white/10">
            Voir toutes les offres
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-5"
            >
              <service.icon className="text-primary" size={24} />
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atelier */}
      <section className="rounded-[36px] border border-white/10 bg-surface-soft/70 p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="badge text-primary">Processus immersif</p>
            <h2 className="font-display text-3xl">Atelier haute précision pour équipes ambitieuses</h2>
            <p className="text-white/70">
              Nous gardons le cap sur votre valeur business grâce à un accompagnement rythmé : co-création,
              prototypage, tests, puis industrialisation.
            </p>
            <div className="space-y-4">
              {atelierPhases.map((phase) => (
                <div
                  key={phase.label}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-3xl font-semibold text-white/30">{phase.label}</div>
                  <div>
                    <p className="text-lg font-semibold text-white">{phase.title}</p>
                    <p className="text-sm text-white/70">{phase.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-night/80 p-8 shadow-glow">
            <div className="flex items-start gap-3">
              <Sparkles className="text-accent" size={22} />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Manifesto</p>
                <h3 className="text-2xl font-semibold text-white">Design orchestral</h3>
              </div>
            </div>
            <p className="mt-4 text-white/70">
              Chaque parcours est pensé comme une expérience scénique : rythme, respiration et climax
              émotionnel.
            </p>
            <div className="mt-6 space-y-4">
              {featureBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-primary" size={18} />
                  {item}
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 hover:text-white">
              Télécharger la méthodologie
            </button>
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="grid gap-6 md:grid-cols-3">
        {excellencePillars.map((pillar) => (
          <div key={pillar.title} className="card h-full space-y-3">
            <Shield className="text-primary" size={24} />
            <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
            <p className="text-sm text-white/70">{pillar.text}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="badge">Avis clients</p>
            <h2 className="font-display text-3xl">Ce que disent nos partenaires</h2>
          </div>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 p-3 text-white/70 hover:text-white">
              <ArrowRight size={18} className="rotate-180" />
            </button>
            <button className="rounded-full border border-white/20 p-3 text-white/70 hover:text-white">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-white font-semibold">{item.author}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="badge">Inside IM</p>
            <h2 className="font-display text-3xl">Notes stratégiques & inspirations</h2>
          </div>
          <Link to="/blog" className="btn-pill border border-white/10">
            Voir toutes les analyses
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeBlogPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-44 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">{post.date}</p>
              <h3 className="text-lg font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-white/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <p className="badge">Collectif créatif</p>
          <h2 className="font-display text-3xl">Une team boutique, sélectionnée pour vous</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembersHome.map((member) => (
            <div key={member.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full border border-white/20 object-cover"
              />
              <p className="mt-4 text-lg font-semibold text-white">{member.name}</p>
              <p className="text-sm text-white/70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
