import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Articulos sobre automatizacion, desarrollo de software y tecnologia para negocios.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
            Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ideas y
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              conocimiento
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Articulos sobre automatizacion, desarrollo y como la tecnologia puede transformar tu negocio
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">Proximamente publicaremos contenido.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <time className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('es-GT', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.tags.length > 0 && (
                          <>
                            <span className="text-gray-700">|</span>
                            <div className="flex gap-2">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded border border-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="text-gray-400 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Leer mas
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Conversemos sobre como podemos ayudarte
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
