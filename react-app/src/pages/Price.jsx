import { pricing } from '../data/content.js';

export default function Price() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Investissement</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Des forfaits pensés pour chaque trajectoire</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Nous montons une escouade sur-mesure – design lead, tech lead, product strategist – pour piloter votre projet
          sur des cycles de 6 à 12 semaines.
        </p>
      </section>

      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, idx) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-6 ${
                idx === 1 ? 'border-primary bg-white text-night shadow-glow' : 'border-white/10 bg-white/5 text-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{plan.subtitle}</p>
                  <h3 className={`mt-2 text-2xl font-semibold ${idx === 1 ? 'text-night' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                  {idx === 1 ? 'Recommandé' : 'Flexible'}
                </span>
              </div>

              <div className="mt-6">
                <p className={`text-4xl font-semibold ${idx === 1 ? 'text-night' : 'text-white'}`}>{plan.price}</p>
                <p className={idx === 1 ? 'text-night/70' : 'text-white/60'}>{plan.period}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                {plan.perks.map((perk) => (
                  <div key={perk.label} className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        perk.available ? 'bg-primary' : idx === 1 ? 'bg-night/20' : 'bg-white/20'
                      }`}
                    />
                    <span className={perk.available ? '' : 'text-white/40'}>{perk.label}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-semibold ${
                  idx === 1 ? 'bg-primary text-white' : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Lancer ce plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
