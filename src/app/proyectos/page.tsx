'use client';

import { useMemo } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProyectosPage() {
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const technologies = new Set(projects.flatMap(p => p.technologies)).size;
    return { totalProjects, technologies };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
            Portafolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Proyectos que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              generan resultados
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-10">
            Cada proyecto es una solucion disenada para resolver problemas reales de negocio
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{stats.totalProjects}+</div>
              <div className="text-gray-500 text-sm">Proyectos</div>
            </div>
            <div className="w-px h-12 bg-gray-800"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{stats.technologies}+</div>
              <div className="text-gray-500 text-sm">Tecnologias</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-2">
                Proximamente
              </h3>
              <p className="text-gray-400">
                Estamos trabajando en proyectos que pronto compartiremos
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Entrega Rapida
              </h3>
              <p className="text-gray-400 text-sm">
                Proyectos completados en tiempo sin sacrificar calidad
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Codigo Limpio
              </h3>
              <p className="text-gray-400 text-sm">
                Arquitectura solida y mantenible a largo plazo
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Alto Rendimiento
              </h3>
              <p className="text-gray-400 text-sm">
                Optimizado para velocidad y escalabilidad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Listo para iniciar tu proyecto?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Conversemos sobre como podemos ayudarte a alcanzar tus objetivos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotizacion
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
