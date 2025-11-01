'use client';

import { useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProyectosPage() {
  // Calculate statistics
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const categories = new Set(projects.map(p => p.category)).size;
    const technologies = new Set(projects.flatMap(p => p.technologies)).size;

    return { totalProjects, categories, technologies };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ✨ Portafolio Profesional
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Nuestros Proyectos
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transformando ideas en soluciones digitales exitosas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-lg">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <span className="text-4xl font-bold">{stats.totalProjects}+</span>
                <span className="text-blue-200">Proyectos</span>
              </div>
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                <span className="text-4xl font-bold">{stats.technologies}+</span>
                <span className="text-blue-200">Tecnologías</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-32 translate-y-32 animate-pulse"></div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Portafolio de Éxitos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Cada proyecto es único y está diseñado para cumplir con los objetivos específicos de nuestros clientes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty State (when no projects) */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Próximamente
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Estamos trabajando en proyectos increíbles que pronto compartiremos contigo
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para iniciar tu proyecto?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a nuestros clientes satisfechos y lleva tu negocio al siguiente nivel digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
              </a>
              <a
                href="/servicios"
                className="px-8 py-4 bg-blue-700 text-white rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors border-2 border-white/30"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Entrega Rápida
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Proyectos completados en tiempo récord sin sacrificar calidad
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Diseño Moderno
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interfaces atractivas y experiencias de usuario excepcionales
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Alto Rendimiento
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sitios optimizados para velocidad, SEO y conversiones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
