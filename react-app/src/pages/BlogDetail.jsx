import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import {
  blogPosts,
  blogCategories,
  blogRecentPosts,
  blogTags,
  blogComments,
} from '../data/content.js';

const takeaways = [
  'Orchestrer la transformation en alignant Produit, Tech et Brand.',
  'Construire un design system modulaire pour accélérer les livraisons.',
  'Mesurer chaque itération grâce à un socle data fiable.',
];

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="space-y-6">
        <p className="badge">Blog</p>
        <h1 className="text-3xl font-semibold text-white">Article introuvable</h1>
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} />
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft">
        <p className="badge">Perspective</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-white/50">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.category}</span>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.8fr,1fr]">
        <article className="space-y-8">
          <img className="w-full rounded-[32px] border border-white/10 object-cover" src={post.image} alt={post.title} />
          <div className="space-y-4 text-white/80">
            <p>
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero
              labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod.
            </p>
            <p>
              Nous observons que les marques performantes orchestrent leurs produits autour d’un design system vivant,
              afin d’assurer des expériences cohérentes quel que soit le canal. Cette discipline permet d’accélérer la
              production et de réduire les dettes techniques.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Synthèse</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {takeaways.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-white/80">
            <p>
              Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur
              elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo
              dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et.
            </p>
            <p>
              Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus
              sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed.
            </p>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Catégories</p>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((category) => (
                <span key={category} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Articles récents</p>
            {blogRecentPosts.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-2xl bg-night/80 p-3">
                <img src={item.image} alt={item.title} className="h-14 w-14 rounded-xl object-cover" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{item.date}</p>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <h3 className="font-display text-2xl">Commentaires</h3>
        <div className="space-y-6">
          {blogComments.map((comment, idx) => (
            <div
              key={`${comment.author}-${idx}`}
              className={`rounded-3xl border border-white/10 bg-white/5 p-5 ${
                comment.isReply ? 'ml-6 border-dashed' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={comment.avatar} alt={comment.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-white">{comment.author}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{comment.date}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80">{comment.text}</p>
              <button className="mt-3 rounded-full border border-white/10 px-4 py-1 text-xs font-semibold text-white/80 hover:text-white">
                Répondre
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Laisser un commentaire</p>
        <form className="mt-4 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            className="w-full rounded-2xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/50"
            placeholder="Votre nom"
          />
          <input
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/50"
            placeholder="Votre email"
          />
          <input
            type="text"
            className="md:col-span-2 w-full rounded-2xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/50"
            placeholder="Votre site"
          />
          <textarea
            rows="5"
            className="md:col-span-2 w-full rounded-2xl border border-white/10 bg-night px-4 py-3 text-sm text-white placeholder:text-white/50"
            placeholder="Commentaire"
          />
          <button className="md:col-span-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
            Publier
          </button>
        </form>
      </section>
    </div>
  );
}
