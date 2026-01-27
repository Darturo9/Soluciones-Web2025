import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post no encontrado' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown to HTML conversion
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl font-semibold text-white mt-8 mb-4">${line.slice(4)}</h3>`;
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('# ')) {
          return `<h1 class="text-3xl font-bold text-white mt-10 mb-6">${line.slice(2)}</h1>`;
        }

        // Lists
        if (line.startsWith('- ')) {
          return `<li class="text-gray-300 ml-4">${line.slice(2)}</li>`;
        }

        // Bold text
        let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

        // Links
        processedLine = processedLine.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>'
        );

        // Horizontal rule
        if (line === '---') {
          return `<hr class="border-gray-800 my-8" />`;
        }

        // Empty line
        if (line.trim() === '') {
          return '<br />';
        }

        // Regular paragraph
        return `<p class="text-gray-300 leading-relaxed mb-4">${processedLine}</p>`;
      })
      .join('\n');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
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
                  {post.tags.map((tag) => (
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <article
          className="max-w-3xl mx-auto prose-invert"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Te gusto este articulo?
            </h2>
            <p className="text-gray-400 mb-6">
              Si tienes un proyecto en mente o quieres saber mas sobre como podemos ayudarte, contactanos.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contactar
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
