import { Boxes, Award, Users, PhoneCall, Sparkles } from 'lucide-react';
import { vendorLogos } from '../data/content.js';

const leftFeatures = [
  {
    title: 'Design Leadership',
    description: 'Directeurs artistiques et design system leads pour imaginer un langage premium.',
    icon: Boxes,
  },
  {
    title: 'Brand Storytelling',
    description: 'Narration visuelle + copywriting pour aligner le produit sur votre positionnement.',
    icon: Award,
  },
];

const rightFeatures = [
  {
    title: 'Engineering Ops',
    description: 'Tech leads React, architecture headless, intégrations API & data layer.',
    icon: Users,
  },
  {
    title: 'Support Continu',
    description: 'Squad agile disponible pour la maintenance évolutive et les itérations.',
    icon: PhoneCall,
  },
];

export default function Feature() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Différentiateurs</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Des fonctionnalités pensées comme des expériences</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Nous orchestrons design, motion et engineering pour créer un produit vivant, réactif et premium à chaque
          interaction.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          {leftFeatures.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-white/5 p-6 text-center">
          <Sparkles className="mx-auto text-primary" size={26} />
          <h3 className="mt-4 font-display text-2xl">Expérience orchestrée</h3>
          <p className="mt-3 text-white/70">
            Animations maîtrisées, micro-interactions, temps de chargement optimisés et adaptation responsive pensée en
            détail.
          </p>
        </div>

        <div className="space-y-6">
          {rightFeatures.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {vendorLogos.map((logo) => (
            <div key={logo} className="flex items-center justify-center rounded-2xl bg-white/90 p-4">
              <img src={logo} alt="Vendor" className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
