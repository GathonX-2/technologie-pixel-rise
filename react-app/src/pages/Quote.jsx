import { useState } from 'react';
import { Send, Phone, Clock } from 'lucide-react';

const services = ['Audit CX', 'Design System', 'Refonte Produit', 'Platform Engineering'];

export default function Quote() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      e.target.reset();
    }, 600);
  };

  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Co-création</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Parlons de votre prochaine release</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Partagez votre contexte, vos KPI et vos contraintes opérationnelles : nous vous envoyons un plan d’action précis
          sous 48h.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[1fr,1.1fr]">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-8 space-y-6">
          <div>
            <p className="badge text-primary">Pourquoi nous contacter</p>
            <h2 className="mt-3 font-display text-3xl">Workshops d’onboarding et feuille de route</h2>
          </div>
          <p className="text-white/70">
            Un duo senior (strategy + design) décortique votre besoin, identifie les risques et propose les leviers
            critiques sur 6 semaines. Nous pouvons ensuite activer l’équipe complète si vous validez la proposition.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
              <Clock className="text-primary" size={20} />
              <p className="mt-2 font-semibold text-white">Réponse sous 48h</p>
              <p className="text-white/60">Plan d’action + estimation</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm">
              <Phone className="text-primary" size={20} />
              <p className="mt-2 font-semibold text-white">Hotline direct</p>
              <p className="text-white/60">+261 (32) 00 000 00</p>
            </div>
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/90 p-8 text-night shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-night/50">Formulaire</p>
          <form className="mt-4 grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              className="w-full rounded-2xl border border-night/10 px-4 py-3 text-sm"
              placeholder="Nom complet"
            />
            <input
              type="email"
              required
              className="w-full rounded-2xl border border-night/10 px-4 py-3 text-sm"
              placeholder="Email professionnel"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                className="rounded-2xl border border-night/10 px-4 py-3 text-sm"
                placeholder="Entreprise"
              />
              <select className="rounded-2xl border border-night/10 px-4 py-3 text-sm" defaultValue="Service">
                <option disabled>Service</option>
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </div>
            <textarea
              rows="4"
              className="rounded-2xl border border-night/10 px-4 py-3 text-sm"
              placeholder="Décrivez votre projet"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-night px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              <Send size={16} />
              {loading ? 'Envoi...' : 'Recevoir un plan'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
