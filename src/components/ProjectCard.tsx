import { Project } from '@/types/project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.shortDescription.includes('en desarrollo') || project.link === '';

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
      app: 'Aplicacion',
      automation: 'Automatizacion',
      mobile: 'App Movil',
    };
    return labels[category];
  };

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500">
      {/* Image Container */}
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${getCategoryColor(project.category)}`}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Screenshot del proyecto ${project.title}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {getCategoryLabel(project.category)}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-4 left-4 z-10">
          {isComingSoon ? (
            <span className="px-3 py-1 bg-amber-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              En desarrollo
            </span>
          ) : (
            <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              En vivo
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Client */}
        <p className="text-sm text-gray-500 mb-2">
          {project.client}
        </p>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 text-gray-400 text-xs font-medium rounded border border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs font-medium rounded border border-gray-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-800">
          {isComingSoon ? (
            <div className="w-full px-4 py-3 bg-gray-800 text-gray-500 text-center rounded-lg font-medium text-sm cursor-not-allowed">
              Proximamente
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-3 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Ver proyecto
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
