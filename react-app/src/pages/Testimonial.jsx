import { testimonialsPage, vendorLogos } from '../data/content.js';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonial() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Evidence</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Ce que disent nos partenaires</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Des CMO, CPO et CEOs qui nous confient leurs refontes produit, leurs design systems et leurs plateformes
          e-commerce sur-mesure.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {testimonialsPage.map((item) => (
          <div key={item.author} className="rounded-3xl border border-white/10 bg-white/90 p-6 text-night">
            <div className="flex items-center gap-3 border-b border-night/10 pb-3">
              <img src={item.avatar} alt={item.author} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h4 className="text-lg font-semibold">{item.author}</h4>
                <p className="text-xs uppercase tracking-[0.3em] text-night/50">{item.role}</p>
              </div>
            </div>
            <Quote className="mt-4 text-primary" size={22} />
            <p className="mt-3 text-sm text-night/80">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
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
