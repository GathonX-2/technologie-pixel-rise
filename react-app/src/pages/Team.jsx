import { teamMembersPage } from '../data/content.js';

const disciplines = ['Design leadership', 'Engineering', 'Product strategy', 'Data & Insight'];

export default function Team() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Collectif</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Un studio boutique aux talents seniors</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Chaque mission s’appuie sur un noyau de 6 experts – design director, lead dev, PM – pour garantir vitesse,
          exigence et vision stratégique.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {disciplines.map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-center text-white/80">
            {item}
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {teamMembersPage.map((member, idx) => (
          <div key={`${member.name}-${idx}`} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-center">
            <img
              className="mx-auto h-40 w-full rounded-2xl object-cover"
              src={member.avatar}
              alt={member.name}
            />
            <p className="mt-4 text-lg font-semibold text-white">{member.name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
