import { Project } from '@/types/project';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.shortDescription.includes('Próximamente');

  const getCategoryColor = (category: Project['category']) => {
    const colors = {
      website: 'from-blue-500 to-cyan-500',
      ecommerce: 'from-purple-500 to-pink-500',
      app: 'from-green-500 to-teal-500',
      automation: 'from-orange-500 to-red-500',
      mobile: 'from-indigo-500 to-purple-500',
    };
    return colors[category] || 'from-blue-500 to-purple-500';
  };

  const getCategoryLabel = (category: Project['category']) => {
    const labels = {
      website: 'Sitio Web',
      ecommerce: 'E-commerce',
      app: 'Aplicación',
      automation: 'Automatización',
      mobile: 'App Móvil',
    };
    return labels[category];
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      {/* Image Container */}
      <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${getCategoryColor(project.category)}`}>
        {/* Project Image */}
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Screenshot del proyecto ${project.title}`}
              fill
              className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          </>
        ) : (
          <>
            {/* Fallback gradient with pattern */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            ></div>

            {/* Icon Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">
                {project.category === 'website' && '🌐'}
                {project.category === 'ecommerce' && '🛒'}
                {project.category === 'app' && '📱'}
                {project.category === 'automation' && '⚙️'}
                {project.category === 'mobile' && '📲'}
              </div>
            </div>
          </>
        )}

        {/* Hover Effect - Preview Link */}
        {!isComingSoon && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          >

          </a>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Success Indicator / Coming Soon Badge */}
        <div className="absolute bottom-4 left-4 z-10">
          {isComingSoon ? (
            <div className="flex items-center gap-1 bg-orange-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full animate-pulse">
              <span className="text-white text-xs font-bold">🚀 Próximamente</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-xs font-bold">✓ Exitoso</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            {project.client.charAt(0)}
          </div>
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {project.client}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
            Tecnologías
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          {isComingSoon ? (
            <div className="w-full px-4 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-center rounded-xl font-bold text-sm opacity-60 cursor-not-allowed">
              Próximamente
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
            >
              Visitar la Página
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
