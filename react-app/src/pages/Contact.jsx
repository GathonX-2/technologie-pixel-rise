import { useState } from 'react';
import { Send, Clock, MessageCircle } from 'lucide-react';
import { contactCards } from '../data/content.js';

const laneItems = [
  'Kick-off workshop (2h) pour comprendre votre contexte',
  'Audit express UX + stack technique remis sous 5 jours',
  'Roadmap d’intégration et staffing de l’équipe cœur',
];

export default function Contact() {
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
        <p className="badge inline-flex justify-center">Prise de contact</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Une team senior à portée de message</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Co-construisons votre prochaine release : nous répondons avec un plan d’action clair, budget et délais inclus.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {contactCards.map(({ title, detail, icon: Icon }) => (
          <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Icon size={20} />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">{title}</p>
            <p className="text-lg font-semibold text-white">{detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-transparent to-white/5 p-8 space-y-6">
          <div>
            <p className="badge">Process express</p>
            <h2 className="mt-3 font-display text-3xl">Onboard en moins de 10 jours</h2>
          </div>
          <p className="text-white/70">
            Notre studio fonctionne comme une unité commando. Dès votre prise de contact, un duo design + stratégie prend
            la main et prépare la mission.
          </p>
          <div className="space-y-3">
            {laneItems.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                <Clock size={18} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/90 p-8 text-night shadow-soft">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-night/50">
            <MessageCircle size={16} />
            Formulaire direct
          </div>
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              className="w-full rounded-2xl border border-night/10 px-4 py-3 text-sm"
              placeholder="Nom complet"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                required
                className="rounded-2xl border border-night/10 px-4 py-3 text-sm"
                placeholder="Email professionnel"
              />
              <input
                type="text"
                className="rounded-2xl border border-night/10 px-4 py-3 text-sm"
                placeholder="Entreprise"
              />
            </div>
            <textarea
              rows="4"
              className="rounded-2xl border border-night/10 px-4 py-3 text-sm"
              placeholder="Décrivez votre projet, vos KPI, vos contraintes"
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

      <section className="rounded-3xl overflow-hidden border border-white/10 shadow-soft">
        <iframe
          title="Port de Nosy Be"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.0737748555475!2d48.27822667393005!3d-13.407758768730151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2213c77b5e0c40c7%3A0x6a54c688f153128a!2sPort%20de%20Nosy%20Be!5e0!3m2!1sen!2smg!4v1733205301684!5m2!1sen!2smg"
          style={{ border: 0, width: '100%', minHeight: '360px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
