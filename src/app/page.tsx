'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Constants ──────────────────────────────────────────────────────────────

const WHATSAPP_URL =
  'https://wa.me/50255580173?text=Hola%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20interesa%20hablar%20sobre%20mi%20negocio';

// ─── Data ───────────────────────────────────────────────────────────────────

const painPoints = [
  'Mis clientes no me encuentran en Google',
  'Respondo las mismas preguntas todo el día por WhatsApp',
  'Pierdo ventas porque no estoy disponible las 24 horas',
  'Mi competencia tiene mejor presencia digital que yo',
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Que te encuentren en internet',
    desc: 'Una página profesional para que cuando alguien busque lo que vendes, te encuentre a ti — no a tu competencia.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Deja de hacer todo a mano',
    desc: 'Mensajes automáticos, citas, pedidos y recordatorios — sin que tengas que estar pegado al celular todo el día.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Atiende aunque no estés ahí',
    desc: 'Un asistente que responde preguntas, toma datos y avisa a tus clientes — de noche, fin de semana, siempre.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3h12m-12 3h12m0-3V3.75m0 9.75a1.5 1.5 0 010 3" />
      </svg>
    ),
    title: 'Una herramienta hecha para ti',
    desc: 'No una plantilla genérica. Algo creado exactamente para cómo funciona tu restaurante, tienda o clínica.',
  },
];

const process = [
  {
    step: '01',
    title: 'Me cuentas tu problema',
    desc: 'Por WhatsApp, sin reuniones formales ni tecnicismos. Solo cuéntame qué te está costando tiempo o clientes.',
  },
  {
    step: '02',
    title: 'Te propongo la solución',
    desc: 'En menos de 24 horas te explico qué haría, cómo funciona y cuánto costaría. Sin compromisos.',
  },
  {
    step: '03',
    title: 'Lo construyo y lo entrego',
    desc: 'Trabajo rápido. La mayoría de proyectos están listos en días, no meses. Tú solo lo usas.',
  },
];

const featuredProjects = [
  {
    title: 'Eventos Celebrarte',
    image: '/celebrarte.png',
    link: 'https://eventoscelebrarte.com',
    tag: 'Eventos · Guatemala, Perú y Colombia',
  },
  {
    title: 'Power Boxing',
    image: '/powerboxing.webp',
    link: 'https://powerboxing.fit',
    tag: 'Gimnasio · Zona 18, Guatemala',
  },
  {
    title: 'Chef Juan C. Castillo',
    image: '/captura chef.png',
    link: 'https://chefjuanccastillo.com',
    tag: 'Chef privado · Ciudad de Guatemala',
  },
  {
    title: 'Limitless Marketing',
    image: '/Limitless marketing.png',
    link: 'https://www.limitlessmarketing502.com/',
    tag: 'Marketing digital · Guatemala',
  },
];

const testimonials = [
  {
    text: 'Desde que pusimos la página, nos llegan clientes de Perú y Colombia también. Nunca pensamos que podríamos llegar tan lejos.',
    author: 'Eventos Celebrarte',
    role: 'Empresa de eventos, Guatemala',
  },
  {
    text: 'La gente nos encuentra en internet y escribe por WhatsApp sin que yo tenga que hacer nada. Me llegan 3 ó 4 alumnos nuevos cada semana.',
    author: 'Power Boxing',
    role: 'Gimnasio de boxeo, Zona 18',
  },
  {
    text: 'Antes mis clientes me referían de boca en boca. Ahora me encuentran solos en Google y me contratan sin que yo tenga que salir a buscarlos.',
    author: 'Chef Juan C. Castillo',
    role: 'Chef privado, Ciudad de Guatemala',
  },
];

const marqueeItems = [
  'MÁS CLIENTES',
  'SIN COMPLICACIONES',
  'PÁGINA PROFESIONAL',
  'VENTAS 24/7',
  'TU NEGOCIO EN GOOGLE',
  'ENTREGA RÁPIDA',
  'GUATEMALA',
  'RESPUESTAS AUTOMÁTICAS',
];

// ─── WhatsApp button ─────────────────────────────────────────────────────────

function WhatsAppBtn({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 font-bold transition-all duration-200 ${className}`}
    >
      <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      {children}
    </a>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(['.hero-badge', '.hero-line', '.hero-sub', '.hero-cta'], { opacity: 1 });
        return;
      }

      // ── Hero timeline ──────────────────────────────────────────────────────
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      heroTl
        .from('.hero-badge', { opacity: 0, y: 24, duration: 0.7 })
        .from('.hero-line', { opacity: 0, y: 90, duration: 1, stagger: 0.18 }, '-=0.4')
        .from('.hero-sub', { opacity: 0, y: 28, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 24, duration: 0.7 }, '-=0.4');

      // ── Scroll: fade-up for section labels + headings ──────────────────────
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          opacity: 0,
          y: 48,
          duration: 0.9,
          ease: 'power3.out',
        });
      });

      // ── Scroll: stagger for card groups ───────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((container) => {
        const children = Array.from(container.children);
        gsap.from(children, {
          scrollTrigger: { trigger: container, start: 'top 82%', once: true },
          opacity: 0,
          y: 44,
          duration: 0.75,
          stagger: 0.13,
          ease: 'power3.out',
        });
      });

      // ── Scroll: process steps slide in from left ───────────────────────────
      gsap.utils.toArray<HTMLElement>('.reveal-step').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          opacity: 0,
          x: -40,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
        });
      });

      // ── CTA final: scale-in ────────────────────────────────────────────────
      gsap.from('.reveal-cta', {
        scrollTrigger: { trigger: '.reveal-cta', start: 'top 80%', once: true },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#030712] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden"
      >
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a1628_1px,transparent_1px),linear-gradient(to_bottom,#0a1628_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#60a5fa] rounded-full opacity-[0.055] blur-[160px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-[#060f1e] border border-[#0f1f38] rounded-full px-4 py-2 mb-10 text-xs sm:text-sm text-[#94a3b8]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse shrink-0" />
            Disponible para nuevos proyectos · Guatemala
          </div>

          {/* Headline — each line animated individually */}
          <div className="mb-8 overflow-hidden">
            {[
              { text: 'Que te encuentren.', accent: false },
              { text: 'Que te llamen.', accent: false },
              { text: 'Que te compren.', accent: true },
            ].map(({ text, accent }) => (
              <div key={text} className="overflow-hidden">
                <h1
                  className={`hero-line block font-space-grotesk font-bold leading-[0.95] tracking-tight ${
                    accent ? 'text-[#60a5fa]' : 'text-white'
                  }`}
                  style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
                >
                  {text}
                </h1>
              </div>
            ))}
          </div>

          {/* Sub */}
          <p className="hero-sub text-[#94a3b8] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Ayudo a negocios en Guatemala a conseguir más clientes por internet.{' '}
            <span className="text-[#60a5fa] font-semibold">
              Sin que tengas que saber nada de tecnología.
            </span>
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <WhatsAppBtn className="w-full sm:w-auto bg-[#60a5fa] hover:bg-[#93c5fd] text-[#030712] text-lg px-8 py-4 rounded-xl hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.3)]">
              Cuéntame tu problema
            </WhatsAppBtn>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#0f1f38] hover:border-[#1a3050] text-[#94a3b8] hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-200"
            >
              ¿Cómo funciona?
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <div className="border-y border-[#0f1f38] py-5 overflow-hidden bg-[#020b18]">
        <div className="flex w-max animate-marquee">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center shrink-0">
              {marqueeItems.map((item) => (
                <span
                  key={`${i}-${item}`}
                  className="inline-flex items-center gap-6 mx-8 text-xs font-bold tracking-[0.25em] text-[#1e3a5f]"
                >
                  {item}
                  <span className="text-[#60a5fa] text-sm">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── PAIN POINTS ───────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-28 bg-[#020b18]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up mb-14">
            <p className="text-[#60a5fa] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              ¿Te suena familiar?
            </p>
            <h2
              className="font-space-grotesk font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              Si tienes alguno de estos problemas,
              <br />
              <span className="text-[#60a5fa]">puedo ayudarte.</span>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-7 border border-[#0f1f38] rounded-2xl bg-[#040c1a]"
              >
                <span className="font-space-grotesk font-bold text-[#60a5fa] text-sm tracking-widest shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[#94a3b8] leading-snug text-base">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────── */}
      <section id="servicios" className="px-6 md:px-12 lg:px-20 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up mb-16">
            <p className="text-[#60a5fa] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Lo que hago
            </p>
            <h2
              className="font-space-grotesk font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Soluciono problemas reales
              <br />
              <span className="text-[#60a5fa]">de negocios reales.</span>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 border border-[#0f1f38] rounded-2xl bg-[#040c1a] hover:border-[#60a5fa] transition-colors duration-300 cursor-default"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#060f1e] border border-[#0f1f38] text-[#60a5fa] mb-6 group-hover:bg-[#0f1f38] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-space-grotesk font-bold text-xl mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
      <section id="como-funciona" className="px-6 md:px-12 lg:px-20 py-28 bg-[#020b18]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up mb-16">
            <p className="text-[#60a5fa] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              El proceso
            </p>
            <h2
              className="font-space-grotesk font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Así de simple
              <br />
              <span className="text-[#60a5fa]">es empezar.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
            {process.map((step) => (
              <div key={step.step} className="reveal-step">
                <div
                  className="font-space-grotesk font-bold text-[#0f1f38] mb-5 leading-none"
                  style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}
                >
                  {step.step}
                </div>
                <h3 className="font-space-grotesk font-bold text-xl mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-[#64748b] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal-up text-center">
            <WhatsAppBtn className="bg-[#60a5fa] hover:bg-[#93c5fd] text-[#030712] text-lg px-8 py-4 rounded-xl hover:scale-[1.03]">
              Empezar — es gratis
            </WhatsAppBtn>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────────────────────── */}
      <section id="proyectos" className="px-6 md:px-12 lg:px-20 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up mb-16">
            <p className="text-[#60a5fa] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Negocios que ya crecieron
            </p>
            <h2
              className="font-space-grotesk font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Resultados reales
              <br />
              <span className="text-[#60a5fa]">en Guatemala.</span>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-[#0f1f38] bg-[#040c1a] hover:border-[#60a5fa] transition-colors duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#60a5fa] tracking-[0.25em] uppercase">
                    {project.tag}
                  </span>
                  <h3 className="font-space-grotesk font-bold text-xl mt-2 text-white group-hover:text-[#60a5fa] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-3 text-sm text-[#1e3a5f] group-hover:text-white transition-colors duration-200">
                    Ver el proyecto
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ───────────────────────────────────────── */}
      <section id="testimonios" className="px-6 md:px-12 lg:px-20 py-28 bg-[#020b18]">
        <div className="max-w-6xl mx-auto">
          <div className="reveal-up mb-16">
            <p className="text-[#60a5fa] font-bold text-xs tracking-[0.3em] uppercase mb-4">
              Ellos ya lo hicieron
            </p>
            <h2
              className="font-space-grotesk font-bold leading-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Lo que dicen
              <br />
              <span className="text-[#60a5fa]">mis clientes.</span>
            </h2>
          </div>

          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 border border-[#0f1f38] rounded-2xl bg-[#040c1a] flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#cbd5e1] text-base leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-space-grotesk font-bold text-white">{t.author}</p>
                  <p className="text-[#334155] text-sm mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="relative px-6 md:px-12 lg:px-20 py-36 bg-[#1d4ed8] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="reveal-cta relative max-w-3xl mx-auto text-center">
          <h2
            className="font-space-grotesk font-bold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
          >
            ¿Cuál es el mayor
            <br />
            problema de tu negocio?
          </h2>
          <p className="text-white/75 text-xl mb-3">
            Escríbeme y te digo cómo lo resuelvo.
          </p>
          <p className="text-white/55 text-sm mb-12 tracking-wide">
            RESPONDO EN MENOS DE 2 HORAS · SIN COSTO · SIN COMPROMISOS
          </p>
          <WhatsAppBtn className="bg-[#030712] hover:bg-[#0a1628] text-white text-xl px-10 py-5 rounded-xl hover:scale-[1.04] shadow-2xl">
            Escribir por WhatsApp
          </WhatsAppBtn>
        </div>
      </section>

    </div>
  );
}
