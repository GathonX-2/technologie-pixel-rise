import { Link } from 'react-router-dom';
import {
  blogPosts,
  blogCategories,
  blogRecentPosts,
  blogTags,
  headerImages,
} from '../data/content.js';

const filters = ['All', 'Innovation', 'Cloud', 'IA', 'Stratégie'];

export default function Blog() {
  return (
    <div className="space-y-16">
      <section className="rounded-[40px] border border-white/10 bg-night-alt/70 p-10 shadow-soft text-center">
        <p className="badge inline-flex justify-center">Magazine</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">Insights, frameworks et retours de missions</h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          Analyses concrètes, playbooks et inspirations visuelles pour guider vos décisions produit & marketing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`rounded-full border border-white/15 px-4 py-2 text-sm ${
                idx === 0 ? 'bg-white text-night font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[1.6fr,0.8fr]">
        <div className="space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-white/10 bg-white/5 shadow-soft transition hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                  <span className="absolute top-4 left-4 rounded-full bg-night/80 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                    {post.badge}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex text-xs uppercase tracking-[0.3em] text-white/50 gap-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <p className="text-sm text-white/70">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary"
                  >
                    Lire l’article
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center">
            <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm">
              {['←', '1', '2', '3', '→'].map((item, idx) => (
                <button
                  key={item}
                  className={`h-10 w-10 rounded-full ${
                    idx === 1 ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Recherche</p>
            <div className="flex rounded-2xl border border-white/10 bg-night/70">
              <input
                className="w-full rounded-l-2xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                placeholder="Sujet, mot-clé..."
              />
              <button className="rounded-r-2xl bg-primary px-4">Go</button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Catégories</p>
            <div className="flex flex-col gap-2">
              {blogCategories.map((category) => (
                <span key={category} className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80">
                  {category}
                  <span className="text-white/40">→</span>
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Articles récents</p>
            <div className="space-y-3">
              {blogRecentPosts.map((post) => (
                <div key={post.title} className="flex gap-3 rounded-2xl bg-night/80 p-3">
                  <img src={post.image} alt={post.title} className="h-14 w-14 rounded-xl object-cover" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">{post.date}</p>
                    <p className="text-sm font-semibold text-white">{post.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <img src="/assets/images/blog-1.jpg" alt="Blog visuel" className="rounded-3xl object-cover" />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Tags</p>
            <div className="flex flex-wrap gap-2">
              {blogTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
