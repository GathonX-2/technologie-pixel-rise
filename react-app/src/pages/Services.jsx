import { ArrowRight, Sparkles, Layers, Workflow } from 'lucide-react';
import { services, expertiseCards, stats, headerImages } from '../data/content.js';

const deliveryTracks = [
  {
    title: 'Brand-to-Product',
    text: 'Nous alignons identité de marque et interfaces digitales pour une expérience cohérente du site au produit.',
    items: ['Audit CX + UI Kit', 'Design système évolutif', 'Prototypage immersif'],
  },
  {
    title: 'Platform Engineering',
    text: 'Architecture React modulaire, API, intégrations tierces et observabilité pour des plateformes scalables.',
    items: ['Architecture headless', 'CI/CD sécurisé', 'Monitoring en temps réel'],
  },
  {
    title: 'Growth Ops',
    text: 'Activation produit, analytics, optimisation funnel et automatisation marketing pour accélérer l’adoption.',
    items: ['Dashboards & data layer', 'AB testing & CRO', 'Playbooks d’automatisation'],
  },
];

const craftStatements = [
  {
    title: 'Immersion stratégique',
    description:
      'Workshops en petits comités pour aligner enjeux business, audiences, tonalité de marque et indicateurs à impacter.',
  },
  {
    title: 'Design observatoire',
    description:
      'Explorations créatives (motion, 3D, micro-interactions) validées chaque semaine avec prototypes haute fidélité.',
  },
  {
    title: 'Exécution orchestrée',
    description:
      'Pipeline React/Tailwind, QA multi-device et pilotage post-lancement pour maintenir la performance.',
  },
];

export default function Services() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-5">
          <p className="badge text-primary">Services Signature</p>
          <h1 className="font-display text-4xl leading-tight">
            Des solutions technologiques taillées pour les directions ambitieuses.
          </h1>
          <p className="text-lg text-white/70">
            Nous concevons et industrialisons des expériences digitales premium qui boostent la croissance,
            fluidifient vos parcours clients et sécurisent vos assets.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary text-base">
              Planifier un atelier
              <ArrowRight size={18} />
            </button>
            <button className="btn-pill border border-white/10">Télécharger la brochure</button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-[120px]" />
          <img
            src={headerImages.servicesHero || '/assets/images/service.jpg'}
            alt="Services"
            className="relative z-10 h-full rounded-[32px] border border-white/10 object-cover"
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="badge">Champs d’intervention</p>
            <h2 className="font-display text-3xl">De la stratégie produit à l’optimisation continue</h2>
            <p className="text-white/70">
              Chaque offre est pensée pour résoudre un problème précis : acceleration produit, sécurisation, croissance
              ou transformation interne.
            </p>
          </div>
          <button className="btn-pill border border-white/10">Discuter d’une mission</button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`rounded-3xl border border-white/10 p-6 ${
                idx === 0 ? 'bg-gradient-to-b from-primary/20 via-white/5 to-transparent' : 'bg-white/5'
              }`}
            >
              <service.icon className="text-primary" size={26} />
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery tracks */}
      <section className="rounded-[36px] border border-white/10 bg-surface-soft/70 p-10 shadow-soft">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="badge inline-flex justify-center">Blueprint Delivery</p>
          <h2 className="font-display text-3xl">Trois trajectoires pour accélérer vos roadmaps</h2>
          <p className="text-white/70">
            Sélectionnez la formule adaptée à votre cycle actuel, nous assemblons ensuite l’équipe dédiée (designer,
            lead dev, PM, analyste data).
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deliveryTracks.map((track) => (
            <div key={track.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm">
              <h3 className="text-lg font-semibold text-white">{track.title}</h3>
              <p className="mt-2 text-white/70">{track.text}</p>
              <ul className="mt-4 space-y-2 text-white/75">
                {track.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise cards */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="badge">Capacités avancées</p>
          <h2 className="font-display text-3xl">Des expertises pensées pour les DSI et directions marketing</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl border border-white/10 p-5 ${
                card.highlight ? 'bg-primary/80 text-white' : 'bg-white/5'
              }`}
            >
              <card.icon className={`text-primary ${card.highlight ? '!text-white' : ''}`} size={22} />
              <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm text-white/70">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Craft */}
      <section className="grid gap-10 md:grid-cols-[1.2fr,0.8fr] rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-10">
        <div className="space-y-6">
          <p className="badge text-primary">Méthodologie artisanale</p>
          <h2 className="font-display text-3xl">Un accompagnement orchestral</h2>
          <div className="space-y-5">
            {craftStatements.map((craft) => (
              <div key={craft.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{craft.title}</h3>
                <p className="text-sm text-white/70">{craft.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-night/80 p-8 shadow-glow">
          <div className="flex items-center gap-3">
            <Sparkles className="text-accent" size={28} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Lab immersif</p>
              <h3 className="text-2xl font-semibold text-white">Sessions premium</h3>
            </div>
          </div>
          <p className="mt-4 text-white/70">
            3 jours en immersion avec vos équipes pour aligner design system, tech stack et process d’orchestration.
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Livrable</p>
              <p className="text-white font-semibold">Playbook opérationnel + prototypes</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Participants</p>
              <p className="text-white font-semibold">Jusqu’à 6 décideurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
            <item.icon className="mx-auto text-primary" size={24} />
            <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            <p className="text-sm text-white/70">{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
